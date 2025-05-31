import React from 'react';
import './Resume.css';
import resumePDF from '../assets/your-resume.pdf'; // ✅ Replace with actual filename

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2 className="section-title">My Resume</h2>
      <p>You can view or download my resume using the button below:</p>
      <a
        href={resumePDF}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        View / Download Resume
      </a>
    </section>
  );
};

export default Resume;
