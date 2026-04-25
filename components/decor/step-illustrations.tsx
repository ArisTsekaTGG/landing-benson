import { cn } from "@/lib/cn";

const baseProps = {
  viewBox: "0 0 240 180",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-32 w-full",
};

interface StepIconProps {
  className?: string;
}

export const StepLaptop = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    <defs>
      <linearGradient id="lap-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1c2554" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
    </defs>
    {/* Laptop body */}
    <rect x="40" y="36" width="160" height="100" rx="6" fill="#0a0e27" stroke="#d4a248" strokeWidth="2" />
    <rect x="48" y="44" width="144" height="84" rx="3" fill="url(#lap-screen)" />
    {/* Form list */}
    <rect x="60" y="58" width="92" height="8" rx="2" fill="#f5efe0" opacity="0.95" />
    <rect x="60" y="74" width="64" height="6" rx="2" fill="#f5efe0" opacity="0.5" />
    {/* Checks */}
    <circle cx="170" cy="62" r="6" fill="#ff2d8a" />
    <path d="M167 62 L169 65 L173 60" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="170" cy="80" r="6" fill="#ff2d8a" />
    <path d="M167 80 L169 83 L173 78" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="60" y="92" width="120" height="6" rx="2" fill="#f5efe0" opacity="0.4" />
    <rect x="60" y="104" width="80" height="6" rx="2" fill="#f5efe0" opacity="0.3" />
    {/* Base */}
    <path d="M28 138 L212 138 L222 150 L18 150 Z" fill="#06081a" stroke="#d4a248" strokeWidth="2" strokeLinejoin="round" />
    <line x1="100" y1="144" x2="140" y2="144" stroke="#d4a248" strokeWidth="2" strokeLinecap="round" />
    {/* Sparkle */}
    <path
      d="M210 28 L213 36 L221 39 L213 42 L210 50 L207 42 L199 39 L207 36 Z"
      fill="#f3cf91"
      className="twinkle"
    />
  </svg>
);

export const StepClipboard = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    <defs>
      <linearGradient id="clip-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#faf7f2" />
        <stop offset="100%" stopColor="#ece2c9" />
      </linearGradient>
    </defs>
    {/* Clipboard */}
    <rect x="68" y="36" width="104" height="128" rx="6" fill="url(#clip-grad)" stroke="#d4a248" strokeWidth="2" />
    {/* Clip */}
    <rect x="100" y="24" width="40" height="22" rx="4" fill="#1a1340" stroke="#d4a248" strokeWidth="2" />
    {/* Lines */}
    <line x1="84" y1="62" x2="156" y2="62" stroke="#1a1340" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="84" y1="78" x2="140" y2="78" stroke="#1a1340" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <line x1="84" y1="92" x2="148" y2="92" stroke="#1a1340" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    {/* Car badge */}
    <rect x="84" y="108" width="72" height="42" rx="4" fill="#fff3da" stroke="#1a1340" strokeWidth="1.4" />
    <path
      d="M92 138 L96 122 Q98 116 104 116 L136 116 Q142 116 144 122 L148 138 Z"
      fill="#1a1340"
    />
    <circle cx="100" cy="142" r="4" fill="#06081a" stroke="#d4a248" strokeWidth="1" />
    <circle cx="140" cy="142" r="4" fill="#06081a" stroke="#d4a248" strokeWidth="1" />
    {/* Pen */}
    <g transform="rotate(35 184 96)">
      <rect x="170" y="86" width="40" height="10" rx="2" fill="#ff2d8a" />
      <polygon points="210,86 220,91 210,96" fill="#1a1340" />
      <rect x="170" y="86" width="6" height="10" fill="#7a1f3a" />
    </g>
  </svg>
);

export const StepReview = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    {/* Document */}
    <path
      d="M70 30 L150 30 L180 60 L180 150 Q180 156 174 156 L70 156 Q64 156 64 150 L64 36 Q64 30 70 30 Z"
      fill="#faf7f2"
      stroke="#d4a248"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M150 30 L150 60 L180 60" fill="#ece2c9" stroke="#d4a248" strokeWidth="2" />
    {/* Scales of justice */}
    <g transform="translate(120 80)">
      <line x1="0" y1="-12" x2="0" y2="40" stroke="#1a1340" strokeWidth="2.4" />
      <circle cx="0" cy="-12" r="3" fill="#d4a248" />
      <line x1="-22" y1="-4" x2="22" y2="-4" stroke="#1a1340" strokeWidth="2" />
      <path d="M-26 -4 L-30 12 L-14 12 Z" fill="#ff2d8a" />
      <path d="M26 -4 L30 12 L14 12 Z" fill="#ff2d8a" />
      <ellipse cx="0" cy="40" rx="14" ry="3" fill="#1a1340" />
    </g>
    {/* Magnifying glass */}
    <circle cx="78" cy="108" r="22" fill="rgba(255,45,138,0.08)" stroke="#ff2d8a" strokeWidth="3" />
    <line x1="93" y1="123" x2="112" y2="142" stroke="#ff2d8a" strokeWidth="5" strokeLinecap="round" />
    {/* Checkmark badge */}
    <circle cx="170" cy="140" r="14" fill="#22a06b" stroke="#fff3da" strokeWidth="2" />
    <path
      d="M164 140 L168 144 L176 136"
      stroke="#fff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StepEnvelope = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    <defs>
      <linearGradient id="env-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a1758" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
    </defs>
    {/* Envelope back */}
    <rect x="48" y="58" width="144" height="100" rx="6" fill="url(#env-grad)" stroke="#d4a248" strokeWidth="2" />
    {/* Cash bills sticking out */}
    <g transform="translate(78 30)">
      <rect x="0" y="0" width="84" height="50" rx="4" fill="#22a06b" stroke="#15693f" strokeWidth="1.5" />
      <circle cx="42" cy="25" r="14" fill="#fff3da" opacity="0.85" />
      <text x="42" y="30" textAnchor="middle" fontFamily="Georgia" fontSize="14" fill="#15693f" fontWeight="700">
        £
      </text>
      <rect x="6" y="6" width="14" height="10" rx="1" fill="#fff3da" opacity="0.5" />
      <rect x="64" y="34" width="14" height="10" rx="1" fill="#fff3da" opacity="0.5" />
    </g>
    <g transform="translate(58 36) rotate(-12)">
      <rect x="0" y="0" width="78" height="46" rx="4" fill="#1f8e5d" stroke="#15693f" strokeWidth="1.5" opacity="0.92" />
      <circle cx="39" cy="23" r="12" fill="#fff3da" opacity="0.8" />
      <text x="39" y="28" textAnchor="middle" fontFamily="Georgia" fontSize="13" fill="#15693f" fontWeight="700">
        £
      </text>
    </g>
    {/* Envelope flap front */}
    <path d="M48 58 L120 110 L192 58 Z" fill="#1a1340" opacity="0.5" />
    <path
      d="M48 158 L120 100 L192 158 Z"
      fill="url(#env-grad)"
      stroke="#d4a248"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Sparkle */}
    <path
      d="M30 140 L33 148 L41 151 L33 154 L30 162 L27 154 L19 151 L27 148 Z"
      fill="#f3cf91"
      className="twinkle"
    />
  </svg>
);
