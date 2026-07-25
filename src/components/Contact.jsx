import { useState } from "react";
import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="section contact">
      <p className="section-label">contact</p>
      <h2 className="contact-heading">Let's build something.</h2>
      <p className="contact-sub">
        Open to internships, research collaborations, and interesting problems.
      </p>
      <div className="contact-actions">
        <button className="btn btn-primary" onClick={copyEmail}>
          {copied ? "copied!" : profile.email}
        </button>
        <a
          className="btn btn-ghost"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </div>
    </section>
  );
}
