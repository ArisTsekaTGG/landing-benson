"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpOptions {
  to: number;
  duration?: number;
  start?: boolean;
  decimals?: number;
}

export const useCountUp = <T extends HTMLElement = HTMLDivElement>({
  to,
  duration = 1800,
  start = true,
  decimals = 0,
}: CountUpOptions) => {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasRun || !start) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true);
            const startTime = performance.now();
            const animate = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(parseFloat((eased * to).toFixed(decimals)));
              if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration, start, decimals, hasRun]);

  return { ref, value };
};
