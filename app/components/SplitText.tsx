"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function splitIntoChars(text: string) {
  return Array.from(text).map((ch, idx) => ({
    key: `c-${idx}`,
    value: ch === " " ? "\u00A0" : ch,
  }));
}

function splitIntoWords(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w, idx) => ({ key: `w-${idx}`, value: w }));
}

export default function SplitText({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  const wantsWords = splitType.includes("words");
  const wantsChars = splitType.includes("chars") || splitType === "chars";
  const wantsCharsWithinWords = wantsWords && wantsChars;

  const words = useMemo(() => splitIntoWords(text), [text]);
  const chars = useMemo(() => splitIntoChars(text), [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!text) return;
    if (prefersReducedMotion()) return;

    const selector = wantsChars ? "[data-split-char]" : "[data-split-word]";
    const spans = Array.from(el.querySelectorAll(selector));
    if (spans.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const tl = gsap.timeline({
          defaults: { duration, ease },
          onComplete: onLetterAnimationComplete,
        });

        tl.fromTo(
          spans,
          { ...from },
          {
            ...to,
            stagger: delay / 1000,
            willChange: "transform, opacity",
            force3D: true,
            clearProps: "willChange",
          }
        );
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [
    delay,
    duration,
    ease,
    from,
    onLetterAnimationComplete,
    rootMargin,
    text,
    threshold,
    to,
  ]);

  const style: React.CSSProperties = {
    textAlign,
    wordWrap: "break-word",
  };
  const classes = ["inline-block whitespace-normal", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {wantsCharsWithinWords ? (
        words.map((w, wIdx) => (
          <span
            key={w.key}
            className={[
              "inline-block whitespace-nowrap",
              wIdx < words.length - 1 ? "mr-[0.25em]" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {Array.from(w.value).map((ch, cIdx) => (
              <span
                key={`wc-${wIdx}-${cIdx}`}
                data-split-char
                className="inline-block will-change-transform"
              >
                {ch}
              </span>
            ))}
          </span>
        ))
      ) : wantsWords ? (
        words.map((w, idx) => (
          <span
            key={w.key}
            className={[
              "inline-block",
              idx < words.length - 1 ? "mr-[0.25em]" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span
              data-split-word
              className="inline-block will-change-transform"
            >
              {w.value}
            </span>
          </span>
        ))
      ) : (
        chars.map((t) => (
          <span
            key={t.key}
            data-split-char
            className="inline-block will-change-transform"
          >
            {t.value}
          </span>
        ))
      )}
    </>
  );

  const props = { ref: ref as any, style, className: classes };

  switch (tag) {
    case "h1":
      return <h1 {...props}>{content}</h1>;
    case "h2":
      return <h2 {...props}>{content}</h2>;
    case "h3":
      return <h3 {...props}>{content}</h3>;
    case "h4":
      return <h4 {...props}>{content}</h4>;
    case "h5":
      return <h5 {...props}>{content}</h5>;
    case "h6":
      return <h6 {...props}>{content}</h6>;
    case "span":
      return <span {...props}>{content}</span>;
    default:
      return <p {...props}>{content}</p>;
  }
}
