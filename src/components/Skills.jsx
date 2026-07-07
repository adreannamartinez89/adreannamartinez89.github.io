import React from 'react';
import { skills } from '../data/resume.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.group} className="skills-card">
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
