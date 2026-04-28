import { cn } from "@/lib/cn";

interface CounselPortraitProps {
  variant: "coby" | "david";
  className?: string;
}

/**
 * Editorial portrait illustrations for the firm's two solicitors.
 * Stylised silhouette treatment in deep ink with magenta/gold rim-lighting —
 * intentionally non-photoreal so the firm's actual photography can replace them later.
 */
export const CounselPortrait = ({ variant, className }: CounselPortraitProps) => {
  if (variant === "coby") return <CobyPortrait className={className} />;
  return <DavidPortrait className={className} />;
};

const CobyPortrait = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 480 600"
    className={cn("h-full w-full", className)}
    aria-label="Portrait of Coby Benson, Solicitor"
  >
    <defs>
      <linearGradient id="coby-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1340" />
        <stop offset="60%" stopColor="#0e0c30" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <linearGradient id="coby-rim" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2554a0" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#1f4da6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="coby-suit" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#1c2554" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <radialGradient id="coby-spot" cx="50%" cy="20%" r="80%">
        <stop offset="0%" stopColor="#5184d0" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#5184d0" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* backdrop */}
    <rect width="480" height="600" fill="url(#coby-bg)" />
    <rect width="480" height="600" fill="url(#coby-spot)" />

    {/* decorative ornament hairline — gold */}
    <path d="M40 540 Q240 510 440 540" stroke="#1f4da6" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M60 552 L420 552" stroke="#1f4da6" strokeWidth="0.5" fill="none" opacity="0.3" />

    {/* shoulders */}
    <path
      d="M60 600 L70 480 Q90 410 240 410 Q390 410 410 480 L420 600 Z"
      fill="url(#coby-suit)"
    />
    {/* collar / lapels */}
    <path d="M180 410 L150 470 L200 530 L240 460 Z" fill="#06081a" />
    <path d="M300 410 L330 470 L280 530 L240 460 Z" fill="#06081a" />
    {/* shirt */}
    <path d="M210 410 L220 470 L240 500 L260 470 L270 410 Z" fill="#f5efe0" />
    {/* tie — magenta */}
    <path d="M232 420 L226 500 L240 514 L254 500 L248 420 Z" fill="#1f4da6" />
    <path d="M232 420 L248 420 L240 432 Z" fill="#06081a" />
    {/* head */}
    <ellipse cx="240" cy="265" rx="92" ry="110" fill="#3a2a1a" />
    <ellipse cx="240" cy="270" rx="78" ry="94" fill="#a07550" />
    {/* hair — short, slightly tousled */}
    <path
      d="M150 230 Q170 145 240 138 Q310 138 332 230 Q322 200 290 178 Q240 150 192 178 Q160 200 150 230 Z"
      fill="#1a1208"
    />
    {/* beard — short stubble */}
    <path d="M180 322 Q240 360 300 322 Q294 360 240 376 Q186 360 180 322 Z" fill="#3a2a1a" opacity="0.7" />
    {/* eyes */}
    <ellipse cx="208" cy="262" rx="4.5" ry="3" fill="#0a0703" />
    <ellipse cx="272" cy="262" rx="4.5" ry="3" fill="#0a0703" />
    {/* brows */}
    <path d="M194 248 Q208 240 224 246" stroke="#1a1208" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M256 246 Q272 240 286 248" stroke="#1a1208" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* smile */}
    <path d="M218 312 Q240 322 262 312" stroke="#3a2a1a" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* magenta rim light — restrained */}
    <path
      d="M70 480 L60 600"
      stroke="url(#coby-rim)"
      strokeWidth="3.5"
      fill="none"
      opacity="0.7"
    />
    {/* Architectural roundel — replaces the gold sparkle */}
    <g transform="translate(380 430)" opacity="0.5">
      <circle cx="0" cy="0" r="20" fill="none" stroke="#1f4da6" strokeWidth="0.9" />
      <circle cx="0" cy="0" r="13" fill="none" stroke="#1f4da6" strokeWidth="0.5" opacity="0.7" />
      <line x1="-9" y1="0" x2="9" y2="0" stroke="#1f4da6" strokeWidth="0.7" strokeLinecap="round" />
      <line x1="0" y1="-9" x2="0" y2="9" stroke="#1f4da6" strokeWidth="0.7" strokeLinecap="round" />
    </g>
  </svg>
);

