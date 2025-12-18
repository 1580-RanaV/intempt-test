"use client";

import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { siteContent } from "../content/siteContent";

function AccentTitle({ title }: { title: string }) {
  const token = "10×";
  const parts = title.split(token);
  if (parts.length === 1) return <>{title}</>;

  return (
    <>
      {parts[0]}
      <span className="bg-linear-to-r from-[#0382ff] to-violet-600 bg-clip-text text-transparent">
        {token}
      </span>
      {parts.slice(1).join(token)}
    </>
  );
}

function RotatingText() {
  const phrases = ["platform", "customer view", "growth loop"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 2000); // Change every 2 seconds (faster)

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="flex items-center justify-center">
      <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
        One{" "}
        <span className="inline-block relative">
          <span
            key={currentIndex}
            className="inline-block animate-fade-in-up text-black"
          >
            {phrases[currentIndex]}.
          </span>
        </span>
      </span>
    </div>
  );
}

function FeatureItem({
  title,
  description,
  delayMs = 0,
}: {
  title: string;
  description: string;
  delayMs?: number;
}) {
  return (
    <AnimateIn delayMs={delayMs}>
      <div className="group relative">
        <div className="text-center">
          <div className="inline-block">
            <h3 className="text-lg font-semibold text-black transition-colors group-hover:text-[#0382ff]">
              {title}
            </h3>
            <div className="mt-2 mx-auto max-w-md text-sm leading-6 text-black/60">
              {description}
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

export function PlatformSection({
  platform,
}: {
  platform: (typeof siteContent)["platform"];
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20" id="product-tour">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.12)_0%,rgba(3,130,255,0)_60%),radial-gradient(45%_40%_at_0%_35%,rgba(124,58,237,0.08)_0%,rgba(124,58,237,0)_65%),radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_60%)]"
      />
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Main Title */}
          <div className="text-center">
            <AnimateIn>
              <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                <AccentTitle title={platform.title} />
              </h2>
            </AnimateIn>
          </div>

          {/* Core Message - Emphasized with Rotating Text */}
          <AnimateIn delayMs={60}>
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <div className="space-y-3">
                <RotatingText />
              </div>
            </div>
          </AnimateIn>

          {/* Features Grid - Compact and Creative */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
              <FeatureItem
                title="Sales CRM"
                description="Unified customer view. No more fragmented data or tool-switching. Create rich, real-time profiles of every user and account, and activate them across all channels."
                delayMs={100}
              />
              <FeatureItem
                title="Experiences"
                description="Optimize every path to revenue. Launch experiments and personalizations that adapt to each visitor based on context, history, and live behavior."
                delayMs={140}
              />
              <FeatureItem
                title="Journeys"
                description="Automate journeys that react in real-time. Design multi-step workflows across email, SMS, and push triggered by what users actually do, not just static rules."
                delayMs={180}
              />
              <FeatureItem
                title="Analytics"
                description="Measure what matters, instantly. Track how users engage, convert, and retain—and feed insights back into your campaigns."
                delayMs={220}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
