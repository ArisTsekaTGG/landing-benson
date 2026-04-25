import { cn } from "@/lib/cn";

interface LegalTeamProps {
  className?: string;
}

/**
 * Stylized illustration of two senior counsel standing in front of a saloon car.
 * Editorial silhouette treatment — long-coat solicitors with briefcase and folio,
 * rendered in deep ink with champagne-gold rimlight to read against the stage.
 */
export const LegalTeam = ({ className }: LegalTeamProps) => (
  <svg
    viewBox="0 0 600 720"
    className={cn("h-full w-full", className)}
    aria-label="Two senior legal counsel from Benson Goldstein"
  >
    <defs>
      <linearGradient id="bg-floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1340" stopOpacity="0" />
        <stop offset="60%" stopColor="#1a1340" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#06081a" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id="rim-light" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f3cf91" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#d4a248" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="rim-magenta" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff85bc" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#ff2d8a" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="suit-grad" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#1c2554" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <linearGradient id="suit-grad-2" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#2a1758" />
        <stop offset="100%" stopColor="#0a0e27" />
      </linearGradient>
      <linearGradient id="car-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3d4878" />
        <stop offset="50%" stopColor="#1c2554" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <radialGradient id="headlight" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff3da" />
        <stop offset="40%" stopColor="#f3cf91" />
        <stop offset="100%" stopColor="#d4a248" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Vintage saloon car silhouette behind */}
    <g transform="translate(60 280)" opacity="0.9">
      <path
        d="M 0 140 Q 30 70 100 60 L 160 50 Q 220 28 320 30 Q 420 30 470 60 L 500 130 L 500 200 Q 500 220 480 220 L 20 220 Q 0 220 0 200 Z"
        fill="url(#car-grad)"
        stroke="#1c2554"
        strokeWidth="1.5"
      />
      {/* Windows */}
      <path
        d="M 120 70 Q 180 50 240 50 L 300 50 Q 360 50 410 78 L 410 130 L 120 130 Z"
        fill="#0a0e27"
        opacity="0.85"
      />
      <line x1="270" y1="50" x2="270" y2="130" stroke="#3d4878" strokeWidth="1.5" />
      {/* Wheels */}
      <circle cx="105" cy="220" r="38" fill="#06081a" />
      <circle cx="105" cy="220" r="22" fill="#1c2554" />
      <circle cx="105" cy="220" r="6" fill="#d4a248" />
      <circle cx="395" cy="220" r="38" fill="#06081a" />
      <circle cx="395" cy="220" r="22" fill="#1c2554" />
      <circle cx="395" cy="220" r="6" fill="#d4a248" />
      {/* Headlight glow */}
      <circle cx="490" cy="140" r="38" fill="url(#headlight)" />
      <circle cx="490" cy="140" r="6" fill="#fff3da" />
      {/* Chrome highlight */}
      <path d="M 30 140 Q 250 100 480 140" stroke="#5a8bff" strokeWidth="1" fill="none" opacity="0.4" />
    </g>

    {/* Stage floor reflection */}
    <ellipse cx="300" cy="640" rx="280" ry="40" fill="url(#bg-floor)" opacity="0.7" />
    <ellipse cx="300" cy="650" rx="220" ry="14" fill="#ff2d8a" opacity="0.18" />

    {/* Counsel #1 — left, tablet under arm */}
    <g transform="translate(150 200)">
      {/* Coat / suit */}
      <path
        d="M -55 80 L -75 220 L -85 380 L -55 440 L 55 440 L 85 380 L 75 220 L 55 80 Q 30 60 0 60 Q -30 60 -55 80 Z"
        fill="url(#suit-grad)"
      />
      {/* Lapels */}
      <path d="M -10 70 L -55 130 L -32 200 L -8 130 Z" fill="#06081a" />
      <path d="M 10 70 L 55 130 L 32 200 L 8 130 Z" fill="#06081a" />
      {/* Shirt */}
      <path d="M -14 70 L -8 130 L 0 165 L 8 130 L 14 70 L 0 60 Z" fill="#f5efe0" />
      {/* Tie - magenta */}
      <path d="M -6 80 L -10 165 L 0 175 L 10 165 L 6 80 Z" fill="#ff2d8a" />
      <path d="M -6 80 L 6 80 L 0 92 Z" fill="#06081a" />
      {/* Head */}
      <ellipse cx="0" cy="20" rx="36" ry="44" fill="#3a2a1a" />
      <ellipse cx="0" cy="22" rx="30" ry="36" fill="#a07550" />
      {/* Hair */}
      <path d="M -32 8 Q -20 -20 0 -22 Q 22 -22 32 6 Q 28 -8 18 -16 Q 0 -28 -18 -16 Q -28 -10 -32 8 Z" fill="#1a1208" />
      {/* Beard hint */}
      <path d="M -22 38 Q 0 50 22 38 Q 18 50 0 56 Q -18 50 -22 38 Z" fill="#3a2a1a" opacity="0.7" />
      {/* Tablet under right arm */}
      <rect x="40" y="230" width="60" height="84" rx="4" fill="#06081a" stroke="#d4a248" strokeWidth="1" />
      <rect x="44" y="234" width="52" height="68" rx="2" fill="#1c2554" />
      <line x1="50" y1="250" x2="86" y2="250" stroke="#f3cf91" strokeWidth="1" opacity="0.6" />
      <line x1="50" y1="258" x2="80" y2="258" stroke="#f3cf91" strokeWidth="1" opacity="0.4" />
      <line x1="50" y1="266" x2="84" y2="266" stroke="#f3cf91" strokeWidth="1" opacity="0.4" />
      {/* Rim light */}
      <path
        d="M -55 80 L -75 220 L -85 380 L -55 440"
        stroke="url(#rim-magenta)"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />
    </g>

    {/* Counsel #2 — right, hand gesturing welcome */}
    <g transform="translate(440 220)">
      {/* Coat */}
      <path
        d="M -50 70 L -70 200 L -78 360 L -50 420 L 60 420 L 80 360 L 70 200 L 50 70 Q 25 50 0 50 Q -25 50 -50 70 Z"
        fill="url(#suit-grad-2)"
      />
      {/* Lapels */}
      <path d="M -10 60 L -50 120 L -28 188 L -8 120 Z" fill="#06081a" />
      <path d="M 10 60 L 50 120 L 28 188 L 8 120 Z" fill="#06081a" />
      {/* Shirt */}
      <path d="M -14 60 L -8 120 L 0 155 L 8 120 L 14 60 L 0 50 Z" fill="#f5efe0" />
      {/* Tie - dark red */}
      <path d="M -6 70 L -10 155 L 0 165 L 10 155 L 6 70 Z" fill="#7a1f3a" />
      {/* Outstretched arm gesturing */}
      <path
        d="M -50 90 L -120 150 L -150 220 L -130 232 L -98 178 L -55 150 Z"
        fill="url(#suit-grad-2)"
      />
      {/* Hand */}
      <ellipse cx="-145" cy="225" rx="14" ry="10" fill="#a07550" />
      {/* Head */}
      <ellipse cx="0" cy="10" rx="34" ry="42" fill="#3a2a1a" />
      <ellipse cx="0" cy="12" rx="28" ry="34" fill="#a07550" />
      {/* Hair — neat side part */}
      <path d="M -28 -2 Q -16 -22 0 -24 Q 18 -24 30 -2 Q 28 -16 8 -22 Q -10 -22 -28 -2 Z" fill="#1a1208" />
      {/* Glasses */}
      <circle cx="-12" cy="14" r="8" fill="none" stroke="#d4a248" strokeWidth="1.4" />
      <circle cx="12" cy="14" r="8" fill="none" stroke="#d4a248" strokeWidth="1.4" />
      <line x1="-4" y1="14" x2="4" y2="14" stroke="#d4a248" strokeWidth="1.4" />
      {/* Rim light gold */}
      <path
        d="M 50 70 L 70 200 L 78 360 L 50 420"
        stroke="url(#rim-light)"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      />
    </g>

    {/* Foreground confetti specks for depth */}
    <g opacity="0.9">
      <circle cx="80" cy="120" r="3" fill="#ff85bc" />
      <rect x="520" y="180" width="6" height="2" fill="#d4a248" transform="rotate(30 523 181)" />
      <circle cx="540" cy="80" r="2.5" fill="#fff3da" />
      <rect x="40" y="240" width="5" height="2" fill="#ff2d8a" transform="rotate(-20 42 241)" />
      <circle cx="320" cy="60" r="2" fill="#7ab2ff" />
      <rect x="180" y="40" width="4" height="2" fill="#f3cf91" transform="rotate(45 182 41)" />
    </g>
  </svg>
);
