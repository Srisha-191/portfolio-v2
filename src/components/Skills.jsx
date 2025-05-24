import React from 'react';
import './Skills.css'; // for styling

const Skills = () => {
  const skillList = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Git & GitHub',
    'Responsive Design'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>My Skills</h2>
        <ul className="skill-list">
          {skillList.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
