import { cn } from "@/lib/cn";

interface BrandMarkProps {
  className?: string;
  variant?: "light" | "dark";
}

/**
 * Benson Goldstein wordmark — interlocking B|G monogram in champagne gold,
 * paired with a small "MakeYourClaim.com" sub-line in Geist.
 */
export const BrandMark = ({ className, variant = "light" }: BrandMarkProps) => {
  const text = variant === "light" ? "#f5efe0" : "#0a0e27";
  const accent = variant === "light" ? "#d4a248" : "#1a1340";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden>
        <defs>
          <linearGradient id="bm-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3cf91" />
            <stop offset="50%" stopColor={accent} />
            <stop offset="100%" stopColor="#7a5818" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill="none" stroke="url(#bm-grad)" strokeWidth="2.5" />
        <path
          d="M16 18 H30 Q40 18 40 25 Q40 30 35 32 Q42 33 42 40 Q42 48 31 48 H16 Z M22 24 V30 H30 Q33 30 33 27 Q33 24 30 24 Z M22 36 V42 H31 Q35 42 35 39 Q35 36 31 36 Z"
          fill="url(#bm-grad)"
        />
        <path
          d="M48 36 Q48 28 41 28 L41 32 Q44 32 44 36 Q44 40 41 40 Q38 40 38 36 L34 36 Q34 44 41 44 Q48 44 48 36 Z M44 38 H50 V42 H46 Z"
          fill="url(#bm-grad)"
          opacity="0.92"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          className="font-display text-[1.02rem] font-semibold tracking-tight"
          style={{ color: text }}
        >
          Benson <span style={{ color: accent }}>Goldstein</span>
        </span>
        <span
          className="text-[0.66rem] uppercase tracking-[0.22em]"
          style={{ color: variant === "light" ? "rgba(245,239,224,0.55)" : "rgba(10,14,39,0.55)" }}
        >
          MakeYourClaim<span style={{ color: "#ff2d8a" }}>.com</span>
        </span>
      </div>
    </div>
  );
};
