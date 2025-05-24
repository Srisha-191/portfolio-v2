import React from 'react';
import './Projects.css'; 

const Projects = () => {
  const projectList = [
    {
      name: 'Portfolio Website',
      description: 'My personal portfolio built with React.',
      github: 'https://github.com/Srisha-191/portfolio',
      demo: 'https://your-portfolio-demo-link.com'
    },
    {
      name: 'Weather App',
      description: 'A weather dashboard using OpenWeather API.',
      github: 'https://github.com/Srisha-191/weather-app',
      demo: 'https://weather-demo-link.com'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.demo && (
              <> | <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a></>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
