import React from 'react';

export default function Navbar({ onOpenContact }) {
  return (
    <nav className="navbar">
      <div className="badge-pill">
        <span className="green-dot"></span> Randolph.
      </div>

      <div className="nav-links">
        <a href="#projects">Projects <span className="counter-tag"></span></a>
        <a href="#skills">Skills <span className="counter-tag"></span></a>
        <a href="#techstacks">Techstacks <span className="counter-tag"></span></a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={onOpenContact} className="btn-black">
        Let's Talk
      </button>
    </nav>
  );
}