import { cn } from "@/lib/cn";

interface SpotlightBeamsProps {
  className?: string;
}

/** Theatrical spotlight cones radiating from above the stage. */
export const SpotlightBeams = ({ className }: SpotlightBeamsProps) => (
  <svg
    viewBox="0 0 1200 800"
    preserveAspectRatio="xMidYMin slice"
    className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    aria-hidden
  >
    <defs>
      <linearGradient id="beam-magenta" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#ff2d8a" stopOpacity="0.0" />
        <stop offset="20%" stopColor="#ff2d8a" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#ff2d8a" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="beam-gold" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#e8b86f" stopOpacity="0" />
        <stop offset="20%" stopColor="#e8b86f" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#e8b86f" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="beam-cyan" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#7ab2ff" stopOpacity="0" />
        <stop offset="20%" stopColor="#7ab2ff" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#7ab2ff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <polygon points="200,-50 380,-50 660,820 460,820" fill="url(#beam-magenta)" />
    <polygon points="540,-50 700,-50 760,820 560,820" fill="url(#beam-gold)" />
    <polygon points="900,-50 1080,-50 920,820 720,820" fill="url(#beam-cyan)" />
    <polygon points="980,-50 1180,-50 1320,820 1100,820" fill="url(#beam-magenta)" />
  </svg>
);
