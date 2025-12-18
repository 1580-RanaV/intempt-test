import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";

export default function AnalyticsECommercePage() {
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
                  Solutions
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Analytics for eCommerce
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  See exactly what drives first purchases, AOV, and repeat orders by connecting store, site, app, and messaging channel data into one story.
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

        {/* One shopper, one story */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  One shopper, one story
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Replace disconnected dashboards with a single view of every visit, add to cart, and order.
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
                      Sync Shopify, Stripe, website/app tracking, email, SMS, and push notifications so traffic, orders, and campaigns share the same data.
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
                      Unified shopper profiles
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Track each shopper's visits, products viewed, carts, campaigns, orders, refunds, and more in one continuous timeline.
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
                      Shared segments, breakdowns & filters
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Slice everything by channel, device, new vs returning, product/category, or lifecycle stage, and reuse those views across reports.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Reports that show what really drives revenue */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Reports that show what really drives revenue
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Understand which channels, journeys, and products actually create buyers.
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
                      Traffic & shopper behavior reports
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Compare channels on add-to-cart rate, depth of product views, and buying behavior so you know who brings buyers vs browsers.
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
                      Funnel conversion & drop-off
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      See where people fall off between view, add-to-cart, checkout, and purchase, broken down by channel, device, or audience.
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
                      Product & category revenue impact
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Find "door-opener" products, true AOV boosters, and underperformers by combining revenue, attach rate, and repeat purchase patterns.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Retention and LTV reports you can act on */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Retention and LTV reports you can act on
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Turn repeat purchase and cohort analytics into clear winback and loyalty moves.
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
                      Repeat purchase & cohort views
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Track cohorts by first purchase month, product, or category to see who comes back, when, and how much they spend over time.
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
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      High-value and at-risk signals
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Spot shoppers who keep browsing after buying, those drifting into "at risk," and those ready for a higher-value order.
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
                      Campaign and flow performance
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Measure how emails, SMS, and push notification campaigns influence conversion, AOV, and second orders so you know which programs to scale or rebuild.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            {/* Cohort Retention Table */}
            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-16 max-w-5xl">
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
                  <div className="border-b border-black/10 bg-gradient-to-r from-[#0382ff]/5 to-violet-500/5 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 text-[#0382ff]"
                      >
                        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <div>
                        <h3 className="text-lg font-semibold text-black">Cohort Retention</h3>
                        <p className="text-sm text-black/60">Month over month retention rates</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto p-6">
                    <div className="inline-block min-w-full">
                      {/* Header Row */}
                      <div className="flex gap-2 mb-2">
                        <div className="w-16 flex-shrink-0"></div>
                        <div className="flex gap-2">
                          {["M0", "M1", "M2", "M3", "M4", "M5"].map((month) => (
                            <div
                              key={month}
                              className="w-24 text-center text-xs font-semibold text-black/70"
                            >
                              {month}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Data Rows */}
                      <div className="space-y-2">
                        {[
                          { month: "Jan", values: ["100%", "2.64%", "1.06%", "0.91%", "0.60%", "0.28%"] },
                          { month: "Feb", values: ["100%", "3.12%", "1.24%", "0.88%", "0.52%"] },
                          { month: "Mar", values: ["100%", "2.89%", "1.15%", "0.76%"] },
                          { month: "Apr", values: ["100%", "3.45%", "1.38%"] },
                          { month: "May", values: ["100%", "2.98%"] },
                          { month: "Jun", values: ["100%"] },
                        ].map((row, rowIndex) => (
                          <div key={row.month} className="flex gap-2 items-center">
                            <div className="w-16 flex-shrink-0 text-sm font-medium text-black">
                              {row.month}
                            </div>
                            <div className="flex gap-2">
                              {row.values.map((value, colIndex) => {
                                const isM0 = colIndex === 0;
                                const numValue = parseFloat(value.replace("%", ""));
                                let bgColor = "";
                                
                                if (isM0) {
                                  bgColor = "bg-[#e0f2fe]"; // Slightly darker light blue for M0
                                } else if (numValue >= 2.5) {
                                  bgColor = "bg-[#e0f2fe]"; // High retention - light blue
                                } else if (numValue >= 1.0) {
                                  bgColor = "bg-[#f0f9ff]"; // Medium - very light blue
                                } else {
                                  bgColor = "bg-[#f8fcff]"; // Low - almost white
                                }
                                
                                return (
                                  <div
                                    key={colIndex}
                                    className={`w-24 h-12 rounded-lg ${bgColor} flex items-center justify-center text-sm font-medium text-[#0382ff]`}
                                  >
                                    {value}
                                  </div>
                                );
                              })}
                              {/* Empty cells for missing months */}
                              {Array.from({ length: 6 - row.values.length }).map((_, emptyIndex) => (
                                <div key={`empty-${emptyIndex}`} className="w-24 h-12"></div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Legend */}
                      <div className="mt-8 flex items-center justify-center gap-6 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-[#e0f2fe]"></div>
                          <span className="text-black/70">High retention</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-[#f0f9ff]"></div>
                          <span className="text-black/70">Medium</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-[#f8fcff]"></div>
                          <span className="text-black/70">Low</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-24 text-white">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to unify your eCommerce analytics?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Connect your store, site, and channels to see what really drives revenue.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href="https://app.intempt.com/">Start Free Trial</ButtonLink>
                  <ButtonLink variant="secondary" href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12" className="bg-white text-black hover:bg-white/95">
                    Book a 15-min demo
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

