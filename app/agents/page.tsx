import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";

export default function AgentsPage() {
  return (
    <div className="bg-[#fffff3] text-black">
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
                  Agents
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Autopilot for your GTM
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  AI-powered agents that research, enrich, qualify, write, and personalize—so your go-to-market runs on autopilot.
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

        {/* Manual GTM doesn't scale. Agents do. */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Manual GTM doesn&apos;t scale.
                  <br />
                  Agents do.
                </h2>
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
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Cut the busywork
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Agents continuously research, enrich, and qualify profiles automatically. No more juggling spreadsheets or copy-pasting between tools.
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
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      React in real time
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Signals are turned into instant actions—so you engage prospects and customers at the exact moment it matters most.
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
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Scale without scaling headcount
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Automation removes repetitive GTM steps, letting your team focus on closing deals and building strategy, not manual tasks.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Agent Types */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  AI agents that work for you
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Each agent handles a specific GTM task, so your team can focus on what matters.
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
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Research Agent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Crawl the web for accounts and users. Research Agent pulls key facts, syncs them into your CRM, and provides ready-to-use templates for common research workflows.
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
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Enrichment Agent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Keep profiles complete by filling in missing details through enrichment providers or live HubSpot sync. Automatically create or update attributes, overwrite stale data, or append verified values.
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
                          d="M17.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Qualification Agent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Score leads and accounts based on fit and activity. Agents classify them as High, Medium, or Low priority—so your team focuses on what matters.
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
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Copywriting Agent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Generate personalized snippets for email, SMS, or push using enriched data. Every message feels contextual, timely, and human.
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
                          d="M1 4v6h6M23 4v6h-6M1 20v-6h6M23 20v-6h-6"
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
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Lifecycle Agent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Automatically segment users by recency, frequency, and monetary value. Keep journeys and campaigns lifecycle-aware—no rules required.
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
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 10h10M7 14h10M7 18h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M3 20l4-4 4 4 4-4 4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Likelihood Agent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Predict the probability that a user will convert, upgrade, or churn. Act before drop-offs and prioritize based on conversion likelihood.
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
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
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
                      CX Agent
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Choose the next-best experience for each user in real time—whether that&apos;s an offer, a journey, or an on-site personalization.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* All your GTM intelligence in one place */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  All your GTM intelligence in one place
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Agents don&apos;t just collect data—they analyze, predict, and act. Every feature works together to keep your GTM pipeline clean, qualified, and always moving forward.
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
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Research & Enrichment
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Pull live facts from the web and enrichment partners, then sync them back into CRM profiles with verified updates. No more stale or incomplete data.
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
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Qualification & Scoring
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Instantly score leads and accounts by fit and activity. Agents surface High/Medium/Low priorities so Sales always knows where to focus.
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
                          d="M4 4v5h4M20 4v5h-4M4 20v-5h4M20 20v-5h-4"
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
                      Lifecycle Segmentation (RFM)
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Automatically group users by recency, frequency, and monetary value—from Champions to At-Risk—for lifecycle-aware campaigns.
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
                      Likelihood Prediction
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Anticipate who will convert, upgrade, or churn. Act early with proactive plays instead of reactive damage control.
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
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Next-Best Action & CX
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Recommend and trigger the right step for each user—an upsell, a re-engagement, or a personalized on-site experience.
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
                        <circle
                          cx="12"
                          cy="12"
                          r="2"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Performance Tracking
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Monitor how accurate predictions are and prove their impact on conversions, retention, and revenue.
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

