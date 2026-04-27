import { cn } from "@/lib/cn";

interface LegalTeamProps {
  className?: string;
}

/**
 * Editorial portrait of two senior counsel.
 *
 * Quiet treatment — no stage lights, no confetti, no glamour. Two solicitors
 * in front of a saloon car (the practice area is mis-sold motor finance, so
 * the car remains thematically relevant), against a chambers-dark backdrop
 * with subtle gold rim-lighting on the right and a single hairline
 * architectural rule beneath them.
 */
export const LegalTeam = ({ className }: LegalTeamProps) => (
  <svg
    viewBox="0 0 600 720"
    className={cn("h-full w-full", className)}
    aria-label="Two senior legal counsel from Benson Goldstein"
  >
    <defs>
      <linearGradient id="lt-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0e0c30" />
        <stop offset="60%" stopColor="#0a0e27" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <linearGradient id="lt-rim-gold" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f3cf91" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#d4a248" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="lt-suit" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#1c2554" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <linearGradient id="lt-suit-2" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#2a1758" />
        <stop offset="100%" stopColor="#0a0e27" />
      </linearGradient>
      <linearGradient id="lt-car" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#26305a" />
        <stop offset="60%" stopColor="#141a3a" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
    </defs>

    {/* Calm backdrop */}
    <rect width="600" height="720" fill="url(#lt-bg)" />

    {/* Architectural rule */}
    <line
      x1="40"
      y1="640"
      x2="560"
      y2="640"
      stroke="#d4a248"
      strokeWidth="0.6"
      opacity="0.55"
    />
    <line
      x1="80"
      y1="652"
      x2="520"
      y2="652"
      stroke="#d4a248"
      strokeWidth="0.4"
      opacity="0.3"
    />

    {/* Saloon car silhouette — muted, no chrome flash */}
    <g transform="translate(60 280)" opacity="0.78">
      <path
        d="M 0 140 Q 30 70 100 60 L 160 50 Q 220 28 320 30 Q 420 30 470 60 L 500 130 L 500 200 Q 500 220 480 220 L 20 220 Q 0 220 0 200 Z"
        fill="url(#lt-car)"
        stroke="#1c2554"
        strokeWidth="1.2"
      />
      <path
        d="M 120 70 Q 180 50 240 50 L 300 50 Q 360 50 410 78 L 410 130 L 120 130 Z"
        fill="#06081a"
        opacity="0.85"
      />
      <line x1="270" y1="50" x2="270" y2="130" stroke="#26305a" strokeWidth="1" />
      {/* Wheels */}
      <circle cx="105" cy="220" r="36" fill="#06081a" />
      <circle cx="105" cy="220" r="20" fill="#1c2554" />
      <circle cx="105" cy="220" r="4" fill="#d4a248" opacity="0.7" />
      <circle cx="395" cy="220" r="36" fill="#06081a" />
      <circle cx="395" cy="220" r="20" fill="#1c2554" />
      <circle cx="395" cy="220" r="4" fill="#d4a248" opacity="0.7" />
    </g>

    {/* Counsel #1 — left, tablet under arm */}
    <g transform="translate(150 200)">
      <path
        d="M -55 80 L -75 220 L -85 380 L -55 440 L 55 440 L 85 380 L 75 220 L 55 80 Q 30 60 0 60 Q -30 60 -55 80 Z"
        fill="url(#lt-suit)"
      />
      {/* Lapels */}
      <path d="M -10 70 L -55 130 L -32 200 L -8 130 Z" fill="#06081a" />
      <path d="M 10 70 L 55 130 L 32 200 L 8 130 Z" fill="#06081a" />
      {/* Shirt */}
      <path d="M -14 70 L -8 130 L 0 165 L 8 130 L 14 70 L 0 60 Z" fill="#f5efe0" />
      {/* Tie */}
      <path d="M -6 80 L -10 165 L 0 175 L 10 165 L 6 80 Z" fill="#7a1f3a" />
      <path d="M -6 80 L 6 80 L 0 92 Z" fill="#06081a" />
      {/* Head */}
      <ellipse cx="0" cy="20" rx="36" ry="44" fill="#3a2a1a" />
      <ellipse cx="0" cy="22" rx="30" ry="36" fill="#a07550" />
      {/* Hair */}
      <path
        d="M -32 8 Q -20 -20 0 -22 Q 22 -22 32 6 Q 28 -8 18 -16 Q 0 -28 -18 -16 Q -28 -10 -32 8 Z"
        fill="#1a1208"
      />
      {/* Beard hint */}
      <path
        d="M -22 38 Q 0 50 22 38 Q 18 50 0 56 Q -18 50 -22 38 Z"
        fill="#3a2a1a"
        opacity="0.7"
      />
      {/* Tablet */}
      <rect x="40" y="230" width="60" height="84" rx="3" fill="#06081a" stroke="#d4a248" strokeWidth="0.8" opacity="0.85" />
      <rect x="44" y="234" width="52" height="68" rx="2" fill="#11163d" />
      <line x1="50" y1="250" x2="86" y2="250" stroke="#d4a248" strokeWidth="0.6" opacity="0.45" />
      <line x1="50" y1="258" x2="80" y2="258" stroke="#d4a248" strokeWidth="0.6" opacity="0.3" />
      <line x1="50" y1="266" x2="84" y2="266" stroke="#d4a248" strokeWidth="0.6" opacity="0.3" />
    </g>

    {/* Counsel #2 — right, hand at side */}
    <g transform="translate(440 220)">
      <path
        d="M -50 70 L -70 200 L -78 360 L -50 420 L 60 420 L 80 360 L 70 200 L 50 70 Q 25 50 0 50 Q -25 50 -50 70 Z"
        fill="url(#lt-suit-2)"
      />
      <path d="M -10 60 L -50 120 L -28 188 L -8 120 Z" fill="#06081a" />
      <path d="M 10 60 L 50 120 L 28 188 L 8 120 Z" fill="#06081a" />
      <path d="M -14 60 L -8 120 L 0 155 L 8 120 L 14 60 L 0 50 Z" fill="#f5efe0" />
      {/* Tie */}
      <path d="M -6 70 L -10 155 L 0 165 L 10 155 L 6 70 Z" fill="#1c2554" />
      {/* Head */}
      <ellipse cx="0" cy="10" rx="34" ry="42" fill="#3a2a1a" />
      <ellipse cx="0" cy="12" rx="28" ry="34" fill="#a07550" />
      {/* Hair */}
      <path
        d="M -28 -2 Q -16 -22 0 -24 Q 18 -24 30 -2 Q 28 -16 8 -22 Q -10 -22 -28 -2 Z"
        fill="#1a1208"
      />
      {/* Glasses */}
      <circle cx="-12" cy="14" r="8" fill="none" stroke="#d4a248" strokeWidth="1.2" opacity="0.85" />
      <circle cx="12" cy="14" r="8" fill="none" stroke="#d4a248" strokeWidth="1.2" opacity="0.85" />
      <line x1="-4" y1="14" x2="4" y2="14" stroke="#d4a248" strokeWidth="1.2" opacity="0.85" />
      {/* Subtle gold rim light */}
      <path
        d="M 50 70 L 70 200 L 78 360 L 50 420"
        stroke="url(#lt-rim-gold)"
        strokeWidth="2.4"
        fill="none"
        opacity="0.85"
      />
    </g>
  </svg>
);
