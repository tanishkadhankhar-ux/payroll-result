import { Check } from "lucide-react";
import { Button } from "@/kit/Button";
import { Rating } from "@/kit/Rating";
import type { Partner } from "@/results/data";

export function PartnerMark({ id, name }: { id: string; name: string }) {
  return (
    // Partner wordmark artwork.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="partner-mark" src={`/partners/${id}.svg`} alt={name} />
  );
}

export function TopMatchCard({
  partner,
  onPricing,
  onCompare,
}: {
  partner: Partner;
  onPricing: () => void;
  onCompare: () => void;
}) {
  return (
    <aside className="match">
      <p className="match-ribbon">
        <span>Your top match</span>
        <span>{partner.ribbonAside}</span>
      </p>
      <div className="match-body">
        <PartnerMark id={partner.id} name={partner.name} />
        <Rating score={partner.score} stars={partner.stars} label={partner.verdict} />
        <div className="fit">
          <div className="fit-label">
            <span>Fit with your answers</span>
            <strong>100%</strong>
          </div>
          <div className="fit-track" aria-hidden>
            <span className="fit-fill" />
          </div>
          <p className="fit-note">{partner.highlight}</p>
        </div>
        <p className="check">
          <Check aria-hidden />
          {partner.check}
        </p>
        <Button variant="primary" full className="shine" onClick={onPricing}>
          Get pricing
        </Button>
        <Button variant="secondary" full onClick={onCompare}>
          Compare all three
        </Button>
      </div>
    </aside>
  );
}
