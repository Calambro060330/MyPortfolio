import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork({ projects }) {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tag === filter);

  return (
    <section id="work" className="section">
      <div className="section-header-centered">
        
        <h2 className="section-title">PROJECTS</h2>
      </div>

      <div className="filter-bar">
        <div className="filter-tabs">
          {['All', 'Real Project', 'Exploration'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`btn-tab ${filter === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        <button className="pill-link">
          View All Work <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-image-box">
              <img src={project.image} alt={project.title} />
              <span className="card-tag">{project.tag}</span>
              <div className="hover-arrow-circle">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div className="card-info">
              <h3>{project.title}</h3>
              <div className="card-badges">
                <span className="badge-tag">{project.category}</span>
                <span className="badge-tag">{project.studio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}