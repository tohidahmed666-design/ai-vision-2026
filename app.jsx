import React from 'react';
import { Trophy, Cpu, MessageSquare, Video, ExternalLink } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
        <h2 className="text-orange-400 font-bold tracking-widest uppercase mb-4">GM University, Davanagere</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 italic">TECHNOVATION 2026</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">Innovate • Create • Upgrade Your Future</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">
            REGISTER NOW
          </button>
          <button className="bg-white text-blue-900 hover:bg-slate-100 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition">
            RULE BOOK
          </button>
        </div>
        <div className="mt-10 inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3">
          <p className="text-orange-300 font-bold">🏆 ₹1 Lakh Prize Pool</p>
          <p className="text-sm">Exclusive for Diploma Final-Year Students | 04 April 2026</p>
        </div>
      </header>

      {/* Events Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">— Our 3 Main Events —</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Exhibition */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-600 hover:transform hover:-translate-y-2 transition">
            <Cpu className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">Project Exhibition</h3>
            <p className="text-slate-600 mb-6">Showcase your engineering innovation and technical creativity to industry experts.</p>
            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:underline">
              View Guidelines <ExternalLink size={16} />
            </button>
          </div>

          {/* ChatGPT Prompt Challenge */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-orange-500 hover:transform hover:-translate-y-2 transition">
            <MessageSquare className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">Prompt Challenge</h3>
            <p className="text-slate-600 mb-6">Demonstrate your skills in Generative AI and smart problem-solving using LLMs.</p>
            <button className="text-orange-600 font-semibold flex items-center gap-2 hover:underline">
              View Guidelines <ExternalLink size={16} />
            </button>
          </div>

          {/* Video Generation */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-indigo-600 hover:transform hover:-translate-y-2 transition">
            <Video className="text-indigo-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI Video Challenge</h3>
            <p className="text-slate-600 mb-6">Create impactful AI-assisted technical videos and presentations.</p>
            <button className="text-indigo-600 font-semibold flex items-center gap-2 hover:underline">
              View Guidelines <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Department Coordinator Table */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <table className="w-full text-left bg-white">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-4">Department</th>
                <th className="p-4">Coordinator</th>
                <th className="p-4">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4 font-medium">CSE / ISE / AIML</td>
                <td className="p-4 text-slate-600">Prof. Ravinandan R Jannu</td>
                <td className="p-4 text-blue-600 font-mono">9066623203</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium">Cyber Security & IoT</td>
                <td className="p-4 text-slate-600">Prof. Pavan Kumar N T</td>
                <td className="p-4 text-blue-600 font-mono">9113283741</td>
              </tr>
              {/* Add more rows based on the site data */}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 border-t">
        <p>© 2026 TECHNOVATION | GM University | Davanagere</p>
      </footer>
    </div>
  );
};

export default App;