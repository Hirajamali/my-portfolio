import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Three.js / Spline', 'HTML5 / CSS3', 'JavaScript (ES6+)']
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'C# / .NET', 'SQL Server', 'REST APIs']
    },
    {
      title: 'Core & Tools',
      skills: ['C++ (DSA)', 'Git & GitHub', 'VS Code', 'SSMS', 'Vite', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-16 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 border-b border-slate-800 pb-2">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, i) => (
                  <span key={i} className="bg-slate-800 text-gray-200 text-sm px-3 py-1.5 rounded-lg border border-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;