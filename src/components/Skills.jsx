import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion'; // ✅ Import motion

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
            <motion.li
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
