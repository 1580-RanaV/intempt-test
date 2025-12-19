"use client";

import { useEffect, useState } from "react";

interface AnimatedToolStrikeProps {
  tools: string[];
  typingSpeed?: number;
  strikeDelay?: number;
  nextToolDelay?: number;
}

export function AnimatedToolStrike({
  tools,
  typingSpeed = 80,
  strikeDelay = 1200,
  nextToolDelay = 600,
}: AnimatedToolStrikeProps) {
  const [currentToolIndex, setCurrentToolIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isStruck, setIsStruck] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const currentTool = tools[currentToolIndex];

  useEffect(() => {
    // Start animation when component mounts
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || !currentTool || tools.length === 0) return;

    // Reset state for new tool
    setDisplayedText("");
    setIsTyping(true);
    setIsStruck(false);
    setFadeOut(false);

    // Typing effect
    let typingIndex = 0;
    const typingInterval = setInterval(() => {
      if (typingIndex < currentTool.length) {
        setDisplayedText(currentTool.slice(0, typingIndex + 1));
        typingIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        
        // Wait before striking
        setTimeout(() => {
          setIsStruck(true);
          
          // Fade out before next tool
          setTimeout(() => {
            setFadeOut(true);
            
            // Move to next tool after fade out
            setTimeout(() => {
              setCurrentToolIndex((prev) => (prev + 1) % tools.length);
            }, 200);
          }, nextToolDelay);
        }, strikeDelay);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentToolIndex, currentTool, isVisible, typingSpeed, strikeDelay, nextToolDelay, tools.length]);

  if (!isVisible || !currentTool || tools.length === 0) {
    return (
      <div className="flex min-h-[2rem] items-center justify-center">
      </div>
    );
  }

  return (
    <div className="flex min-h-[3rem] sm:min-h-[4rem] items-center justify-center">
      <span
        className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-black transition-all duration-300 ease-in-out ${
          isStruck
            ? "line-through decoration-black/40 decoration-2"
            : ""
        } ${
          fadeOut
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100"
        }`}
      >
        {displayedText}
        {isTyping && !fadeOut && (
          <span className="inline-block w-1 h-6 sm:h-8 bg-black ml-1 animate-typing-cursor" />
        )}
      </span>
    </div>
  );
}

