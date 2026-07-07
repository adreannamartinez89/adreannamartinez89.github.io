import React from 'react';
import { profile } from '../data/resume.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">{profile.location}</p>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p className="hero-summary">{profile.summary}</p>
      <div className="hero-actions">
        <a className="btn-primary" href="#work">
          View my work
        </a>
        <a className="btn-ghost" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  );
}
