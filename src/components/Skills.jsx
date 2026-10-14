import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Skills({ skills }) {
  const [activeSkill, setActiveSkill] = useState('01');

  return (
    <section id="skills" className="section">
      <h2 className="section-title">SKILLS</h2>
      <div className="service-list">
        {skills.map((s) => {
          const isActive = activeSkill === s.id;
          return (
            <div 
              key={s.id}
              onClick={() => setActiveSkill(isActive ? null : s.id)}
              className={`service-item ${isActive ? 'active' : ''}`}
            >
              <div className="service-header">
                <h3>{s.title}</h3>
                {isActive ? <X size={20} /> : <ArrowUpRight size={20} />}
              </div>

              {isActive && (
                <div className="service-body">
                  <p>{s.description}</p>
                  <div className="service-preview">
                    <img src={s.previewImg} alt={s.title} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}