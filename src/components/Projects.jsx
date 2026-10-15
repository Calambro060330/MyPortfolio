export default function SelectedWork({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="section-header-centered">
        
        <h2 className="section-title">PROJECTS</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="card-image-box">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-info">
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}