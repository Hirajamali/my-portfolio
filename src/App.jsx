import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans">
      <Navbar />
      <Hero />
      <Background />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer className="py-6 bg-slate-950 text-center text-sm text-gray-500 border-t border-slate-800">
        © {new Date().getFullYear()} Hira Jamali. All rights reserved.
      </footer>
    </div>
  );
}

export default App;