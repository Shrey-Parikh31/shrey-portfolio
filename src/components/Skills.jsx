import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <p className="section-label">skills</p>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.group}>
            <h3>{group.group}</h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
