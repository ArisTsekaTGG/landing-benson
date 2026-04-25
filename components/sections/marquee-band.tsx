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
      className="section-cv relative isolate overflow-hidden border-y border-gold-400/20 bg-[#06081a] py-7 sm:py-9"
    >
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,45,138,0.08),transparent_70%)]" />

      <motion.div
        ref={trackRef}
        style={{ x: baseX, willChange: "transform" }}
        className="flex w-max items-center gap-8 whitespace-nowrap will-change-transform"
      >
        {items.map((phrase, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8">
            <span className="font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-none tracking-[-0.02em] text-foreground/85">
              {phrase}
            </span>
            <Ornament />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Ornament = () => (
  <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0 text-magenta-400" fill="none" aria-hidden>
    <defs>
      <linearGradient id="orn" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff5aa3" />
        <stop offset="100%" stopColor="#e8b86f" />
      </linearGradient>
    </defs>
    <path
      d="M32 6 L36 28 L58 32 L36 36 L32 58 L28 36 L6 32 L28 28 Z"
      fill="url(#orn)"
      opacity="0.95"
    />
    <circle cx="32" cy="32" r="3" fill="#06081a" />
  </svg>
);
