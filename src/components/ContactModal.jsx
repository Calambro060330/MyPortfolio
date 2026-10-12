
import { X } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '22px', fontWeight: '900' }}>Let's work together</h3>
        <p style={{ fontSize: '12px', color: '#64748b' }}>Fill out the form below and I'll get back to you within 24 hours.</p>

        <form onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); onClose(); }}>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" required placeholder="Juan Dela Cruz" />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input type="email" required placeholder="juan@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={4} required placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" className="btn-black" style={{ width: '100%', marginTop: '20px', justifyContent: 'center', padding: '12px' }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}