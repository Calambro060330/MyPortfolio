export default function TechStacks({ techStacks }) {
  return (
    <section id="techstacks" className="section">
      <div className="dark-experience-container techstacks-container">
        <div className="dark-box-header techstacks-header">
          <div>
            <p className="techstacks-eyebrow">TOOLS I WORK WITH</p>
            <h2 className="section-title-white">TECHSTACKS</h2>
          </div>
          <span className="techstacks-count">
            {String(techStacks.length).padStart(2, '0')} TECHNOLOGIES
          </span>
        </div>

        <div className="techstack-grid">
          {techStacks.map((stack) => (
            <article key={stack.name} className="techstack-card">
              <div className="techstack-icon">
                <img src={stack.image} alt="" loading="lazy" />
              </div>
              <div className="techstack-info">
                <h3>{stack.name}</h3>
                <p>{stack.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}