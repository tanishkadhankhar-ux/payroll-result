import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BadgeBanner({
  children,
  tone = "accent",
  glyph,
}: {
  children: ReactNode;
  tone?: "accent" | "editorial";
  glyph?: ReactNode;
}) {
  return (
    <span className={cn("atlas-badge", tone === "accent" && "is-accent")}>
      {glyph ? <span className="atlas-badge-mark">{glyph}</span> : null}
      {children}
    </span>
  );
}
