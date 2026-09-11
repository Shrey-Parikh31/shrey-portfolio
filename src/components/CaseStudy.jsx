import { caseStudy } from "../data/content";
import "./CaseStudy.css";

export default function CaseStudy() {
  return (
    <section id="case-study" className="section case-study">
      <p className="section-label">case study</p>

      <div className="cs-card">
        <div className="cs-head">
          <div>
            <h3>{caseStudy.title}</h3>
            <p className="cs-subtitle">{caseStudy.subtitle}</p>
          </div>
          <span className="cs-dates">{caseStudy.dates}</span>
        </div>

        <p className="cs-role">{caseStudy.role}</p>

        <div className="chip-row cs-tools">
          {caseStudy.tools.map((t) => (
            <span className="chip small" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="cs-metrics">
          {caseStudy.metrics.map((m) => (
            <div className="cs-metric" key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        {caseStudy.sections.map((s) => (
          <div className="cs-section" key={s.heading}>
            <h4>{s.heading}</h4>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {s.bullets && (
              <ul>
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="cs-links">
          {caseStudy.links.map((l) => (
            <a
              className="cs-link"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              key={l.href}
            >
              {l.label} &rarr;
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
