"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";

const FAQS = [
  {
    q: "Do I qualify for a mis-sold car finance claim?",
    a: "If you took out a finance agreement (PCP, HP, conditional sale or similar) for a vehicle and the lender or dealer didn't disclose commission paid to the broker, you may have grounds for a claim. The 60-second eligibility checker is the fastest way to find out.",
  },
  {
    q: "What does 'no win, no fee' actually mean here?",
    a: "If we accept your case and don't recover compensation for you, you don't pay our legal fees. Our success fee is only deducted from a positive outcome and we agree it with you in writing before we start.",
  },
  {
    q: "How long will my claim take?",
    a: "Most straightforward claims settle within four to nine months. Complex agreements or cases that go to the Financial Ombudsman can take longer; we set realistic expectations from day one and keep you updated at each milestone.",
  },
  {
    q: "Will making a claim affect my credit score?",
    a: "No. Making a complaint about a mis-sold finance agreement does not appear on your credit file or affect your credit score with any lender.",
  },
  {
    q: "Who regulates Benson Goldstein?",
    a: "We are authorised and regulated by the Solicitors Regulation Authority (SRA No. 8003245), and our claims-handling work is overseen by the FCA's framework on consumer credit complaints. Both regulators publish complaints procedures should you ever need them.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faqs"
      className="section-cv relative isolate overflow-hidden bg-[#06081a] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rule">Plainly answered</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.1rem)] font-medium leading-[1.04] tracking-[-0.02em] text-balance">
            Common questions, <span className="font-italic text-magenta-400">answered straight.</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 max-w-3xl">
          <ul className="flex flex-col gap-3">
            {FAQS.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <li key={item.q}>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className={cn(
                      "card-ink overflow-hidden rounded-2xl bg-[#0d1234] transition-all duration-500",
                      isOpen && "shadow-[0_24px_60px_-20px_rgba(255,45,138,0.25)]",
                    )}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[1.04rem] font-medium leading-snug text-foreground sm:text-[1.12rem]">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.03] transition-transform duration-500",
                          isOpen && "rotate-45 border-magenta-400/50 bg-magenta-500/15",
                        )}
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-foreground/80" fill="none" aria-hidden>
                          <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-5 pb-6 text-[0.96rem] leading-relaxed text-foreground/72 sm:px-6">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
