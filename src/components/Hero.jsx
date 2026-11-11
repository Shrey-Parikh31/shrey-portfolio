import { profile } from "../data/content";
import Arrow from "./Arrow";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero" tabIndex={-1} aria-labelledby="hero-name">
      <div className="hero-copy">
        <h1 id="hero-name">{profile.name}<span className="name-caret" aria-hidden="true" /></h1>
        <p className="hero-statement">I build AI systems.<br /><span>Then I test their limits.</span></p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">Explore my work <Arrow /></a>
          <a className="text-link" href={`mailto:${profile.email}`}>Let's talk <Arrow diagonal /></a>
        </div>
      </div>
      <aside className="hero-note" aria-label="At a glance">
        <p className="availability"><span aria-hidden="true" />Open to full-time roles</p>
        <p>Software engineering<br />AI &amp; full-stack development</p>
        <p>Penn State Harrisburg<br />B.S. Computer Science, May 2027</p>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
        </div>
      </aside>
    </section>
  );
}
