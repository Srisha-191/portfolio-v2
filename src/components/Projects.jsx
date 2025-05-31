import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion'; // ✅ Importing motion

const Projects = () => {
  const projectList = [
    {
      name: 'Portfolio Website',
      description: 'My personal portfolio built with React.',
      github: 'https://github.com/Srisha-191/portfolio',
      demo: 'https://vercel.com/new/srisha-191s-projects/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=portfolio-2bdray2dx-srisha-191s-projects.vercel.app&projectName=portfolio&s=https%3A%2F%2Fgithub.com%2FSrisha-191%2Fportfolio&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1&flow-id=Insp_uBo-mFqwQ0T_1gfy'
    },
    {
      name: 'Weather App',
      description: 'A weather dashboard using OpenWeather API.',
      github: 'https://github.com/Srisha-191/weather-app',
      demo: 'https://weather-demo-link.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.demo && (
              <> | <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a></>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
