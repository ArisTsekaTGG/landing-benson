"use client";

import { motion } from "motion/react";
import {
  IconStopwatch,
  IconHandshake,
  IconCounsel,
  IconShield,
  IconScales,
} from "@/components/decor/trust-icons";

const ITEMS = [
  { icon: IconStopwatch, title: "60-second check", body: "Quick and easy eligibility check." },
  { icon: IconHandshake, title: "No win, no fee", body: "You don't pay unless we win." },
  { icon: IconCounsel, title: "Legal experts on hand", body: "Specialist support every step of the way." },
  { icon: IconScales, title: "Simple online process", body: "All online, clear and straightforward." },
  { icon: IconShield, title: "FCA-regulated", body: "Authorised and regulated claims." },
];

export const TrustBar = () => {
  return (
    <section className="relative -mt-16 px-4 sm:px-6 lg:px-8 z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass-light mx-auto max-w-6xl overflow-hidden rounded-[20px] shadow-[0_24px_60px_-30px_rgba(15,46,99,0.25)]"
      >
        <div className="grid grid-cols-2 divide-y divide-blue-100/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {ITEMS.map(({ icon: Icon, title, body }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex items-center gap-3 px-5 py-5 sm:px-6"
            >
              <div className="text-blue-700">
                <Icon className="h-9 w-9" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-[0.95rem] font-semibold text-blue-900">
                  {title}
                </div>
                <div className="mt-0.5 text-[0.78rem] text-blue-900/65">{body}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
