import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <nav className="nav">
        <h1>Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-btn"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
      <ScrollToTop />
    </div>
  );
}

export default App;
