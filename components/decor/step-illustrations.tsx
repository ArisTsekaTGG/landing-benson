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

/* Shared visual language across all four steps:
 *   - thin gold strokes on a muted ink panel
 *   - one restrained magenta accent per illustration
 *   - no chunky fills, no bright primary colours, no sparkles
 *   - reads like an engraved technical schematic on letterhead
 */

const STROKE = "#d4a248";
const STROKE_FAINT = "rgba(232,184,111,0.45)";
const ACCENT = "#ff5aa3";

export const StepLaptop = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    {/* Laptop screen */}
    <rect
      x="50"
      y="36"
      width="140"
      height="92"
      rx="3"
      fill="none"
      stroke={STROKE}
      strokeWidth="1.4"
    />
    <rect
      x="56"
      y="42"
      width="128"
      height="80"
      rx="2"
      fill="none"
      stroke={STROKE_FAINT}
      strokeWidth="0.8"
    />
    {/* Form rows */}
    <line x1="68" y1="58" x2="148" y2="58" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="68" y1="68" x2="124" y2="68" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <circle cx="166" cy="62" r="4" fill="none" stroke={ACCENT} strokeWidth="1.4" />
    <path d="M163 62 L165.5 64 L169 60" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="68" y1="86" x2="158" y2="86" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="68" y1="96" x2="138" y2="96" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <circle cx="166" cy="90" r="4" fill="none" stroke={ACCENT} strokeWidth="1.4" />
    <path d="M163 90 L165.5 92 L169 88" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="68" y1="110" x2="118" y2="110" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    {/* Laptop base */}
    <path
      d="M40 132 H200 L208 144 H32 Z"
      fill="none"
      stroke={STROKE}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <line x1="108" y1="138" x2="132" y2="138" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const StepClipboard = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    {/* Clipboard */}
    <rect
      x="74"
      y="32"
      width="92"
      height="124"
      rx="3"
      fill="none"
      stroke={STROKE}
      strokeWidth="1.4"
    />
    {/* Clip */}
    <rect
      x="104"
      y="22"
      width="32"
      height="18"
      rx="3"
      fill="none"
      stroke={STROKE}
      strokeWidth="1.4"
    />
    {/* Form lines */}
    <line x1="86" y1="58" x2="154" y2="58" stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="86" y1="70" x2="138" y2="70" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <line x1="86" y1="80" x2="146" y2="80" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <line x1="86" y1="90" x2="130" y2="90" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    {/* Vehicle outline schematic */}
    <g transform="translate(86 104)">
      <path
        d="M0 22 Q4 12 16 10 L26 8 Q40 4 56 6 Q64 8 68 14 L68 22 Z"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <line x1="0" y1="22" x2="68" y2="22" stroke={STROKE_FAINT} strokeWidth="1" />
      <circle cx="14" cy="22" r="3.4" fill="none" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="54" cy="22" r="3.4" fill="none" stroke={STROKE} strokeWidth="1.2" />
    </g>
    {/* Pen — small magenta accent */}
    <g transform="rotate(38 184 100)">
      <line x1="174" y1="100" x2="206" y2="100" stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="206" y1="100" x2="212" y2="100" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      <line x1="172" y1="100" x2="176" y2="100" stroke={STROKE} strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export const StepReview = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    {/* Document */}
    <path
      d="M76 28 H148 L180 60 V152 H76 Z"
      fill="none"
      stroke={STROKE}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M148 28 V60 H180" fill="none" stroke={STROKE} strokeWidth="1.4" strokeLinejoin="round" />
    {/* Document lines */}
    <line x1="86" y1="80" x2="170" y2="80" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <line x1="86" y1="92" x2="160" y2="92" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <line x1="86" y1="104" x2="166" y2="104" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <line x1="86" y1="116" x2="156" y2="116" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />
    <line x1="86" y1="128" x2="170" y2="128" stroke={STROKE_FAINT} strokeWidth="1" strokeLinecap="round" />

    {/* Magnifying glass — magenta accent for review focus */}
    <g transform="translate(86 96)">
      <circle cx="0" cy="0" r="22" fill="none" stroke={ACCENT} strokeWidth="1.6" />
      <circle cx="0" cy="0" r="22" fill="rgba(255,90,163,0.05)" />
      <line x1="16" y1="16" x2="34" y2="34" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  </svg>
);

export const StepEnvelope = ({ className }: StepIconProps) => (
  <svg {...baseProps} className={cn(baseProps.className, className)} aria-hidden>
    {/* Envelope */}
    <rect
      x="48"
      y="54"
      width="144"
      height="100"
      rx="3"
      fill="none"
      stroke={STROKE}
      strokeWidth="1.4"
    />
    {/* Open flap geometry */}
    <path
      d="M48 54 L120 110 L192 54"
      fill="none"
      stroke={STROKE_FAINT}
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M48 154 L96 100"
      stroke={STROKE_FAINT}
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M192 154 L144 100"
      stroke={STROKE_FAINT}
      strokeWidth="1"
      strokeLinecap="round"
    />

    {/* Folded letter peeking out */}
    <g transform="translate(82 32)">
      <rect
        x="0"
        y="0"
        width="76"
        height="58"
        rx="2"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.3"
      />
      <line x1="10" y1="14" x2="66" y2="14" stroke={STROKE_FAINT} strokeWidth="0.9" strokeLinecap="round" />
      <line x1="10" y1="22" x2="56" y2="22" stroke={STROKE_FAINT} strokeWidth="0.9" strokeLinecap="round" />
      <line x1="10" y1="30" x2="60" y2="30" stroke={STROKE_FAINT} strokeWidth="0.9" strokeLinecap="round" />
      {/* Settlement glyph — restrained pound symbol */}
      <text
        x="38"
        y="50"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="18"
        fontStyle="italic"
        fill={ACCENT}
      >
        £
      </text>
    </g>

    {/* Wax-seal style mark on envelope — small magenta dot */}
    <circle cx="120" cy="124" r="6" fill="none" stroke={ACCENT} strokeWidth="1.4" />
    <circle cx="120" cy="124" r="2" fill={ACCENT} />
  </svg>
);
