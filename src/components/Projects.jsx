import { useState } from "react";
import { projects } from "../data/content";
import Arrow from "./Arrow";
import "./Projects.css";

const featured = projects.filter((project) => project.featured).sort((a, b) => a.featured - b.featured);

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.liveLink && <a className="text-link" href={project.liveLink} target="_blank" rel="noopener noreferrer">Try the demo <Arrow diagonal /></a>}
      {project.link && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">View source <Arrow diagonal /></a>}
      {!project.link && <p className="project-link-note">{project.linkLabel}</p>}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(featured[0].id);
  const project = featured.find((item) => item.id === selected);
  return (
    <section id="projects" className="section projects" tabIndex={-1} aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title" className="section-label">Selected work</h2>
        <p>Built, tested, and documented.</p>
      </div>
      <div className="project-selector" role="group" aria-label="Choose a featured project">
        {featured.map((item) => (
          <button key={item.id} aria-pressed={item.id === selected} aria-controls="featured-project" onClick={() => setSelected(item.id)}>
            {item.category}
          </button>
        ))}
      </div>
      <article id="featured-project" className="featured-project" key={project.id} aria-labelledby="featured-title">
        <div className="project-story">
          <h3 id="featured-title">{project.name}</h3>
          <p className="project-status">{project.status} <span aria-hidden="true">/</span> {project.year}</p>
          <p className="project-summary">{project.summary}</p>
          <p className="project-tech">{project.tech.join(" · ")}</p>
          <ProjectLinks project={project} />
        </div>
        <div className="project-evidence">
          <h4>{project.evidenceTitle}</h4>
          <dl>
            {project.evidence.map((item) => (
              <div className="evidence-item" key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>
          <p className="evidence-note">{project.evidenceNote}</p>
          <a className="text-link" href={project.evidenceLink} target="_blank" rel="noopener noreferrer">{project.id === "cloud" ? "Read the incident notes" : project.id === "rbac" ? "Read the evaluation" : "See how it works"} <Arrow diagonal /></a>
        </div>
        <p className="project-decision"><span>A decision that matters</span>{project.decision}</p>
      </article>
      <details className="project-archive">
        <summary>More projects <span>{projects.filter((item) => !item.featured).length} more things I've built</span></summary>
        <div className="archive-list">
          {projects.filter((item) => !item.featured).map((item) => (
            <article className="archive-project" key={item.name}>
              <div><h3>{item.name}</h3><p className="project-tech">{item.tech.join(" · ")} / {item.year}</p></div>
              <p>{item.description}</p>
              <ProjectLinks project={item} />
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
