"use client";

import { useState, useMemo } from "react";
import { ButtonLink } from "../Button";

const CheckIcon = ({ size = "w-4 h-4" }: { size?: string }) => (
  <svg className={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const CORE_FEATURES = [
  { name: 'Customer Data Platform', icon: DatabaseIcon },
  { name: 'Audiences', icon: UsersIcon },
  { name: 'Privacy & Consent', icon: ShieldIcon },
  { name: 'All Agents', icon: SparklesIcon },
];
import { interpolatePrice, formatMTU, MTU_SLIDER_TICKS } from "../../data/mtuPricing";

// Format currency with commas
const formatCurrency = (value: number, decimals: number = 2): string => {
  return value.toLocaleString('en-US', { 
    minimumFractionDigits: decimals, 
    maximumFractionDigits: decimals 
  });
};

interface MarketersPricingProps {
  billingCycle: 'monthly' | 'yearly';
}

const ADD_ONS = [
  {
    id: 'experiences',
    name: 'Experiences',
    percentage: '+60% of base',
    description: 'Personalize user experiences with experiments and A/B tests',
    features: ['Personalizations', 'Experiments', 'A/B Testing'],
    multiplier: 0.6,
  },
  {
    id: 'analytics',
    name: 'Analytics',
    percentage: '+60% of base',
    description: 'Advanced analytics with custom reports and dashboards',
    features: ['Reports', 'Dashboards', 'Custom Metrics'],
    multiplier: 0.6,
  },
  {
    id: 'journeys',
    name: 'Journeys',
    percentage: '+60% of base',
    description: 'Automated multi-channel journey orchestration',
    features: ['Journeys', 'Messages', 'Reply Agent'],
    multiplier: 0.6,
  },
  {
    id: 'recommendations',
    name: 'Recommendations',
    percentage: '+60% of base',
    description: 'AI-powered product recommendations and catalog management',
    features: ['Catalog', 'Feeds', 'AI Recommendations'],
    multiplier: 0.6,
  },
];


// Convert MTU value to slider position (0-100)
const mtuToSlider = (mtu: number): number => {
  const minLog = Math.log(1000);
  const maxLog = Math.log(1000000);
  return ((Math.log(mtu) - minLog) / (maxLog - minLog)) * 100;
};

// Convert slider position to MTU value
const sliderToMtu = (position: number): number => {
  const minLog = Math.log(1000);
  const maxLog = Math.log(1000000);
  const mtu = Math.exp(minLog + (position / 100) * (maxLog - minLog));
  return Math.round(mtu / 1000) * 1000; // Round to nearest 1000
};

export function MarketersPricing({ billingCycle }: MarketersPricingProps) {
  const [sliderValue, setSliderValue] = useState(mtuToSlider(27000));
  const [activeAddOns, setActiveAddOns] = useState<string[]>(['experiences', 'analytics', 'journeys', 'recommendations']);

  const currentMTU = sliderToMtu(sliderValue);
  const { monthlyPrice: basePrice, pricePerMtu } = interpolatePrice(currentMTU);
  
  const yearlyDiscount = billingCycle === 'yearly' ? 0.85 : 1;

  const calculations = useMemo(() => {
    const baseMonthly = basePrice;
    const baseAnnual = baseMonthly * 12;
    
    const addOnCosts: { id: string; name: string; monthly: number; annual: number }[] = [];
    let totalAddOnMonthly = 0;
    
    activeAddOns.forEach((addOnId) => {
      const addOn = ADD_ONS.find((a) => a.id === addOnId);
      if (addOn) {
        const addOnMonthly = baseMonthly * addOn.multiplier;
        totalAddOnMonthly += addOnMonthly;
        addOnCosts.push({
          id: addOnId,
          name: addOn.name,
          monthly: addOnMonthly,
          annual: addOnMonthly * 12,
        });
      }
    });
    
    const totalMonthlyBeforeDiscount = baseMonthly + totalAddOnMonthly;
    const totalAnnualBeforeDiscount = totalMonthlyBeforeDiscount * 12;
    
    const annualDiscount = billingCycle === 'yearly' ? totalAnnualBeforeDiscount * 0.15 : 0;
    const totalAnnual = totalAnnualBeforeDiscount - annualDiscount;
    const effectiveMonthly = totalAnnual / 12;
    
    return {
      baseMonthly,
      baseAnnual,
      addOnCosts,
      totalAddOnMonthly,
      totalMonthlyBeforeDiscount,
      totalAnnualBeforeDiscount,
      annualDiscount,
      totalAnnual,
      effectiveMonthly,
    };
  }, [basePrice, activeAddOns, billingCycle]);

  const toggleAddOn = (id: string) => {
    setActiveAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Row: Usage and Add-ons Side by Side */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left: MTU Selector */}
        <div className="bg-white border border-black/10 rounded-sm p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-black mb-1">Select Your Usage</h3>
              <p className="text-sm text-black/70">Monthly Tracked Users (MTU)</p>
            </div>
            <div className="relative group">
              <button className="text-black/60 hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div className="absolute right-0 top-8 w-80 bg-white border border-black/10 rounded-sm p-4 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <h4 className="font-semibold text-black text-sm mb-2">What are MTUs?</h4>
                <p className="text-xs text-black/70 mb-3">
                  MTU = <strong>Total Users</strong> in Google Analytics. It's the number of unique visitors with at least one event in the last month.
                </p>
                <h5 className="font-medium text-black text-xs mb-1">How to estimate:</h5>
                <ul className="text-xs text-black/70 space-y-1 mb-3">
                  <li>• Check "Users" in GA4 for last 30 days</li>
                  <li>• Or add: Monthly Active Users + Anonymous Visitors</li>
                </ul>
                <p className="text-xs text-black/60 italic">
                  Also known as "Monthly Unique Visitors" in some analytics tools.
                </p>
              </div>
            </div>
          </div>
          
          {/* MTU Display */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl font-bold text-black">{formatMTU(currentMTU)}</span>
            <span className="text-lg text-black/70">MTU</span>
          </div>
          
          {/* Slider */}
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#0382ff]"
              style={{
                background: `linear-gradient(to right, #0382ff 0%, #0382ff ${sliderValue}%, rgba(0,0,0,0.1) ${sliderValue}%, rgba(0,0,0,0.1) 100%)`
              }}
            />
          </div>
          
          {/* Tick Labels */}
          <div className="flex justify-between text-xs text-black/60">
            {MTU_SLIDER_TICKS.map((tick) => (
              <span key={tick}>{formatMTU(tick)}</span>
            ))}
          </div>
          
          {/* Price per MTU */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/10">
            <div>
              <span className="text-sm text-black/70">Base price</span>
              <span className="text-lg font-semibold text-black ml-2">
                ${formatCurrency(calculations.baseMonthly * yearlyDiscount)}/mo
              </span>
            </div>
            <div className="text-sm text-black/70">
              ${pricePerMtu.toFixed(4)}/MTU
            </div>
          </div>
        </div>

        {/* Right: Add-on Products */}
        <div className="bg-white border border-black/10 rounded-sm p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-black mb-4">Add-on Products</h3>
          <div className="space-y-3">
            {ADD_ONS.map((addOn) => {
              const isActive = activeAddOns.includes(addOn.id);
              const addOnPrice = calculations.baseMonthly * addOn.multiplier * yearlyDiscount;
              
              return (
                <div
                  key={addOn.id}
                  className={`border rounded-sm p-4 transition-all cursor-pointer ${
                    isActive ? 'border-[#0382ff] bg-[#0382ff]/5' : 'border-black/10 hover:border-[#0382ff]/50'
                  }`}
                  onClick={() => toggleAddOn(addOn.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-black text-sm">{addOn.name}</h4>
                        {isActive && (
                          <span className="text-[#0382ff]"><CheckIcon size="w-4 h-4" /></span>
                        )}
                      </div>
                      <p className="text-xs text-black/70 mb-2 line-clamp-2">{addOn.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {addOn.features.map((feature) => (
                          <span key={feature} className="text-xs bg-black/[0.02] px-2 py-0.5 rounded text-black">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <button
                        className={`w-8 h-8 flex items-center justify-center rounded-sm transition-all ${
                          isActive
                            ? 'bg-[#0382ff] text-white hover:bg-[#0273e6]'
                            : 'bg-white text-black border border-black/10 hover:bg-black/[0.02]'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAddOn(addOn.id);
                        }}
                      >
                        {isActive ? (
                          <CheckIcon size="w-4 h-4" />
                        ) : (
                          <PlusIcon />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* GrowthOS Core */}
      <div className="bg-white border border-black/10 rounded-sm p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-black">GrowthOS Core</h3>
            <span className="text-xs text-[#0382ff] font-semibold">Included</span>
          </div>
        </div>
        <p className="text-sm text-black/70 mb-4">
          Core platform capabilities included with every plan
        </p>
        <div className="flex flex-wrap gap-3">
          {CORE_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.name} className="flex items-center gap-2 bg-black/[0.02] px-3 py-2 rounded-sm">
                <span className="text-[#0382ff]"><Icon /></span>
                <span className="text-sm text-black">{feature.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom: Order Summary - Full Width */}
      <div className="bg-white border border-black/10 rounded-sm p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-black mb-6">Order Summary</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Base Plan and Add-ons */}
          <div className="space-y-4">
            {/* Base Plan */}
            <div className="space-y-3 pb-4 border-b border-black/10">
              <div className="flex justify-between">
                <span className="text-sm text-black">{formatMTU(currentMTU)} MTU Base</span>
                <span className="text-sm font-semibold text-black">
                  ${formatCurrency(calculations.baseAnnual * yearlyDiscount)}/yr
                </span>
              </div>
              <div className="pl-4 space-y-1">
                <p className="text-xs text-black/70">Includes GrowthOS Core:</p>
                {CORE_FEATURES.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-2 text-xs text-black/70">
                    <span className="text-[#0382ff]"><CheckIcon size="w-3 h-3" /></span>
                    {feature.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Add-ons */}
            {calculations.addOnCosts.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-black/70 font-semibold">Selected Add-ons:</p>
                {calculations.addOnCosts.map((addOn) => (
                  <div key={addOn.id} className="flex justify-between">
                    <span className="text-sm text-black">{addOn.name}</span>
                    <span className="text-sm text-black">
                      +${formatCurrency(addOn.annual * yearlyDiscount)}/yr
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Annual Discount */}
            {billingCycle === 'yearly' && (
              <div className="pt-2 border-t border-black/10">
                <div className="flex justify-between text-green-600">
                  <span className="text-sm">15% Annual Discount</span>
                  <span className="text-sm">-${formatCurrency(calculations.annualDiscount)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Total and CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-lg font-semibold text-black">
                  {billingCycle === 'yearly' ? 'Annual Total' : 'Monthly Total'}
                </span>
                <span className="text-2xl font-bold text-black">
                  ${billingCycle === 'yearly' 
                    ? formatCurrency(calculations.totalAnnual) 
                    : formatCurrency(calculations.totalMonthlyBeforeDiscount)}
                  {billingCycle === 'yearly' ? '/yr' : '/mo'}
                </span>
              </div>
              {billingCycle === 'yearly' && (
                <div className="text-right text-sm text-black/70 mb-6">
                  Effective monthly ${formatCurrency(calculations.effectiveMonthly)}/mo
                </div>
              )}
            </div>

            {/* CTA */}
            <div>
              <ButtonLink href="https://app.intempt.com/" className="w-full mb-2">
                Start 14-day free trial
              </ButtonLink>
              <p className="text-xs text-center text-black/60 mb-1">
                No credit card required
              </p>
              <p className="text-xs text-center text-black/60">
                Billed monthly • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise CTA */}
      <div className="mt-12 bg-black/[0.02] border border-black/10 rounded-sm p-8 text-center">
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

