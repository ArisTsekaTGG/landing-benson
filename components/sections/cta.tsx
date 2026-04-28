"use client";

import { motion, useTransform, useReducedMotion } from "motion/react";
import { useSectionParallax } from "@/hooks/use-section-parallax";
import { LegalTeam } from "@/components/decor/legal-team";
import { Seal } from "@/components/decor/seal";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const Cta = () => {
  const { ref, progress } = useSectionParallax();
  const reduce = useReducedMotion();
  const amp = reduce ? 0 : 1;

  const starY = useTransform(progress, [0, 1], [120 * amp, -120 * amp]);
  const teamY = useTransform(progress, [0, 1], [60 * amp, -60 * amp]);
  const badgeY = useTransform(progress, [0, 1], [80 * amp, -80 * amp]);
  const headlineY = useTransform(progress, [0, 1], [40 * amp, -25 * amp]);

  return (
    <section
      ref={ref}
      className="section-cv relative isolate overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-blue-900 shadow-[0_40px_100px_-30px_rgba(15,46,99,0.45)]">
          <div className="spotlight absolute inset-0 opacity-90" />

          <div className="relative grid grid-cols-1 items-center gap-8 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <motion.div
              style={{ y: headlineY, willChange: "transform" }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE_OUT }}
              >
                <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.4rem)] font-semibold leading-[1] tracking-[-0.02em] text-cream-50 text-balance">
                  Start your claim
                  <br />
                  in <span className="font-italic text-blue-300">60 seconds.</span>
                </h2>
                <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-cream-50/75">
                  Fast. Simple. Backed by legal experts. Your case is reviewed by a senior
                  counsel, not a chatbot.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#hero"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[1rem] font-semibold text-blue-900 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
                  >
                    Check if I&apos;m eligible
                    <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden>
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </a>
                  <p className="text-[0.94rem] text-cream-50/70">It&apos;s quick and free.</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="relative hidden h-[420px] lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 0.16, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE_OUT }}
                style={{ y: starY, willChange: "transform" }}
                className="absolute inset-0 grid place-items-center"
              >
                <Seal size={360} variant="crest" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE_OUT, delay: 0.2 }}
                style={{ y: teamY, willChange: "transform" }}
                className="absolute inset-0 mx-auto"
              >
                <LegalTeam className="h-full w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT }}
                style={{ y: badgeY, willChange: "transform" }}
                className="glass-dark absolute right-2 top-4 flex items-center gap-3 rounded-full px-4 py-2.5"
              >
                <div className="text-right leading-tight">
                  <div className="text-[0.62rem] uppercase tracking-[0.2em] text-blue-300">
                    Already checking
                  </div>
                  <div className="font-display text-[1.15rem] font-semibold text-cream-50">
                    250,000<span className="text-blue-300">+</span>{" "}
                    <span className="text-[0.74rem] font-normal text-cream-50/65">
                      eligibility checks
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
