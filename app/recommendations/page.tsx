import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";

export default function RecommendationsPage() {
  return (
    <div className="bg-[white] text-black">
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
                  Recommendations
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Boost revenue with AI-driven recommendations
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  GrowthOS transforms how you engage customers by combining advanced AI algorithms with smart customization and dynamic targeting. Effortlessly import your product data, apply sophisticated filters, and let GrowthOS adapt real-time recommendations based on user behavior.
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

        {/* Delight your customers with recommendations they'll love 💙 */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Delight your customers with recommendations they&apos;ll love 💙
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Don&apos;t just take our word for it....
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-8 shadow-sm text-center">
                    <div className="text-4xl font-bold text-[#0382ff]">+4.2%</div>
                    <div className="mt-2 text-lg font-semibold text-black">ARPU from recommendations</div>
                    <div className="mt-2 text-sm text-black/65">Clothing and Apparel</div>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-8 shadow-sm text-center">
                    <div className="text-4xl font-bold text-[#0382ff]">+14%</div>
                    <div className="mt-2 text-lg font-semibold text-black">CTR from email recommendations</div>
                    <div className="mt-2 text-sm text-black/65">Electronics</div>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-8 shadow-sm text-center">
                    <div className="text-4xl font-bold text-[#0382ff]">+62%</div>
                    <div className="mt-2 text-lg font-semibold text-black">AOV from recommendations</div>
                    <div className="mt-2 text-sm text-black/65">Toys & Hobbies</div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Ingest product data quickly and easily */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Ingest product data quickly and easily
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Effortlessly connect your catalog to GrowthOS for real-time recommendations. GrowthOS provides a fast and simple way to import, map, and synchronize your product data across all channels.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="17 8 12 3 7 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="12"
                          y1="3"
                          x2="12"
                          y2="15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Simple data import
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Import product data in minutes using our XML and JSON wizard.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                          d="M9 3v6M15 3v6M3 9h6M15 9h6M3 15h6M15 15h6M9 15v6M15 15v6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      One-click Shopify sync
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Seamlessly sync your catalog with GrowthOS using our native Shopify integration.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="3.27 6.96 12 12.01 20.73 6.96"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="12"
                          y1="22.08"
                          x2="12"
                          y2="12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Flexible attribute mapping
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Map product attributes to GrowthOS for complete control over which data points are processed and used in recommendations.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Leverage advanced AI for high-converting recommendations */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Leverage advanced AI for high-converting recommendations
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Drive relevance and conversions with GrowthOS&apos;s diverse AI algorithms and robust configuration options. Tailor recommendations to your unique use case with advanced targeting and filtering capabilities.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                      Diverse recommendation algorithms
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Choose from high-impact algorithms like Best-selling, Newest, Most popular, Viewed Together, Purchased Together, Category Affinity, and more.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <polygon
                          points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Custom configuration
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Apply advanced filters, inclusion rules, and exclusions to ensure recommendations meet your specific needs—whether it&apos;s highlighting sale items, focusing on in-stock products, or filtering by category.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                          d="M8 12h8M12 8v8"
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
                      Smart fallback logic
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Ensure every widget is fully populated. If a primary feed doesn&apos;t fill all widget slots, GrowthOS automatically falls back to secondary algorithms with available results to maintain a seamless recommendation experience.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Personalize recommendation placement for maximum impact */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Personalize recommendation placement for maximum impact
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Optimize recommendations by dynamically adjusting what each customer sees, based on AI insights and behavioral targeting. GrowthOS lets you tailor recommendation slots to each user segment.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Dynamic widget targeting
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Display recommendation widgets based on customer segment, showing best-sellers for new users and affinity-based suggestions for returning customers.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                      Leverage Audience AI for higher AOV
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Fine-tune recommendation placements based on each user&apos;s likelihood to convert or their next-best action.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                      Two layers of AI-powered targeting
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Benefit from both AI-driven recommendations and AI-based targeting in one comprehensive system. The recommendations are powered by AI algorithms and the placement is optimized through Audience AI, selecting the most effective widget type.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Customize and deploy recommendations effortlessly */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Customize and deploy recommendations effortlessly
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Place, style, and personalize recommendation widgets across all channels, ensuring a seamless brand experience everywhere your customers engage.
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                      Multi-channel reach
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Deploy recommendations on your website, app, and emails with both client-side and server-side options for complete customization.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
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
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 1v6M12 17v6M1 12h6M17 12h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Easy widget styling
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Quickly match recommendation widgets to your brand&apos;s look and feel with our no-code editor. Adjust layouts, product counts, text styles, and more—no coding needed.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <polyline
                          points="22,6 12,13 2,6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Personalized email recommendations
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Boost email engagement with tailored product suggestions built right into your campaigns. Use our drag-and-drop editor to create and save recommendation templates that drive conversions.
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

