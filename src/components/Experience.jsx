import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <p className="section-label">experience</p>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={job.role + job.org}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-head">
                <h3>{job.role}</h3>
                <span className="timeline-dates">{job.dates}</span>
              </div>
              <p className="timeline-org">
                {job.org} · {job.location}
              </p>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