const DavidPortrait = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 480 600"
    className={cn("h-full w-full", className)}
    aria-label="Portrait of David Goldstein, Solicitor"
  >
    <defs>
      <linearGradient id="david-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1340" />
        <stop offset="60%" stopColor="#0e0c30" />
        <stop offset="100%" stopColor="#06081a" />
      </linearGradient>
      <linearGradient id="david-rim" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b0c8e8" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#1f4da6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="david-suit" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#2a1758" />
        <stop offset="100%" stopColor="#0a0e27" />
      </linearGradient>
      <radialGradient id="david-spot" cx="50%" cy="20%" r="80%">
        <stop offset="0%" stopColor="#b0c8e8" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#b0c8e8" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect width="480" height="600" fill="url(#david-bg)" />
    <rect width="480" height="600" fill="url(#david-spot)" />

    <path d="M40 540 Q240 510 440 540" stroke="#1f4da6" strokeWidth="1" fill="none" opacity="0.5" />
    <path d="M60 552 L420 552" stroke="#1f4da6" strokeWidth="0.5" fill="none" opacity="0.3" />

    {/* shoulders */}
    <path
      d="M60 600 L70 480 Q90 410 240 410 Q390 410 410 480 L420 600 Z"
      fill="url(#david-suit)"
    />
    <path d="M180 410 L150 470 L200 530 L240 460 Z" fill="#06081a" />
    <path d="M300 410 L330 470 L280 530 L240 460 Z" fill="#06081a" />
    <path d="M210 410 L220 470 L240 500 L260 470 L270 410 Z" fill="#f5efe0" />
    {/* tie — burgundy */}
    <path d="M232 420 L226 500 L240 514 L254 500 L248 420 Z" fill="#163d85" />
    <path d="M232 420 L248 420 L240 432 Z" fill="#06081a" />
    {/* pocket square */}
    <path d="M306 470 L336 470 L330 482 L306 478 Z" fill="#f5efe0" />
    {/* head */}
    <ellipse cx="240" cy="262" rx="88" ry="108" fill="#3a2a1a" />
    <ellipse cx="240" cy="266" rx="74" ry="92" fill="#a07550" />
    {/* hair — neat side-part, greying at temples */}
    <path
      d="M158 232 Q176 150 240 144 Q304 144 322 230 Q314 200 290 184 Q240 162 198 188 Q170 204 158 232 Z"
      fill="#1a1208"
    />
    <path d="M158 232 Q170 222 184 232" stroke="#5a4a3a" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M306 232 Q318 222 332 232" stroke="#5a4a3a" strokeWidth="2" fill="none" opacity="0.6" />
    {/* glasses — gold rim */}
    <g stroke="#5184d0" strokeWidth="2.4" fill="none">
      <circle cx="208" cy="265" r="20" />
      <circle cx="272" cy="265" r="20" />
      <line x1="228" y1="265" x2="252" y2="265" />
      <line x1="188" y1="265" x2="174" y2="262" />
      <line x1="292" y1="265" x2="306" y2="262" />
    </g>
    {/* eyes inside glasses */}
    <ellipse cx="208" cy="266" rx="4" ry="3" fill="#0a0703" />
    <ellipse cx="272" cy="266" rx="4" ry="3" fill="#0a0703" />
    {/* brows */}
    <path d="M192 244 Q208 238 224 244" stroke="#1a1208" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M256 244 Q272 238 286 244" stroke="#1a1208" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* slight smile */}
    <path d="M222 322 Q240 330 258 322" stroke="#3a2a1a" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* gold rim light — restrained */}
    <path d="M410 480 L420 600" stroke="url(#david-rim)" strokeWidth="3.5" fill="none" opacity="0.8" />
    {/* Architectural roundel ornament */}
    <g transform="translate(100 430)" opacity="0.5">
      <circle cx="0" cy="0" r="18" fill="none" stroke="#5184d0" strokeWidth="0.9" />
      <circle cx="0" cy="0" r="11" fill="none" stroke="#5184d0" strokeWidth="0.5" opacity="0.7" />
      <line x1="-8" y1="0" x2="8" y2="0" stroke="#5184d0" strokeWidth="0.7" strokeLinecap="round" />
      <line x1="0" y1="-8" x2="0" y2="8" stroke="#5184d0" strokeWidth="0.7" strokeLinecap="round" />
    </g>
  </svg>
);
