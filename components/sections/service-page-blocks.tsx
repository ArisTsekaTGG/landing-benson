"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/* ──────────────────────────────────────────────────────────────────
 * Definition section — large pull paragraph with a magnified glass.
 * ──────────────────────────────────────────────────────────────── */

interface DefinitionProps {
  eyebrow: string;
  heading: ReactNode;
  body: ReactNode;
  stat?: { value: string; label: string };
}

export const Definition = ({ eyebrow, heading, body, stat }: DefinitionProps) => {
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
      className="section-cv relative isolate overflow-hidden bg-[#06081a] py-24 sm:py-32"
    >
      <motion.div
        style={{ y: decorY, willChange: "transform" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(255,45,138,0.12),transparent_60%),radial-gradient(ellipse_60%_50%_at_85%_75%,rgba(212,162,72,0.12),transparent_60%)]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span className="rule">{eyebrow}</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.02em] text-balance">
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
          <div className="space-y-4 text-[1.04rem] leading-relaxed text-foreground/80">{body}</div>
          {stat && (
            <div className="card-ink flex items-baseline gap-4 rounded-2xl bg-[#0d1234] p-5">
              <div className="font-display text-[clamp(2.4rem,4vw,3.4rem)] font-semibold tracking-[-0.02em] text-magenta-400">
                {stat.value}
              </div>
              <div className="text-[0.92rem] leading-snug text-foreground/72">{stat.label}</div>
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
  // Stagger card y-translate per index for the depth-wave look
  const y0 = useTransform(scrollYProgress, [0, 1], [40, reduce ? 40 : -30]);
  const y1 = useTransform(scrollYProgress, [0, 1], [60, reduce ? 60 : -42]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, reduce ? 40 : -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [22, reduce ? 22 : -14]);
  const ys = [y0, y1, y2, y3];

  return (
    <section
      ref={ref}
      className="section-cv relative isolate overflow-hidden bg-cream-50 py-24 text-ink-800 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,45,138,0.06),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(212,162,72,0.16),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rule" style={{ color: "#7a5818" }}>
            Why Benson Goldstein
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.02em] text-ink-900 text-balance">
            {heading}
          </h2>
          {intro && (
            <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-ink-700">
              {intro}
            </p>
          )}
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
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
                className="card-cream relative flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-15px_rgba(122,88,24,0.25)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-magenta-500 to-magenta-400 text-white shadow-[0_10px_24px_-10px_rgba(255,45,138,0.6)]">
                  {it.icon}
                </span>
                <h3 className="font-display text-[1.18rem] font-semibold leading-snug text-ink-900">
                  {it.title}
                </h3>
                <p className="text-[0.94rem] leading-relaxed text-ink-700/85">{it.body}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────
 * Process — three or four numbered steps in a vertical timeline.
 * ──────────────────────────────────────────────────────────────── */

interface ProcessProps {
  heading: ReactNode;
  steps: Array<{ title: string; body: string }>;
}

export const Process = ({ heading, steps }: ProcessProps) => {
  return (
    <section className="section-cv relative isolate overflow-hidden bg-[#06081a] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span className="rule">How we help</span>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,4.2vw,3rem)] font-medium leading-[1.04] tracking-[-0.02em] text-balance">
            {heading}
          </h2>
        </motion.div>

        <ol className="relative mt-12 flex flex-col gap-7">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[18px] top-2 h-[calc(100%-32px)] w-px bg-gradient-to-b from-gold-400/50 via-gold-400/15 to-transparent"
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
              <span className="z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-magenta-400 to-magenta-500 font-display text-[0.86rem] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(255,45,138,0.6)]">
                {idx + 1}
              </span>
              <div className="card-ink flex-1 rounded-2xl bg-[#0d1234] p-5 sm:p-6">
                <h3 className="font-display text-[1.18rem] font-semibold leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.96rem] leading-relaxed text-foreground/72">{s.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────
 * Service CTA — punchy closing band.
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
  <section className="section-cv relative isolate overflow-hidden bg-[#06081a] py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-gold-400/30 bg-gradient-to-br from-[#1a1340] via-[#0e0c30] to-[#06081a] px-6 py-12 sm:px-12 sm:py-16">
        <div className="spotlight absolute inset-0" />
        <div className="grain pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.02em] text-balance">
            {title}
          </h2>
          {body && <p className="mt-5 text-[1.02rem] leading-relaxed text-foreground/72">{body}</p>}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={primaryHref}
              className={cn(
                "btn-magenta group inline-flex items-center gap-2 rounded-full px-7 py-4 text-[1rem] font-semibold transition-transform",
              )}
            >
              {primaryLabel}
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a
              href="mailto:info@bensongoldstein.com"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-4 text-[0.96rem] font-medium text-foreground/90"
            >
              info@bensongoldstein.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
