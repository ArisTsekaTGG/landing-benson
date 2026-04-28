"use client";

import { motion, useTransform, useReducedMotion } from "motion/react";
import { useSectionParallax } from "@/hooks/use-section-parallax";

const STEPS = [
  {
    title: "Check eligibility",
    body: "Answer three quick questions to see if you could have a claim.",
  },
  {
    title: "Tell us about your finance",
    body: "Provide a few details about your agreement and lender.",
  },
  {
    title: "We review your case",
    body: "Our legal experts review your agreement and assess your claim.",
  },
  {
    title: "Submit your claim",
    body: "If you're eligible, we handle everything and pursue your claim.",
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const HowItWorks = () => {
  const { ref, progress } = useSectionParallax();
  const reduce = useReducedMotion();
  const amp = reduce ? 0 : 1;
  const headerY = useTransform(progress, [0, 1], [40 * amp, -20 * amp]);
  const cardsY1 = useTransform(progress, [0, 1], [80 * amp, -50 * amp]);
  const cardsY2 = useTransform(progress, [0, 1], [60 * amp, -38 * amp]);
  const cardsY3 = useTransform(progress, [0, 1], [40 * amp, -25 * amp]);
  const cardsY4 = useTransform(progress, [0, 1], [20 * amp, -12 * amp]);
  const cardYs = [cardsY1, cardsY2, cardsY3, cardsY4];

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="section-cv relative isolate overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
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
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-blue-900 text-balance">
              How it works
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-blue-900/65">
              Simple steps. Expert support. No fuss.
            </p>
          </motion.div>
        </motion.div>

        <div className="relative mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, body }, idx) => (
            <motion.article
              key={title}
              style={{ y: cardYs[idx], willChange: "transform" }}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: EASE_OUT }}
                className="card-light relative h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(15,46,99,0.18)]"
              >
                <div className="font-display text-[3rem] font-semibold leading-none tracking-[-0.04em] text-blue-700">
                  {idx + 1}
                </div>
                <h3 className="mt-4 font-display text-[1.05rem] font-semibold leading-snug text-blue-900">
                  {title}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-blue-900/65">{body}</p>
              </motion.div>

              {idx < STEPS.length - 1 && (
                <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-300" fill="none" aria-hidden>
                    <path
                      d="M5 12h14M14 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
