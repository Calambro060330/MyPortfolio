import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (event, href) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    closeMenu();
    window.history.pushState(null, '', href);

    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior, block: 'start' });
    });
  };

  return (
    <nav className="navbar">
      <div className="badge-pill">
        <span className="green-dot"></span> Randolph.
      </div>

      <div id="primary-navigation" className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
        <a href="#projects" onClick={(event) => handleNavigation(event, '#projects')}>Projects</a>
        <a href="#skills" onClick={(event) => handleNavigation(event, '#skills')}>Skills</a>
        <a href="#techstacks" onClick={(event) => handleNavigation(event, '#techstacks')}>Techstacks</a>
        <a href="#contact" onClick={(event) => handleNavigation(event, '#contact')}>Contact</a>
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