import React from 'react';
import { experience, education, certifications } from '../data/resume.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div key={job.role} className="timeline-item">
            <div className="timeline-header">
              <h3>{job.role}</h3>
              <span className="timeline-period">{job.period}</span>
            </div>
            <p className="timeline-org">{job.org}</p>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="edu-cert-grid">
        <div>
          <h3>Education</h3>
          <ul className="plain-list">
            {education.map((e) => (
              <li key={e.degree}>
                <strong>{e.degree}</strong>
                <br />
                {e.school} · {e.period}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Certifications</h3>
          <ul className="plain-list">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
