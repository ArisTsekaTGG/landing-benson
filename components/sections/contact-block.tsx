"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

interface ContactBlockProps {
  heading?: string;
  intro?: string;
  variant?: "dark" | "cream";
}

export const ContactBlock = ({
  heading = "Need help? Contact us today.",
  intro = "Our experienced representatives will respond promptly, ensuring your queries are addressed effectively.",
  variant = "dark",
}: ContactBlockProps) => {
  const [submitted, setSubmitted] = useState(false);

  const isDark = variant === "dark";

  return (
    <section
      id="contact-form"
      className={cn(
        "section-cv relative isolate overflow-hidden py-24 sm:py-32",
        isDark ? "bg-[#06081a] text-foreground" : "bg-cream-50 text-ink-800",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            <span className="rule" style={!isDark ? { color: "#7a5818" } : undefined}>
              Contact
            </span>
            <h2
              className={cn(
                "mt-4 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.02em] text-balance",
                !isDark && "text-ink-900",
              )}
            >
              {heading}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-md text-[1rem] leading-relaxed",
                isDark ? "text-foreground/72" : "text-ink-700",
              )}
            >
              {intro}
            </p>

            <dl className="mt-8 space-y-4 text-[0.94rem]">
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-[0.74rem] uppercase tracking-[0.18em] text-gold-300">
                  Address
                </dt>
                <dd className={cn(isDark ? "text-foreground/85" : "text-ink-800")}>
                  PO Box 79176
                  <br />
                  London NW4 9NH
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-[0.74rem] uppercase tracking-[0.18em] text-gold-300">
                  Office
                </dt>
                <dd className={cn(isDark ? "text-foreground/85" : "text-ink-800")}>
                  3rd Floor, 86–90 Paul Street
                  <br />
                  London EC2A 4NE
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-[0.74rem] uppercase tracking-[0.18em] text-gold-300">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:info@bensongoldstein.com"
                    className={cn(
                      "underline-offset-4 hover:underline",
                      isDark ? "text-magenta-300" : "text-magenta-500",
                    )}
                  >
                    info@bensongoldstein.com
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
            className={cn(
              "rounded-[24px] p-6 sm:p-8",
              isDark
                ? "border border-gold-400/25 bg-[#0d1234]"
                : "border border-gold-500/30 bg-white",
            )}
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-3 py-2">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-magenta-500 to-magenta-400 text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                    <path d="M5 12.5 L10 17.5 L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className={cn("font-display text-xl", !isDark && "text-ink-900")}>
                  Thank you — we&apos;ve received your message.
                </h3>
                <p className={cn("text-[0.95rem]", isDark ? "text-foreground/72" : "text-ink-700")}>
                  A member of our team will be in touch within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[0.84rem] font-medium text-magenta-500 underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-4"
              >
                <Field id="name" label="Your name" placeholder="Jane Doe" dark={isDark} />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field id="phone" type="tel" label="Phone number" placeholder="07700 900000" dark={isDark} />
                  <Field id="email" type="email" label="Email" placeholder="you@example.com" dark={isDark} />
                </div>
                <Field id="msg" label="Message" placeholder="How can we help?" textarea dark={isDark} />
                <button
                  type="submit"
                  className="btn-magenta group mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full px-6 py-3 text-[0.96rem] font-semibold"
                >
                  Send message
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden>
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  dark: boolean;
}

const Field = ({ id, label, placeholder, type = "text", textarea, dark }: FieldProps) => {
  const inputCls = cn(
    "w-full rounded-xl border px-4 py-3 text-[0.95rem] outline-none transition-all",
    dark
      ? "border-white/12 bg-white/[0.04] text-foreground placeholder:text-foreground/40 focus:border-magenta-400 focus:bg-white/[0.08] focus:ring-4 focus:ring-magenta-500/15"
      : "border-ink-700/15 bg-white text-ink-900 placeholder:text-ink-700/40 focus:border-magenta-500 focus:ring-4 focus:ring-magenta-500/15",
  );
  return (
    <label htmlFor={id} className="block">
      <span
        className={cn(
          "mb-1.5 block text-[0.78rem] font-medium",
          dark ? "text-foreground/80" : "text-ink-800",
        )}
      >
        {label}
      </span>
      {textarea ? (
        <textarea id={id} name={id} rows={4} placeholder={placeholder} className={inputCls} />
      ) : (
        <input id={id} name={id} type={type} placeholder={placeholder} className={inputCls} />
      )}
    </label>
  );
};
