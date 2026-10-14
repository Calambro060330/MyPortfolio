import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.google.com', label: 'Google', icon: FaGoogle },
  { href: 'https://www.instagram.com', label: 'Instagram', icon: FaInstagram },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://www.facebook.com', label: 'Facebook', icon: FaFacebook },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-title">
        <span className="stroke-text">RANDOLPH</span>
        <span className="stroke-text1">CALAMBRO</span>
      </div>

      <div className="hero-portrait-container">
        <img src="./image.png" alt="Randolph Calambro" className="portrait-img" />
      </div>

      <div className="hero-footer-grid">
        <div className="hero-left-info">
          <h2>Back-end Developer</h2>
          <p>Developing digital products that are clear, usable, and userfriendly.</p>
        </div>

        <div className="social-vertical-stack">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a key={label} href={href} className="social-pill-item" target="_blank" rel="noreferrer">
              <Icon size={14} /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}