import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Srisha, an aspiring full stack web developer with a passion for learning and creating beautiful, functional websites and applications.
        </p>
        <p>
          I'm currently building projects with HTML, CSS, JavaScript, and React, and I'm constantly expanding my skills to become job-ready.
        </p>
        <ul>
          <li><strong> Education:</strong> Bachelor of Engineering</li>
          <li><strong> Interests:</strong> Web Development, UI/UX, Open Source</li>
          <li><strong> Location:</strong> Hosur, India</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
