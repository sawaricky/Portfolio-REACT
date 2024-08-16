import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
  <div className="project-card">
      <div>
        {/* <img src="/assets/csharp.png" alt="C# Thumbnail" /> */}
        <img src={`/assets/${project.project_thumbnail}`} alt={project.project_name} />
        {/* <img src={project.project_thumbnail} alt={project.project_name} /> */}
        <div>
          <a href={project.project_url}>View Project</a>
        </div>
      </div>
      <div className='content'>
        <h3>{project.project_name}</h3>
        <p>{project.project_description}</p>
        <p>Languages: {project.project_languages}</p>
      </div>
    
  </div>
);

export default ProjectCard;
