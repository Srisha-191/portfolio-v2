import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I am Srisha 👋
        </motion.h1>

        <h2>Future Full Stack Web Developer</h2>
        <p>
          Welcome to my portfolio! I am passionate about building modern,
          user-friendly websites and applications.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
