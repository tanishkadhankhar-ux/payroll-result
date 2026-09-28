"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/results/data";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function FaqList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">FAQs</h2>
      <div className="faq-list">
        {faqs.map((item) => {
          const open = openId === item.id;
          const panelId = `${item.id}-panel`;

          return (
            <div key={item.id} className="faq-item">
              <h3>
                <button
                  type="button"
                  className="faq-toggle"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  {item.question}
                  <ChevronDown aria-hidden />
                </button>
              </h3>
              <div id={panelId} className="faq-panel" role="region" hidden={!open}>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
