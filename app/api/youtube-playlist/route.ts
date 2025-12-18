import { NextResponse } from 'next/server';

// Fetch video data from YouTube oEmbed API
async function getVideoData(videoId: string) {
  try {
    const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const response = await fetch(oEmbedUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!response.ok) return null;
    const data = await response.json();
    return {
      title: data.title,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      videoId,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    };
  } catch (error) {
    console.error(`Error fetching video ${videoId}:`, error);
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playlistUrl = searchParams.get('url');

  if (!playlistUrl) {
    return NextResponse.json({ error: 'Playlist URL is required' }, { status: 400 });
  }

  // Extract playlist ID from URL
  let playlistId: string | null = null;
  try {
    const url = new URL(playlistUrl);
    playlistId = url.searchParams.get('list');
  } catch {
    return NextResponse.json({ error: 'Invalid playlist URL' }, { status: 400 });
  }

  if (!playlistId) {
    return NextResponse.json({ error: 'Playlist ID not found in URL' }, { status: 400 });
  }

  // Try to fetch playlist page and extract video IDs
  // Note: This is a workaround since YouTube Data API requires a key
  // In production, consider using the YouTube Data API v3 with an API key
  try {
    const playlistPageUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
    const response = await fetch(playlistPageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch playlist page: ${response.status}`);
    }

    const html = await response.text();
    
    // Multiple patterns to extract video IDs (YouTube may use different formats)
    const patterns = [
      /"videoId":"([^"]{11})"/g,
      /"videoId":\s*"([^"]{11})"/g,
      /watch\?v=([^"&\s]{11})/g,
      /\/vi\/([^"\/\s]{11})/g,
    ];

    const videoIds = new Set<string>();
    
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        const videoId = match[1];
        // YouTube video IDs are always 11 characters
        if (videoId && videoId.length === 11) {
          videoIds.add(videoId);
        }
      }
    }

    if (videoIds.size === 0) {
      return NextResponse.json({ 
        error: 'No videos found in playlist. The playlist may be private or unavailable.' 
      }, { status: 404 });
    }

    // Convert to array and limit to 18 videos
    const videoIdArray = Array.from(videoIds).slice(0, 18);

    // Fetch data for each video with error handling
    const videoDataPromises = videoIdArray.map(videoId => 
      getVideoData(videoId).catch(err => {
        console.error(`Failed to fetch data for video ${videoId}:`, err);
        return null;
      })
    );

    const videoData = await Promise.all(videoDataPromises);
    const videos = videoData.filter((video): video is NonNullable<typeof video> => video !== null);

    if (videos.length === 0) {
      return NextResponse.json({ 
        error: 'Failed to fetch video data. Please try again later.' 
      }, { status: 500 });
    }

    return NextResponse.json({ videos }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching playlist:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch playlist data. Please ensure the playlist is public and try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

