import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const role = useTypewriter(profile.roles);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">$ whoami</p>
        <h1 className="hero-name">{profile.name}</h1>
        <div className="hero-role">
          <span>{role}</span>
          <span className="caret" aria-hidden="true">|</span>
        </div>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            view projects
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
            get in touch
          </button>
        </div>
      </div>
      <button className="scroll-cue" onClick={() => scrollTo("about")} aria-label="Scroll down">
        ↓ scroll
      </button>
    </section>
  );
}
