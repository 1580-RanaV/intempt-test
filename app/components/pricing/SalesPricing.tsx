"use client";

import { ButtonLink } from "../Button";

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

interface SalesPricingProps {
  billingCycle: 'monthly' | 'yearly';
}

const STARTER_FEATURES = [
  'Unlimited connected inboxes and calendars',
  'Email sorting & categorization',
  'Draft replies in your tone and language',
  'Custom branded Meeting Notetaker',
  'Advanced team-level calendar scheduler',
  'Chat support',
];

const PROFESSIONAL_FEATURES = [
  'Everything in Starter, plus:',
  'HubSpot integration',
  'AI-powered email prioritization',
  'Smart meeting scheduling with AI',
  'Advanced CRM workflows',
  'Team analytics dashboard',
  'Priority chat & email support',
  'Custom integrations',
];

export function SalesPricing({ billingCycle }: SalesPricingProps) {
  const starterMonthly = 35;
  const starterAnnual = 30;
  
  // Original price before discount
  const professionalOriginal = 100;
  
  // Discounted prices - yearly gets bigger discount
  const professionalDiscountedYearly = 20;
  const professionalDiscountedMonthly = 24;
  
  // Calculate discount percentages
  const yearlyDiscountPercent = Math.round((1 - professionalDiscountedYearly / professionalOriginal) * 100);
  const monthlyDiscountPercent = Math.round((1 - professionalDiscountedMonthly / professionalOriginal) * 100);
  
  const currentDiscount = billingCycle === 'yearly' ? yearlyDiscountPercent : monthlyDiscountPercent;
  const discountedPrice = billingCycle === 'yearly' ? professionalDiscountedYearly : professionalDiscountedMonthly;

  const starterPrice = billingCycle === 'yearly' ? starterAnnual : starterMonthly;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-black/70">
          Select the perfect plan for your needs. Start with a 7-day free trial.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Starter Plan */}
        <div className="bg-white border border-black/10 rounded-sm p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-black mb-2">
            GrowthOS Sales Starter
          </h3>
          <p className="text-sm text-black/70 mb-6">
            For individuals getting started
          </p>

          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-black">${starterPrice}</span>
              <span className="text-black/70">/seat/month</span>
            </div>
            <p className="text-xs text-black/60 mt-1">
              {billingCycle === 'yearly' 
                ? `Billed annually ($${starterAnnual * 12}/year per seat)` 
                : 'Billed monthly'}
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {STARTER_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-black">
                <span className="text-[#0382ff] shrink-0 mt-0.5"><CheckIcon /></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <ButtonLink href="https://app.intempt.com/" className="w-full mb-2">
            Start 7-Day Free Trial
          </ButtonLink>
          <p className="text-xs text-center text-black/60">
            Billed monthly • Cancel anytime
          </p>
        </div>

        {/* Professional Plan */}
        <div className="bg-white border-2 border-[#0382ff] rounded-sm p-8 shadow-md relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-[#0382ff] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {currentDiscount}% OFF Early Bird
            </span>
          </div>

          <h3 className="text-xl font-semibold text-black mb-2">
            GrowthOS Sales Professional
          </h3>
          <p className="text-sm text-black/70 mb-6">
            For growing teams
          </p>

          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl text-black/60 line-through">${professionalOriginal}</span>
              <span className="text-4xl font-bold text-black">${discountedPrice}</span>
              <span className="text-black/70">/seat/month</span>
            </div>
            <p className="text-xs text-black/60 mt-1">
              {billingCycle === 'yearly' 
                ? `Billed annually ($${discountedPrice * 12}/year per seat)` 
                : 'Billed monthly'}
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {PROFESSIONAL_FEATURES.map((feature, index) => (
              <li key={feature} className={`flex items-start gap-3 text-sm ${index === 0 ? 'font-semibold text-[#0382ff]' : 'text-black'}`}>
                {index === 0 ? null : <span className="text-[#0382ff] shrink-0 mt-0.5"><CheckIcon /></span>}
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <ButtonLink href="https://app.intempt.com/" className="w-full mb-2">
            Start 7-Day Free Trial
          </ButtonLink>
          <p className="text-xs text-center text-black/60">
            Billed monthly • Cancel anytime
          </p>
        </div>
      </div>

      {/* Enterprise CTA */}
      <div className="bg-black/[0.02] border border-black/10 rounded-sm p-8 text-center">
        <h3 className="text-lg font-semibold text-black mb-2">
          Need Enterprise?
        </h3>
        <p className="text-sm text-black/70 mb-4">
          Custom solutions for large organizations with advanced security, SLA guarantees, and dedicated support.
        </p>
        <ButtonLink href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12" variant="secondary">
          Contact Sales
        </ButtonLink>
      </div>
    </div>
  );
}

