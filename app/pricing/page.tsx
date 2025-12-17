"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";
import { useState, useMemo, type ReactElement } from "react";

type BillingPeriod = "monthly" | "yearly";

interface AddOn {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: ReactElement;
}

const MTU_OPTIONS = [
  { value: 1000, label: "1K" },
  { value: 2000, label: "2K" },
  { value: 5000, label: "5K" },
  { value: 10000, label: "10K" },
  { value: 25000, label: "25K" },
  { value: 50000, label: "50K" },
  { value: 100000, label: "100K" },
  { value: 250000, label: "250K" },
  { value: 500000, label: "500K" },
  { value: 1000000, label: "1M" },
];

// Pricing lookup with exact values and interpolation
const PRICING_LOOKUP: Record<number, number> = {
  1000: 32.90,
  2000: 49.28,
  1000000: 15500,
};

// Pricing function: interpolate between known points using logarithmic scale
function calculateBasePrice(mtu: number): number {
  if (mtu <= 1000) return 32.90;
  if (mtu >= 1000000) return 15500;
  if (PRICING_LOOKUP[mtu]) return PRICING_LOOKUP[mtu];
  
  // Logarithmic interpolation between 1K and 1M
  // Using the exact 2K value as a reference point
  const logMin = Math.log(1000);
  const logMax = Math.log(1000000);
  const logValue = Math.log(mtu);
  const ratio = (logValue - logMin) / (logMax - logMin);
  
  // Use a curve that passes through 2K=$49.28
  // Adjust the interpolation to better match the 2K point
  let price;
  if (mtu <= 2000) {
    // Linear interpolation between 1K and 2K
    const localRatio = (mtu - 1000) / 1000;
    price = 32.90 + (49.28 - 32.90) * localRatio;
  } else {
    // Logarithmic interpolation between 2K and 1M
    const log2K = Math.log(2000);
    const localRatio = (logValue - log2K) / (logMax - log2K);
    price = 49.28 + (15500 - 49.28) * localRatio;
  }
  
  return Math.round(price * 100) / 100; // Round to 2 decimals
}

// Add-on pricing (percentage of base price)
const ADD_ON_PRICING: Record<string, number> = {
  experiences: 0.25, // 25% of base
  "sales-crm": 0.30, // 30% of base
  journeys: 0.35, // 35% of base
  analytics: 0.20, // 20% of base
  recommendations: 0.25, // 25% of base
};

