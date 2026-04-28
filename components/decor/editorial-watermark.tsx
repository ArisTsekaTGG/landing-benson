"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

interface EditorialWatermarkProps {
  text: string;
  /** Position — controls placement and tilt direction. */
  position?: "tr" | "bl" | "tl" | "br" | "center";
  className?: string;
  /** Movement amplitude in px. */
  amplitude?: number;
  /** Color tone. */
  tone?: "ink" | "cream";
}

/**
 * Oversized italic display word that drifts behind a section on scroll.
 * Editorial, classy — used for atmospheric depth on inner pages.
 * The word is rendered as transparent stroke text so it never competes
 * for attention with foreground content.
 */
export const EditorialWatermark = ({
  text,
  position = "tr",
  className,
  amplitude = 140,
  tone = "ink",
}: EditorialWatermarkProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amplitude, reduce ? amplitude : -amplitude]);
  const x = useTransform(scrollYProgress, [0, 1], [-amplitude * 0.4, reduce ? -amplitude * 0.4 : amplitude * 0.4]);

  const placement = {
    tr: "top-[-3rem] right-[-2rem] origin-top-right rotate-[-6deg]",
    tl: "top-[-3rem] left-[-2rem] origin-top-left rotate-[6deg]",
    bl: "bottom-[-3rem] left-[-2rem] origin-bottom-left rotate-[6deg]",
    br: "bottom-[-3rem] right-[-2rem] origin-bottom-right rotate-[-6deg]",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }[position];

  const stroke = tone === "ink" ? "rgba(31,77,166,0.12)" : "rgba(15,46,99,0.10)";

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute -z-0 select-none", className)}
    >
      <motion.div
        style={{ y, x, willChange: "transform" }}
        className={cn("absolute whitespace-nowrap", placement)}
      >
        <span
          className="font-italic font-display text-[clamp(8rem,18vw,16rem)] leading-[0.85] tracking-[-0.04em]"
          style={{
            color: "transparent",
            WebkitTextStroke: `1.4px ${stroke}`,
          }}
        >
          {text}
        </span>
      </motion.div>
    </div>
  );
};
