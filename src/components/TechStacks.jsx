import { useState } from 'react';

export default function TechStacks({ techStacks }) {
  const [hoveredStack, setHoveredStack] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="techstacks" className="section">
      <div 
        className="dark-experience-container"
        onMouseMove={handleMouseMove}
      >
        <div className="dark-box-header">
          <h2 className="section-title-white">/TECHSTACKS</h2>
        </div>

        <div className="exp-list">
          {techStacks.map((stack, idx) => (
            <div 
              key={idx} 
              className="exp-row"
              onMouseEnter={() => setHoveredStack(stack)}
              onMouseLeave={() => setHoveredStack(null)}
            >
              <div>
                <h3 className="exp-company-title">{stack.company}</h3>
                <span className="exp-role">{stack.role}</span>
              </div>
              <span className="exp-date">{stack.period}</span>
            </div>
          ))}
        </div>

        {hoveredStack && (
          <div 
            className="cursor-preview-box"
            style={{
              top: `${cursorPos.y}px`,
              left: `${cursorPos.x}px`,
            }}
          >
            <img src={hoveredStack.preview} alt={hoveredStack.company} />
          </div>
        )}
      </div>
    </section>
  );
}