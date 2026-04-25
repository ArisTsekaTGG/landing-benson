"use client";

import { useRef } from "react";
import { useScroll, type MotionValue } from "motion/react";

interface SectionParallax {
  ref: React.RefObject<HTMLElement | null>;
  /** 0 when the section enters viewport, 1 when it exits. */
  progress: MotionValue<number>;
}

/**
 * Returns a section-local scroll progress MotionValue. Compose with
 * `useTransform(progress, [0, 1], [from, to])` at top level of the consuming
 * component. Respect reduced-motion at the call site.
 */
export const useSectionParallax = (): SectionParallax => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress: progress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return { ref, progress };
};
