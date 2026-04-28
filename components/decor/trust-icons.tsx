import { cn } from "@/lib/cn";

const wrap = (className?: string) =>
  cn(
    "h-9 w-9 shrink-0 text-blue-700",
    className,
  );

interface IconProps {
  className?: string;
}

export const IconHandshake = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <path
      d="M6 22 L14 14 L22 22 L18 26 L24 32 L30 26 L26 22 L34 14 L42 22 L36 30 L26 40 Q24 42 22 40 L12 30 Z"
      fill="currentColor"
      opacity="0.18"
    />
    <path
      d="M6 22 L14 14 L22 22 M42 22 L34 14 L26 22 M22 22 L18 26 L24 32 L30 26 L26 22 M24 32 L34 30"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconClipboard = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <rect x="10" y="10" width="28" height="32" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <rect x="18" y="6" width="12" height="8" rx="2" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="1.8" />
    <line x1="16" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="34" x2="30" y2="34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconCounsel = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M10 40 Q10 28 24 28 Q38 28 38 40"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <line x1="20" y1="34" x2="28" y2="34" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const IconShield = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <path
      d="M24 6 L40 12 L40 24 Q40 36 24 42 Q8 36 8 24 L8 12 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path
      d="M16 24 L22 30 L34 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconRibbon = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <circle cx="24" cy="20" r="11" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.12" />
    <path
      d="M18 28 L14 42 L20 38 L24 44 L28 38 L34 42 L30 28"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M20 18 L23 22 L29 16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconChat = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <path
      d="M8 10 L36 10 Q40 10 40 14 L40 30 Q40 34 36 34 L22 34 L14 42 L14 34 L10 34 Q8 34 8 30 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <circle cx="18" cy="22" r="1.6" fill="currentColor" />
    <circle cx="24" cy="22" r="1.6" fill="currentColor" />
    <circle cx="30" cy="22" r="1.6" fill="currentColor" />
  </svg>
);

export const IconStopwatch = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <circle cx="24" cy="26" r="14" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.12" />
    <line x1="20" y1="6" x2="28" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="6" x2="24" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 26 L24 18 M24 26 L31 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconScales = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <line x1="24" y1="6" x2="24" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="14" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 14 L9 26 L19 26 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
    <path d="M34 14 L29 26 L39 26 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
    <line x1="18" y1="40" x2="30" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconLock = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <rect x="10" y="22" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.12" />
    <path
      d="M16 22 L16 16 Q16 8 24 8 Q32 8 32 16 L32 22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="24" cy="32" r="2.4" fill="currentColor" />
  </svg>
);

export const IconThumb = ({ className }: IconProps) => (
  <svg viewBox="0 0 48 48" className={wrap(className)} fill="none" aria-hidden>
    <path
      d="M14 22 L20 22 L24 8 Q24 6 26 6 Q30 6 30 12 L30 20 L40 20 Q42 20 42 22 L40 38 Q40 42 36 42 L18 42 Q14 42 14 38 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <rect x="6" y="22" width="6" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
