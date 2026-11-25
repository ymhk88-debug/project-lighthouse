"use client";

import { useEffect, useRef, useState } from "react";

const revealDelays = [
  "motion-safe:delay-0",
  "motion-safe:delay-[60ms]",
  "motion-safe:delay-[120ms]",
  "motion-safe:delay-[180ms]",
  "motion-safe:delay-[240ms]",
  "motion-safe:delay-[300ms]",
] as const;

export function HomeProcessTimeline({ steps }: { steps: readonly string[] }) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    if (!("IntersectionObserver" in window)) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(timeline);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={timelineRef}
      aria-label="사건 진행 흐름"
      className="relative mt-10 grid gap-5 before:pointer-events-none before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-accent/70 before:content-[''] md:grid-cols-6 md:gap-2 md:before:bottom-auto md:before:left-[8.333%] md:before:right-[8.333%] md:before:top-5 md:before:h-px md:before:w-auto"
    >
      {steps.map((step, index) => (
        <li
          key={step}
          className={`relative z-10 flex min-w-0 items-center gap-4 md:flex-col md:gap-4 md:text-center motion-safe:transition-[opacity,transform] motion-safe:duration-500 motion-safe:ease-out ${revealDelays[index] ?? "motion-safe:delay-0"} ${hasEntered ? "motion-safe:translate-y-0 motion-safe:opacity-100" : "motion-safe:translate-y-2 motion-safe:opacity-0"} motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent bg-primary text-sm font-medium tabular-nums text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="whitespace-nowrap text-sm font-semibold text-background md:text-sm lg:text-base">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
