"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Optional decorative element rendered to the right (illustration/portrait). */
  aside?: ReactNode;
  /** Crumb breadcrumb segments. */
  crumbs?: Array<{ label: string; href?: string }>;
}

/**
 * Reusable inner-page hero. Light theme — cream backdrop, dark navy headline,
 * royal blue eyebrow rule and italic accents. Less photographic energy than
 * the home hero; reads like a publication's chapter opener.
 */
export const PageHeader = ({ eyebrow, title, intro, aside, crumbs }: PageHeaderProps) => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const asideY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-cream-50 pb-16 pt-32 sm:pt-36 lg:pt-44"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav
            className="mb-6 flex flex-wrap items-center gap-2 text-[0.78rem] text-blue-900/55"
            aria-label="Breadcrumb"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <a href={c.href} className="hover:text-blue-900 transition-colors">
                    {c.label}
                  </a>
                ) : (
                  <span className="text-blue-900/85">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-blue-300">/</span>}
              </span>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <motion.div style={{ y: titleY, willChange: "transform" }}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
              className="mb-6"
            >
              <span className="rule">{eyebrow}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
              className="font-display text-[clamp(2.4rem,5.4vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-blue-900 text-balance"
            >
              {title}
            </motion.h1>
            {intro && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.25 }}
                className="mt-6 max-w-xl text-[1.04rem] leading-relaxed text-blue-900/70"
              >
                {intro}
              </motion.div>
            )}
          </motion.div>

          {aside && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.3 }}
              style={{ y: asideY, willChange: "transform" }}
              className="relative"
            >
              {aside}
            </motion.div>
          )}
        </div>
      </div>

      {/* hairline floor */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-blue-100" />
    </section>
  );
};
