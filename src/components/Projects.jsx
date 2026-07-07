import React from 'react';
import { projects } from '../data/resume.js';

export default function Projects() {
  return (
    <section id="work" className="section">
      <h2>Selected work</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <a key={p.title} className="project-card" href={p.repo} target="_blank" rel="noreferrer">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="project-link">View on GitHub →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
