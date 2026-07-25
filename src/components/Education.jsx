import { education } from "../data/content";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <p className="section-label">education</p>
      <div className="edu-grid">
        {education.map((e) => (
          <div className="edu-card" key={e.school}>
            <div className="edu-head">
              <h3>{e.school}</h3>
              <span className="edu-dates">{e.dates}</span>
            </div>
            <p className="edu-degree">{e.degree}</p>
            <p className="edu-meta">
              GPA {e.gpa} · {e.location}
            </p>
            {e.detail && <p className="edu-detail">{e.detail}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
