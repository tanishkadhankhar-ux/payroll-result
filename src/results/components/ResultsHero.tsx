import { ArrowRight } from "lucide-react";
import { Button } from "@/kit/Button";
import { hero, needs } from "@/results/data";

export function ResultsHero({ onPricing }: { onPricing: () => void }) {
  const covered = Number(needs.covered);
  const needLabel = covered === 1 ? "need" : "needs";

  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 id="welcome-title">{hero.title}</h1>
      <p className="welcome-lead">{hero.lead}</p>
      <p className="welcome-cover">
        SurePayroll covers all {covered} {needLabel} you named.
      </p>
      <Button variant="primary" className="welcome-pricing" onClick={onPricing}>
        Get SurePayroll pricing
        <ArrowRight aria-hidden />
      </Button>
    </section>
  );
}
