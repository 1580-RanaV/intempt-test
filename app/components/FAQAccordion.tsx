"use client";

import { useState } from "react";
import { AnimateIn } from "./AnimateIn";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <AnimateIn key={index} delayMs={index * 80}>
          <div>
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left transition-colors hover:opacity-80"
            >
              <span className="text-lg font-semibold text-black pr-8">
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-[#0382ff] transition-transform duration-200 ${
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
              <div className="pb-4">
                <p className="text-base leading-7 text-black/65">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}

