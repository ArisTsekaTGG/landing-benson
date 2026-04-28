import { cn } from "@/lib/cn";

interface SealProps {
  /** Diameter in px. */
  size?: number;
  className?: string;
  /**
   * "crest" — full chambers seal with circular text and BG monogram (≥ 200px).
   * "medallion" — clean ring + monogram, no rim text.
   * "mark" — minimal monogram only, for the smallest sizes.
   */
  variant?: "crest" | "medallion" | "mark";
  /** Optional accent — kept restrained by default. */
  tint?: "gold" | "ink";
}

/**
 * Chambers seal — a refined, static replacement for the marquee/playbill star.
 * Built from concentric thin-stroke rings + a serif "BG" monogram, with
 * optional letterspaced rim text for the larger crest variant.
 *
 * No animation. No casino shimmer. Reads like a signet on a partner's letterhead.
 */
export const Seal = ({
  size = 200,
  className,
  variant = "medallion",
  tint = "gold",
}: SealProps) => {
  // tint="gold" historical name kept; both tints now resolve to navy/cream blue.
  const stroke = tint === "ink" ? "rgba(250,248,243,0.85)" : "#1f4da6";
  const strokeFlat = tint === "ink" ? "#faf8f3" : "#1f4da6";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={cn(className)}
      aria-hidden
    >
      <defs>
        <radialGradient id="seal-fill" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="rgba(31,77,166,0.06)" />
          <stop offset="100%" stopColor="rgba(31,77,166,0)" />
        </radialGradient>
        {/* Curved baseline for rim text — full circle starting top-centre. */}
        <path
          id="seal-rim-path"
          d="M 100 100 m -78 0 a 78 78 0 1 1 156 0 a 78 78 0 1 1 -156 0"
        />
      </defs>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="96" fill="none" stroke={stroke} strokeWidth="1.4" />
      {/* Inner ring — leaves space for rim text on the crest variant */}
      <circle cx="100" cy="100" r="88" fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.8" />

      {/* Subtle interior tint */}
      <circle cx="100" cy="100" r="68" fill="url(#seal-fill)" />

      {/* Inner ring around the monogram */}
      <circle cx="100" cy="100" r="64" fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.7" />
      <circle cx="100" cy="100" r="60" fill="none" stroke={stroke} strokeWidth="1.4" />

      {/* Rim text — only on the largest variant */}
      {variant === "crest" && (
        <text
          fontFamily="Fraunces, Georgia, serif"
          fontSize="7.6"
          letterSpacing="3"
          fill={strokeFlat}
          opacity="0.95"
        >
          <textPath href="#seal-rim-path" startOffset="50%" textAnchor="middle">
            BENSON · GOLDSTEIN · CHAMBERS · SOLICITORS ·
          </textPath>
        </text>
      )}

      {/* Cardinal tick-marks at N/E/S/W on medallion + crest */}
      {variant !== "mark" && (
        <g stroke={stroke} strokeWidth="1.2" strokeLinecap="round">
          <line x1="100" y1="14" x2="100" y2="22" />
          <line x1="100" y1="178" x2="100" y2="186" />
          <line x1="14" y1="100" x2="22" y2="100" />
          <line x1="178" y1="100" x2="186" y2="100" />
        </g>
      )}

      {/* Monogram — interlocking serif B & G */}
      <g fill={stroke} opacity="0.95">
        {/* B */}
        <path d="M76 70 H92 Q104 70 104 78 Q104 84 99 86 Q108 88 108 96 Q108 106 94 106 H76 Z M84 76 V84 H92 Q97 84 97 80 Q97 76 92 76 Z M84 90 V100 H93 Q100 100 100 95 Q100 90 93 90 Z" />
        {/* G */}
        <path d="M124 86 Q124 70 110 70 Q98 70 98 76 L106 76 Q108 76 110 76 Q116 76 116 86 Q116 100 110 100 Q104 100 104 92 L98 92 Q98 106 110 106 Q124 106 124 86 Z M114 92 H124 V100 H120 V96 H114 Z" />
      </g>

      {/* Hairline divider beneath monogram */}
      <line
        x1="78"
        y1="118"
        x2="122"
        y2="118"
        stroke={stroke}
        strokeWidth="0.5"
      />
      {/* "EST" small caps */}
      <text
        x="100"
        y="132"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="6"
        letterSpacing="2"
        fill={strokeFlat}
        opacity="0.85"
      >
        EST. MMXIV
      </text>
    </svg>
  );
};
