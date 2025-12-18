"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { ButtonLink } from "../components/Button";

export function AskInteractive({
  prompts,
}: {
  prompts: ReadonlyArray<string>;
}) {
  const defaultPrompt = prompts[0] ?? "How are my campaigns performing?";
  const [value, setValue] = useState(defaultPrompt);
  const [submitted, setSubmitted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainer1Ref = useRef<HTMLDivElement>(null);
  const scrollContainer2Ref = useRef<HTMLDivElement>(null);
  const scrollContainer3Ref = useRef<HTMLDivElement>(null);

  // Split prompts into 3 bands
  const allPrompts = useMemo(() => prompts.slice(1), [prompts]);
  const band1 = useMemo(() => {
    const items = allPrompts.filter((_, i) => i % 3 === 0);
    return [...items, ...items];
  }, [allPrompts]);
  const band2 = useMemo(() => {
    const items = allPrompts.filter((_, i) => i % 3 === 1);
    return [...items, ...items];
  }, [allPrompts]);
  const band3 = useMemo(() => {
    const items = allPrompts.filter((_, i) => i % 3 === 2);
    return [...items, ...items];
  }, [allPrompts]);

  useEffect(() => {
    if (!submitted) return;
    const timeout = window.setTimeout(() => setSubmitted(false), 5000);
    return () => window.clearTimeout(timeout);
  }, [submitted]);

  // Auto-scroll effect for all 3 bands
  useEffect(() => {
    const container1 = scrollContainer1Ref.current;
    const container2 = scrollContainer2Ref.current;
    const container3 = scrollContainer3Ref.current;
    if (!container1 || !container2 || !container3 || isPaused) return;

    let animationFrameId: number;
    let scrollPosition1 = 0;
    let scrollPosition2 = container2.scrollWidth / 2; // Start from middle for reverse effect
    let scrollPosition3 = 0;
    
    const scrollSpeed1 = 0.6; // pixels per frame - moving right
    const scrollSpeed2 = -0.8; // pixels per frame - moving left (faster)
    const scrollSpeed3 = 0.5; // pixels per frame - moving right (slower)

    const scroll = () => {
      // Band 1: scroll left to right
      scrollPosition1 += scrollSpeed1;
      const maxScroll1 = container1.scrollWidth / 2;
      if (scrollPosition1 >= maxScroll1) {
        scrollPosition1 = 0;
      }
      container1.scrollLeft = scrollPosition1;

      // Band 2: scroll right to left
      scrollPosition2 += scrollSpeed2;
      const maxScroll2 = container2.scrollWidth / 2;
      if (scrollPosition2 <= 0) {
        scrollPosition2 = maxScroll2;
      }
      container2.scrollLeft = scrollPosition2;

      // Band 3: scroll left to right (different speed)
      scrollPosition3 += scrollSpeed3;
      const maxScroll3 = container3.scrollWidth / 2;
      if (scrollPosition3 >= maxScroll3) {
        scrollPosition3 = 0;
      }
      container3.scrollLeft = scrollPosition3;

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const submit = () => {
    if (submitted) return;
    setSubmitted(true);
  };

  const handlePromptClick = (prompt: string) => {
    setValue(prompt);
    setIsPaused(true);
    // Resume scrolling after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden bg-[#f5f5f5]">
      <div className="relative p-6 sm:p-8">
        <div
          className={[
            "transition-all duration-500 ease-out",
            submitted ? "opacity-0 -translate-y-2 blur-[2px]" : "opacity-100",
          ].join(" ")}
          aria-hidden={submitted}
        >
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 rounded-sm border border-black/10 bg-white/60 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-[#0382ff] px-3 py-1.5 text-xs font-semibold text-white">
                Ask
              </span>
              <span className="rounded-sm bg-black/[0.03] px-3 py-1.5 text-xs font-semibold text-black/60 ring-1 ring-inset ring-black/10">
                Do
              </span>
            </div>

            <div className="flex-1">
              <label className="sr-only" htmlFor="ask-prompt">
                Ask Blu
              </label>
              <input
                id="ask-prompt"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") submit();
                }}
                placeholder={defaultPrompt}
                className="w-full bg-transparent px-2 text-sm font-semibold text-black/70 outline-none placeholder:text-black/35"
              />
            </div>

            <button
              type="button"
              onClick={submit}
              className="group grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-[#0382ff]/10 text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20 transition-colors duration-200 ease-out hover:bg-[#0382ff]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0382ff]"
              aria-label="Ask Blu"
            >
              <span className="text-lg leading-none inline-block group-hover:animate-[slideOut_1.5s_ease-in-out]">➤</span>
            </button>
          </div>

          {/* Auto-scrolling carousel with 3 bands and blur effects */}
          <div className="mx-auto mt-7 max-w-4xl space-y-3">
            {/* Band 1 - Scrolling right */}
            <div className="relative">
              {/* Left blur gradient */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent" />
              
              {/* Right blur gradient */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent" />
              
              {/* Scrolling container */}
              <div
                ref={scrollContainer1Ref}
                className="flex gap-3 overflow-x-hidden no-scrollbar"
              >
                {band1.map((prompt, index) => {
                  const isSelected = value === prompt;
                  return (
                    <button
                      key={`band1-${prompt}-${index}`}
                      type="button"
                      onClick={() => handlePromptClick(prompt)}
                      className={[
                        "shrink-0 whitespace-nowrap rounded-sm px-4 py-3 text-sm font-semibold ring-1 ring-inset transition-all duration-200 ease-out",
                        "motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-sm",
                        isSelected
                          ? "bg-[#0382ff] text-white ring-[#0382ff]/30"
                          : "bg-white/60 text-black/80 ring-black/10 hover:bg-white/80",
                      ].join(" ")}
                    >
                      {prompt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Band 2 - Scrolling left (opposite direction) */}
            <div className="relative">
              {/* Left blur gradient */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent" />
              
              {/* Right blur gradient */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent" />
              
              {/* Scrolling container */}
              <div
                ref={scrollContainer2Ref}
                className="flex gap-3 overflow-x-hidden no-scrollbar"
              >
                {band2.map((prompt, index) => {
                  const isSelected = value === prompt;
                  return (
                    <button
                      key={`band2-${prompt}-${index}`}
                      type="button"
                      onClick={() => handlePromptClick(prompt)}
                      className={[
                        "shrink-0 whitespace-nowrap rounded-sm px-4 py-3 text-sm font-semibold ring-1 ring-inset transition-all duration-200 ease-out",
                        "motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-sm",
                        isSelected
                          ? "bg-[#0382ff] text-white ring-[#0382ff]/30"
                          : "bg-white/60 text-black/80 ring-black/10 hover:bg-white/80",
                      ].join(" ")}
                    >
                      {prompt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Band 3 - Scrolling right (same direction as band 1, different speed) */}
            <div className="relative">
              {/* Left blur gradient */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent" />
              
              {/* Right blur gradient */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent" />
              
              {/* Scrolling container */}
              <div
                ref={scrollContainer3Ref}
                className="flex gap-3 overflow-x-hidden no-scrollbar"
              >
                {band3.map((prompt, index) => {
                  const isSelected = value === prompt;
                  return (
                    <button
                      key={`band3-${prompt}-${index}`}
                      type="button"
                      onClick={() => handlePromptClick(prompt)}
                      className={[
                        "shrink-0 whitespace-nowrap rounded-sm px-4 py-3 text-sm font-semibold ring-1 ring-inset transition-all duration-200 ease-out",
                        "motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-sm",
                        isSelected
                          ? "bg-[#0382ff] text-white ring-[#0382ff]/30"
                          : "bg-white/60 text-black/80 ring-black/10 hover:bg-white/80",
                      ].join(" ")}
                    >
                      {prompt}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className={[
            "absolute inset-0 grid place-items-center p-8 text-center transition-all duration-500 ease-out",
            submitted
              ? "opacity-100 translate-y-0 blur-0"
              : "pointer-events-none opacity-0 translate-y-2 blur-[2px]",
          ].join(" ")}
          aria-hidden={!submitted}
        >
          <div className="mx-auto max-w-xl">
            <div className="text-sm font-semibold text-black/60">
              Nice prompt. Want Blu to do it for real?
            </div>
            <div className="mt-6 flex justify-center">
              <ButtonLink href="https://app.intempt.com/">Try Intempt</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
