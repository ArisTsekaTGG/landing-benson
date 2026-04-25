"use client";

import { motion, useTransform, useReducedMotion } from "motion/react";
import { useSectionParallax } from "@/hooks/use-section-parallax";
import {
  StepLaptop,
  StepClipboard,
  StepReview,
  StepEnvelope,
} from "@/components/decor/step-illustrations";

const STEPS = [
  {
    Illust: StepLaptop,
    title: "Check eligibility",
    body: "Answer a few quick questions to see if you could be owed money.",
  },
  {
    Illust: StepClipboard,
    title: "Tell us about your finance",
    body: "Share some basic details about your car finance agreement.",
  },
  {
    Illust: StepReview,
    title: "Our team reviews your case",
    body: "Senior counsel reads the agreement and assesses any mis-selling.",
  },
  {
    Illust: StepEnvelope,
    title: "Make your claim",
    body: "If you have a case, we handle the claim and fight for your refund.",
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const HowItWorks = () => {
  const { ref, progress } = useSectionParallax();
  const reduce = useReducedMotion();
  const reducedAmp = reduce ? 0 : 1;

  // Background grid drifts up as you pass through.
  const gridY = useTransform(progress, [0, 1], [60 * reducedAmp, -60 * reducedAmp]);
  // Header text floats slightly slower than the cards for depth.
  const headerY = useTransform(progress, [0, 1], [40 * reducedAmp, -20 * reducedAmp]);
  // Each card translates by a fraction of its index — gives the row a subtle tilt-flow.
  const cardsY1 = useTransform(progress, [0, 1], [80 * reducedAmp, -50 * reducedAmp]);
  const cardsY2 = useTransform(progress, [0, 1], [60 * reducedAmp, -38 * reducedAmp]);
  const cardsY3 = useTransform(progress, [0, 1], [40 * reducedAmp, -25 * reducedAmp]);
  const cardsY4 = useTransform(progress, [0, 1], [20 * reducedAmp, -12 * reducedAmp]);
  const cardYs = [cardsY1, cardsY2, cardsY3, cardsY4];

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="section-cv relative isolate overflow-hidden bg-gradient-to-b from-[#06081a] via-[#0a0e27] to-[#06081a] py-28 sm:py-36"
    >
      {/* subtle pattern overlay — parallax */}
      <motion.div
        style={{ y: gridY, willChange: "transform" }}
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pat" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="#f5efe0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pat)" />
        </svg>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          style={{ y: headerY, willChange: "transform" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <span className="rule">How it works</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.02em] text-balance">
              It&apos;s quick, easy and{" "}
              <span className="font-italic text-magenta-400">we do the hard work.</span>
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-foreground/70">
              Four simple steps. The same standard of service whether your claim is small or
              substantial.
            </p>
          </motion.div>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[110px] hidden h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent lg:block" aria-hidden />

          {STEPS.map(({ Illust, title, body }, idx) => (
            <motion.article
              key={title}
              style={{ y: cardYs[idx], willChange: "transform" }}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: EASE_OUT }}
                className="card-ink relative h-full rounded-2xl bg-[#0d1234] p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-15px_rgba(255,45,138,0.25)]"
              >
                <div className="absolute -top-4 left-5 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-magenta-400 to-magenta-500 text-[0.92rem] font-semibold text-white shadow-[0_10px_24px_-6px_rgba(255,45,138,0.6)] ring-2 ring-[#0d1234]">
                  {idx + 1}
                </div>

                <div className="mt-4 grid place-items-center rounded-xl bg-gradient-to-b from-[#11163d] to-[#0a0e27] p-4 ring-1 ring-white/5">
                  <Illust />
                </div>

                <h3 className="mt-5 font-display text-[1.18rem] font-semibold leading-tight">
                  {title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-foreground/70">{body}</p>
              </motion.div>

              {idx < STEPS.length - 1 && (
                <div className="pointer-events-none absolute right-[-22px] top-[60%] hidden -translate-y-1/2 lg:block">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-400/70" fill="none" aria-hidden>
                    <path d="M5 12h14M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
