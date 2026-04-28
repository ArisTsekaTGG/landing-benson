"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CounselPortrait } from "@/components/decor/counsel-portrait";
import { cn } from "@/lib/cn";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface Award {
  title: string;
  result: "Winner" | "Highly Commended";
  body: string;
}

interface CounselBioProps {
  id: string;
  variant: "coby" | "david";
  name: string;
  role: string;
  email: string;
  intro: string;
  body: ReactNode;
  awards?: Award[];
  /** Reverse the layout — portrait right or left. */
  reverse?: boolean;
}

export const CounselBio = ({
  id,
  variant,
  name,
  role,
  email,
  intro,
  body,
  awards,
  reverse,
}: CounselBioProps) => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [80, reduce ? 80 : -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, reduce ? 40 : -40]);

  return (
    <section
      ref={ref}
      id={id}
      className="section-cv relative isolate overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={cn(
            "grid grid-cols-1 gap-10 lg:gap-16",
            reverse
              ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
              : "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
          )}
        >
          {/* Portrait column */}
          <motion.div
            style={{ y: portraitY, willChange: "transform" }}
            className={cn("relative", reverse && "lg:order-2")}
          >
            <div className="relative overflow-hidden rounded-[28px] border border-blue-100 shadow-[0_30px_80px_-30px_rgba(15,46,99,0.25)]">
              <CounselPortrait variant={variant} />
              {/* Caption strip */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-blue-900/85 px-4 py-3 backdrop-blur">
                <div>
                  <div className="font-display text-[1.05rem] font-medium tracking-tight text-cream-50">
                    {name}
                  </div>
                  <div className="text-[0.74rem] uppercase tracking-[0.18em] text-blue-300">
                    {role}
                  </div>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-1.5 text-[0.78rem] text-cream-50/80 transition-colors hover:text-cream-50"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-blue-300" fill="none" aria-hidden>
                    <path d="M2 4 L14 4 L14 12 Q14 13 13 13 L3 13 Q2 13 2 12 Z M2 4 L8 9 L14 4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                  <span className="underline-offset-4 group-hover:underline">{email}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            style={{ y: textY, willChange: "transform" }}
            className={cn(reverse && "lg:order-1")}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
            >
              <span className="rule">Counsel</span>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-blue-900">
                {name}
              </h2>
              <p className="mt-2 font-italic text-[1.08rem] text-blue-700">{role}</p>

              <p className="mt-6 max-w-xl text-[1.04rem] leading-relaxed text-blue-900/80">
                {intro}
              </p>
              <div className="mt-5 max-w-xl space-y-4 text-[0.98rem] leading-relaxed text-blue-900/70">
                {body}
              </div>

              {awards && awards.length > 0 && (
                <div className="mt-9">
                  <span className="rule">Awards &amp; recognition</span>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {awards.map((a) => (
                      <li
                        key={a.title}
                        className="card-light flex flex-col gap-2 rounded-2xl p-4"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Laurel result={a.result} />
                          <span
                            className={cn(
                              "text-[0.7rem] uppercase tracking-[0.18em]",
                              a.result === "Winner" ? "text-blue-700" : "text-blue-900/55",
                            )}
                          >
                            {a.result}
                          </span>
                        </span>
                        <span className="font-display text-[1rem] font-semibold leading-tight text-blue-900">
                          {a.title}
                        </span>
                        <span className="text-[0.78rem] text-blue-900/60">{a.body}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Laurel = ({ result }: { result: Award["result"] }) => {
  const primary = result === "Winner" ? "#1f4da6" : "rgba(15,46,99,0.4)";
  const secondary = result === "Winner" ? "#5184d0" : "rgba(15,46,99,0.3)";
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M16 4 V28 M8 8 Q4 16 8 24 M24 8 Q28 16 24 24"
        stroke={primary}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10 12 Q14 14 16 18 M22 12 Q18 14 16 18 M10 18 Q14 19 16 22 M22 18 Q18 19 16 22"
        stroke={secondary}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="16" cy="6" r="2" fill={primary} />
    </svg>
  );
};
