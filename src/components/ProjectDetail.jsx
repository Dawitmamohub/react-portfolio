import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-detail">
      <div className="project-header">
        <h2 className="project-detail-title">{project.title}</h2>
        <div className="project-meta">
          <span className="project-type">{project.type}</span>
          <span className="project-duration">{project.duration}</span>
        </div>
      </div>

      <div className="project-overview">
        <h3>Project Overview</h3>
        <p>{project.overview}</p>
      </div>

      <div className="project-problem">
        <h3>The Problem</h3>
        <p>{project.problem}</p>
      </div>

      <div className="project-solution">
        <h3>The Solution</h3>
        <p>{project.solution}</p>
      </div>

      <div className="project-features">
        <h3>Key Features</h3>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="project-tech">
        <h3>Technologies Used</h3>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-challenges">
        <h3>Challenges & Learnings</h3>
        <ul>
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
          View Code
        </a>
        <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
