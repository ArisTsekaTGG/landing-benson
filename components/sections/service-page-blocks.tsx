"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/* ──────────────────────────────────────────────────────────────────
 * Definition section — pull paragraph + headline stat.
 * ──────────────────────────────────────────────────────────────── */

interface DefinitionProps {
  eyebrow: string;
  heading: ReactNode;
  body: ReactNode;
  stat?: { value: string; label: string };
}

export const Definition = ({ eyebrow, heading, body, stat }: DefinitionProps) => {
  const ref = useRef<HTMLElement>(null);
  return (
    <section
      ref={ref}
      className="section-cv relative isolate overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span className="rule">{eyebrow}</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-blue-900 text-balance">
            {heading}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-4 text-[1.04rem] leading-relaxed text-blue-900/75">{body}</div>
          {stat && (
            <div className="card-light flex items-baseline gap-4 rounded-2xl p-5">
              <div className="font-display text-[clamp(2.4rem,4vw,3.4rem)] font-semibold tracking-[-0.02em] text-blue-700">
                {stat.value}
              </div>
              <div className="text-[0.92rem] leading-snug text-blue-900/70">{stat.label}</div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────
 * Why-choose-us — 4-column with icons and short body.
 * ──────────────────────────────────────────────────────────────── */

interface BenefitsProps {
  heading: ReactNode;
  intro?: string;
  items: Array<{
    title: string;
    body: string;
    icon: ReactNode;
  }>;
}

export const Benefits = ({ heading, intro, items }: BenefitsProps) => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y0 = useTransform(scrollYProgress, [0, 1], [40, reduce ? 40 : -30]);
  const y1 = useTransform(scrollYProgress, [0, 1], [60, reduce ? 60 : -42]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, reduce ? 40 : -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [22, reduce ? 22 : -14]);
  const ys = [y0, y1, y2, y3];

  return (
    <section
      ref={ref}
      className="section-cv relative isolate overflow-hidden bg-cream-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-blue-900 text-balance">
            {heading}
          </h2>
          {intro && (
            <p className="mx-auto mt-3 max-w-xl text-[1rem] leading-relaxed text-blue-900/65">
              {intro}
            </p>
          )}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.article
              key={it.title}
              style={{ y: ys[idx % 4], willChange: "transform" }}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: EASE_OUT }}
                className="card-light relative flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(15,46,99,0.18)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                  {it.icon}
                </span>
                <h3 className="font-display text-[1.08rem] font-semibold leading-snug text-blue-900">
                  {it.title}
                </h3>
                <p className="text-[0.94rem] leading-relaxed text-blue-900/70">{it.body}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────
 * Process — vertical numbered timeline.
 * ──────────────────────────────────────────────────────────────── */

interface ProcessProps {
  heading: ReactNode;
  steps: Array<{ title: string; body: string }>;
}

export const Process = ({ heading, steps }: ProcessProps) => {
  return (
    <section className="section-cv relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span className="rule">How we help</span>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-blue-900 text-balance">
            {heading}
          </h2>
        </motion.div>

        <ol className="relative mt-12 flex flex-col gap-6">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[18px] top-2 h-[calc(100%-32px)] w-px bg-blue-200"
          />
          {steps.map((s, idx) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: EASE_OUT }}
              className="relative flex gap-5 pl-1"
            >
              <span className="z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-700 font-display text-[0.86rem] font-semibold text-white">
                {idx + 1}
              </span>
              <div className="card-light flex-1 rounded-2xl p-5 sm:p-6">
                <h3 className="font-display text-[1.1rem] font-semibold leading-tight text-blue-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-blue-900/70">{s.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────
 * Service CTA — closing dark navy band.
 * ──────────────────────────────────────────────────────────────── */

interface ServiceCtaProps {
  title: ReactNode;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export const ServiceCta = ({
  title,
  body,
  primaryHref = "/#hero",
  primaryLabel = "Check if I'm eligible",
}: ServiceCtaProps) => (
  <section className="section-cv relative isolate overflow-hidden bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-blue-900 px-6 py-12 sm:px-12 sm:py-16">
        <div className="spotlight absolute inset-0 opacity-90" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-cream-50 text-balance">
            {title}
          </h2>
          {body && (
            <p className="mt-5 text-[1.02rem] leading-relaxed text-cream-50/75">{body}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={primaryHref}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[1rem] font-semibold text-blue-900 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5",
              )}
            >
              {primaryLabel}
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a
              href="mailto:info@bensongoldstein.com"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-transparent px-6 py-4 text-[0.96rem] font-medium text-cream-50 transition-colors hover:bg-white/10"
            >
              info@bensongoldstein.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
