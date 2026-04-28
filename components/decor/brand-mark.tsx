import { cn } from "@/lib/cn";

interface BrandMarkProps {
  className?: string;
  /** "light" → wordmark on a dark header/footer (white text, white monogram).
   *  "dark"  → wordmark on a light surface (navy text, navy monogram). */
  variant?: "light" | "dark";
  monogramOnly?: boolean;
}

/**
 * Benson Goldstein wordmark.
 *
 * Solid royal-navy monogram (or white-on-dark) inside a square rounded chip,
 * paired with a Fraunces wordmark and a small letterspaced sub-line.
 * Reads like a corporate solicitor's letterhead.
 */
export const BrandMark = ({
  className,
  variant = "light",
  monogramOnly = false,
}: BrandMarkProps) => {
  const text = variant === "light" ? "#faf8f3" : "#0a2456";
  const muted =
    variant === "light" ? "rgba(250,248,243,0.65)" : "rgba(10,36,86,0.6)";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Monogram tone={variant} />
      {!monogramOnly && (
        <div className="flex flex-col leading-[1.05]">
          <span
            className="font-display text-[1.06rem] font-semibold tracking-[-0.01em]"
            style={{ color: text }}
          >
            Benson Goldstein
          </span>
          <span
            className="mt-0.5 text-[0.62rem] uppercase tracking-[0.24em]"
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
  const fill = tone === "light" ? "#ffffff" : "#0a2456";
  const onChip = tone === "light" ? "#0a2456" : "#ffffff";
  return (
    <svg
      viewBox="0 0 56 56"
      className="h-9 w-9 shrink-0"
      aria-label="Benson Goldstein"
    >
      {/* Solid rounded square chip */}
      <rect x="2" y="2" width="52" height="52" rx="10" fill={fill} />
      {/* Inset hairline */}
      <rect x="6" y="6" width="44" height="44" rx="7" fill="none" stroke={onChip} strokeOpacity="0.18" strokeWidth="0.6" />
      {/* B */}
      <path
        d="M14 16 H24 Q30 16 30 21 Q30 24 27.5 25.4 Q31.5 26.6 31.5 31 Q31.5 36 24.5 36 H14 Z M18 20 V25 H24 Q26 25 26 23 Q26 20 24 20 Z M18 29 V32 H24.5 Q28 32 28 30.5 Q28 29 24.5 29 Z"
        fill={onChip}
      />
      {/* G */}
      <path
        d="M44 24 Q44 16 36 16 Q29 16 29 21 L33 21 Q33.5 20 36 20 Q40 20 40 24 Q40 32 36 32 Q32 32 32 28 L29 28 Q29 36 36 36 Q44 36 44 28 Z M37 28 H44 V32 H42 V30 H37 Z"
        fill={onChip}
      />
    </svg>
  );
};
