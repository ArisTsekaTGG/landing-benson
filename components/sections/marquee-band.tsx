"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "motion/react";

const PHRASES = [
  "Mis-sold car finance",
  "Champagne court",
  "Quiet rigour",
  "No win, no fee",
  "Senior counsel",
  "FCA regulated",
];

interface MarqueeBandProps {
  /** Direction of the running text. */
  direction?: "left" | "right";
  /** Pixels per second baseline scroll speed when the page is still. */
  baseSpeed?: number;
}

/**
 * Editorial running marquee band — display-type running across the page with
 * ornamental glyph separators. Base speed is constant; scroll velocity briefly
 * accelerates it during fast scrolls (genius.co.uk-style).
 */
export const MarqueeBand = ({
  direction = "left",
  baseSpeed = 40,
}: MarqueeBandProps) => {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackWidthRef = useRef(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 4], {
    clamp: false,
  });

  // Measure half-track width once; we duplicate the content twice and wrap.
  useEffect(() => {
    if (!trackRef.current) return;
    const update = () => {
      trackWidthRef.current = trackRef.current!.scrollWidth / 2;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const dir = direction === "left" ? -1 : 1;
    let move = (baseSpeed * delta) / 1000;
    move += velocityFactor.get() * delta * 0.05;
    baseX.set(baseX.get() + dir * move);

    const w = trackWidthRef.current;
    if (w > 0) {
      const x = baseX.get();
      if (x <= -w) baseX.set(x + w);
      if (x >= 0 && dir > 0) baseX.set(x - w);
    }
  });

  const items = [...PHRASES, ...PHRASES];

  return (
    <div
      aria-hidden
      className="section-cv relative isolate overflow-hidden border-y border-blue-100 bg-cream-50 py-7 sm:py-9"
    >
      <motion.div
        ref={trackRef}
        style={{ x: baseX, willChange: "transform" }}
        className="flex w-max items-center gap-8 whitespace-nowrap will-change-transform"
      >
        {items.map((phrase, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8">
            <span className="font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-none tracking-[-0.02em] text-blue-800/80">
              {phrase}
            </span>
            <Ornament />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* Typographic fleuron — quiet editorial separator drawn in royal blue. */
const Ornament = () => (
  <svg viewBox="0 0 64 64" className="h-7 w-7 shrink-0" fill="none" aria-hidden>
    <g stroke="#1f4da6" strokeWidth="1.4" strokeLinecap="round">
      <path d="M14 32 L26 32" />
      <path d="M38 32 L50 32" />
      <path d="M22 26 Q26 32 22 38" fill="none" />
      <path d="M42 26 Q38 32 42 38" fill="none" />
    </g>
    <path d="M32 26 L38 32 L32 38 L26 32 Z" fill="#1f4da6" opacity="0.9" />
  </svg>
);
