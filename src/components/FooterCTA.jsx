import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.google.com', label: 'Google', icon: FaGoogle },
  { href: 'https://www.instagram.com', label: 'Instagram', icon: FaInstagram },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://www.facebook.com', label: 'Facebook', icon: FaFacebook },
];

export default function FooterCTA({ onOpenContact }) {
  return (
    <footer id="contact" className="footer-cta">
      <div className="badge-pill" style={{ display: 'inline-flex' }}>
        <span className="green-dot"></span> Available for New Project
      </div>

      <h2>HAVE A PROJECT IN MIND?</h2>

      <p>
        Together, we can create something clear and impactful. Let’s collaborate to bring our ideas to life
        in a way that resonates with everyone.
      </p>

      <button onClick={onOpenContact} className="btn-black" style={{ marginTop: '28px', padding: '12px 28px' }}>
        Contact Me
      </button>

      <div className="footer-links">
        <div className="author-pill">Randolph.</div>
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a key={label} href={href} className="social-pill-item" target="_blank" rel="noreferrer">
            <Icon size={14} /> {label}
          </a>
        ))}
      </div>
    </footer>
  );
}