import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills" tabIndex={-1} aria-labelledby="skills-title">
      <h2 className="section-label" id="skills-title">Tools I work with</h2>
      <div className="skills-grid">{skills.map((group) => (
        <div className="skill-group" key={group.group}><h3>{group.group}</h3><p>{group.items.join(" · ")}</p></div>
      ))}</div>
    </section>
  );
}
