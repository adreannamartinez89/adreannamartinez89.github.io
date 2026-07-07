import React, { useState } from 'react';

const LINKS = [
  { href: '#top', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          AM
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
