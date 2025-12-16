"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";
import { useState } from "react";

export default function AffiliatesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "I'm an Intempt customer, can I still be an Ambassador?",
      answer: "Yes, absolutely! We welcome our existing Intempt customers to become members of our ambassador program. In fact, your firsthand experience with Intempt can be a valuable asset when promoting the platform to others. You can share your insights and expertise to help potential customers make informed decisions about using Intempt. Joining our ambassador program allows you to earn commissions while recommending a tool you already love and use.",
    },
    {
      question: "Am I getting paid for any type of customer / plan?",
      answer: "Yes, you will earn a commission for any type of paid plan that you refer to Intempt. Each time a customer you referred subscribes to any of our paid plans, an Intempt team member will review the conversion, and once approved, you'll receive an email confirmation.",
    },
    {
      question: "How long does my link stay relevant?",
      answer: "Your affiliate link remains relevant for 90 days after a user clicks on it. This means that if someone clicks on your affiliate link and decides to sign up within 90 days, you will still receive credit for the referral and earn a commission.",
    },
    {
      question: "How will I get paid?",
      answer: "We will Paypal the Revenue Share amount due to you within 30 days after the end of each fiscal quarter in an amount equal to the Net Revenue we recognize as revenue from Qualified Transactions during such quarter, multiplied by 20%.",
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
                  Partners
                </div>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Share Intempt. Get Rewarded
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Earn 20% recurring on every referral purchase. Sharing the word about Intempt
                </p>
                <div className="mt-10">
                  <ButtonLink href="#apply">Apply now</ButtonLink>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* How does it work? */}
        <section className="py-24">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  How does it work?
                </h2>
              </div>
            </AnimateIn>

            <div className="mx-auto mt-20 max-w-4xl space-y-16">
              {/* 20% recurring commission */}
              <AnimateIn delayMs={80}>
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0382ff]/10 to-violet-500/5">
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
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-black">
                      20% recurring commission
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-black/70">
                      Each time someone you refer subscribes to any of our paid plans, you'll earn 20% of subscription payments for the first 12 months.
                    </p>
                    <p className="mt-4 text-base font-medium text-black/80">
                      Those commissions can add up quickly: a 20K MTU annual will make you over $5,000!
                    </p>
                    <a
                      href="#terms"
                      className="mt-6 inline-flex items-center text-sm font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Marketing Affiliate Partner Agreement
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

              {/* Divider */}
              <div className="border-t border-black/10"></div>

              {/* Your network benefits too */}
              <AnimateIn delayMs={120}>
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
                      Your network benefits too!
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-black/70">
                      Anyone who you refer that qualifies for our Startup Program is eligible for a 50% off the yearly purchase price.
                    </p>
                    <a
                      href="#terms"
                      className="mt-6 inline-flex items-center text-sm font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Marketing Affiliate Partner Agreement
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

              {/* Divider */}
              <div className="border-t border-black/10"></div>

              {/* Your Success is Our Success */}
              <AnimateIn delayMs={160}>
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
                        <span>Payments are made easy via PayPal monthly</span>
                      </li>
                    </ul>
                    <a
                      href="#terms"
                      className="mt-6 inline-flex items-center text-sm font-medium text-[#0382ff] hover:text-[#0382ff]/80"
                    >
                      For detailed terms and conditions, please review the Intempt Marketing Affiliate Partner Agreement
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
            </div>
          </Container>
        </section>

        {/* Who is It for? */}
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_0%_35%,rgba(3,130,255,0.08)_0%,rgba(3,130,255,0)_65%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Who is It for?
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
                          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Agencies & Consultants
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Expand your services while providing immediate value to your customers.
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
                          d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-black">
                      Content Creators & Influencers
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Share the word about Intempt with your audience and generate extra revenue from posts impressions and/or referred paying users.
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
                      You
                    </h3>
                    <p className="mt-3 text-base leading-7 text-black/65">
                      Anyone can become an Intempt ambassador! Apply today and create an extra stream of income.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
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
                  Earn 20% recurring revenue for every referral
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  Earn 20% recurring revenue on every referral purchase for the first year. Sharing the word about Intempt
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

