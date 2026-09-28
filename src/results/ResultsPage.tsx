"use client";

import { partners } from "@/results/data";
import { CompareList } from "@/results/components/CompareList";
import { FaqList } from "@/results/components/FaqList";
import { NeedsCard } from "@/results/components/NeedsCard";
import { ResultsHero } from "@/results/components/ResultsHero";
import { Shortlist } from "@/results/components/Shortlist";
import { ShortlistDock } from "@/results/components/ShortlistDock";
import { SiteFooter } from "@/results/components/SiteFooter";
import { SiteHeader } from "@/results/components/SiteHeader";
import { TopMatchCard } from "@/results/components/TopMatchCard";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ResultsPage() {
  return (
    <div className="page">
      <SiteHeader />
      <ResultsHero onPricing={() => scrollToId("shortlist")} />
      <div className="results-band">
        <div className="results-top">
          <NeedsCard />
          <TopMatchCard
            partner={partners[0]}
            onPricing={() => scrollToId("shortlist")}
            onCompare={() => scrollToId("compare")}
          />
        </div>
      </div>
      <div className="shortlist-band">
        <Shortlist
          partners={partners}
          onPricing={() => scrollToId("shortlist")}
          onCompare={() => scrollToId("compare")}
        />
        <ShortlistDock partners={partners} onPricing={() => scrollToId("shortlist")} />
      </div>
      <CompareList onPricing={() => scrollToId("shortlist")} />
      <FaqList />
      <SiteFooter />
    </div>
  );
}
