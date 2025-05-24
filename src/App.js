import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume'; 
import ScrollToTop from './components/ScrollToTop';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Resume />
      <ScrollToTop />
    </div>
  );
}

export default App;
