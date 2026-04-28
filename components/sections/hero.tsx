"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { SpotlightBeams } from "@/components/decor/spotlight-beams";
import { LegalTeam } from "@/components/decor/legal-team";
import { Seal } from "@/components/decor/seal";
import { Trustpilot } from "@/components/decor/trustpilot";
import { EligibilityForm } from "@/components/sections/eligibility-form";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT, delay },
  }),
};

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Drive decoration parallax from the section's own scroll progress.
  const { scrollYProgress, scrollY } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const starFarY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -160]);
  const starNearY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -260]);
  const starSecondaryY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const teamY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const beamsY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 30]);

  // Velocity-driven skew on the hero stage — snaps back to 0 when scrolling slows.
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 320 });
  const stageSkew = useTransform(smoothVelocity, [-2000, 0, 2000], [reduce ? 0 : 6, 0, reduce ? 0 : -6]);
  const teamScale = useTransform(smoothVelocity, [-1500, 0, 1500], [reduce ? 1 : 0.97, 1, reduce ? 1 : 0.97]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative isolate overflow-hidden bg-blue-900 pb-32 pt-32 sm:pt-36 lg:pt-44"
    >
      {/* Background atmosphere — solid navy with a subtle inner radial */}
      <div className="absolute inset-0 -z-30 bg-blue-900" />
      <div className="spotlight absolute inset-0 -z-20 opacity-90" />
      <motion.div style={{ y: beamsY }} className="absolute inset-0 -z-10 opacity-70">
        <SpotlightBeams className="opacity-50" />
      </motion.div>

      {/* Distant chambers seals — drift up as you scroll, much quieter than marquee stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.4 }}
        style={{ y: starFarY, willChange: "transform" }}
        className="absolute -right-16 top-40 z-0 hidden lg:block"
      >
        <Seal size={300} variant="crest" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.5 }}
        style={{ y: starSecondaryY, willChange: "transform" }}
        className="absolute -left-20 top-[440px] z-0 hidden lg:block"
      >
        <Seal size={200} variant="medallion" />
      </motion.div>

      {/* Top ornamental rule */}
      <motion.div
        style={{ y: headlineY, willChange: "transform" }}
        className="relative mx-auto max-w-7xl px-5 sm:px-8"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="mb-7 flex items-center gap-3"
        >
          <span className="rule">A regulated UK law firm</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* Left — Headline */}
          <div className="relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="glass-dark inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-cream-50/85"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-blue-300 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-blue-300" />
              </span>
              Thousands have already claimed
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-cream-50 text-balance"
            >
              <span className="block">Mis-sold car finance?</span>
              <span className="mt-2 block">Check your claim in</span>
              <span className="block">
                <span className="font-italic text-blue-300">60 seconds</span>
                <span className="text-blue-300">.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-cream-50/75"
            >
              Simple guidance. A fast eligibility check. Expert support from legal professionals
              who know how to win.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#hero"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.96rem] font-semibold text-blue-900 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Check if I&apos;m eligible
                <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-transparent px-5 py-3.5 text-[0.94rem] font-medium text-cream-50 transition-colors hover:bg-white/10"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                  <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="currentColor" aria-hidden>
                    <path d="M4 3 L13 8 L4 13 Z" />
                  </svg>
                </span>
                How it works
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="mt-8"
            >
              <Trustpilot rating="4.7" count="20,123" />
            </motion.div>
          </div>

          {/* Right — Counsel portrait & form */}
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative aspect-[4/5] w-full max-w-md">
              {/* Subtle architectural backdrop — single chambers seal, low opacity */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.16 }}
                transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.6 }}
                style={{ y: starNearY, willChange: "transform" }}
                className="absolute inset-0 grid place-items-center"
              >
                <Seal size={420} variant="crest" />
              </motion.div>
              {/* Legal team illustration — gentle parallax + velocity-driven skew */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.45 }}
                style={{
                  y: teamY,
                  skewY: stageSkew,
                  scale: teamScale,
                  willChange: "transform",
                }}
                className="float-slow relative h-full w-full"
              >
                <LegalTeam className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
              </motion.div>
            </div>

            <EligibilityForm />
          </div>
        </div>
      </motion.div>

      {/* Bottom hairline floor */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-blue-400/30" />
    </section>
  );
};
