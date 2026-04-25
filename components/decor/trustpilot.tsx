import { cn } from "@/lib/cn";

interface TrustpilotProps {
  rating?: string;
  count?: string;
  className?: string;
  tone?: "dark" | "light";
}

/**
 * Trustpilot star block — five filled review-stars with rating and count.
 * Star drawn as the canonical Trustpilot square-rounded shape.
 */
export const Trustpilot = ({
  rating = "4.8",
  count = "18,000",
  className,
  tone = "dark",
}: TrustpilotProps) => {
  const labelColor = tone === "dark" ? "rgba(245,239,224,0.86)" : "#0a0e27";
  return (
    <div className={cn("flex items-center gap-2.5 text-[0.78rem]", className)}>
      <span
        className="font-medium uppercase tracking-[0.18em]"
        style={{ color: tone === "dark" ? "#22c08a" : "#22a06b" }}
      >
        Excellent
      </span>
      <div className="flex gap-[3px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="grid h-5 w-5 place-items-center rounded-[2px]"
            style={{ background: "#00b67a" }}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="white" aria-hidden>
              <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
            </svg>
          </span>
        ))}
      </div>
      <span style={{ color: labelColor }}>
        Rated <strong className="font-semibold text-foreground">{rating}/5</strong> — {count}+ reviews
      </span>
    </div>
  );
};
