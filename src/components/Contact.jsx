import React from 'react';
import { profile } from '../data/resume.js';

const CONTACT_EMAIL = 'hello@example.com'; // TODO: replace with a real contact email before publishing

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Let's build something</h2>
      <p className="hero-summary">
        Open to Software Engineer and Product Designer / UI Engineer roles. The fastest way to
        reach me is email — I'll get back to you within a day or two.
      </p>
      <div className="contact-links">
        <a className="btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
          Email me
        </a>
        <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
