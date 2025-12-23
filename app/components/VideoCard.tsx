function toYouTubeEmbedUrl(youtubeUrl: string) {
  try {
    const url = new URL(youtubeUrl);
    const id =
      url.searchParams.get("v") ||
      url.pathname.split("/").filter(Boolean).pop() ||
      "";

    const t = url.searchParams.get("t") ?? "";
    const seconds = Number.parseInt(t.replace("s", ""), 10);
    const start = Number.isFinite(seconds) ? seconds : 0;

    const embed = new URL(`https://www.youtube.com/embed/${id}`);
    if (start > 0) embed.searchParams.set("start", String(start));
    embed.searchParams.set("rel", "0");
    embed.searchParams.set("modestbranding", "1");
    return embed.toString();
  } catch {
    return youtubeUrl;
  }
}

export function VideoCard({
  label,
  caption,
  youtubeUrl,
  thumbnailSrc = "/thumbnail.png",
}: {
  label: string;
  caption?: string;
  youtubeUrl: string;
  thumbnailSrc?: string;
}) {
  const embedUrl = toYouTubeEmbedUrl(youtubeUrl);
  const autoplayEmbedUrl = (() => {
    try {
      const url = new URL(embedUrl);
      url.searchParams.set("autoplay", "1");
      return url.toString();
    } catch {
      return embedUrl;
    }
  })();

  const safeThumb = thumbnailSrc.replace(/"/g, "%22");
  const safeLabel = label.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeEmbed = autoplayEmbedUrl.replace(/"/g, "%22");
  const srcDoc = `<!doctype html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<style>
  html,body{height:100%;width:100%;margin:0;background:#000;}
  a{position:relative;display:block;height:100%;width:100%;text-decoration:none;}
  img{position:absolute;inset:0;height:100%;width:100%;object-fit:cover;}
  .overlay{position:absolute;inset:0;background:rgba(0,0,0,.20);}
  .btn{position:absolute;inset:0;display:grid;place-items:center;}
  .play-btn{width:48px;height:48px;border-radius:50%;background:#0382ff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 12px rgba(3,130,255,.4);}
  .play-icon{width:0;height:0;border-left:14px solid white;border-top:10px solid transparent;border-bottom:10px solid transparent;margin-left:2px;}
</style></head><body>
<a href="${safeEmbed}">
  <img src="${safeThumb}" alt="${safeLabel}" />
  <div class="overlay"></div>
  <div class="btn"><div class="play-btn"><div class="play-icon"></div></div></div>
</a>
</body></html>`;

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-sm border border-black/10 bg-[white]/80 p-6 text-left shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-black">{label}</div>
          <div className="mt-1 text-sm font-normal text-black">
            {caption ?? "Watch the explainer video."}
          </div>
        </div>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-sm bg-[#0382ff]/10 px-3 py-1 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20 transition-colors hover:bg-[#0382ff]/15"
        >
          Open on YouTube
        </a>
      </div>

      <div className="mt-4 overflow-hidden rounded-sm ring-1 ring-inset ring-black/10">
        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={embedUrl}
            srcDoc={srcDoc}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
