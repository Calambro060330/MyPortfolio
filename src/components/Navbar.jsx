import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  return (
    <nav className="navbar">
      <div className="badge-pill">
        <span className="green-dot"></span> Randolph.
      </div>

      <div className="nav-links">
        <a href="#work">Work <span className="counter-tag"></span></a>
        <a href="#services">Service <span className="counter-tag"></span></a>
        <a href="#experience">Experience <span className="counter-tag"></span></a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={onOpenContact} className="btn-black">
        Let's Talk
      </button>
    </nav>
  );
}