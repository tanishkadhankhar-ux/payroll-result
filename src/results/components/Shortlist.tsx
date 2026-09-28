import { Check, Trophy } from "lucide-react";
import { BadgeBanner } from "@/kit/BadgeBanner";
import { Button } from "@/kit/Button";
import { Rating } from "@/kit/Rating";
import { pricingCtas, type Partner } from "@/results/data";
import { PartnerMark } from "@/results/components/TopMatchCard";

function websiteLine(name: string) {
  const possessive = name.endsWith("s") ? `${name}’` : `${name}’s`;
  return `On ${possessive} website`;
}

export function Shortlist({
  partners,
  onPricing,
  onCompare,
}: {
  partners: Partner[];
  onPricing: () => void;
  onCompare: () => void;
}) {
  const lead = partners[0];

  return (
    <section className="shortlist" id="shortlist" aria-labelledby="shortlist-title">
      <h2 id="shortlist-title">Here’s your shortlist</h2>
      <div className="shortlist-cards">
        {partners.map((partner, index) => (
          <article key={partner.id} className={index === 0 ? "card is-lead" : "card"}>
            <BadgeBanner
              tone={partner.badgeTone}
              glyph={partner.badgeTone === "editorial" ? <Trophy aria-hidden /> : <Check aria-hidden />}
            >
              {partner.badge}
            </BadgeBanner>
            <div className="card-id">
              <span className="rank">{index + 1}</span>
              <PartnerMark id={partner.id} name="" />
              {partner.score != null && partner.stars != null ? (
                <Rating score={partner.score} stars={partner.stars} label={partner.verdict} compact stacked />
              ) : null}
            </div>
            <h3 className={index === 0 ? undefined : "is-link"}>{partner.name}</h3>
            <div className="checks">
              {partner.checks.map((point) => (
                <p className="check" key={point}>
                  <Check aria-hidden />
                  {point}
                </p>
              ))}
            </div>
            <Button variant="primary" full className="card-cta" onClick={onPricing}>
              {pricingCtas[index]}
            </Button>
            <p className="site">{websiteLine(partner.name)}</p>
          </article>
        ))}
      </div>
      <div className="shortlist-actions">
        <Button variant="primary" className="shortlist-pricing" onClick={onPricing}>
          Get pricing
        </Button>
        <Button variant="secondary" className="shortlist-compare" onClick={onCompare}>
          Keep comparing
        </Button>
        <p>
          {lead.name} is highlighted for 5 of your 5 needs.
        </p>
      </div>
    </section>
  );
}
