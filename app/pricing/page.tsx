"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { AnimateIn } from "../components/AnimateIn";
import { useState, useEffect, useMemo } from "react";

type BillingPeriod = "monthly" | "yearly";

interface PricingEstimate {
  id: number;
  perMTUCost: number;
  overageCost: number;
  monthlyCost: number;
  annualCost: number;
  agentsCrmCost: number;
  agentsCrmAnnualCost: number;
  journeyCost: number;
  journeyAnnualCost: number;
  experienceCost: number;
  experienceAnnualCost: number;
  insightsCost: number;
  insightsAnnualCost: number;
  recommendationsCost: number;
  recommendationsAnnualCost: number;
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

const ADD_ONS = [
  { id: "agentsCrm", name: "Sales CRM", key: "agentsCrmCost" },
  { id: "journeys", name: "Journeys", key: "journeyCost" },
  { id: "experiences", name: "Experiences", key: "experienceCost" },
  { id: "insights", name: "Analytics", key: "insightsCost" },
  { id: "recommendations", name: "Recommendations", key: "recommendationsCost" },
];

export default function PricingPage() {
  const [selectedMTU, setSelectedMTU] = useState(1000);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());
  const [pricingData, setPricingData] = useState<Record<string, PricingEstimate>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch("https://api.intempt.com/v1/estimates");
        if (response.ok) {
          const data = await response.json();
          setPricingData(data);
        }
      } catch (error) {
        console.error("Failed to fetch pricing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  const currentPricing = pricingData[selectedMTU.toString()];

  const basePrice = useMemo(() => {
    if (!currentPricing) return 0;
    return billingPeriod === "monthly" ? currentPricing.monthlyCost : currentPricing.annualCost / 12;
  }, [currentPricing, billingPeriod]);

  const addOnsPrice = useMemo(() => {
    if (!currentPricing) return 0;
    return Array.from(selectedAddOns).reduce((total, addOnId) => {
      const addOn = ADD_ONS.find((a) => a.id === addOnId);
      if (!addOn) return total;
      
      let cost = 0;
      if (billingPeriod === "monthly") {
        cost = currentPricing[addOn.key as keyof PricingEstimate] as number;
      } else {
        const annualKey = addOn.key.replace("Cost", "AnnualCost");
        cost = (currentPricing[annualKey as keyof PricingEstimate] as number) / 12;
      }
      return total + cost;
    }, 0);
  }, [selectedAddOns, currentPricing, billingPeriod]);

  const totalPrice = basePrice + addOnsPrice;

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
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
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
        <section className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
                  Simple, transparent pricing
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
                  Start with GrowthOS Core and add features as you grow
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Pricing Calculator */}
        <section className="py-12">
          <Container>
            <div className="mx-auto max-w-5xl">
              <AnimateIn>
                <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
                  {/* MTU Selector */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-black mb-3">
                      Monthly Tracked Users (MTU)
                    </label>
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                      {MTU_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setSelectedMTU(opt.value)}
                          className={`rounded-sm border-2 px-3 py-2 text-sm font-medium transition-all ${
                            selectedMTU === opt.value
                              ? "border-[#0382ff] bg-[#0382ff]/10 text-[#0382ff]"
                              : "border-black/10 bg-white text-black/70 hover:border-[#0382ff]/30"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Billing Toggle */}
                  <div className="mb-8 flex items-center justify-center">
                    <div className="inline-flex rounded-sm border border-black/10 bg-black/[0.02] p-1">
                      <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`rounded-sm px-4 py-2 text-sm font-semibold transition-all ${
                          billingPeriod === "monthly"
                            ? "bg-white text-black shadow-sm"
                            : "text-black/60"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingPeriod("yearly")}
                        className={`rounded-sm px-4 py-2 text-sm font-semibold transition-all ${
                          billingPeriod === "yearly"
                            ? "bg-white text-black shadow-sm"
                            : "text-black/60"
                        }`}
                      >
                        Yearly
                        <span className="ml-1 text-xs text-[#0382ff]">Save 15%</span>
                      </button>
                    </div>
                  </div>

                  {/* Add-ons Grid */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-black mb-4">Add-ons (optional)</h3>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {ADD_ONS.map((addOn) => {
                        const isSelected = selectedAddOns.has(addOn.id);
                        const addOnPrice = currentPricing
                          ? billingPeriod === "monthly"
                            ? (currentPricing[addOn.key as keyof PricingEstimate] as number)
                            : ((currentPricing[addOn.key.replace("Cost", "AnnualCost") as keyof PricingEstimate] as number) / 12)
                          : 0;

                        return (
                          <button
                            key={addOn.id}
                            onClick={() => toggleAddOn(addOn.id)}
                            className={`rounded-sm border-2 p-4 text-left transition-all ${
                              isSelected
                                ? "border-[#0382ff] bg-[#0382ff]/5"
                                : "border-black/10 bg-white hover:border-[#0382ff]/30"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-black">{addOn.name}</span>
                              {isSelected && (
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
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                            <div className="text-xs text-black/60">
                              {formatPrice(addOnPrice)}/mo
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price Summary */}
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#0382ff]"></div>
                    </div>
                  ) : (
                    <div className="rounded-sm border-2 border-[#0382ff] bg-gradient-to-br from-[#0382ff] to-blue-600 p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            GrowthOS {formatMTU(selectedMTU)} MTU
                          </h3>
                          <p className="text-sm text-white/80 mt-1">
                            {billingPeriod === "monthly" ? "Billed monthly" : "Billed yearly"}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-4xl font-bold text-white">
                            {formatPrice(totalPrice)}
                          </div>
                          <div className="text-sm text-white/70">/month</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://app.intempt.com/"
                          className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold bg-white text-[#0382ff] transition-all duration-200 ease-out hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0382ff]"
                        >
                          Get started
                        </a>
                        <a
                          href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12"
                          className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold border-2 border-white bg-transparent text-white transition-all duration-200 ease-out hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          Book a demo
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </AnimateIn>
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
