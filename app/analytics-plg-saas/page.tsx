import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";

export default function AnalyticsPLGSaaSPage() {
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
                  Analytics for PLG SaaS
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Replace conflicting dashboards with one connected analytics layer
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  That shows how signups become active, paying accounts, and which motions actually move revenue.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href="https://app.intempt.com/">Start Free Trial</ButtonLink>
                  <ButtonLink variant="secondary" href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12">
                    Book a 15-min demo
                  </ButtonLink>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* One timeline for every user and account */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  One timeline for every user and account
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Stop stitching exports. See the full journey from first touch to subscription in one place.
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
                        <path
                          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Connected data sources
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Sync CRM, billing, website, and app events into a single model so clicks, signups, product actions, and payments share the same context.
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
                        <path
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
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
                          d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Unified profiles and accounts
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Track every user and account with a continuous timeline of campaigns, sessions, feature usage, lifecycle changes, and subscription updates.
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
                      Shared segments and filters
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Slice reports by plan, channel, company size, lifecycle stage, or cohort once and reuse those views across every chart.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Reports that actually drive growth */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Reports that actually drive growth
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Go beyond vanity metrics with a focused set of product-led reports.
                </p>
              </div>
            </AnimateIn>

            {/* Digital Team Visual */}
            <AnimateIn delayMs={100}>
              <div className="mx-auto mt-12 max-w-4xl">
                <div className="rounded-2xl border border-black/10 bg-white/50 p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-black mb-4">Digital Team</h3>
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-[#0382ff]">1</span>
                        </div>
                        <span className="text-sm font-medium text-black">Step 1</span>
                      </div>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#0382ff]/30 to-violet-500/30"></div>
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-[#0382ff]">2</span>
                        </div>
                        <span className="text-sm font-medium text-black">Step 2</span>
                      </div>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#0382ff]/30 to-violet-500/30"></div>
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-[#0382ff]">3</span>
                        </div>
                        <span className="text-sm font-medium text-black">Step 3</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Acquisition & activation reports
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      See which channels bring signups that reach key product milestones and convert to paid, not just fill the top of the funnel.
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
                      Activation funnel view
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Map each step from signup to first value, highlight where users stall, and compare funnels by segment, plan, or source.
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
                          d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Revenue & attribution views
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Tie upgrades and subscription revenue back to the full path of campaigns, product journeys, and sales touches at user or account level.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Retention, alignment, and clarity for every team */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Retention, alignment, and clarity for every team
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Give growth, product, marketing, and sales one source of truth instead of three competing dashboards.
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
                        <path
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Feature adoption & retention reports
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Identify keystone features linked to higher retention and expansion, then track how changes to onboarding or journeys affect those curves.
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
                      Campaign impact analytics
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Measure outbound sequences, product nurture, and in-app nudges by their impact on activation, upgrades, and pipeline, not just opens and clicks.
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
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Shared dashboards by team
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Create saved views for marketing, product, and sales so everyone starts from the same data and can focus on "what's next?" instead of "who's right?".
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-24 text-white">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to unify your PLG analytics?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Let Blu connect your data and surface the metrics that actually drive growth.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href="https://app.intempt.com/">Get Started</ButtonLink>
                  <ButtonLink variant="secondary" href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12" className="bg-white text-black hover:bg-white/95">
                    Book a Demo
                  </ButtonLink>
                </div>
              </div>
            </AnimateIn>
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




