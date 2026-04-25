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
import { MarqueeStar } from "@/components/decor/marquee-star";
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
      className="relative isolate overflow-hidden bg-[#06081a] pb-32 pt-32 sm:pt-36 lg:pt-44"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#0a0e27] via-[#0e0c30] to-[#06081a]" />
      <div className="spotlight absolute inset-0 -z-20" />
      <motion.div style={{ y: beamsY }} className="absolute inset-0 -z-10">
        <SpotlightBeams className="opacity-80" />
      </motion.div>
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-30" />

      {/* Distant marquee stars — drift up as you scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 0.55, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.4 }}
        style={{ y: starFarY, willChange: "transform" }}
        className="absolute -right-20 top-32 z-0 hidden lg:block"
      >
        <MarqueeStar size={360} bulbs={28} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 14 }}
        animate={{ opacity: 0.32, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.5 }}
        style={{ y: starSecondaryY, willChange: "transform" }}
        className="absolute -left-24 top-[440px] z-0 hidden lg:block"
      >
        <MarqueeStar size={220} bulbs={22} />
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
              className="inline-flex items-center gap-2 rounded-full border border-magenta-500/40 bg-magenta-500/10 px-3.5 py-1.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-magenta-300"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-magenta-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-magenta-400" />
              </span>
              Thousands have already claimed
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.02em] text-balance"
            >
              <span className="block">Mis-sold</span>
              <span className="block">car finance?</span>
              <span className="mt-2 block text-foreground/70">
                Make your claim in{" "}
                <span className="relative inline-block">
                  <span className="font-italic text-magenta-400">60 seconds</span>
                  <svg
                    viewBox="0 0 220 18"
                    className="absolute -bottom-3 left-0 right-0 w-full"
                    fill="none"
                    aria-hidden
                  >
                    <motion.path
                      d="M2 12 Q60 2 110 8 T 218 6"
                      stroke="url(#pen)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1], delay: 0.9 }}
                    />
                    <defs>
                      <linearGradient id="pen" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ff2d8a" />
                        <stop offset="100%" stopColor="#e8b86f" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-magenta-400">.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-foreground/72"
            >
              A regulated team of senior counsel reviewing mis-sold finance agreements with the
              quiet rigour of a private chambers — and the speed of a service built for you.
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
                className="btn-magenta group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.96rem] font-semibold transition-transform"
              >
                Check if I&apos;m eligible
                <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="btn-ghost group inline-flex items-center gap-3 rounded-full px-5 py-3.5 text-[0.94rem] font-medium text-foreground/90 transition-colors"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground/10 transition-colors group-hover:bg-magenta-500/30">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
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
              <Trustpilot rating="4.8" count="18,000" />
            </motion.div>
          </div>

          {/* Right — Stage with team & form */}
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative aspect-[4/5] w-full max-w-md">
              {/* Stage glow */}
              <div className="stage-glow absolute -inset-x-6 bottom-0 h-1/2 rounded-[40px] blur-2xl" />
              <div className="stage-floor absolute -bottom-2 left-1/2 h-12 w-[78%] -translate-x-1/2 rounded-[100%]" />
              {/* Marquee star behind — parallax + scroll */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.6 }}
                style={{ y: starNearY, willChange: "transform" }}
                className="absolute -right-6 top-2 h-48 w-48 sm:-right-10 sm:top-0 sm:h-64 sm:w-64"
              >
                <MarqueeStar size={260} bulbs={26} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.75 }}
                style={{ y: starFarY, willChange: "transform" }}
                className="absolute -left-8 bottom-10 hidden h-32 w-32 sm:block"
              >
                <MarqueeStar size={132} bulbs={18} />
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
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
    </section>
  );
};
