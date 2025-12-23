"use client";

import { useState } from "react";
import { ButtonLink } from "../Button";

interface ROICalculatorProps {
  activeProduct: 'marketers' | 'sales';
}

export function ROICalculator({ activeProduct }: ROICalculatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-black/[0.01]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#0382ff] text-xs font-bold tracking-widest uppercase">
            ROI CALCULATOR
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mt-2 mb-4">
            See Your Potential ROI with GrowthOS for {activeProduct === 'marketers' ? 'Marketers' : 'Sales'}
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto">
            {activeProduct === 'marketers' 
              ? 'Calculate the impact of lifecycle automation, experiments, and personalization on your revenue.'
              : 'Calculate time savings and revenue impact from email automation, meeting notes, and sales tools.'}
          </p>
        </div>

        {!isExpanded ? (
          <div className="text-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm bg-white text-zinc-900 ring-1 ring-inset ring-black/10 hover:bg-[#f5f5f5] focus-visible:outline-[#0382ff]"
            >
              Calculate My ROI
            </button>
          </div>
        ) : (
          <div className="bg-white border border-black/10 rounded-sm p-8 max-w-2xl mx-auto">
            <p className="text-center text-black/70 mb-6">
              ROI Calculator coming soon. For a personalized ROI analysis, please contact our sales team.
            </p>
            <div className="flex gap-4 justify-center">
              <ButtonLink href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12" variant="secondary">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="https://app.intempt.com/">
                Start Free Trial
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

