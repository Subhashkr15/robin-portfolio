import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ParticleBackground from './components/ParticleBackground';

function App() {
  
  useEffect(() => {
    // Basic smooth scrolling configuration could go here, 
    // but CSS handles the basics. We let Framer Motion handle scroll triggers.
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
