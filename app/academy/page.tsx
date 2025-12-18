"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Video {
  title: string;
  thumbnail: string;
  videoId: string;
  url: string;
}

export default function AcademyPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const playlistUrl = "https://www.youtube.com/watch?v=mIvAIQ8owH4&list=PLTadv7DPO0wEtGKUIviljgQTHLhFLmeLR";
        const response = await fetch(`/api/youtube-playlist?url=${encodeURIComponent(playlistUrl)}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch playlist");
        }
        
        const data = await response.json();
        setVideos(data.videos || []);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="bg-[#f5f5f5] text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  Academy by Intempt
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
                  Learn to build, automate and optimize customer growth systems step by step in The Full Stack Marketer Academy.
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>


        {/* Academy 101 Course Section */}
        <section className="py-12">
          <Container>
            <AnimateIn>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center rounded-full bg-[#0382ff]/10 px-3 py-1 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                    Beginner
                  </span>
                  <h2 className="text-3xl font-semibold text-black">
                    Academy 101
                  </h2>
                </div>
                <p className="text-base text-black/70 max-w-2xl">
                  Learn the core pieces of GrowthOS and take a project from zero to live.
                </p>
              </div>
            </AnimateIn>

            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#0382ff]"></div>
                <p className="mt-4 text-black/60">Loading videos...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
                <p className="mt-2 text-sm text-black/60">
                  You can still access the playlist directly on{" "}
                  <a
                    href="https://www.youtube.com/watch?v=mIvAIQ8owH4&list=PLTadv7DPO0wEtGKUIviljgQTHLhFLmeLR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0382ff] hover:underline"
                  >
                    YouTube
                  </a>
                </p>
              </div>
            )}

            {!loading && !error && videos.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                {videos.map((video, index) => (
                  <AnimateIn key={video.videoId} delayMs={index * 50}>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col h-full rounded-2xl border border-black/10 bg-white overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 hover:border-[#0382ff]/20"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-black/5 shrink-0">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="rounded-full bg-white p-4 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                            <svg
                              className="w-10 h-10 text-[#0382ff] ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="inline-flex items-center rounded-full bg-black/80 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white">
                            Watch
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col grow">
                        <h3 className="text-base font-semibold text-black mb-2 line-clamp-2 group-hover:text-[#0382ff] transition-colors">
                          {video.title}
                        </h3>
                        <div className="mt-auto pt-2 flex items-center gap-2">
                          <span className="text-xs text-black/50 font-medium">
                            Watch on YouTube
                          </span>
                          <svg
                            className="w-3 h-3 text-black/50 group-hover:text-[#0382ff] transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </AnimateIn>
                ))}
              </div>
            )}

            {!loading && !error && videos.length === 0 && (
              <div className="text-center py-12">
                <p className="text-black/60">No videos found in the playlist.</p>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer
        brand={siteContent.brand}
        contact={siteContent.footer.contact}
        columns={siteContent.footer.columns}
      />
    </div>
  );
}

