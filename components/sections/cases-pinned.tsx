"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const CASES = [
  {
    chapter: "Chapter I",
    title: "PCP agreements",
    excerpt:
      "Personal Contract Purchase deals where the dealer's commission was hidden in inflated interest. Often the largest recoveries.",
    metric: "Avg. settlement",
    value: "£3,860",
    glyph: "I",
  },
  {
    chapter: "Chapter II",
    title: "HP & conditional sale",
    excerpt:
      "Hire purchase agreements where the broker pocketed a percentage of the rate without disclosure. Common from 2007 to 2021.",
    metric: "Cases reviewed",
    value: "92,400",
    glyph: "II",
  },
  {
    chapter: "Chapter III",
    title: "Refinance & rollovers",
    excerpt:
      "Refinanced agreements that compounded undisclosed commission. Layered claims often deliver the highest awards.",
    metric: "Highest recovery",
    value: "£18,210",
    glyph: "III",
  },
  {
    chapter: "Chapter IV",
    title: "Fleet & multi-vehicle",
    excerpt:
      "Drivers with two or more agreements, including small-business owners. Aggregate claims handled by senior counsel directly.",
    metric: "Senior-led cases",
    value: "100%",
    glyph: "IV",
  },
  {
    chapter: "Chapter V",
    title: "Settled & paid off",
    excerpt:
      "Already paid off your finance? You can still claim. We pursue commission disclosure on closed agreements going back many years.",
    metric: "Time barred?",
    value: "Rarely",
    glyph: "V",
  },
];

export const CasesPinned = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Section is taller than viewport so the inner sticky panel "holds" while
  // we translate the horizontal track from 0 to a negative offset.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Track translates from 0% to -(N-1)/N * 100% — leaves the last card flush left.
  // For 5 cards we move by -80% of the track. Reduced motion → no horizontal scroll.
  const xProgress = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "-80%"],
  );

  // Decorative parallax for the chapter heading and counter
  const headerY = useTransform(scrollYProgress, [0, 0.15], [60, 0]);
  const counterScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 1]);
  const counter = useTransform(scrollYProgress, (v) =>
    `0${Math.min(CASES.length, Math.floor(v * CASES.length) + 1)}`.slice(-2),
  );

  return (
    <section
      ref={sectionRef}
      className="section-cv relative isolate bg-[#06081a]"
      // Roughly one viewport per card after the first, capped to keep it punchy.
      style={{ height: reduce ? "auto" : `${CASES.length * 80}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* atmospheric backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_25%_30%,rgba(255,45,138,0.18),transparent_60%),radial-gradient(ellipse_60%_50%_at_85%_75%,rgba(212,162,72,0.12),transparent_60%)]" />
        <div className="grain pointer-events-none absolute inset-0 opacity-30" />

        {/* hairlines */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        {/* heading row */}
        <motion.header
          style={{ y: headerY, willChange: "transform" }}
          className="relative z-10 flex flex-col items-start justify-between gap-3 px-5 pt-[max(7rem,12vh)] sm:flex-row sm:items-end sm:gap-6 sm:px-10 lg:px-16"
        >
          <div>
            <span className="rule">Cases we recover</span>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-balance">
              Five chapters of finance that{" "}
              <span className="font-italic text-magenta-400">we know intimately.</span>
            </h2>
          </div>
          <div className="flex items-baseline gap-3 self-end font-display text-foreground/65">
            <motion.span style={{ scale: counterScale }} className="text-[1.6rem] text-foreground">
              {counter}
            </motion.span>
            <span className="text-[0.95rem]">/ {`0${CASES.length}`.slice(-2)}</span>
          </div>
        </motion.header>

        {/* horizontal track */}
        <div className="relative flex flex-1 items-center overflow-hidden">
          <motion.div
            style={{ x: xProgress, willChange: "transform" }}
            className="flex w-[500%] flex-row gap-6 px-5 sm:gap-8 sm:px-10 lg:gap-10 lg:px-16"
          >
            {CASES.map((c, idx) => (
              <CaseCard key={c.title} c={c} idx={idx} />
            ))}
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="relative z-10 flex items-center justify-between gap-4 px-5 pb-8 text-[0.74rem] uppercase tracking-[0.18em] text-foreground/55 sm:px-10 lg:px-16">
          <span className="hidden items-center gap-2 sm:inline-flex">
            <Hairline />
            Scroll to advance
          </span>
          <span className="inline-flex items-center gap-3">
            {CASES.map((_, i) => (
              <ProgressDot key={i} index={i} progress={scrollYProgress} />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

const CaseCard = ({
  c,
  idx,
}: {
  c: (typeof CASES)[number];
  idx: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px -20% 0px 0px" }}
      transition={{ duration: 0.7, delay: idx * 0.05, ease: EASE_OUT }}
      className="card-ink relative flex h-[60vh] min-h-[420px] w-[80vw] shrink-0 flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#0d1234] via-[#0a0e27] to-[#0d1234] p-7 sm:w-[58vw] sm:p-9 lg:w-[42vw] lg:p-12"
    >
      {/* ornamental top */}
      <div className="flex items-start justify-between">
        <span className="rule">{c.chapter}</span>
        <span
          className="font-display text-[clamp(3rem,7vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-transparent"
          style={{
            WebkitTextStroke: "1.4px rgba(232,184,111,0.6)",
            color: "transparent",
          }}
          aria-hidden
        >
          {c.glyph}
        </span>
      </div>

      <div>
        <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.02] tracking-[-0.02em] text-balance">
          {c.title}
        </h3>
        <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-foreground/72">
          {c.excerpt}
        </p>
      </div>

      <div className="flex items-end justify-between gap-4 border-t border-gold-400/15 pt-5">
        <div>
          <div className="text-[0.74rem] uppercase tracking-[0.18em] text-foreground/55">
            {c.metric}
          </div>
          <div className="mt-1 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold tracking-[-0.02em] text-magenta-400">
            {c.value}
          </div>
        </div>
        <a
          href="#hero"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[0.84rem] text-foreground transition-colors hover:border-magenta-400/50 hover:bg-magenta-500/10"
        >
          Check eligibility
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" aria-hidden>
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

const Hairline = () => (
  <span className="inline-block h-px w-7 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
);

const ProgressDot = ({
  index,
  progress,
}: {
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const start = index / CASES.length;
  const end = (index + 1) / CASES.length;
  const opacity = useTransform(progress, [start, end], [0.25, 1], { clamp: true });
  const width = useTransform(progress, [start, end], [10, 26], { clamp: true });
  return (
    <motion.span
      style={{ opacity, width }}
      className="inline-block h-px bg-gold-300"
    />
  );
};
