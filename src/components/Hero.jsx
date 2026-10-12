import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
    <a href="https://facebook.com" aria-label="Facebook">
      <FaFacebook size={24} color="#1877F2" />
    </a>

    <a href="https://instagram.com" aria-label="Instagram">
        <FaInstagram size={24} color="#E1306C" />
      </a>

      
      <a href="https://google.com" aria-label="Google">
        <FaGoogle size={24} color="#4285F4" />
      </a>

      
      <a href="https://linkedin.com" aria-label="LinkedIn">
        <FaLinkedin size={24} color="#0077B5" />
      </a>
      </div>
  );
}

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="hero-title">
        <span className="stroke-text">RANDOLPH</span>
        <span className='stroke-text1'>CALAMBRO</span>
      </div>

      <div className="hero-portrait-container">
        <img 
          src="./image.png" 
          alt="Randolph Calambro" 
          className="portrait-img"
        />
      </div>

      <div className="hero-footer-grid">
        <div className="hero-left-info">
          <h2>Full-Stack Developer</h2>
          <p>Developing digital products that are clear, usable, and userfriendly.</p>
          <button onClick={onOpenContact} className="btn-black" style={{ marginTop: '16px' }}>
            Let's collaborate
          </button>
        </div>

        <div className="social-vertical-stack">
          <a href="#" className="social-pill-item"><FaGoogle size={14} /> Google</a>
          <a href="#" className="social-pill-item"><FaInstagram size={14} /> Instagram</a>
          <a href="#" className="social-pill-item"><FaLinkedin size={14} /> LinkedIn</a>
          <a href="#" className="social-pill-item"><FaFacebook size={14} /> Facebook</a>
        </div>
      </div>
    </section>
  );
}