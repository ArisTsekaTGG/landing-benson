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
  const cardA = useTransform(progress, [0, 1], [40 * amp, -25 * amp]);
  const cardB = useTransform(progress, [0, 1], [60 * amp, -40 * amp]);
  const cardC = useTransform(progress, [0, 1], [40 * amp, -25 * amp]);
  const cardYs = [cardA, cardB, cardC];

  return (
    <section
      ref={ref}
      id="claims"
      className="section-cv relative isolate overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-blue-900 text-balance">
            What our clients say
          </h2>
          <p className="mt-3 text-[1rem] leading-relaxed text-blue-900/65">
            Real people, real outcomes. Plainly spoken.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((q, idx) => (
            <motion.figure
              key={q.name}
              style={{ y: cardYs[idx], willChange: "transform" }}
              className="group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: EASE_OUT }}
                className="card-light relative flex h-full flex-col rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(15,46,99,0.15)]"
              >
                <svg
                  className="mb-3 h-7 w-7 text-blue-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9 6c-3 0-5 2-5 5v6h6v-6H7c0-2 1-3 2-3V6zm9 0c-3 0-5 2-5 5v6h6v-6h-3c0-2 1-3 2-3V6z" />
                </svg>
                <blockquote className="font-display text-[1.05rem] leading-snug text-blue-900">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-blue-100 pt-4 text-[0.84rem]">
                  <div>
                    <div className="font-semibold text-blue-900">{q.name}</div>
                    <div className="text-blue-900/60">{q.location}</div>
                  </div>
                  <div className="rounded-full bg-blue-50 px-3 py-1 text-[0.72rem] font-medium text-blue-700">
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
