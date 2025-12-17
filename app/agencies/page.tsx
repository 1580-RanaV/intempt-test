"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";
import { useState } from "react";

export default function AgenciesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I join the Agency partner program?",
      answer: "Just provide a few details at sign up and you'll receive a confirmation email that your partnership is pending. We then review your submission and if it's the right fit, you'll receive another email with onboarding details.",
    },
    {
      question: "How do payouts work?",
      answer: "We will pay the Revenue Share amount due to you within 30 days after the end of each fiscal quarter in an amount equal to the Net Revenue we recognize as revenue from Qualified Transactions during such quarter, multiplied by up-to 30%.",
    },
    {
      question: "What is the commission rate?",
      answer: "We pay up-to 30%, which we can increase depending on the yearly ARR, see the explanation on the partnerships tiers below.",
    },
    {
      question: "How long can I expect to receive the payouts?",
      answer: "We provide lifetime Revenue Share Term for agency partners from the time of the qualified transaction close - as long as the end user remains Intempt customer.",
    },
    {
      question: "Do you have partnership tiers?",
      answer: "Yes, we typically pay 15, 20 or 30% depending on ARR managed by you.",
    },
    {
      question: "What if user changes plans?",
      answer: "If users upgrade or downgrade from one paid plan to another paid plan, we will adjust your commission for the remainder of the year according to the new plan cost.",
    },
    {
      question: "What's expected from me as a Agency Partner?",
      answer: "We are looking for agencies who want to grow their business. If you are committed to growing with Intempt, we are excited to help you do just that!",
    },
  ];

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
                  Agency Partner program
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Become an Intempt Agency Partner today
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Join the Agency Partner Program and get all the software, expert support, and resources you'll need to become the partner your clients can't live without.
                </p>
                <div className="mt-10">
                  <ButtonLink href="#apply">Apply now</ButtonLink>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Are you a good fit? */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Are you a good fit?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  The Intempt Agency Partner Program is designed for eCommerce CRO and SaaS RevOps agencies, that want to learn, grow their business, and use the next generation of GrowthOS marketing technology
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
                          d="M3 3v18h18M7 16l4-4 4 4 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      You're a RevOps or CRO agency
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      That focuses on optimizing and increasing your customers conversion rates
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
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Your clients are in target industries
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Intempt is most suited (but not limited to) for eCommerce, SaaS and Mobile apps business
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
                          d="M1 4v6h6M23 20v-6h-6M20 4l-4 4-4-4M4 20l4-4 4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      You have dedicated IT resources
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      You have staff that can sell and implement Intempt for your customers
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-12 max-w-2xl text-center">
                <p className="text-base text-black/70">
                  Do you have an audience of eCommerce, SaaS or Apps marketers? Our Affiliate Program is for you!
                </p>
                <a
                  href="/affiliates"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#0382ff] hover:text-[#0382ff]/80"
                >
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* How to Get Started */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  How to Get Started
                </h2>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid gap-12 md:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5 text-2xl font-bold text-[#0382ff]">
                      1
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Join the Program
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Once you apply to the program, we'll review your application and contact you within 2-3 business days.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5 text-2xl font-bold text-[#0382ff]">
                      2
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Use Intempt for your customers
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Use GrowthOS for your client's marketing and sales operations. Organize multiple clients from a single account view.
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5 text-2xl font-bold text-[#0382ff]">
                      3
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Get paid and grow
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Earn up-to 30% recurring revenue share for every closed customer you sell
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <AnimateIn delayMs={200}>
              <div className="mx-auto mt-12 max-w-2xl text-center">
                <a
                  href="#terms"
                  className="inline-flex items-center text-sm font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                >
                  For detailed terms and conditions, please review the Intempt Sales Partner Agreement.
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <div className="mt-4">
                  <a
                    href="#learn-more"
                    className="inline-flex items-center text-sm font-semibold text-[#0382ff] hover:text-[#0382ff]/80"
                  >
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Why join the Agency Partner program? */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Why join the Agency Partner program?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/65">
                  We offer all our partners a revenue sharing model along with dedicated platform training and resources
                </p>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimateIn delayMs={80}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6">
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
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Upto 30% revenue share
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Add weight to your top-line with our revenue sharing program. Receive a commission on the recurring revenue derived from new customers you bring to Intempt.
                    </p>
                    <a
                      href="#terms"
                      className="mt-4 inline-flex items-center text-xs font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Sales Partner Agreement
                      <svg
                        className="ml-1 h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={120}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
                      >
                        <path
                          d="M3 6h18M3 12h18M3 18h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Tiered payouts
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Your revenue share can multiply depending on how much Annual Recurring Revenue (ARR) you earn within a year.
                    </p>
                    <a
                      href="#terms"
                      className="mt-4 inline-flex items-center text-xs font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Sales Partner Agreement
                      <svg
                        className="ml-1 h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={160}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6">
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
                      Expand your product portfolio
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Gain a strong edge over competitors. Expand your portfolio by integrating our platform with your existing product and services.
                    </p>
                    <a
                      href="#terms"
                      className="mt-4 inline-flex items-center text-xs font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Sales Partner Agreement
                      <svg
                        className="ml-1 h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={200}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6">
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
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Partner dashboard
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      With the Partner Dashboard, you'll be able to submit leads, track your commission, and access other resources.
                    </p>
                    <a
                      href="#terms"
                      className="mt-4 inline-flex items-center text-xs font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Sales Partner Agreement
                      <svg
                        className="ml-1 h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={240}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-6 w-6 text-[#0382ff]"
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
                    <h3 className="mt-4 text-lg font-semibold text-black">
                      Dedicated partner support
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      All partner relationships are nurtured with dedicated support including; platform training and implementation expertise to help you succeed.
                    </p>
                    <a
                      href="#terms"
                      className="mt-4 inline-flex items-center text-xs font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Sales Partner Agreement
                      <svg
                        className="ml-1 h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimateIn>

                <AnimateIn delayMs={280}>
                  <div className="rounded-2xl border border-black/10 bg-white/50 p-6">
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
                      Join a community of like-minded peers
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Our community will help you grow and fill in the gaps in your skillset and offerings.
                    </p>
                    <a
                      href="#terms"
                      className="mt-4 inline-flex items-center text-xs font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Sales Partner Agreement
                      <svg
                        className="ml-1 h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Your Success is Our Success */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl">
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
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
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-black">
                      Your Success is Our Success
                    </h3>
                    <ul className="mt-6 space-y-4 text-lg leading-8 text-black/70">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 text-[#0382ff]">•</span>
                        <span>Direct access to our Support & Success team</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 text-[#0382ff]">•</span>
                        <span>You have dedicated IT resources</span>
                      </li>
                    </ul>
                    <a
                      href="#terms"
                      className="mt-6 inline-flex items-center text-sm font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Sales Partner Agreement
                      <svg
                        className="ml-1 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Frequently asked questions. Answered.
                </h2>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-16 max-w-3xl">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <AnimateIn key={index} delayMs={index * 80}>
                    <div className="rounded-2xl border border-black/10 bg-white/50 shadow-sm overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/80"
                      >
                        <span className="text-lg font-semibold text-black pr-8">
                          {faq.question}
                        </span>
                        <svg
                          className={`h-5 w-5 flex-shrink-0 text-[#0382ff] transition-transform duration-200 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-5">
                          <p className="text-base leading-7 text-black/65">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA Section */}
        <section className="bg-black py-24 text-white">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Join the Agency Program
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Interested in using Intempt to onboard and deliver powerful solutions to your clients?
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
                  Become our partner to learn cutting-edge strategies for acquiring, converting, and retaining Users via implementing Intempt on behalf of eCommerce, SaaS, and Apps companies.
                </p>
                <div className="mt-10">
                  <ButtonLink href="#apply" variant="secondary" className="bg-[#fffff3] text-black hover:bg-[#fffff3]/95">
                    Apply now
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




