"use client";

import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "../components/Button";

export function AskInteractive({
  prompts,
}: {
  prompts: ReadonlyArray<string>;
}) {
  const defaultPrompt = prompts[0] ?? "How are my campaigns performing?";
  const [value, setValue] = useState(defaultPrompt);
  const [submitted, setSubmitted] = useState(false);

  const suggested = useMemo(() => prompts.slice(1, 6), [prompts]);

  useEffect(() => {
    if (!submitted) return;
    const timeout = window.setTimeout(() => setSubmitted(false), 5000);
    return () => window.clearTimeout(timeout);
  }, [submitted]);

  const submit = () => {
    if (submitted) return;
    setSubmitted(true);
  };

  return (
    <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[32px] border border-black/10 bg-[#fffff3] shadow-sm">
      <div className="relative p-6 sm:p-8">
        <div
          className={[
            "transition-all duration-500 ease-out",
            submitted ? "opacity-0 -translate-y-2 blur-[2px]" : "opacity-100",
          ].join(" ")}
          aria-hidden={submitted}
        >
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-[#0382ff] px-3 py-1.5 text-xs font-semibold text-white">
                Ask
              </span>
              <span className="rounded-xl bg-black/[0.03] px-3 py-1.5 text-xs font-semibold text-black/60 ring-1 ring-inset ring-black/10">
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
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0382ff]/10 text-[#0382ff] ring-1 ring-inset ring-[#0382ff]/20 transition-all duration-200 ease-out hover:bg-[#0382ff]/15 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0382ff]"
              aria-label="Ask Blu"
            >
              <span className="text-lg leading-none">➤</span>
            </button>
          </div>

          <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-3">
            {suggested.map((prompt) => {
              const isSelected = value === prompt;
              return (
              <button
                key={prompt}
                type="button"
                onClick={() => setValue(prompt)}
                className={[
                  "rounded-2xl px-4 py-3 text-sm font-semibold ring-1 ring-inset transition-all duration-200 ease-out",
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
              <ButtonLink href="/onboarding">Try Intempt</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
