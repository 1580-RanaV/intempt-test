"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedSubtitle() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(0); // 0: initial, 1: first text, 2: first line animating, 3: second text, 4: second line animating, 5: third text

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Step 1: Show first text (immediate)
    setStep(1);
    
    // Step 2: Start first line animation after 600ms
    const timer1 = setTimeout(() => setStep(2), 600);
    
    // Step 3: Show second text after line completes (600ms + 800ms)
    const timer2 = setTimeout(() => setStep(3), 1400);
    
    // Step 4: Start second line animation after second text (1400ms + 300ms)
    const timer3 = setTimeout(() => setStep(4), 1700);
    
    // Step 5: Show third text after second line completes (1700ms + 800ms)
    const timer4 = setTimeout(() => setStep(5), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isVisible]);

  return (
    <div ref={ref} className="mx-auto max-w-4xl text-base font-normal leading-7 text-black/70 sm:text-lg">
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {/* First text: Built on data */}
        <span
          className={`whitespace-nowrap transition-all duration-500 ease-out ${
            step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Built on data
        </span>

        {/* First blue glowing line */}
        <div className="relative h-0.5 w-8 sm:w-12">
          <div
            className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#0382ff] via-[#5ea8ff] to-[#0382ff]/60 transition-all duration-800 ease-out ${
              step >= 2 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
            style={{
              boxShadow: step >= 2 ? "0 0 8px rgba(3, 130, 255, 0.8), 0 0 16px rgba(3, 130, 255, 0.5)" : "none",
            }}
          />
          <div
            className={`absolute left-0 top-0 h-full w-full rounded-full bg-[#0382ff] blur-md transition-all duration-800 ease-out ${
              step >= 2 ? "opacity-50" : "opacity-0"
            }`}
          />
        </div>

        {/* Second text: powered by AI & agent automation */}
        <span
          className={`whitespace-nowrap transition-all duration-500 ease-out ${
            step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          powered by AI & agent automation
        </span>

        {/* Second blue glowing line */}
        <div className="relative h-0.5 w-8 sm:w-12">
          <div
            className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#0382ff] via-[#5ea8ff] to-[#0382ff]/60 transition-all duration-800 ease-out ${
              step >= 4 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
            style={{
              boxShadow: step >= 4 ? "0 0 8px rgba(3, 130, 255, 0.8), 0 0 16px rgba(3, 130, 255, 0.5)" : "none",
            }}
          />
          <div
            className={`absolute left-0 top-0 h-full w-full rounded-full bg-[#0382ff] blur-md transition-all duration-800 ease-out ${
              step >= 4 ? "opacity-50" : "opacity-0"
            }`}
          />
        </div>

        {/* Third text: used by modern teams */}
        <span
          className={`whitespace-nowrap transition-all duration-500 ease-out ${
            step >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          used by modern teams
        </span>
      </div>
    </div>
  );
}

