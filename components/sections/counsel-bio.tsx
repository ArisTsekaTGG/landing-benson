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
      className="section-cv relative isolate overflow-hidden bg-[#06081a] py-20 sm:py-28"
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
            <div className="relative overflow-hidden rounded-[28px] border border-gold-400/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <CounselPortrait variant={variant} />
              {/* Editorial caption strip */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-gold-400/30 bg-[#06081a]/85 px-4 py-3 backdrop-blur">
                <div>
                  <div className="font-display text-[1.05rem] font-medium tracking-tight text-foreground">
                    {name}
                  </div>
                  <div className="text-[0.74rem] uppercase tracking-[0.18em] text-gold-300">
                    {role}
                  </div>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-1.5 text-[0.78rem] text-foreground/75 transition-colors hover:text-foreground"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-magenta-400" fill="none" aria-hidden>
                    <path d="M2 4 L14 4 L14 12 Q14 13 13 13 L3 13 Q2 13 2 12 Z M2 4 L8 9 L14 4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                  <span className="underline-offset-4 group-hover:underline">{email}</span>
                </a>
              </div>
            </div>

            {/* Decorative editorial frame */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[36px] bg-gradient-to-br from-magenta-500/20 via-transparent to-gold-400/20 blur-2xl" />
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
              <h2 className="mt-3 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.02em]">
                {name}
              </h2>
              <p className="mt-2 font-italic text-[1.1rem] text-magenta-400">{role}</p>

              <p className="mt-6 max-w-xl text-[1.04rem] leading-relaxed text-foreground/80">
                {intro}
              </p>
              <div className="mt-5 max-w-xl space-y-4 text-[0.98rem] leading-relaxed text-foreground/70">
                {body}
              </div>

              {awards && awards.length > 0 && (
                <div className="mt-9">
                  <span className="rule" style={{ color: "#f3cf91" }}>
                    Awards & recognition
                  </span>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {awards.map((a) => (
                      <li
                        key={a.title}
                        className="card-ink flex flex-col gap-2 rounded-2xl bg-[#0d1234] p-4"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Laurel result={a.result} />
                          <span
                            className={cn(
                              "text-[0.7rem] uppercase tracking-[0.18em]",
                              a.result === "Winner" ? "text-gold-300" : "text-foreground/65",
                            )}
                          >
                            {a.result}
                          </span>
                        </span>
                        <span className="font-display text-[1rem] font-medium leading-tight text-foreground">
                          {a.title}
                        </span>
                        <span className="text-[0.78rem] text-foreground/60">{a.body}</span>
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

const Laurel = ({ result }: { result: Award["result"] }) => (
  <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden>
    <path
      d="M16 4 V28 M8 8 Q4 16 8 24 M24 8 Q28 16 24 24"
      stroke={result === "Winner" ? "#e8b86f" : "rgba(245,239,224,0.55)"}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M10 12 Q14 14 16 18 M22 12 Q18 14 16 18 M10 18 Q14 19 16 22 M22 18 Q18 19 16 22"
      stroke={result === "Winner" ? "#f3cf91" : "rgba(245,239,224,0.4)"}
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="16" cy="6" r="2" fill={result === "Winner" ? "#e8b86f" : "rgba(245,239,224,0.4)"} />
  </svg>
);
