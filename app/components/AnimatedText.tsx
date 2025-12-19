"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number; // delay in milliseconds between each letter
  duration?: number; // animation duration in seconds
  from?: { opacity?: number; y?: number };
  to?: { opacity?: number; y?: number };
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

function splitIntoWords(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w, idx) => ({ key: `w-${idx}`, value: w }));
}

// Easing function for smooth animation (similar to power3.out)
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedText({
  text,
  className = "",
  delay = 18,
  duration = 0.6,
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  rootMargin = "-120px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete,
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedChars, setAnimatedChars] = useState<Set<string>>(new Set());
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const words = useMemo(() => splitIntoWords(text), [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!text) return;
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        setIsVisible(true);
        startTimeRef.current = performance.now();
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, threshold, rootMargin]);

  useEffect(() => {
    if (!isVisible || prefersReducedMotion()) return;

    const chars = Array.from(ref.current?.querySelectorAll("[data-animated-char]") || []);
    if (chars.length === 0) return;

    let animationComplete = false;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const newAnimatedChars = new Set<string>();

      chars.forEach((char, index) => {
        const charDelay = index * delay;
        const charStartTime = charDelay;
        const charElapsed = elapsed - charStartTime;

        if (charElapsed >= 0) {
          const progress = Math.min(charElapsed / (duration * 1000), 1);
          const easedProgress = easeOutCubic(progress);

          const currentOpacity = from.opacity! + (to.opacity! - from.opacity!) * easedProgress;
          const currentY = from.y! + (to.y! - from.y!) * easedProgress;

          (char as HTMLElement).style.opacity = String(currentOpacity);
          (char as HTMLElement).style.transform = `translateY(${currentY}px)`;

          if (progress >= 1) {
            newAnimatedChars.add(char.getAttribute("data-char-key") || "");
          }
        }
      });

      setAnimatedChars(newAnimatedChars);

      if (newAnimatedChars.size === chars.length && !animationComplete) {
        animationComplete = true;
        if (onLetterAnimationComplete) {
          onLetterAnimationComplete();
        }
      }

      if (newAnimatedChars.size < chars.length) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, delay, duration, from, to, onLetterAnimationComplete]);

  const style: React.CSSProperties = {
    textAlign,
    wordWrap: "break-word",
  };
  const classes = ["inline-block whitespace-normal", className]
    .filter(Boolean)
    .join(" ");

  // Initial styles for characters
  const initialCharStyle: React.CSSProperties = {
    opacity: prefersReducedMotion() || isVisible ? to.opacity : from.opacity,
    transform: prefersReducedMotion() || isVisible
      ? `translateY(${to.y}px)`
      : `translateY(${from.y}px)`,
    display: "inline-block",
    willChange: "transform, opacity",
  };

  const content = (
    <>
      {words.map((w, wIdx) => (
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
              data-animated-char
              data-char-key={`wc-${wIdx}-${cIdx}`}
              style={initialCharStyle}
              className="inline-block"
            >
              {ch}
            </span>
          ))}
        </span>
      ))}
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

