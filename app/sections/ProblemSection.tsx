"use client";

import { Container } from "../components/Container";
import { AnimateIn } from "../components/AnimateIn";
import { siteContent } from "../content/siteContent";
import { useEffect, useState } from "react";

export function ProblemSection({
  why,
}: {
  why: (typeof siteContent)["why"];
}) {
  // Combine all tools from all categories into one array
  const allTools = why.stacks.flatMap((stack) => stack.tools);
  const [struckTools, setStruckTools] = useState<Set<string>>(new Set());
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasStarted) {
          setHasStarted(true);
          // Start striking tools one by one with a slight delay
          allTools.forEach((tool, index) => {
            setTimeout(() => {
              setStruckTools((prev) => new Set(prev).add(tool));
            }, 600 + index * 120);
          });
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("problem-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [allTools, hasStarted]);

  return (
    <section
      id="problem-section"
      className="relative overflow-hidden pt-16 pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%),radial-gradient(45%_40%_at_0%_35%,rgba(124,58,237,0.08)_0%,rgba(124,58,237,0)_65%),radial-gradient(45%_40%_at_100%_40%,rgba(3,130,255,0.06)_0%,rgba(3,130,255,0)_60%)]"
      />
      <Container>
        <div className="relative">
          <AnimateIn>
            <div className="mx-auto max-w-2xl space-y-3 text-center sm:space-y-4">
              <div className="inline-flex items-center gap-2 rounded-sm bg-[#0382ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20">
                THE PROBLEM
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                {why.title}
              </h2>
            </div>
          </AnimateIn>

          {/* Tools in 2 centered rows */}
          <AnimateIn delayMs={80}>
            <div className="mx-auto mt-8 mb-8 max-w-5xl">
              <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6">
                {/* First row - 5 tools */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
                  {allTools.slice(0, 5).map((tool) => {
                    const isStruck = struckTools.has(tool);
                    return (
                      <span
                        key={tool}
                        className={`inline-block transition-all duration-500 ease-out ${
                          isStruck
                            ? "opacity-50"
                            : "opacity-100"
                        }`}
                      >
                        <span
                          className={`font-medium text-black transition-all duration-500 whitespace-nowrap text-xl sm:text-2xl ${
                            isStruck
                              ? "line-through decoration-2 decoration-red-500/60"
                              : ""
                          }`}
                        >
                          {tool}
                        </span>
                      </span>
                    );
                  })}
                </div>
                {/* Second row - 4 tools */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
                  {allTools.slice(5, 9).map((tool) => {
                    const isStruck = struckTools.has(tool);
                    return (
                      <span
                        key={tool}
                        className={`inline-block transition-all duration-500 ease-out ${
                          isStruck
                            ? "opacity-50"
                            : "opacity-100"
                        }`}
                      >
                        <span
                          className={`font-medium text-black transition-all duration-500 whitespace-nowrap text-xl sm:text-2xl ${
                            isStruck
                              ? "line-through decoration-2 decoration-red-500/60"
                              : ""
                          }`}
                        >
                          {tool}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delayMs={120}>
            <div className="mx-auto max-w-2xl space-y-3 text-center sm:space-y-4">
              <p className="text-lg font-medium leading-8 text-black">
                {why.subtitle}
              </p>
              <p className="text-base font-semibold text-black/70">
                Too many tools. Too many handoffs.
              </p>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}

