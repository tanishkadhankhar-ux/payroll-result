import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  short = false,
}: {
  className?: string;
  short?: boolean;
}) {
  return (
    // Brand artwork — exemption: masthead wordmark, not a theme token.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={short ? "/brand/forbes-advisor-wordmark.png" : "/brand/forbes-advisor-wordmark.png"}
      alt="Forbes Advisor"
      className={cn("wordmark", short && "is-short", className)}
    />
  );
}
