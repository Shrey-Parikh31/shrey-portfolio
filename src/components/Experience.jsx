import { experience } from "../data/content";
import "./Experience.css";

function Role({ job }) {
  return (
    <article className="timeline-item">
      <div className="timeline-head"><h3>{job.role}</h3><span className="timeline-dates">{job.dates}</span></div>
      <p className="timeline-org">{job.org} · {job.location}</p>
      <p className="timeline-preview">{job.bullets[0]}</p>
      <details className="role-details">
        <summary>More about this role</summary>
        <ul>{job.bullets.slice(1).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </details>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience" tabIndex={-1} aria-labelledby="experience-title">
      <div className="section-heading"><h2 className="section-label" id="experience-title">Experience</h2><p>Teams, interfaces, and accessibility.</p></div>
      <div className="timeline">{experience.slice(0, 4).map((job) => <Role job={job} key={job.role + job.org} />)}</div>
      <details className="earlier-roles"><summary>Earlier campus leadership</summary>
        {experience.slice(4).map((job) => <Role job={job} key={job.role + job.org} />)}
      </details>
    </section>
  );
}
