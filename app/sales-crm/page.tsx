import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";
import Image from "next/image";

export default function SalesCRMPage() {
  return (
    <div className="bg-white text-black">
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
                  Sales CRM
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Your CRM, finally on autopilot
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Real-time AI‑powered CRM that closes the gap between marketers, sellers and customer success. Get full visibility on users/accounts, automatically run tasks & deals, and let AI agents research, qualify and enrich leads continuously
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

        {/* AI keeps your pipeline moving */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  AI keeps your pipeline moving
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Stay ahead with real-time task tracking, deal updates, and leaderboards powered by AI.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delayMs={80}>
              <div className="mx-auto mt-12 max-w-5xl">
                <div className="relative overflow-hidden rounded-sm border border-black/10 bg-white/50 shadow-xl p-4">
                  <div className="relative w-full">
                    <Image
                      src="/pic1.png"
                      alt="AI-powered pipeline dashboard"
                      width={1200}
                      height={675}
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Autonomous CRM Workflows */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Autonomous CRM Workflows
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Move from static records to real-time action. GrowthOS uses AI agents to research, qualify and enrich users and accounts to assign tasks, update deals, and trigger outreach.
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
                      Agents trigger from behavior
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      AI agents research, qualify and enrich users and trigger the next step, from assigning tasks to routing leads.
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
                          d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Automated tasks and deals
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Create, assign, and progress tasks or deals based on customer fit, activity, and journey stage.
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
                          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Live from web sources
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Use enrichment and research agents to fill in missing attributes using real-time data pulled from public sources.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-16 max-w-5xl">
                <div className="relative overflow-hidden rounded-sm border border-black/10 bg-white/50 shadow-xl p-4">
                  <div className="relative w-full">
                    <Image
                      src="/pic2.png"
                      alt="Autonomous CRM workflows"
                      width={1200}
                      height={675}
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Customer data platform */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Customer data platform
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Unify your user data. Track users across all channels and build a complete view of each customer. GrowthOS built-in CDP ensures your users are identified across channels, in real-time, and ready for outreach.
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
                          d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Resolve identities across channels
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Merge anonymous and known user sessions into a unified user profile. And connect Users to their Companies.
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
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Unify user and account attributes
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Bring all behavior, firmographic, and customer journey data into one structured record including enrichment fields pulled live from external sources like People Data Labs, DropContact, Prospeo and more.
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
                          d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Create dynamic segments instantly
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Filter users and accounts in real time to power customer journeys, goal tracking, and pipeline workflows.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-16 max-w-5xl">
                <div className="relative overflow-hidden rounded-sm border border-black/10 bg-white/50 shadow-xl p-4">
                  <div className="relative w-full">
                    <Image
                      src="/pic3.png"
                      alt="Customer data platform"
                      width={1200}
                      height={675}
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* AI Segments */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  AI Segments
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Segment smarter with AI-powered intelligence. Transform customer engagement with real-time AI segmentation. Create segments instantly by describing them in plain language prompts—saving time, reducing manual setup, and giving your team more power to act on the right audience at the right time.
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
                      Leverage AI-powered segmentation
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Build segments with AI agents that analyze lifecycle, qualification, and engagement data. From lead research to customer health, GrowthOS empowers you to engage with deeper insights and less manual effort.
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
                      Create real-time segments
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Combine live and historical data to build segments that stay updated, ensuring every campaign is relevant and timely.
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
                          d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Refine with advanced filters
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Use multiple conditions and in-line filters to create micro-segments that capture the most relevant target groups.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-16 max-w-5xl">
                <div className="relative overflow-hidden rounded-sm border border-black/10 bg-white/50 shadow-xl p-4">
                  <div className="relative w-full">
                    <Image
                      src="/pic4.png"
                      alt="AI-powered segments"
                      width={1200}
                      height={675}
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Privacy & Consent */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Privacy & Consent
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Stay compliant and respect customer preferences. Respect privacy and simplify compliance with built-in consent tools for GDPR and CCPA compliance.
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
                          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Consent collection & tracking
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Collect and manage user permissions from one place tied directly to profiles and enrichment data.
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
                      One-click deletion & export
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Easily handle right-to-be-forgotten and portability requests across user and account records.
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
                      Preference center, customizable
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Let users choose how, when, and what they hear from you with preferences integrated into journey logic.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-16 max-w-5xl">
                <div className="relative overflow-hidden rounded-sm border border-black/10 bg-white/50 shadow-xl p-4">
                  <div className="relative w-full">
                    <Image
                      src="/pic5.png"
                      alt="Privacy and consent management"
                      width={1200}
                      height={675}
                      className="h-auto w-full rounded-2xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Integrations */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Integrations
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  Connect seamlessly with your tech stack. GrowthOS connects to your tools and keeps data flowing across CRM, marketing, and eCommerce platforms so your workflows stay aligned and efficient.
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
                          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Real-time data sync
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Keep every system aligned with real-time customer data.
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
                          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Works with your platforms
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Native integrations with HubSpot, Shopify, Stripe, and more.
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
                      Custom data flows
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Control triggers, mappings, and field syncs to fit your workflows.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-16 max-w-5xl">
                <div className="relative overflow-hidden rounded-sm border border-black/10 bg-white/50 shadow-xl p-4">
                  <div className="relative w-full">
                    <Image
                      src="/pic6.png"
                      alt="Platform integrations"
                      width={1200}
                      height={675}
                      className="h-auto w-full rounded-2xl object-contain"
                    />
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
                  Unlock advanced growth tactics
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Dive into a curated directory of use cases tailored to your industry. Filter by product, team, and lifecycle stage to discover advanced tactics that drive growth with GrowthOS.
                </p>
                <div className="mt-10">
                  <ButtonLink
                    href="#templates"
                    variant="secondary"
                    className="bg-white text-black hover:bg-white"
                  >
                    View Templates
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
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

