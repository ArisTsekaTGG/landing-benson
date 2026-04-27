import { cn } from "@/lib/cn";

interface BrandMarkProps {
  className?: string;
  variant?: "light" | "dark";
  /** Drop the lockup wordmark, leaving the monogram only. */
  monogramOnly?: boolean;
}

/**
 * Benson Goldstein wordmark.
 *
 * A restrained typographic lockup: a gold hairline ring around interlocking
 * serif B & G letters, paired with a Fraunces wordmark and a small
 * letterspaced sub-line. No flourish, no glow — designed to read like a
 * partner's letterhead rather than a logo from a billboard.
 */
export const BrandMark = ({ className, variant = "light", monogramOnly = false }: BrandMarkProps) => {
  const text = variant === "light" ? "#f5efe0" : "#0a0e27";
  const muted =
    variant === "light" ? "rgba(245,239,224,0.55)" : "rgba(10,14,39,0.55)";
  const gold = variant === "light" ? "#d4a248" : "#7a5818";

  return (
    <div className={cn("flex items-center gap-3.5", className)}>
      <Monogram tone={variant} />
      {!monogramOnly && (
        <div className="flex flex-col leading-[1.05]">
          <span
            className="font-display text-[1.04rem] tracking-[-0.005em]"
            style={{ color: text, fontWeight: 500 }}
          >
            Benson<span style={{ color: gold }}> Goldstein</span>
          </span>
          <span
            className="mt-0.5 text-[0.62rem] uppercase tracking-[0.26em]"
            style={{ color: muted }}
          >
            Solicitors · London
          </span>
        </div>
      )}
    </div>
  );
};

const Monogram = ({ tone }: { tone: "light" | "dark" }) => {
  const stroke = tone === "light" ? "#d4a248" : "#7a5818";
  return (
    <svg
      viewBox="0 0 56 56"
      className="h-9 w-9 shrink-0"
      aria-label="Benson Goldstein"
    >
      <defs>
        <linearGradient id="bm-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3cf91" />
          <stop offset="55%" stopColor={stroke} />
          <stop offset="100%" stopColor="#5a4012" />
        </linearGradient>
      </defs>
      {/* Outer hairline ring */}
      <circle cx="28" cy="28" r="26" fill="none" stroke="url(#bm-stroke)" strokeWidth="1.1" />
      {/* Inner indicator hairline */}
      <circle cx="28" cy="28" r="22" fill="none" stroke="url(#bm-stroke)" strokeWidth="0.4" opacity="0.6" />
      {/* Compact serif B */}
      <path
        d="M16 18 H25 Q31 18 31 23 Q31 26 28.5 27.2 Q33 28.4 33 32.6 Q33 38 25.5 38 H16 Z M20 22 V26 H25 Q27 26 27 24 Q27 22 25 22 Z M20 30 V34 H25.5 Q29 34 29 32 Q29 30 25.5 30 Z"
        fill="url(#bm-stroke)"
      />
      {/* Compact serif G */}
      <path
        d="M44 26 Q44 18 36 18 Q29 18 29 22 L33 22 Q34 22 36 22 Q40 22 40 26 Q40 34 36 34 Q32 34 32 30 L29 30 Q29 38 36 38 Q44 38 44 26 Z M38 30 H44 V34 H42 V32 H38 Z"
        fill="url(#bm-stroke)"
      />
    </svg>
  );
};
