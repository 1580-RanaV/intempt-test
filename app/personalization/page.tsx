import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";

export default function PersonalizationPage() {
  return (
    <div className="bg-[#f5f5f5] text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                  Personalization
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  AI makes it personal. You win the conversions
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Create personalized experiences in seconds, adapt them for every user, and measure real impact —all without complexity or guesswork using AI.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href="https://app.intempt.com/">Get started</ButtonLink>
                  <ButtonLink variant="secondary" href="#product-tour">
                    Product tour
                  </ButtonLink>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Made effortless by AI, proven by results */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Made effortless by AI, proven by results
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Effortless to run. Accurate to measure. Impossible to ignore.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-12 md:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8 text-[#0382ff]"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="m21 21-4.35-4.35"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11 8v6M8 11h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Move from idea to live in minutes
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      AI builds experiences instantly, while client- and server-side personalization lets you deliver everything from quick content swaps to deeper logic-based changes without waiting on developers.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8 text-[#0382ff]"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 2v4M12 18v4M2 12h4M18 12h4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Target precisely, personalize at scale
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Reach the right audiences with AI-driven targeting, control who sees which experience, and extend personalization across full flows like onboarding, product discovery, or checkout.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-8 w-8 text-[#0382ff]"
                      >
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="2"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Decide with clarity
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      See how different users engage in real time, understand which experiences resonate, and scale what works—without the guesswork of manual rules.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Make it personal, faster */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Make it personal, faster
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Create and manage every personalized flow in one place—no dev queue, no tool-switching, just experiences you control end-to-end.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 2v4M8 2v4M3 10h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Manage all experiences in one view
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Oversee targeted experiences across campaigns, audiences, and touchpoints from a single view.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Deliver fast on client-side
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Adjust headlines, images, or calls-to-action instantly for specific audience segments—perfect for fast UI tweaks without developer help.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M9 9h6v6H9z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Customize with server-side logic
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Personalize deeper elements like pricing, product bundles, or onboarding flows to match user intent at scale.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={200}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Build with AI, not code
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      From individual elements to entire experiences, AI Coach generates and customizes personalized experiences instantly.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={240}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Create experiences instantly
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Describe who you&apos;re targeting and what you want them to see—AI generates the experience on the spot.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={280}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M9 9h6v6H9z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M3 9h18M9 3v18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Edit with drag-and-drop freedom
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Rearrange, style, and update elements—text, images, videos, buttons, or forms—without touching code.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={320}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 8h10M7 12h10M7 16h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Add custom forms and widgets
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Insert popups, lead forms, or surveys tailored to specific audiences and goals.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Reach the right audience, every time */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Reach the right audience, every time
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Combine AI-driven segmentation with flexible delivery rules to create experiences that feel one-to-one.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Target audiences intelligently
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Reach users by demographics, behaviors, or AI-predicted segments like &quot;likely to upgrade&quot; or &quot;churn risk.&quot;
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 2v4M12 18v4M2 12h4M18 12h4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Deliver the next best experience
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      AI evaluates each individual user and automatically selects the experience most likely to drive engagement, conversion, or retention.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 4v5h4M20 4v5h-4M4 20v-5h4M20 20v-5h-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Personalize across full flows
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Go beyond single pages—deliver tailored journeys across onboarding, checkout, or account creation.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Run campaigns with precision */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Run campaigns with precision
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Understand which personalized experiences truly resonate with different audiences.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 9h18M9 3v18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Filter and break down results
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Drill into your experiment outcomes by applying filters or segment breakdowns. See exactly how different audiences respond.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 9h18M9 3v18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="2"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Spot trends over time
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Track performance with time-series graphs for every variant. Identify lift patterns, conversion spikes, and key moments that shape outcomes.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 9h6v6H9z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Configure with flexibility
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Define what success looks like with custom goals—whether it&apos;s conversions, engagement, average order value, or retention—and let AI help you track the metrics that matter most.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Personalization, redefined */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Personalization, redefined
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Build faster, adapt smarter, and finally deliver relevance at scale without the struggle.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <AnimateIn delayMs={80}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 2v4M8 2v4M3 10h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      AI experience builder
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Describe what you want, and AI generates personalized content or layouts for the right users instantly.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M9 9h6v6H9z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M3 9h18M9 3v18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Drag-and-drop editor
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Move, edit, and style any element—text, images, videos, or banners—without touching code.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 8h10M7 12h10M7 16h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Custom forms and widgets
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Add popups, lead forms, or surveys targeted to specific audiences, fully customizable for any campaign.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={200}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="9"
                          cy="7"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      AI targeting
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Reach audiences based on behaviors, demographics, or predicted intent—like churn risk or upsell potential.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={240}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 2v4M12 18v4M2 12h4M18 12h4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Next best experience
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Let AI decide the optimal content, offer, or layout for each individual user in real time.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={280}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 4v5h4M20 4v5h-4M4 20v-5h4M20 20v-5h-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Multi-flow personalization
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Deliver unique experiences across full journeys—like onboarding, product discovery, or account setup.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={320}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="2"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Experience insights
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Break down results by segment to see what resonates with different user groups, from new visitors to loyal customers.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={360}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 2v4M8 2v4M3 10h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Configurable goals & metrics
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Define success your way—whether it&apos;s conversions, engagement, order value, or retention—and let AI track the metrics that matter.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Unified platform */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Unified platform
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Client-side agility + server-side depth in one place, empowering marketers and product teams to personalize together.
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  FAQs
                </h2>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-4xl">
              <div className="space-y-8">
                <AnimateIn delayMs={80}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      Do I need developers to set up personalized experiences in Intempt?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      No. The drag-and-drop editor lets you build and launch personalized content yourself. Swap out headlines, images, CTAs, whatever you need. Client-side personalization handles it all in the browser. You&apos;d only loop in developers for deeper stuff like personalizing pricing logic or backend-driven recommendations.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      What&apos;s the difference between client-side and server-side personalization?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      Client-side is fast and visual, perfect for changing what users see on the page (banners, copy, images) without any dev work. Server-side goes deeper, letting you personalize things like pricing, product bundles, or onboarding flows based on user data. Intempt does both, so you can start simple and go deeper when you&apos;re ready.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      How does the AI know what experience to show each user?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      The AI looks at each user&apos;s behavior, demographics, and predicted intent, things like &quot;likely to upgrade&quot; or &quot;at risk of churning&quot;, and automatically picks the experience most likely to drive the outcome you care about. You set the goal (conversions, engagement, retention), and the AI figures out the best match for each person.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={200}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      Can I personalize entire user journeys, not just single pages?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      Yes, and this is where personalization gets really powerful. You can tailor the full experience across onboarding flows, product discovery paths, checkout sequences, whatever matters for your business. Users get a consistent, relevant journey instead of one-off personalized moments that don&apos;t connect.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={240}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      How granular can I get with audience targeting in Intempt?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      As granular as you need. Target by behavior (pages viewed, actions taken), demographics (location, device, language), or AI-predicted segments (churn risk, upsell potential, likelihood to convert). You can combine conditions to get super specific, like &quot;mobile users from Germany who&apos;ve visited pricing twice but haven&apos;t signed up.&quot;
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={280}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      Is it possible to test different personalized experiences against each other in Intempt?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      Yes, you can run experiments on your personalized experiences to see which variations perform best. Combine personalization with A/B testing to validate your assumptions before scaling, so you&apos;re not just guessing that a personalized experience works better; you&apos;re proving it.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
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

