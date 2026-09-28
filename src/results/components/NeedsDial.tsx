"use client";

import { useEffect, useState } from "react";

const ARC = Math.PI * 50;
const FILL_MS = 900;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function NeedsDial({ value, max }: { value: number; max: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / FILL_MS);
      setDisplay(value * easeOutCubic(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const ratio = max === 0 ? 0 : Math.min(1, display / max);
  const shown = Math.round(display);

  return (
    <div
      className="dial"
      role="meter"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={`${value} of ${max} needs covered`}
    >
      <svg viewBox="0 0 120 72" aria-hidden>
        <path className="track" d="M10 62 A 50 50 0 0 1 110 62" />
        <path
          className="fill"
          d="M10 62 A 50 50 0 0 1 110 62"
          style={{ strokeDasharray: ARC, strokeDashoffset: ARC * (1 - ratio) }}
        />
      </svg>
      <p className="dial-figure">
        <span>{shown}</span>
        <small>/{max}</small>
      </p>
      <p className="dial-cap">Needs covered</p>
    </div>
  );
}
