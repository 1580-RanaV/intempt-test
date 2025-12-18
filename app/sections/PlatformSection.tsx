import type { ReactNode } from "react";
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
      <span className="bg-gradient-to-r from-[#0382ff] to-violet-600 bg-clip-text text-transparent">
        {token}
      </span>
      {parts.slice(1).join(token)}
    </>
  );
}

function IconTile({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 scale-[1.35] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(3,130,255,0.18),rgba(124,58,237,0.10),rgba(0,0,0,0)_70%)] blur-2xl"
        />
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#0382ff]/18 to-violet-500/10 text-[#0382ff]">
          {icon}
        </div>
      </div>
      <div className="mt-4 text-base font-semibold text-black">{title}</div>
      <div className="mt-2 max-w-sm text-sm leading-6 text-black/65">
        {description}
      </div>
    </div>
  );
}

function UsersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3Zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.93 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FlowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v2H4V6Zm0 5h10v2H4v-2Zm0 5h16v2H4v-2Zm14-5 4 3-4 3v-6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2 9.5 8.5 2 11l7.5 2.5L12 21l2.5-7.5L22 11l-7.5-2.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 19V5h2v14H4Zm14 0V9h2v10h-2ZM9 19V12h2v7H9Zm5 0V7h2v12h-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HighlightChip({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-black/[0.03] px-4 py-2 text-xs font-semibold text-black/70 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0382ff] to-violet-600" />
      <span>{label}</span>
    </div>
  );
}

export function PlatformSection({
  platform,
}: {
  platform: (typeof siteContent)["platform"];
}) {
  return (
    <section className="relative overflow-hidden py-24" id="product-tour">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.18)_0%,rgba(3,130,255,0)_60%),radial-gradient(45%_40%_at_0%_35%,rgba(124,58,237,0.12)_0%,rgba(124,58,237,0)_65%),radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
      />
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center">
            <AnimateIn>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-black/[0.03] px-4 py-2 text-xs font-semibold tracking-wide text-black/70">
                  GROWTHOS™
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-6xl">
                    <AccentTitle title={platform.title} />
                  </h2>
                  <p className="mx-auto max-w-3xl text-lg leading-8 text-black/65 sm:text-xl">
                    {platform.subtitle}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Highlight Chips - Floating Pills */}
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
            {platform.highlights.slice(0, 8).map((h, idx) => (
              <AnimateIn key={h} delayMs={80 + idx * 45}>
                <HighlightChip label={h} />
              </AnimateIn>
            ))}
          </div>

          {/* Centerpiece Text Block */}
          <AnimateIn delayMs={100}>
            <div className="mx-auto mt-16 max-w-3xl rounded-sm border border-black/[0.06] bg-gradient-to-br from-[#f5f5f5]/90 to-[#f5f5f5]/50 p-8 text-center backdrop-blur-sm sm:p-10">
              <div className="text-sm font-semibold text-black">
                One platform. One customer view. One growth loop.
              </div>
              <div className="mt-3 text-sm leading-6 text-black/60">
                Replace stitched tools with a unified system that turns
                insights into automated actions across your lifecycle.
              </div>
            </div>
          </AnimateIn>

          {/* Feature Grid - Creative Asymmetric Layout */}
          <div className="mx-auto mt-20 max-w-6xl">
            {/* Top Row - 2 Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              <AnimateIn delayMs={120}>
                <div className="group relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(3,130,255,0.15), rgba(124,58,237,0.08), transparent 70%)'
                    }}
                  />
                  <div className="relative h-full rounded-sm border border-black/[0.06] bg-gradient-to-br from-[#f5f5f5] to-[#f5f5f5]/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#0382ff]/20 hover:shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="grid h-12 w-12 place-items-center rounded-sm bg-gradient-to-br from-[#0382ff]/18 to-violet-500/10 text-[#0382ff]">
                        <UsersIcon />
                      </div>
                      <div className="mt-4 text-base font-semibold text-black">
                        Unified profiles
                      </div>
                      <div className="mt-2 text-sm leading-6 text-black/65">
                        Live user + account profiles with signals, segments, and next-best actions — ready to activate.
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delayMs={160}>
                <div className="group relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at 70% 30%, rgba(124,58,237,0.15), rgba(3,130,255,0.08), transparent 70%)'
                    }}
                  />
                  <div className="relative h-full rounded-sm border border-black/[0.06] bg-gradient-to-br from-[#f5f5f5] to-[#f5f5f5]/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="grid h-12 w-12 place-items-center rounded-sm bg-gradient-to-br from-[#0382ff]/18 to-violet-500/10 text-[#0382ff]">
                        <FlowIcon />
                      </div>
                      <div className="mt-4 text-base font-semibold text-black">
                        Journeys + Experiments
                      </div>
                      <div className="mt-2 text-sm leading-6 text-black/65">
                        Ship lifecycle campaigns and A/B tests without waiting on ops — iterate fast and learn faster.
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Bottom Row - 2 Cards with offset on larger screens */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
              <AnimateIn delayMs={200}>
                <div className="group relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at 30% 70%, rgba(3,130,255,0.15), rgba(124,58,237,0.08), transparent 70%)'
                    }}
                  />
                  <div className="relative h-full rounded-sm border border-black/[0.06] bg-gradient-to-br from-[#f5f5f5] to-[#f5f5f5]/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#0382ff]/20 hover:shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="grid h-12 w-12 place-items-center rounded-sm bg-gradient-to-br from-[#0382ff]/18 to-violet-500/10 text-[#0382ff]">
                        <SparkIcon />
                      </div>
                      <div className="mt-4 text-base font-semibold text-black">
                        Personalization
                      </div>
                      <div className="mt-2 text-sm leading-6 text-black/65">
                        Target experiences in real time with AI assistance — across channels and onsite.
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delayMs={240}>
                <div className="group relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'radial-gradient(circle at 70% 70%, rgba(124,58,237,0.15), rgba(3,130,255,0.08), transparent 70%)'
                    }}
                  />
                  <div className="relative h-full rounded-sm border border-black/[0.06] bg-gradient-to-br from-[#f5f5f5] to-[#f5f5f5]/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="grid h-12 w-12 place-items-center rounded-sm bg-gradient-to-br from-[#0382ff]/18 to-violet-500/10 text-[#0382ff]">
                        <ChartIcon />
                      </div>
                      <div className="mt-4 text-base font-semibold text-black">
                        Analytics that triggers action
                      </div>
                      <div className="mt-2 text-sm leading-6 text-black/65">
                        See what matters, then automate what to do next — insights feed directly back into GTM.
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
