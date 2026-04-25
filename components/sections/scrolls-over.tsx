"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ScrollsOverProps {
  children: ReactNode;
  className?: string;
  /** Background colour of the sliding-up section — needed so its rounded
   *  top covers the previous section cleanly. */
  bg?: string;
  /** Skip the rounded top + cast shadow (the very first stacked section,
   *  if you don't want it to overlap a non-stacked element above). */
  flat?: boolean;
}

/**
 * Sliding-over section wrapper. Each instance becomes sticky-pinned at
 * top:0, so as the user scrolls, the next ScrollsOver paints on top — the
 * previous section stays beneath, partially visible by way of a subtle
 * cast-shadow on the leading rounded edge of the section sliding over it.
 *
 * The actual sliding behaviour comes from the `.scrolls-over` utility in
 * globals.css; this wrapper exists so each section can declare its own
 * background colour (so the rounded top covers cleanly) without burying
 * that detail inside every page.
 */
export const ScrollsOver = ({ children, className, bg, flat = false }: ScrollsOverProps) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={cn(!flat && "scrolls-over", "relative", className)}
    >
      {children}
    </div>
  );
};