export default function PricingPage() {
  const [selectedMTU, setSelectedMTU] = useState(1000);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const addOns: AddOn[] = [
    {
      id: "experiences",
      name: "Experiences",
      description:
        "Improve conversions with A/B testing and deliver personalized, real-time experiences across web and app. Run client or server-side tests on desktop, mobile, or in-product surfaces - all powered by live behavioral data.",
      features: ["Personalizations", "Experiments"],
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: "sales-crm",
      name: "Sales CRM",
      description:
        "Unify accounts, manage deals, assign tasks with AI agents that act on live customer data.",
      features: ["Accounts", "Tasks & Deals", "Enrichment Agent", "Qualification Agent"],
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "journeys",
      name: "Journeys",
      description:
        "Automate growth with behavior-driven journeys that qualify, trigger, and route personalized messages across email, SMS, push, Slack, or activate HubSpot CRM – all powered by live behavioral data.",
      features: ["Journeys", "Messages", "Snippets", "Reply Agent", "Lifecycle Agent"],
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: "analytics",
      name: "Analytics",
      description:
        "Create reports and dashboards on the fly to optimize customer experience and increase conversion rates.",
      features: ["Reports", "Dashboards"],
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: "recommendations",
      name: "Recommendations",
      description:
        "Effortlessly import your product data, apply sophisticated filters, and let GrowthOS adapt real-time recommendations based on user behavior",
      features: ["Recommendations", "Catalog", "Feeds"],
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  const basePrice = useMemo(() => calculateBasePrice(selectedMTU), [selectedMTU]);

  const addOnsPrice = useMemo(() => {
    return Array.from(selectedAddOns).reduce((total, addOnId) => {
      const multiplier = ADD_ON_PRICING[addOnId] || 0;
      return total + basePrice * multiplier;
    }, 0);
  }, [selectedAddOns, basePrice]);

  const totalPrice = basePrice + addOnsPrice;
  const yearlyPrice = totalPrice * 12 * 0.85; // 15% discount
  const monthlyEquivalent = yearlyPrice / 12;

  const displayPrice =
    billingPeriod === "monthly" ? totalPrice : monthlyEquivalent;
  const displayPeriod = billingPeriod === "monthly" ? "/mo" : "/mo";

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(addOnId)) {
        newSet.delete(addOnId);
      } else {
        newSet.add(addOnId);
      }
      return newSet;
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatMTU = (value: number) => {
    if (value >= 1000000) return "1M";
    if (value >= 1000) return `${value / 1000}K`;
    return value.toString();
  };

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
                <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-6xl">
                  Curiously affordable
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70 sm:text-xl">
                  Start with a pre-packaged bundle or customize your Growth OS
                  a-la-carte
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-6xl">
              {/* Core GrowthOS */}
              <AnimateIn>
                <div className="mb-12 rounded-3xl border border-black/10 bg-white p-8 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0382ff]/10">
                      <svg
                        className="h-6 w-6 text-[#0382ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-black">
                        GrowthOS CORE
                      </h2>
                      <p className="mt-2 text-black/70">
                        Real-time customer lifecycle OS to collect, unify, and
                        activate data across every journey.
                      </p>
                    </div>
                  </div>

                  {/* MTU Selector */}
                  <div className="mt-8">
                    <label className="block text-sm font-medium text-black mb-4">
                      How many Monthly Tracked Users (MTU) do you need?
                    </label>
                    <p className="text-sm text-black/60 mb-6">
                      Select the number of unique visitors that you plan to use
                      in a month. This can be a subset of your monthly total
                      traffic.
                    </p>

                    {/* MTU Slider */}
                    <div className="mb-6">
                      <input
                        type="range"
                        min="0"
                        max={MTU_OPTIONS.length - 1}
                        value={MTU_OPTIONS.findIndex((opt) => opt.value === selectedMTU)}
                        onChange={(e) => {
                          const index = parseInt(e.target.value);
                          setSelectedMTU(MTU_OPTIONS[index].value);
                        }}
                        className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#0382ff]"
                        style={{
                          background: `linear-gradient(to right, #0382ff 0%, #0382ff ${
                            ((MTU_OPTIONS.findIndex((opt) => opt.value === selectedMTU) /
                              (MTU_OPTIONS.length - 1)) *
                              100)
                          }%, rgba(0,0,0,0.1) ${
                            ((MTU_OPTIONS.findIndex((opt) => opt.value === selectedMTU) /
                              (MTU_OPTIONS.length - 1)) *
                              100)
                          }%, rgba(0,0,0,0.1) 100%)`,
                        }}
                      />
                      <div className="flex justify-between mt-2">
                        {MTU_OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setSelectedMTU(opt.value)}
                            className={`text-xs font-medium transition-colors ${
                              selectedMTU === opt.value
                                ? "text-[#0382ff]"
                                : "text-black/50 hover:text-black/70"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Core Features */}
                    <div className="mt-8 rounded-xl bg-black/[0.03] p-6">
                      <h3 className="text-sm font-semibold text-black mb-4">
                        Includes:
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-3">
                          <svg
                            className="h-5 w-5 text-[#0382ff]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span className="text-sm text-black/70">
                            Customer Data Platform
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg
                            className="h-5 w-5 text-[#0382ff]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="text-sm text-black/70">Audiences</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg
                            className="h-5 w-5 text-[#0382ff]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <span className="text-sm text-black/70">Privacy</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg
                            className="h-5 w-5 text-[#0382ff]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          <span className="text-sm text-black/70">Intent Agent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Add-ons */}
              <AnimateIn delayMs={100}>
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-black mb-6">
                    Add-ons
                  </h2>
                  <div className="space-y-4">
                    {addOns.map((addOn) => {
                      const isSelected = selectedAddOns.has(addOn.id);
                      const addOnPrice = basePrice * (ADD_ON_PRICING[addOn.id] || 0);
                      return (
                        <div
                          key={addOn.id}
                          className={`rounded-2xl border-2 p-6 transition-all ${
                            isSelected
                              ? "border-[#0382ff] bg-[#0382ff]/5"
                              : "border-black/10 bg-white hover:border-[#0382ff]/30"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4 flex-1">
                              <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                                  isSelected
                                    ? "bg-[#0382ff] text-white"
                                    : "bg-black/[0.03] text-black"
                                }`}
                              >
                                {addOn.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3">
                                  <h3 className="text-xl font-semibold text-black">
                                    {addOn.name}
                                  </h3>
                                  {isSelected && (
                                    <span className="text-xs font-medium text-[#0382ff] bg-[#0382ff]/10 px-2 py-1 rounded-full">
                                      Added
                                    </span>
                                  )}
                                </div>
                                <p className="mt-2 text-sm text-black/70">
                                  {addOn.description}
                                </p>
                                <div className="mt-4">
                                  <p className="text-xs font-medium text-black/60 mb-2">
                                    Includes:
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {addOn.features.map((feature) => (
                                      <span
                                        key={feature}
                                        className="text-xs text-black/70 bg-black/[0.03] px-2 py-1 rounded"
                                      >
                                        {feature}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleAddOn(addOn.id)}
                              className={`flex-shrink-0 rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${
                                isSelected
                                  ? "bg-[#0382ff] text-white hover:bg-[#0382ff]/90"
                                  : "bg-black text-white hover:bg-black/90"
                              }`}
                            >
                              {isSelected ? "Remove" : "Add"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimateIn>

              {/* Pricing Summary */}
              <AnimateIn delayMs={200}>
                <div className="rounded-3xl border-2 border-[#0382ff] bg-gradient-to-br from-[#0382ff] to-blue-600 p-8 shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        GrowthOS {formatMTU(selectedMTU)} MTU
                      </h3>
                      <p className="mt-1 text-sm text-white/80">
                        {billingPeriod === "monthly"
                          ? "Billed monthly"
                          : "Billed yearly (Save 15%)"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/20 p-1">
                      <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                          billingPeriod === "monthly"
                            ? "bg-white text-[#0382ff]"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingPeriod("yearly")}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                          billingPeriod === "yearly"
                            ? "bg-white text-[#0382ff]"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        Yearly
                        {billingPeriod === "monthly" && (
                          <span className="ml-1 text-xs">Save 15%</span>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mb-6 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg text-white/90">Total</span>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-white">
                          {formatPrice(displayPrice)}
                        </div>
                        <div className="text-sm text-white/70">
                          {displayPeriod}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ButtonLink
                      href="/onboarding"
                      className="flex-1 bg-white text-[#0382ff] hover:bg-white/90"
                    >
                      Get started
                    </ButtonLink>
                    <ButtonLink
                      href="#book-demo"
                      className="flex-1 border-2 border-white bg-transparent text-white hover:bg-white/10"
                    >
                      Book a demo
                    </ButtonLink>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-[#fffff3]">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                    Frequently asked questions. Answered.
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "What are Monthly Tracked Users (MTUs)?",
                      answer:
                        "Monthly Tracked Users are calculated across all projects in an organization. For each project, MTUs are calculated as the number of unique visitors with at least one event in the last month.",
                    },
                    {
                      question: "How can I estimate my MTUs?",
                      answer:
                        'To get an idea of your MTU count, add your monthly active users to the number of anonymous visitors you get per month. Some tools also call this metric "Monthly Unique Visitors."',
                    },
                    {
                      question: "What if I go over my prepaid MTU amount?",
                      answer:
                        "We don't stop collecting your data. Once you've finished using your prepaid amount of monthly tracked users you'll be charged an overage rate (20% above our normal plan rates) for each additional user tracked that month.",
                    },
                    {
                      question: "Do you offer a trial period?",
                      answer:
                        "Yes, we offer a 14-day trial with unlimited usage. We also don't require entering payment details during the sign-up. You will only be asked to add you credit card information if you would like to continue using the platform after the 14-day trial ends.",
                    },
                    {
                      question: "Can I cancel my account at any time?",
                      answer:
                        "Yes, you can cancel or downgrade your subscription at any time. If you cancel your subscription, you can keep using your account until your paid period expires. Then the account will become inactive/disabled until you reactivate the subscription.",
                    },
                    {
                      question: "Do I have to sign a long-term contract?",
                      answer:
                        "No, our paid plans operate on a monthly schedule and can be canceled or up-/downgraded at any time for the following monthly invoice cycle.",
                    },
                    {
                      question: "Do you offer a wire transfer as a payment method?",
                      answer:
                        "Yes, we offer wire transfers, but only for larger plans. If you are interested in an exception, please contact us.",
                    },
                    {
                      question: "Do you offer SLAs?",
                      answer:
                        "Yes, we offer SLAs for all our customers. You can find more information here.",
                    },
                    {
                      question: "What kind of payments do you accept?",
                      answer:
                        "We accept credit card payments, namely: Visa, Mastercard, Mastercard and Discover. If you're interested in custom limits or features, contact us to set up a call about the Enterprise plan.",
                    },
                  ].map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-black/10 bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] transition-colors"
      >
        <span className="font-semibold text-black flex-1">{question}</span>
        <svg
          className={`h-5 w-5 text-[#0382ff] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-black/70 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

