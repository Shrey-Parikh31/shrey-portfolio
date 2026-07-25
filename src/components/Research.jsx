import { research } from "../data/content";
import "./Research.css";

export default function Research() {
  return (
    <section id="research" className="section research">
      <p className="section-label">research</p>
      <div className="research-card">
        <div className="research-head">
          <h3>{research.title}</h3>
          <span className="research-dates">{research.dates}</span>
        </div>
        <p className="research-role">
          {research.role} · advised by {research.advisor}
        </p>
        <p className="research-abstract">{research.abstract}</p>
        <ul className="research-bullets">
          {research.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="research-honors">
          {research.honors.map((h) => (
            <span className="honor-chip" key={h}>
              🏅 {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
