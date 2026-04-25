import { cn } from "@/lib/cn";

interface UnaffordableIllustrationProps {
  className?: string;
}

/**
 * Editorial illustration for the unaffordable-lending page — broken chains
 * around a stack of bills, with a key emerging. Symbol of release from a debt cycle.
 */
export const UnaffordableIllustration = ({ className }: UnaffordableIllustrationProps) => (
  <svg
    viewBox="0 0 480 600"
    className={cn("h-full w-full", className)}
    aria-label="An illustration of broken chains releasing a key from a stack of debts"
  >
    <defs>
      <linearGradient id="ua-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1340" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <linearGradient id="ua-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f3cf91" />
        <stop offset="50%" stopColor="#d4a248" />
        <stop offset="100%" stopColor="#7a5818" />
      </linearGradient>
      <linearGradient id="ua-bill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#faf7f2" />
        <stop offset="100%" stopColor="#ece2c9" />
      </linearGradient>
      <radialGradient id="ua-spot" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#ff5aa3" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#ff5aa3" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect width="480" height="600" fill="url(#ua-bg)" />
    <rect width="480" height="600" fill="url(#ua-spot)" />
    <path d="M40 540 Q240 510 440 540" stroke="#d4a248" strokeWidth="1" fill="none" opacity="0.4" />

    {/* stack of bills */}
    <g transform="translate(110 240)">
      {/* bottom bill */}
      <rect x="0" y="60" width="240" height="120" rx="6" fill="url(#ua-bill)" stroke="#d4a248" strokeWidth="1.4" transform="rotate(-4 120 120)" />
      <rect x="20" y="80" width="200" height="80" rx="4" fill="#ece2c9" opacity="0.6" transform="rotate(-4 120 120)" />
      {/* mid bill */}
      <rect x="20" y="40" width="240" height="120" rx="6" fill="url(#ua-bill)" stroke="#d4a248" strokeWidth="1.4" transform="rotate(2 140 100)" />
      <rect x="36" y="56" width="208" height="82" rx="4" fill="#ece2c9" opacity="0.4" transform="rotate(2 140 100)" />
      {/* top bill */}
      <g transform="rotate(-1 140 80)">
        <rect x="20" y="20" width="240" height="120" rx="6" fill="url(#ua-bill)" stroke="#d4a248" strokeWidth="1.6" />
        <text x="40" y="60" fontFamily="Georgia" fontSize="22" fontWeight="700" fill="#1a1340">
          NOTICE
        </text>
        <line x1="40" y1="80" x2="220" y2="80" stroke="#1a1340" strokeWidth="1" opacity="0.6" />
        <line x1="40" y1="94" x2="190" y2="94" stroke="#1a1340" strokeWidth="1" opacity="0.4" />
        <line x1="40" y1="108" x2="200" y2="108" stroke="#1a1340" strokeWidth="1" opacity="0.4" />
        <line x1="40" y1="122" x2="170" y2="122" stroke="#1a1340" strokeWidth="1" opacity="0.4" />
        <text x="220" y="130" textAnchor="end" fontFamily="Georgia" fontSize="22" fontWeight="700" fill="#7a1f3a">
          OVERDUE
        </text>
      </g>
    </g>

    {/* broken chain — left side falling away */}
    <g transform="translate(70 360)" stroke="#5a4a3a" strokeWidth="3" fill="none">
      <ellipse cx="0" cy="0" rx="14" ry="9" transform="rotate(-30)" />
      <ellipse cx="-22" cy="14" rx="14" ry="9" transform="rotate(20)" />
      <ellipse cx="-44" cy="32" rx="14" ry="9" transform="rotate(-30)" />
      {/* break */}
      <path d="M16 -6 L24 4" strokeWidth="2" />
      <path d="M22 -10 L18 -2" strokeWidth="2" />
    </g>

    {/* broken chain — right side falling away */}
    <g transform="translate(390 380)" stroke="#5a4a3a" strokeWidth="3" fill="none">
      <ellipse cx="0" cy="0" rx="14" ry="9" transform="rotate(30)" />
      <ellipse cx="22" cy="14" rx="14" ry="9" transform="rotate(-20)" />
      <ellipse cx="44" cy="32" rx="14" ry="9" transform="rotate(30)" />
      <path d="M-16 -6 L-24 4" strokeWidth="2" />
      <path d="M-22 -10 L-18 -2" strokeWidth="2" />
    </g>

    {/* gold key emerging upward */}
    <g transform="translate(240 130)">
      {/* light burst */}
      <g opacity="0.7">
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2={Math.cos((i * Math.PI) / 6) * 90}
            y2={Math.sin((i * Math.PI) / 6) * 90}
            stroke="#e8b86f"
            strokeWidth="1.5"
            opacity="0.55"
          />
        ))}
      </g>
      <circle cx="0" cy="0" r="32" fill="url(#ua-gold)" stroke="#f3cf91" strokeWidth="2" />
      <circle cx="0" cy="0" r="12" fill="#06081a" />
      <rect x="-4" y="20" width="8" height="80" fill="url(#ua-gold)" />
      <rect x="4" y="80" width="14" height="6" fill="url(#ua-gold)" />
      <rect x="4" y="92" width="10" height="6" fill="url(#ua-gold)" />
    </g>

    {/* sparkles */}
    <g fill="#fff3da">
      <path d="M380 180 L383 188 L391 191 L383 194 L380 202 L377 194 L369 191 L377 188 Z" />
      <path d="M90 200 L92 206 L98 208 L92 210 L90 216 L88 210 L82 208 L88 206 Z" />
    </g>
  </svg>
);
