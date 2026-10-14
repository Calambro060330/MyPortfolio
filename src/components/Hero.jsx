import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin } from 'react-icons/fa';
import TechText from './animations/TechText';

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
        <TechText
          className="hero-tech-text"
          text="RANDOLPH"
          fontWeight={600}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          fontFamily=""
          color="#244b3a"
          accentColor="#101d18"
          letterSpacing={-0.05}
          reach={200}
          softness={0.7}
          strokeWidth={1.5}
          speed={1}
          lineStyle="dashed"
          selection
          labels
          draggable
          sweep
        />
        <TechText
          className="hero-tech-text"
          text="CALAMBRO"
          fontWeight={600}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          fontFamily=""
          color="#101d18"
          accentColor="#244b3a"
          letterSpacing={-0.05}
          reach={200}
          softness={0.7}
          strokeWidth={1.5}
          speed={1}
          lineStyle="dashed"
          selection
          labels
          draggable
          sweep
        />
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