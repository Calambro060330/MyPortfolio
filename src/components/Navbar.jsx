import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="badge-pill">
        <span className="green-dot"></span> Randolph.
      </div>

      <div id="primary-navigation" className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#techstacks" onClick={closeMenu}>Techstacks</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <button onClick={() => { closeMenu(); onOpenContact(); }} className="btn-black">
        Let's Talk
      </button>

      <button
        type="button"
        className="nav-menu-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  );
}