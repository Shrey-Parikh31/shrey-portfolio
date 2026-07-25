import { about } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">about</p>
      <p className="about-text">{about}</p>
    </section>
  );
}
