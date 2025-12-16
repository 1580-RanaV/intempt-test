import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";

export default function SalesTeamsPage() {
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
                  Solutions
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Unify Pipeline Generation
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Unify inbound, outbound, and product signals in one system so your team knows who to reach, when to reach them, and when to back off.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href="/onboarding">Start Free Trial</ButtonLink>
                  <ButtonLink variant="secondary" href="#book-demo">
                    Book a 15-min demo
                  </ButtonLink>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Turn activity into real signals */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Turn activity into real signals
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Stop chasing every lead. Focus on accounts and users that show real intent.
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
                      Unified profiles
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Combine website, product, CRM, and email activity into one live view for each user and account.
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
                          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Research & qualification agents
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Enrich leads with funding, hiring, tech stack, and many more signals, then score fit and intent in real time.
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
                      Dynamic intent segments
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Build dynamic user/account segments that update automatically as behavior and context change.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            {/* Active Signals Interface */}
            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-16 max-w-5xl">
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
                  <div className="border-b border-black/10 bg-gradient-to-r from-[#0382ff]/5 to-violet-500/5 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-black">Active Signals</h3>
                        <p className="text-sm text-black/60">12 new today</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Signal Cards */}
                    <div className="space-y-4">
                      {/* Signal 1 */}
                      <div className="rounded-xl border border-black/10 bg-white p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="flex-shrink-0">
                              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center">
                                <span className="text-lg font-semibold text-[#0382ff]">AN</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-black">Akari Nitta</h4>
                                <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                                  Hot
                                </span>
                              </div>
                              <p className="text-sm text-black/70">VP of Marketing</p>
                              <p className="text-sm font-medium text-black mt-1">TechFlow Inc.</p>
                              <div className="mt-2 space-y-1 text-xs text-black/60">
                                <p>akari@techflow.io</p>
                                <p>+1 (415) 555-0123</p>
                                <p>San Francisco, CA</p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 text-right">
                              <div className="text-2xl font-bold text-[#0382ff]">92</div>
                              <div className="text-xs text-black/60">score</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Signal 2 */}
                      <div className="rounded-xl border border-black/10 bg-white p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="flex-shrink-0">
                              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center">
                                <span className="text-lg font-semibold text-[#0382ff]">MK</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-black">Miwa Kasumi</h4>
                                <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
                                  Warm
                                </span>
                              </div>
                              <p className="text-sm text-black/70">Director of Sales</p>
                              <p className="text-sm font-medium text-black mt-1">CloudScale Corp</p>
                              <div className="mt-2 space-y-1 text-xs text-black/60">
                                <p>miwa@cloudscale.co</p>
                                <p>+1 (512) 555-0456</p>
                                <p>Austin, TX</p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 text-right">
                              <div className="text-2xl font-bold text-[#0382ff]">85</div>
                              <div className="text-xs text-black/60">score</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Signal 3 */}
                      <div className="rounded-xl border border-black/10 bg-white p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="flex-shrink-0">
                              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center">
                                <span className="text-lg font-semibold text-[#0382ff]">GS</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-black">Geto Suguru</h4>
                                <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
                                  Warm
                                </span>
                              </div>
                              <p className="text-sm text-black/70">Head of Growth</p>
                              <p className="text-sm font-medium text-black mt-1">DataPrime Labs</p>
                              <div className="mt-2 space-y-1 text-xs text-black/60">
                                <p>geto@dataprime.io</p>
                                <p>+1 (212) 555-0789</p>
                                <p>New York, NY</p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 text-right">
                              <div className="text-2xl font-bold text-[#0382ff]">78</div>
                              <div className="text-xs text-black/60">score</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity Section */}
                    <div className="mt-8 pt-6 border-t border-black/10">
                      <h4 className="text-sm font-semibold text-black mb-4">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-[#0382ff]">R</span>
                          </div>
                          <span className="text-black/80">Rika opened pricing email</span>
                          <span className="text-black/50 ml-auto">2 min ago</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-[#0382ff]">M</span>
                          </div>
                          <span className="text-black/80">Momo visited demo page</span>
                          <span className="text-black/50 ml-auto">15 min ago</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0382ff]/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-[#0382ff]">A</span>
                          </div>
                          <span className="text-black/80">Akari Nitta requested callback</span>
                          <span className="text-black/50 ml-auto">1 hour ago</span>
                        </div>
                      </div>
                    </div>

                    {/* Connected Sources */}
                    <div className="mt-6 pt-6 border-t border-black/10">
                      <h4 className="text-sm font-semibold text-black mb-4">Connected Sources</h4>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-[#0382ff]/10 px-3 py-1 text-xs font-medium text-[#0382ff]">
                          LinkedIn
                        </span>
                        <span className="inline-flex items-center rounded-full bg-[#0382ff]/10 px-3 py-1 text-xs font-medium text-[#0382ff]">
                          HubSpot
                        </span>
                        <span className="inline-flex items-center rounded-full bg-[#0382ff]/10 px-3 py-1 text-xs font-medium text-[#0382ff]">
                          Slack
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Journeys that react to intent */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Journeys that react to intent
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Use behavior-based campaign triggers so product nurture, sales campaigns, and assists fire only when they should.
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
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Behavior-triggered journeys
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Start flows when someone signs up, hits pricing repeatedly, stalls in onboarding, or replies to outbound. Reachout when it matters.
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
                          d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Contextual product nurture
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Send welcome and follow-up emails that reflect website and product activity.
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
                          d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      SDR alerts with context
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Create tasks and Slack alerts only when users look stuck or cooling off, with a recommended message ready.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Cold and warm in one system */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Cold and warm in one system
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Keep outbound and product-led motions in sync, while protecting deliverability.
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
                          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Cold–warm coordination
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Pause or remove leads from outbound when they sign up, activate, or reach key nurture stages.
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
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Deliverability guardrails
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Set frequency caps, time windows, and daily limits, with inbox rotation to protect domain health.
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
                      Loop-wide analytics
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Track replies, activations, and revenue across journeys and campaigns to see how the full loop performs.
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
                  Ready to unify your pipeline?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Stop chasing every lead. Start focusing on what matters.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href="/onboarding">Get started</ButtonLink>
                  <ButtonLink variant="secondary" href="#book-demo" className="bg-white text-black hover:bg-white/95">
                    Book a demo
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


