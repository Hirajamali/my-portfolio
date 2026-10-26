import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Background = () => {
  return (
    <section id="education" className="py-16 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 text-blue-400 mb-4">
              <GraduationCap size={28} />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">BS Computer Science(Undergraduate)</h4>
                <p className="text-blue-400 text-sm">Quaid-e-Awam University (QUEST), Nawabshah</p>
                <p className="text-gray-400 text-sm mt-1">CGPA: 3.32 / 4.0</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 text-blue-400 mb-4">
              <Award size={28} />
              <h3 className="text-xl font-semibold text-white">Key Certifications</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>React JS for Beginners</span>
                <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded">Cursa</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>MERN Stack Web Development</span>
                <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded">CodeAlpha</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>PITP Course Certificate</span>
                <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded">PITP</span>
              </li>
                <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Frontend Developer Internship <br></br> CoreTech Innovations & ORIC QUEST</span>
                <span className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded">ORIC</span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;