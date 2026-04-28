"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const Philosophy = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const decorY = useTransform(scrollYProgress, [0, 1], [60, reduce ? 60 : -60]);

  return (
    <section
      ref={ref}
      className="section-cv relative isolate overflow-hidden bg-cream-50 py-28 sm:py-36"
    >
      <motion.div
        style={{ y: decorY, willChange: "transform" }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2"
        aria-hidden
      >
        <div className="mx-auto h-px w-full max-w-3xl bg-blue-100" />
      </motion.div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="text-center"
        >
          <span className="rule">Our philosophy</span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
          className="mt-10 text-balance"
        >
          <svg
            viewBox="0 0 80 80"
            className="mx-auto mb-6 h-12 w-12 text-blue-700"
            fill="currentColor"
            aria-hidden
          >
            <path d="M30 20c-10 0-16 6-16 18v22h22v-22h-12c0-6 4-10 8-10V20zm32 0c-10 0-16 6-16 18v22h22v-22h-12c0-6 4-10 8-10V20z" />
          </svg>
          <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-[1.3] tracking-[-0.01em] text-blue-900">
            Benson Goldstein recognises that the complexity of legal cases can often be associated
            with high costs, creating formidable barriers that prevent many from pursuing their
            rightful claims.
          </p>
          <p className="mt-6 font-display text-[clamp(1.2rem,2vw,1.55rem)] leading-[1.45] text-blue-900/80">
            We pride ourselves on being{" "}
            <span className="font-italic text-blue-700">approachable</span>,{" "}
            <span className="font-italic text-blue-700">transparent</span>, and entirely
            client-focused — explaining complex legal jargon in plain English and delivering
            regular updates so our clients feel heard, supported, and confident throughout the
            process.
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <span className="inline-block h-px w-12 bg-blue-300" />
          <span className="font-display text-[0.92rem] uppercase tracking-[0.22em] text-blue-900/75">
            Coby Benson · David Goldstein
          </span>
          <span className="text-[0.78rem] text-blue-900/55">Founding solicitors</span>
        </motion.div>
      </div>
    </section>
  );
};
