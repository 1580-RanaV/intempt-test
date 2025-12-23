"use client";

import { siteContent } from "../content/siteContent";
import { HeaderSection } from "../sections/HeaderSection";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { useState } from "react";
import { PricingToggle } from "../components/pricing/PricingToggle";
import { MarketersPricing } from "../components/pricing/MarketersPricing";
import { SalesPricing } from "../components/pricing/SalesPricing";
import { ROICalculator } from "../components/pricing/ROICalculator";

export default function PricingPage() {
  const [activeProduct, setActiveProduct] = useState<'marketers' | 'sales'>('marketers');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-[white] text-black">
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
                  Curiously affordable
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
                  Start with a pre-packaged bundle or customize your GrowthOS à la carte
                </p>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Product Toggle */}
        <section className="py-8">
          <Container>
            <PricingToggle
              activeProduct={activeProduct}
              onProductChange={setActiveProduct}
              billingCycle={billingCycle}
              onBillingCycleChange={setBillingCycle}
            />
          </Container>
        </section>

        {/* Pricing Content */}
        <section className="py-12">
          <Container>
            {activeProduct === 'marketers' ? (
              <MarketersPricing billingCycle={billingCycle} />
            ) : (
              <SalesPricing billingCycle={billingCycle} />
            )}
          </Container>
        </section>

        {/* ROI Calculator */}
        <ROICalculator activeProduct={activeProduct} />

        <Footer
          brand={siteContent.brand}
          contact={siteContent.footer.contact}
          columns={siteContent.footer.columns}
        />
      </main>
    </div>
  );
}
