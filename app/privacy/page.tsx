import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";

export default function PrivacyPage() {
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
                  Privacy
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  User privacy, automated
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Protect your customer data. Manage compliance with data privacy regulations and support the governance needs of your organization.
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

        {/* Ensure User Privacy compliance across the organization */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Ensure User Privacy compliance across the organization
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Intempt automates compliance activities to help you seamlessly safeguard PII and honor consent across multiple sources
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
                          d="M9 12l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 3c0 1 1 3 3 3s3-2 3-3-1-3-3-3-3 2-3 3z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Streamline regulatory compliance
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Accelerate compliance with GDPR and the CCPA regulations by unifying, cleansing, and deduplicating all your first-party customer data from disparate silos.
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
                          d="M12 2v4M12 18v4M2 12h4M18 12h4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Comply across multiple channels
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Resolve identities across multiple representations of the same customer – combining multiple emails, duplicative loyalty accounts, and more – ensuring compliance with regulations.
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
                      Collect consents & user requests
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Always work on data your visitors agree to share with you. In the case of refusal or no decision, trackers won&apos;t collect even a bit of personal information.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={200}>
                  <div className="rounded-sm border border-black/10 bg-white/50 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
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
                      Fulfill requests on time
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      See a complete record of consents and data requests. With all information in one place, quickly respond to queries and meet regulatory deadlines.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={240}>
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
                      Address deletion and portability requests
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      No need to mix extracts from multiple systems. Export the required information or initiate deletion from a single platform.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Manage risk exposure */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Manage risk exposure
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Set rules to automatically block restricted personal data from being collected.
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
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8v4M12 16h.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      PII protection
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Ensure that only the necessary people have access to Personally Identifiable Information (PII) or business-sensitive information; hide PII from everyone else.
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
                      Create your dynamic data inventory
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Each data point is matched against common PII fields and assigned a risk-based classification of red, yellow, or green.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Preferences center */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Preferences center
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Give customers control of their preferences
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
                        <path
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Track subscriber preferences
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Retain more engaged and satisfied subscribers by allowing them to personalize their marketing experience with your content and business.
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
                      Stay GDPR & CCPA compliant
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Ensure you only message those customers that agree with to receive your messages. Give them more nuanced preference options rather than forcing an all-or-nothing experience.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Take a proactive approach to User Privacy */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Take a proactive approach to User Privacy
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Get real-time visibility into what personal information you&apos;re collecting, where you&apos;re collecting it from, and where you&apos;re sending it
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
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Consent management
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Obtain valid consents and adjust the data collection process – collected data will only be activated if users agree to their use.
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
                        <ellipse
                          cx="12"
                          cy="5"
                          rx="9"
                          ry="3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Data Subject Requests
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Enable users to place requests about their data management. Keep track of the inquiries and respond to them on time.
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
                          d="M4 4v5h4M20 4v5h-4M4 20v-5h4M20 20v-5h-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Preference center
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Differentiate between the different types of messages to send, and allow your audience decide what kinds of journeys and messages they want to receive.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  You don&apos;t need an army of marketers.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  You need GrowthOS and Blu, your AI Co-Marketer.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <ButtonLink href="https://app.intempt.com/">Get started</ButtonLink>
                  <ButtonLink variant="secondary" href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12">
                    Book a demo
                  </ButtonLink>
                </div>
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
                      How does Intempt handle consent collection before tracking begins?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      Trackers only collect data your visitors explicitly agree to share. If a user refuses consent or hasn&apos;t made a decision yet, no personal information gets collected at all. The system respects consent status before any tracking activates, not after.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      How does identity resolution help with compliance?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      When you have multiple representations of the same customer (different emails, duplicate loyalty accounts, variations of the same person across channels), compliance gets messy. Intempt resolves these identities into unified profiles so when someone submits a deletion request, you&apos;re deleting all instances of their data, not leaving fragments scattered across systems.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      How do I track and respond to Data Subject Requests on time?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      You get a complete record of all consents and data requests in one place. See the status of each request, track deadlines, and respond with the required information or action. No hunting through email threads or spreadsheets to figure out what&apos;s outstanding.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={200}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      Does Intempt help with both GDPR and CCPA compliance?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      Yes. The platform addresses requirements for both regulations: consent management, data subject access requests, deletion rights, data portability, and preference management. Because your first-party data is unified, cleansed, and deduplicated in one place, compliance activities work the same way regardless of which regulation applies to a given user.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={240}>
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      How do I get visibility into what personal data I&apos;m collecting and where it&apos;s going?
                    </h3>
                    <p className="mt-2 text-base leading-7 text-black/65">
                      The platform gives you real-time visibility into what personal information you&apos;re collecting, which sources it comes from, and where it&apos;s being sent. You&apos;re not guessing about data flows. You can audit collection points, review destinations, and ensure nothing is happening that shouldn&apos;t be.
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
