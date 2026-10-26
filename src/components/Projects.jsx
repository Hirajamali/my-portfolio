import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Alexa+ MCP Agent & Simulator',
      role: 'Full-Stack Developer',
      tech: ['React', 'Tailwind CSS', 'AWS Bedrock', 'Node.js'],
      description: 'Self-hosted Model Context Protocol server powered by AWS Bedrock with streamable HTTP transport and interactive frontend simulator.',
      link: '#',
      github: '#'
    },
    {
      title: 'AgriVision AI',
      role: 'Full-Stack Lead',
      tech: ['MERN Stack', 'MongoDB', 'FastAPI', 'Tailwind CSS'],
      description: 'Integrated smart farming platform featuring satellite remote sensing, computer vision disease prediction, and grain marketplace.',
      link: '#',
      github: '#'
    },
    {
      title: 'Verdant3D Botanical Ecosystem',
      role: 'Frontend & 3D Designer',
      tech: ['React', 'Spline 3D', 'Three.js', 'Tailwind CSS'],
      description: 'Interactive 3D web visualizer featuring customizable 3D plant structures and rich visual interactions.',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex flex-col justify-between p-6 hover:border-blue-500 transition">
              <div>
                <span className="text-xs text-blue-400 font-semibold tracking-wide uppercase">{proj.role}</span>
                <h3 className="text-xl font-bold mt-1 mb-3">{proj.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{proj.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-slate-900 text-gray-300 px-2.5 py-1 rounded-md border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                  <a href={proj.github} className="text-gray-400 hover:text-white flex items-center gap-1 text-sm">
                    <Code2 size={16} /> Code
                  </a>
                  <a href={proj.link} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-medium">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;