"use client";

import { useState } from "react";
import { Button } from "@/kit/Button";
import { Rating } from "@/kit/Rating";
import { compareTable, partners, pricingCtas } from "@/results/data";
import { PartnerMark } from "@/results/components/TopMatchCard";

const logoIds = new Set(["gusto", "justworks", "surepayroll"]);
const previewCount = 3;

function websiteLine(name: string) {
  const possessive = name.endsWith("s") ? `${name}’` : `${name}’s`;
  return `On ${possessive} website`;
}

function cellClass(value: string) {
  const muted = value === "—" || value === "Custom quote" || value === "Quote required";
  return muted ? "compare-value is-muted" : "compare-value";
}

export function CompareList({ onPricing }: { onPricing: () => void }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <section className="compare" id="compare" aria-labelledby="compare-title">
      <h2 id="compare-title">{compareTable.title}</h2>
      <div className="compare-scroll">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-corner" scope="col" />
              {compareTable.columns.map((column) => (
                <th key={column.id} scope="col" className={column.lead ? "is-lead" : undefined}>
                  <span className="compare-kicker">{column.kicker}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" />
              {compareTable.columns.map((column) => (
                <td key={column.id} className={column.lead ? "is-lead" : undefined}>
                  {logoIds.has(column.id) ? (
                    <PartnerMark id={column.id} name={column.name} />
                  ) : (
                    <span className="compare-word">{column.name}</span>
                  )}
                </td>
              ))}
            </tr>
            {compareTable.rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.label}</th>
                {compareTable.columns.map((column, index) => (
                  <td key={column.id} className={column.lead ? "is-lead" : undefined}>
                    <p className={cellClass(row.values[index])}>{row.values[index]}</p>
                  </td>
                ))}
              </tr>
            ))}
            <tr className="compare-cta-row">
              <th scope="row" />
              {compareTable.columns.map((column, index) => (
                <td key={column.id} className={column.lead ? "is-lead" : undefined}>
                  <Button
                    variant={column.lead ? "primary" : "secondary"}
                    className={column.lead ? "compare-solid" : "compare-outline"}
                    onClick={onPricing}
                  >
                    {pricingCtas[index]}
                  </Button>
                  <p className="site">{websiteLine(column.name)}</p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="compare-mobile">
        {compareTable.columns.map((column, columnIndex) => {
          const rated = partners.find((partner) => partner.id === column.id);
          const expanded = open[column.id] ?? false;
          const visible = expanded ? compareTable.rows : compareTable.rows.slice(0, previewCount);

          return (
            <article key={column.id} className={column.lead ? "compare-mobile-row is-lead" : "compare-mobile-row"}>
              <div className="compare-mobile-id">
                <p className="compare-mobile-kicker">{column.kicker}</p>
                {logoIds.has(column.id) ? (
                  <PartnerMark id={column.id} name={column.name} />
                ) : (
                  <span className="compare-word">{column.name}</span>
                )}
                <h3 className="compare-mobile-name">{column.name}</h3>
                {rated ? (
                  <Rating score={rated.score} stars={rated.stars} label={rated.verdict} compact stacked />
                ) : null}
                <Button
                  variant={column.lead ? "primary" : "secondary"}
                  className={column.lead ? "compare-solid" : "compare-outline"}
                  onClick={onPricing}
                >
                  {pricingCtas[columnIndex]}
                </Button>
                <p className="site">{websiteLine(column.name)}</p>
              </div>
              <div className="compare-mobile-features">
                <ul>
                  {visible.map((row) => (
                    <li key={row.id}>
                      <span className="compare-mobile-label">{row.label}</span>
                      <span className={cellClass(row.values[columnIndex])}>{row.values[columnIndex]}</span>
                    </li>
                  ))}
                </ul>
                {compareTable.rows.length > previewCount ? (
                  <button
                    type="button"
                    className="compare-more"
                    aria-expanded={expanded}
                    onClick={() => setOpen((current) => ({ ...current, [column.id]: !expanded }))}
                  >
                    {expanded ? "View less" : "View more"}
                  </button>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      <p className="compare-note">{compareTable.note}</p>
    </section>
  );
}
