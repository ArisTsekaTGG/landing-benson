"use client";

import { motion, useTransform, useReducedMotion } from "motion/react";
import { useSectionParallax } from "@/hooks/use-section-parallax";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const QUOTES = [
  {
    quote:
      "From the first call I felt I was speaking with people who understood the agreement better than the lender did. Settled within months.",
    name: "Hannah W.",
    location: "Leeds",
    award: "Settled — £4,820",
  },
  {
    quote:
      "I'd written off any chance of getting money back. Benson Goldstein walked me through every step. No fuss, no jargon.",
    name: "Marcus J.",
    location: "Bristol",
    award: "Settled — £2,640",
  },
  {
    quote:
      "Polished, professional, and genuinely human. I felt represented — not processed.",
    name: "Sofia A.",
    location: "Manchester",
    award: "Settled — £6,210",
  },
];

export const Testimonial = () => {
  const { ref, progress } = useSectionParallax();
  const reduce = useReducedMotion();
  const amp = reduce ? 0 : 1;

  // Decorative gradient drifts opposite to the cards.
  const decorY = useTransform(progress, [0, 1], [-50 * amp, 50 * amp]);
  // Each card column gets a slightly different amplitude — middle floats furthest.
  const cardA = useTransform(progress, [0, 1], [40 * amp, -25 * amp]);
  const cardB = useTransform(progress, [0, 1], [60 * amp, -40 * amp]);
  const cardC = useTransform(progress, [0, 1], [40 * amp, -25 * amp]);
  const cardYs = [cardA, cardB, cardC];

  return (
    <section
      ref={ref}
      id="claims"
      className="section-cv relative isolate overflow-hidden bg-cream-50 py-28 text-ink-800 sm:py-36"
    >
      <motion.div
        style={{ y: decorY, willChange: "transform" }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,45,138,0.08),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(212,162,72,0.12),transparent_55%)]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rule" style={{ color: "#7a5818" }}>
            Voices from the dock
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.02em] text-ink-900 text-balance">
            What our clients say when{" "}
            <span className="font-italic text-magenta-500">the cheque clears.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((q, idx) => (
            <motion.figure
              key={q.name}
              style={{ y: cardYs[idx], willChange: "transform" }}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: EASE_OUT }}
                className="card-cream relative flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-15px_rgba(122,88,24,0.25)]"
              >
                <svg className="mb-3 h-7 w-7 text-magenta-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M9 6c-3 0-5 2-5 5v6h6v-6H7c0-2 1-3 2-3V6zm9 0c-3 0-5 2-5 5v6h6v-6h-3c0-2 1-3 2-3V6z" />
                </svg>
                <blockquote className="font-display text-[1.08rem] leading-snug text-ink-800">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-gold-500/30 pt-4 text-[0.84rem]">
                  <div>
                    <div className="font-semibold text-ink-900">{q.name}</div>
                    <div className="text-ink-700/70">{q.location}</div>
                  </div>
                  <div className="rounded-full bg-magenta-100/80 px-3 py-1 text-[0.74rem] font-medium text-magenta-500">
                    {q.award}
                  </div>
                </figcaption>
              </motion.div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
