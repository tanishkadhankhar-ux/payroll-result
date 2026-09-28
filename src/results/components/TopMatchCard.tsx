import type { CSSProperties } from "react";
import { Check } from "lucide-react";
import { Button } from "@/kit/Button";
import { Rating } from "@/kit/Rating";
import type { Partner } from "@/results/data";

const partnerLogos = new Set(["surepayroll", "gusto", "justworks"]);

export function PartnerMark({ id, name }: { id: string; name: string }) {
  if (!partnerLogos.has(id)) {
    if (!name) return null;
    return <span className="partner-word">{name}</span>;
  }

  const logo = id === "surepayroll" ? `/partners/${id}.webp` : `/partners/${id}.svg`;
  const style =
    id === "surepayroll" ? ({ "--logo-ratio": "5.49" } as CSSProperties) : undefined;

  return (
    // Partner wordmark artwork.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="partner-mark" src={logo} alt={name} style={style} />
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
        {partner.score != null && partner.stars != null ? (
          <Rating score={partner.score} stars={partner.stars} label={partner.verdict} />
        ) : null}
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
          <Check aria-hidden strokeWidth={2.6} />
          {partner.check}
        </p>
        <div className="match-actions">
          <Button variant="primary" full onClick={onPricing}>
            Get pricing
          </Button>
          <Button variant="secondary" full onClick={onCompare}>
            Compare all three
          </Button>
        </div>
      </div>
    </aside>
  );
}
