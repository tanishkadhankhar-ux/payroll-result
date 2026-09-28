import { ArrowRight, Check, Trophy } from "lucide-react";
import { BadgeBanner } from "@/kit/BadgeBanner";
import { Button } from "@/kit/Button";
import type { Partner } from "@/results/data";
import { PartnerMark } from "@/results/components/TopMatchCard";

export function ShortlistDock({
  partners,
  onPricing,
}: {
  partners: Partner[];
  onPricing: () => void;
}) {
  const [lead, ...rest] = partners;
  if (!lead) return null;

  return (
    <aside className="dock" aria-label="Your shortlist">
      <div className="dock-row">
        <div className="dock-lead">
          <BadgeBanner tone="editorial" glyph={<Trophy aria-hidden />}>
            Your top match
          </BadgeBanner>
          <PartnerMark id={lead.id} name={lead.name} />
          <p className="dock-fit">
            {lead.fitLabel} · {lead.score.toFixed(1)} {lead.verdict}
          </p>
        </div>
        {rest.map((partner) => (
          <BadgeBanner
            key={partner.id}
            tone={partner.badgeTone}
            glyph={partner.badgeTone === "editorial" ? <Trophy aria-hidden /> : <Check aria-hidden />}
          >
            {partner.badge}
          </BadgeBanner>
        ))}
      </div>
      <Button variant="primary" className="dock-pricing" onClick={onPricing}>
        Get pricing
        <ArrowRight aria-hidden />
      </Button>
    </aside>
  );
}
