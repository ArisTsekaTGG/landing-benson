"use client";

import { motion } from "motion/react";
import {
  IconHandshake,
  IconClipboard,
  IconCounsel,
  IconShield,
  IconRibbon,
  IconChat,
} from "@/components/decor/trust-icons";

const ITEMS = [
  { icon: IconHandshake, title: "No win, no fee", body: "You don't pay unless we win." },
  { icon: IconClipboard, title: "Clear, simple process", body: "We handle everything." },
  { icon: IconCounsel, title: "Expert legal support", body: "Specialist team on your side." },
  { icon: IconShield, title: "Your data is safe", body: "Secure, encrypted, and private." },
  { icon: IconRibbon, title: "FCA-regulated", body: "Authorised, regulated claims." },
  { icon: IconChat, title: "Straightforward guidance", body: "Honest advice from real people." },
];

export const TrustBar = () => {
  return (
    <section className="relative -mt-20 px-4 sm:px-6 lg:px-8 z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-gold-400/25 bg-gradient-to-br from-[#0d1234] via-[#0f0e2c] to-[#0a0a22] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-white/[0.06] sm:grid-cols-3 lg:grid-cols-6">
          {ITEMS.map(({ icon: Icon, title, body }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-start gap-3 bg-[#0c1133] p-5 transition-colors hover:bg-[#11163d] sm:p-6"
            >
              <div className="rounded-xl bg-gradient-to-br from-gold-400/15 to-magenta-500/10 p-2.5 ring-1 ring-gold-400/20 transition-all group-hover:ring-magenta-400/40">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-[1rem] font-semibold leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-[0.82rem] leading-snug text-foreground/65">{body}</p>
              </div>
              <div className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/0 to-transparent transition-all group-hover:via-magenta-400/40" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
