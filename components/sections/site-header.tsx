"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { BrandMark } from "@/components/decor/brand-mark";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Motor finance", href: "/mis-sold-motor-finance" },
  { label: "Unaffordable lending", href: "/unaffordable-lending-claims" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "#contact" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2.5" : "py-4 sm:py-5",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 sm:px-6 transition-all duration-500",
          scrolled
            ? "mx-3 bg-ink-900/85 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:mx-auto sm:max-w-6xl"
            : "bg-transparent",
        )}
      >
        <a href="/" className="py-3">
          <BrandMark />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-[0.84rem] text-foreground/75 transition-colors hover:text-foreground"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-white/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/[0.06] group-hover:opacity-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href="/#hero"
            className="hidden rounded-full px-4 py-2 text-[0.84rem] text-foreground/70 hover:text-foreground sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="/#hero"
            className="btn-magenta group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.86rem] font-medium transition-transform"
          >
            <span>Start your claim</span>
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden>
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
        </div>
      </div>

      {/* Hairline scroll-progress bar — only visible after the user begins scrolling */}
      <motion.div
        style={{ scaleX: progressX, transformOrigin: "0% 50%" }}
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="h-full w-full bg-gradient-to-r from-magenta-500 via-magenta-400 to-gold-400 shadow-[0_0_18px_rgba(255,45,138,0.6)]" />
      </motion.div>
    </motion.header>
  );
};
