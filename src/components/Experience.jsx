import React, { useState } from 'react';

export default function Experience({ experiences }) {
  const [hoveredExp, setHoveredExp] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="experience" className="section">
      <div 
        className="dark-experience-container"
        onMouseMove={handleMouseMove}>
        
        <div className="dark-box-header">
          <h2 className="section-title-white"></h2>
        </div>

        <div className="exp-list">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="exp-row"
              onMouseEnter={() => setHoveredExp(exp)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              <div>
                <h3 className="exp-company-title">{exp.company}</h3>
                <span className="exp-role">{exp.role}</span>
              </div>
              <span className="exp-date">{exp.period}</span>
            </div>
          ))}
        </div>

        {hoveredExp && (
          <div 
            className="cursor-preview-box"
            style={{
              top: `${cursorPos.y}px`,
              left: `${cursorPos.x}px`,
            }}
          >
            <img src={hoveredExp.preview} alt={hoveredExp.company} />
          </div>
        )}
      </div>
    </section>
  );
}