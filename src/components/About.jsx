import { about } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about" tabIndex={-1} aria-labelledby="about-title">
      <h2 className="section-label" id="about-title">A little context</h2>
      <div className="about-columns">
        <p className="about-text">{about}</p>
        <p className="about-accessibility">At Penn State's Center for Teaching Excellence, I create audio descriptions and captions for lecture videos. Accessibility is part of my work, including the websites I build.</p>
      </div>
    </section>
  );
}
