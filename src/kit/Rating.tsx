import { cn } from "@/lib/utils";

const STAR_PATH =
  "M6 0.8 7.4 4.2l3.7.3-2.8 2.4.9 3.6L6 8.8 2.8 10.5l.9-3.6L.9 4.5l3.7-.3L6 .8z";

function Stars({ filled }: { filled: boolean }) {
  return (
    <span className={cn("atlas-rating-row", filled && "is-filled")}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} className="atlas-rating-star" viewBox="0 0 12 12" aria-hidden>
          <path d={STAR_PATH} />
        </svg>
      ))}
    </span>
  );
}

export function Rating({
  score,
  stars = 5,
  label,
  compact = false,
  stacked = false,
}: {
  score: number;
  stars?: number;
  label?: string;
  compact?: boolean;
  stacked?: boolean;
}) {
  const fill = Math.min(5, Math.max(0, stars));
  const figure = score.toFixed(1);

  return (
    <div
      className={cn("atlas-rating", compact && "is-compact", stacked && "is-stacked")}
      aria-label={`${figure} out of 10${label ? `, ${label}` : ""}`}
    >
      <span className="atlas-rating-score num">{figure}</span>
      <span className="atlas-rating-rule" aria-hidden />
      <span className="atlas-rating-body">
        <span className="atlas-rating-stars" aria-hidden>
          <Stars filled={false} />
          <span className="atlas-rating-clip" style={{ width: `${(fill / 5) * 100}%` }}>
            <Stars filled />
          </span>
        </span>
        {label ? (
          <span className="atlas-rating-line">
            <span className="atlas-rating-label">{label}</span>
          </span>
        ) : null}
      </span>
    </div>
  );
}
