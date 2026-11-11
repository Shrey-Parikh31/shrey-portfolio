import { useState } from "react";
import { profile } from "../data/content";
import Arrow from "./Arrow";
import "./Contact.css";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus("Email copied."); }
    catch { setCopyStatus("Copy didn't work. You can select the address or use the email link."); }
  };
  return (
    <section id="contact" className="section contact" tabIndex={-1} aria-labelledby="contact-title">
      <h2 id="contact-title">Have a role in mind?</h2>
      <p className="contact-sub">I'm looking for full-time software engineering roles. Graduating May 2027.</p>
      <div className="contact-email-row">
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Arrow diagonal /></a>
        <button className="copy-button" onClick={copyEmail} aria-label="Copy email address">Copy email</button>
      </div>
      <p className="copy-status" role="status">{copyStatus}</p>
      <div className="contact-socials">
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
        <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
      </div>
    </section>
  );
}
