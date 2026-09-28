import { matchLead, matchReasons, needs, voice } from "@/results/data";
import { NeedsDial } from "@/results/components/NeedsDial";

export function NeedsCard() {
  return (
    <article className="needs">
      <h2 className="section-kicker">Why this is your match</h2>
      <div className="needs-card">
        <div className="score-row">
          <NeedsDial value={needs.covered} max={needs.total} />
          <div className="voice">
            {/* Portrait of the guide beside the dial. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero/specialist.webp" alt="" />
            <div className="voice-copy">
              <h3>{voice.title}</h3>
              <p>{voice.lead}</p>
              <p>{voice.body}</p>
            </div>
          </div>
        </div>
        <p className="needs-lead">{matchLead}</p>
        <div className="answers">
          <div className="answers-head">
            <span>You told us</span>
            <span>Why it matters</span>
          </div>
          {matchReasons.map((reason) => (
            <div key={reason.id}>
              <p>{reason.told}</p>
              <p>{reason.why}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
