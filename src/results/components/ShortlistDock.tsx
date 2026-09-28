import { useEffect, useState } from "react";
import { ArrowRight, Trophy } from "lucide-react";
import { BadgeBanner } from "@/kit/BadgeBanner";
import { Button } from "@/kit/Button";
import { cn } from "@/lib/utils";
import type { Partner } from "@/results/data";
import { PartnerMark } from "@/results/components/TopMatchCard";

export function ShortlistDock({
  partners,
  onPricing,
}: {
  partners: Partner[];
  onPricing: () => void;
}) {
  const lead = partners[0];
  const [gloss, setGloss] = useState(false);

  useEffect(() => {
    const update = () => setGloss(window.scrollY > window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!lead) return null;

  return (
    <aside className="dock" aria-label="Your shortlist">
      <div className="dock-row">
        <div className="dock-lead">
          <BadgeBanner tone="editorial" glyph={<Trophy aria-hidden />}>
            Your top match
          </BadgeBanner>
          <span className="dock-logo">
            <PartnerMark id={lead.id} name={lead.name} />
          </span>
          <p className="dock-fit">
            {lead.score != null
              ? `${lead.fitLabel} · ${lead.score.toFixed(1)} ${lead.verdict}`
              : lead.fitLabel}
          </p>
        </div>
      </div>
      <Button variant="primary" className={cn("dock-pricing", gloss && "is-gloss")} onClick={onPricing}>
        Get pricing
        <ArrowRight aria-hidden />
      </Button>
    </aside>
  );
}
