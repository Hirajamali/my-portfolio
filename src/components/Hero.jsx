import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi2';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-24 pb-12 flex items-center bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
            Full-Stack Web Developer
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-blue-500">Hira Jamali</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Passion-driven MERN Stack & Algorithmic Developer crafting scalable, modern web experiences and high-performance applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition"
            >
              View Projects <HiArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-700 hover:bg-slate-800 text-gray-300 rounded-lg font-medium transition"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-4 pt-4 text-gray-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-400 transition">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

       <div className="flex justify-center">
  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full from-blue-600 to-indigo-600 p-1 shadow-2xl overflow-hidden">
    <img 
      src="/profile.jpeg" 
      alt="Hira Jamali" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;