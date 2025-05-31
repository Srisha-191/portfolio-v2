import React from 'react';
import './About.css'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';

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
        <div className="skills">
  <h3>Technical Skills</h3>
  <div className="skills-icons">
    <div className="skill"><FaHtml5 size={40} color="#e34c26" /><p>HTML5</p></div>
    <div className="skill"><FaCss3Alt size={40} color="#2965f1" /><p>CSS3</p></div>
    <div className="skill"><FaJs size={40} color="#f0db4f" /><p>JavaScript</p></div>
    <div className="skill"><FaReact size={40} color="#61dafb" /><p>React</p></div>
    <div className="skill"><FaNodeJs size={40} color="#68a063" /><p>Node.js</p></div>
  </div>
</div>
</div>

    </section>
  );
};

export default About;
