"use client";

import { motion, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { useSectionParallax } from "@/hooks/use-section-parallax";
import { useCountUp } from "@/hooks/use-count-up";
import { Trustpilot } from "@/components/decor/trustpilot";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const STATS = [
  {
    value: 250000,
    suffix: "+",
    prefix: "",
    label: "people have checked their eligibility",
    formatter: (n: number) => Math.round(n).toLocaleString("en-GB"),
  },
  {
    value: 310,
    suffix: "M+",
    prefix: "£",
    label: "in compensation secured for our clients",
    formatter: (n: number) => Math.round(n).toString(),
  },
  {
    value: 98,
    suffix: "%",
    prefix: "",
    label: "would recommend Benson Goldstein",
    formatter: (n: number) => Math.round(n).toString(),
  },
  {
    value: 15,
    suffix: "+",
    prefix: "",
    label: "years of senior legal expertise",
    formatter: (n: number) => Math.round(n).toString(),
  },
];

const StatBlock = ({
  stat,
  index,
  yOffset,
}: {
  stat: (typeof STATS)[number];
  index: number;
  yOffset: MotionValue<number>;
}) => {
  const { ref, value } = useCountUp<HTMLDivElement>({ to: stat.value, duration: 1800 });
  return (
    <motion.div
      ref={ref}
      style={{ y: yOffset, willChange: "transform" }}
      className="group relative flex flex-col gap-2 px-5 py-5 sm:px-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: EASE_OUT }}
      >
        <div className="font-display text-[clamp(2.4rem,4.5vw,3.4rem)] font-medium leading-none tracking-[-0.02em] text-foreground">
          <span>{stat.prefix}</span>
          <span>{stat.formatter(value)}</span>
          <span className="text-magenta-400">{stat.suffix}</span>
        </div>
        <p className="mt-2 max-w-[14ch] text-[0.86rem] leading-snug text-foreground/65">
          {stat.label}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const Stats = () => {
  const { ref, progress } = useSectionParallax();
  const reduce = useReducedMotion();
  const amp = reduce ? 0 : 1;

  // Background panel drifts down very slightly while inner cards drift up — depth.
  const bgY = useTransform(progress, [0, 1], [-30 * amp, 30 * amp]);
  const headerY = useTransform(progress, [0, 1], [40 * amp, -20 * amp]);
  // Stagger amplitude per column for a gentle wave through the row.
  const col0 = useTransform(progress, [0, 1], [50 * amp, -30 * amp]);
  const col1 = useTransform(progress, [0, 1], [40 * amp, -22 * amp]);
  const col2 = useTransform(progress, [0, 1], [30 * amp, -16 * amp]);
  const col3 = useTransform(progress, [0, 1], [22 * amp, -10 * amp]);
  const col4 = useTransform(progress, [0, 1], [14 * amp, -6 * amp]);
  const cols = [col0, col1, col2, col3];

  return (
    <section ref={ref} className="section-cv relative bg-[#06081a] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div
          style={{ y: headerY, willChange: "transform" }}
          className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <span className="rule">Real people. Real results.</span>
            <h2 className="mt-4 font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-[-0.01em] text-balance">
              The figures speak with the same{" "}
              <span className="font-italic text-magenta-400">quiet authority</span> as our counsel.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: bgY, willChange: "transform" }}
          className="overflow-hidden rounded-[24px] border border-gold-400/20 bg-gradient-to-br from-[#0c1133] via-[#0a0e27] to-[#0c1133]"
        >
          <div className="grid grid-cols-1 divide-y divide-white/[0.06] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
            {STATS.map((stat, idx) => (
              <StatBlock key={stat.label} stat={stat} index={idx} yOffset={cols[idx]} />
            ))}
            <motion.div
              style={{ y: col4, willChange: "transform" }}
              className="flex flex-col items-start justify-center gap-3 bg-gradient-to-br from-[#11163d] to-[#0c1133] px-5 py-5 sm:px-7"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
              >
                <Trustpilot rating="4.8" count="18,000" />
                <p className="mt-3 text-[0.78rem] uppercase tracking-[0.16em] text-foreground/55">
                  Independent reviews
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
