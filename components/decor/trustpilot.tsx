import { cn } from "@/lib/cn";

interface TrustpilotProps {
  rating?: string;
  count?: string;
  className?: string;
  /** "dark" → on a navy hero/footer surface (light text).
   *  "light" → on a white/cream surface (navy text). */
  tone?: "dark" | "light";
}

/**
 * Trustpilot star block — five filled review stars with rating and count.
 * Star is the canonical Trustpilot square-rounded shape.
 */
export const Trustpilot = ({
  rating = "4.7",
  count = "20,123",
  className,
  tone = "dark",
}: TrustpilotProps) => {
  const isDark = tone === "dark";
  return (
    <div className={cn("flex items-center gap-2.5 text-[0.82rem]", className)}>
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
      <span className={isDark ? "text-cream-50/85" : "text-blue-900/85"}>
        <strong className={cn("font-semibold", isDark ? "text-cream-50" : "text-blue-900")}>
          {rating}/5
        </strong>
        <span className="mx-1">·</span>
        {count}+ reviews
      </span>
      <span
        className={cn(
          "ml-1 inline-flex items-center gap-1 font-medium",
          isDark ? "text-cream-50/85" : "text-blue-900/85",
        )}
      >
        <TrustpilotMark />
        Trustpilot
      </span>
    </div>
  );
};

const TrustpilotMark = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#00b67a" aria-hidden>
    <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
  </svg>
);
