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
    label: "people checked their eligibility",
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
    label: "years of legal expertise",
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
      className="flex flex-col gap-2 px-5 py-6 sm:px-7"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: EASE_OUT }}
      >
        <div className="font-display text-[clamp(2.4rem,4.4vw,3.4rem)] font-semibold leading-none tracking-[-0.02em] text-blue-700">
          <span>{stat.prefix}</span>
          <span>{stat.formatter(value)}</span>
          <span>{stat.suffix}</span>
        </div>
        <p className="mt-2 max-w-[16ch] text-[0.86rem] leading-snug text-blue-900/70">
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
  const headerY = useTransform(progress, [0, 1], [40 * amp, -20 * amp]);
  const col0 = useTransform(progress, [0, 1], [50 * amp, -30 * amp]);
  const col1 = useTransform(progress, [0, 1], [40 * amp, -22 * amp]);
  const col2 = useTransform(progress, [0, 1], [30 * amp, -16 * amp]);
  const col3 = useTransform(progress, [0, 1], [22 * amp, -10 * amp]);
  const cols = [col0, col1, col2, col3];

  return (
    <section ref={ref} className="section-cv relative bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          style={{ y: headerY, willChange: "transform" }}
          className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="flex items-center gap-4"
          >
            <Trustpilot rating="4.7" count="20,123" tone="light" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="grid grid-cols-1 divide-y divide-blue-100 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4"
        >
          {STATS.map((stat, idx) => (
            <StatBlock key={stat.label} stat={stat} index={idx} yOffset={cols[idx]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
