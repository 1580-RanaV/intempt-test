"use client";

import Image from "next/image";

interface PricingToggleProps {
  activeProduct: 'marketers' | 'sales';
  onProductChange: (product: 'marketers' | 'sales') => void;
  billingCycle: 'monthly' | 'yearly';
  onBillingCycleChange: (cycle: 'monthly' | 'yearly') => void;
}

export function PricingToggle({
  activeProduct,
  onProductChange,
  billingCycle,
  onBillingCycleChange,
}: PricingToggleProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Product Toggle */}
      <div className="inline-flex bg-black/[0.02] rounded-sm border border-black/10 p-1">
        <button
          onClick={() => onProductChange('marketers')}
          className={`px-6 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            activeProduct === 'marketers'
              ? 'bg-white text-black shadow-sm'
              : 'text-black/60 hover:text-black'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          GrowthOS for Marketers
        </button>
        <button
          onClick={() => onProductChange('sales')}
          className={`px-6 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
            activeProduct === 'sales'
              ? 'bg-white text-black shadow-sm'
              : 'text-black/60 hover:text-black'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          GrowthOS for Sales
        </button>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-semibold transition-colors ${
            billingCycle === 'monthly' ? 'text-black' : 'text-black/60'
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() => onBillingCycleChange(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0382ff] focus:ring-offset-2 ${
            billingCycle === 'yearly' ? 'bg-[#0382ff]' : 'bg-black/20'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span
          className={`text-sm font-semibold transition-colors ${
            billingCycle === 'yearly' ? 'text-black' : 'text-black/60'
          }`}
        >
          Yearly
        </span>
        <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
          Save 15%
        </span>
      </div>
    </div>
  );
}

