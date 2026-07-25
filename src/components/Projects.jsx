import { projects } from "../data/content";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <p className="section-label">projects</p>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            <div className="project-head">
              <h3>{p.name}</h3>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="chip-row">
              {p.tech.map((t) => (
                <span className="chip small" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="project-links">
              {p.liveLink && (
                <a
                  className="project-link"
                  href={p.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live demo →
                </a>
              )}
              {p.link && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view source →
                </a>
              )}
              {!p.link && !p.liveLink && p.linkLabel && (
                <p className="project-link-note">{p.linkLabel}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
