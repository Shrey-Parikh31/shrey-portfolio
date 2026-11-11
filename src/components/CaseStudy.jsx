import { caseStudy } from "../data/content";
import Arrow from "./Arrow";
import "./CaseStudy.css";

export default function CaseStudy() {
  return (
    <section id="case-study" className="section case-study" tabIndex={-1} aria-labelledby="case-study-title">
      <div className="cs-intro">
        <h2 id="case-study-title">{caseStudy.title}</h2>
        <p>{caseStudy.subtitle}</p>
      </div>
      <details className="cs-details">
        <summary>Read the case study</summary>
        <div className="cs-content">
          <p className="cs-role">{caseStudy.role} / {caseStudy.dates}</p>
          <p className="cs-context">Historical results from the original 48-question set. The featured project above links to the newer held-out evaluation.</p>
          <dl className="cs-metrics">{caseStudy.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
          {caseStudy.sections.map((section) => (
            <div className="cs-section" key={section.heading}>
              <h3>{section.heading}</h3>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </div>
          ))}
          <div className="cs-links">{caseStudy.links.map((link) => <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>{link.label} <Arrow diagonal /></a>)}</div>
        </div>
      </details>
    </section>
  );
}
