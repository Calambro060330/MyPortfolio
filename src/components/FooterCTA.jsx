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

export default function FooterCTA({ onOpenContact }) {
  return (
    <footer id="contact" className="footer-cta">
      <div className="badge-pill" style={{ display: 'inline-flex' }}>
        <span className="green-dot"></span> Available for New Project
      </div>

      <h2>HAVE A PROJECT IN MIND?</h2>

      <p>Together, we can create something clear and impactful. Let’s collaborate to bring our ideas to life in a way that resonates with everyone.</p>

      <button onClick={onOpenContact} className="btn-black" style={{ marginTop: '28px', padding: '12px 28px' }}>
        Contact Me 
      </button>

      <div className="footer-links">
        <div className="author-pill">
          Randolph.
        </div>
        <a href="#" className="social-pill-item"><FaGoogle size={14} /> Google</a>
                  <a href="#" className="social-pill-item"><FaInstagram size={14} /> Instagram</a>
                  <a href="#" className="social-pill-item"><FaLinkedin size={14} /> LinkedIn</a>
                  <a href="#" className="social-pill-item"><FaFacebook size={14} /> Facebook</a>
      </div>
    </footer>
  );
}