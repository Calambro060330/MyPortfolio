import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Services({ services }) {
  const [activeService, setActiveService] = useState('01');

  return (
    <section id="services" className="section">
      <h2 className="section-title">TECH STACK</h2>
      <div className="service-list">
        {services.map((s) => {
          const isActive = activeService === s.id;
          return (
            <div 
              key={s.id}
              onClick={() => setActiveService(isActive ? null : s.id)}
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