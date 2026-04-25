"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/cn";

interface FormState {
  period: string;
  finished: string;
  financeFor: string;
}

const FIELDS: Array<{
  key: keyof FormState;
  label: string;
  placeholder: string;
  options: string[];
}> = [
  {
    key: "period",
    label: "When did you take out finance?",
    placeholder: "Select a period",
    options: ["Before 2007", "2007 – 2014", "2014 – 2021", "After 2021", "Unsure"],
  },
  {
    key: "finished",
    label: "Have you already finished paying?",
    placeholder: "Select an option",
    options: ["Yes — fully paid off", "No — still paying", "Settled early"],
  },
  {
    key: "financeFor",
    label: "What was the finance for?",
    placeholder: "Select an option",
    options: ["A car (HP / PCP)", "A van", "A motorbike", "Multiple vehicles"],
  },
];

export const EligibilityForm = () => {
  const [state, setState] = useState<FormState>({ period: "", finished: "", financeFor: "" });
  const [submitted, setSubmitted] = useState(false);
  const allFilled = Object.values(state).every(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative w-full max-w-md"
    >
      {/* Glow halo */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-magenta-500/30 via-aubergine/0 to-gold-400/20 blur-3xl" />
      {/* Card */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#0c1233]/85 p-6 shadow-[0_28px_60px_-15px_rgba(6,8,26,0.7),0_0_0_1px_rgba(212,162,72,0.18)_inset] backdrop-blur-xl sm:p-7">
        {/* Inner ornament */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,184,111,0.12),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(255,45,138,0.12),transparent_55%)]" />

        <div className="relative">
          <div className="mb-5 flex items-baseline gap-2">
            <h3 className="font-display text-[1.45rem] font-semibold leading-tight">
              Check your eligibility
            </h3>
          </div>
          <p className="mb-5 -mt-3 text-[0.95rem] text-foreground/75">
            in <span className="font-italic text-magenta-400">60 seconds.</span>
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (allFilled) setSubmitted(true);
                }}
                className="flex flex-col gap-4"
              >
                {FIELDS.map((field, idx) => (
                  <motion.label
                    key={field.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + idx * 0.1 }}
                    className="block"
                  >
                    <span className="mb-1.5 block text-[0.78rem] font-medium text-foreground/85">
                      {field.label}
                    </span>
                    <div className="group relative">
                      <select
                        value={state[field.key]}
                        onChange={(e) => setState((s) => ({ ...s, [field.key]: e.target.value }))}
                        className={cn(
                          "w-full appearance-none rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[0.92rem] text-foreground outline-none transition-all",
                          "focus:border-magenta-400 focus:bg-white/[0.07] focus:ring-4 focus:ring-magenta-500/15",
                          "hover:border-white/25",
                        )}
                      >
                        <option value="" className="bg-ink-900">
                          {field.placeholder}
                        </option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt} className="bg-ink-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/55 transition-colors group-hover:text-foreground"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                      >
                        <path d="M4 6 L8 10 L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.label>
                ))}

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                  className={cn(
                    "btn-magenta group relative mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[0.96rem] font-semibold transition-all",
                    !allFilled && "opacity-90",
                  )}
                >
                  <span>Check my eligibility</span>
                  <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden>
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </motion.button>

                <p className="mt-1 flex items-center justify-center gap-1.5 text-[0.74rem] text-foreground/55">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-gold-400" fill="none" aria-hidden>
                    <rect x="3" y="7" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  Your details are secure, encrypted, and never sold.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-3 py-4 text-center"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-magenta-500 to-magenta-400 text-white shadow-[0_10px_30px_-6px_rgba(255,45,138,0.6)]">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
                    <path d="M5 12.5 L10 17.5 L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="font-display text-xl font-semibold">You look eligible.</h4>
                <p className="max-w-xs text-[0.92rem] text-foreground/75">
                  A senior counsel will be in touch within one working day to walk you through the
                  next steps. No obligation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setState({ period: "", finished: "", financeFor: "" });
                  }}
                  className="mt-2 text-[0.82rem] font-medium text-magenta-400 underline-offset-4 hover:underline"
                >
                  Start a new check
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
