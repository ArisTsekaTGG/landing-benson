import { cn } from "@/lib/cn";

interface MarqueeStarProps {
  className?: string;
  bulbs?: number;
  size?: number;
}

/**
 * Five-point marquee star with running chase lights — the playbill motif.
 * Bulbs animate via the `bulb` keyframe, staggered with custom delays.
 */
export const MarqueeStar = ({ className, bulbs = 30, size = 280 }: MarqueeStarProps) => {
  // 5-point star polygon points (cx 100, cy 100, outer r 95, inner r 38)
  const cx = 100;
  const cy = 100;
  const outerR = 92;
  const innerR = 38;
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }

  // Distribute bulbs along the star perimeter by sampling segments.
  const bulbPositions: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < 10; i++) {
    const a = points[i].split(",").map(Number);
    const b = points[(i + 1) % 10].split(",").map(Number);
    const perSegment = Math.ceil(bulbs / 10);
    for (let j = 0; j < perSegment; j++) {
      const t = j / perSegment;
      bulbPositions.push({
        x: a[0] + (b[0] - a[0]) * t,
        y: a[1] + (b[1] - a[1]) * t,
      });
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={cn("drop-shadow-[0_0_30px_rgba(232,184,111,0.35)]", className)}
      aria-hidden
    >
      <defs>
        <radialGradient id="starbody" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#3a2a14" />
          <stop offset="60%" stopColor="#1a1208" />
          <stop offset="100%" stopColor="#0a0703" />
        </radialGradient>
        <linearGradient id="staredge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3cf91" />
          <stop offset="50%" stopColor="#d4a248" />
          <stop offset="100%" stopColor="#7a5818" />
        </linearGradient>
      </defs>
      <polygon points={points.join(" ")} fill="url(#starbody)" stroke="url(#staredge)" strokeWidth="2" />
      <polygon
        points={points.join(" ")}
        fill="none"
        stroke="rgba(255,243,218,0.25)"
        strokeWidth="0.6"
        transform="scale(0.78) translate(28 28)"
      />
      {bulbPositions.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="2.4"
          fill="#fff3da"
          className="bulb"
          style={{ animationDelay: `${(i % 8) * 0.18}s` }}
        />
      ))}
    </svg>
  );
};
