import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const expList = [
    {
      title: 'Web Development Intern',
      company: 'Arch Technologies',
      period: 'Sept 2026 - Present',
      responsibilities: [
        'Developing and optimizing web applications using MERN stack.',
        'Collaborating with cross-functional teams to build clean user interfaces.'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'CodeAlpha',
      period: 'Sept 2026 - Oct 2026',
      responsibilities: [
        'Built full-stack web applications and MERN e-commerce store with JWT auth.',
        'Engineered responsive layouts and RESTful backend APIs.'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'CoreTech Innovations',
      period: 'Oct 2025 - Nov 2025',
      responsibilities: [
        'Designed interactive user interfaces with React and Tailwind CSS.',
        'Improved app performance and cross-browser responsiveness.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {expList.map((exp, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex gap-4">
              <div className="text-blue-400 pt-1">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{exp.title} <span className="text-blue-400">@ {exp.company}</span></h3>
                  <span className="text-xs text-gray-400 bg-slate-900 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;