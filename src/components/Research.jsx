import { research } from "../data/content";
import Arrow from "./Arrow";
import "./Research.css";

export default function Research() {
  return (
    <section id="research" className="section research" tabIndex={-1} aria-labelledby="research-title">
      <h2 className="section-label" id="research-title">Research, down to the nanoscale</h2>
      <div className="research-content">
        <div>
          <h3>{research.title}</h3>
          <p className="research-role">{research.role} · {research.dates}</p>
          <p className="research-overview">I worked on a MATLAB method to find the shell parameters of a nanoparticle for a target resonance, then compared the results with Mie theory and COMSOL simulations.</p>
          <p className="research-advisor">Advised by {research.advisor}. Project partner: Ian Bryant.</p>
          <a className="text-link" href="https://github.com/Shrey-Parikh31/photonics-inverse-design" target="_blank" rel="noopener noreferrer">Explore the research code <Arrow diagonal /></a>
        </div>
        <ul className="research-honors">{research.honors.map((honor) => <li key={honor}>{honor}</li>)}</ul>
      </div>
      <details className="research-details"><summary>Method and technical details</summary>
        <p>{research.abstract}</p>
        <ul>{research.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </details>
    </section>
  );
}
