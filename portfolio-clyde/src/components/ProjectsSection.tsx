'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';
import { ExternalLink, Code2, Code, Play } from 'lucide-react';

const otherProjects = [
  { title: 'Wordle Clone', type: 'Game Utility', badge: 'Completed' },
  { title: 'Fruit Ninja-Style Game', type: 'Interactive Art', badge: 'Completed' },
  { title: 'Color Blast', type: 'Arcade Game', badge: 'Completed' },
  { title: 'Godot Engine Project', type: 'Game Development', badge: 'Ongoing' },
];

export function ProjectsSection() {
  const { playMode } = useMode();

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="PROJECTS" subtitle="Digital products & game-based experiences" />

        {/* FEATURED SET */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`relative flex flex-col md:flex-row bg-[#111111] p-1 
              ${playMode ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]' : ''} 
              pixel-border border-[#3b82f6] transition-all duration-300`}
          >
            {/* Project Image Placeholder Box */}
            <div className="md:w-5/12 bg-[#050505] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#3b82f6]">
              <div className="mb-4">
                <Code className="w-16 h-16 text-[#3b82f6]" />
              </div>
              <div className="font-pixel text-center text-xs text-slate-400">
                AI_Engine_v1.0<br/>[Visual Placeholder]
              </div>
            </div>

            {/* Content */}
            <div className="md:w-7/12 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-pixel text-[10px] bg-[#3b82f6] text-white px-2 py-1 uppercase">
                  Featured Request
                </span>
                <span className="text-slate-400 font-pixel text-[10px] flex items-center gap-1">
                  <Play className="w-3 h-3 text-green-400" /> Vercel Deployed
                </span>
              </div>

              <h3 className={`text-3xl font-bold mb-4 font-pixel tracking-tighter sm:text-2xl text-white ${playMode ? 'text-glow-blue text-[#3b82f6]' : ''}`}>
                FlashLearn
              </h3>
              
              <p className="text-slate-300 font-medium mb-6 leading-relaxed">
                AI-Powered Flashcard App with automated flashcard generation, deck management, and an interactive study mode featuring progress tracking and streak systems.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Supabase', 'OpenAI API'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1a1a1a] text-[#3b82f6] text-xs font-pixel rounded-none border border-[#3b82f6]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://flash-learn-iota.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 font-pixel text-[10px] uppercase transition-colors pixel-border border-[#3b82f6]"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <button className="flex items-center gap-2 bg-transparent hover:bg-slate-800 text-slate-300 px-6 py-3 font-pixel text-[10px] uppercase transition-colors pixel-border border-slate-600 hover:border-slate-400">
                  <Code2 className="w-4 h-4" /> View Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* OTHER GAMES/UTILITIES */}
        <div>
          <h3 className="font-pixel text-xl text-[#7c3aed] mb-8 uppercase flex items-center gap-4">
            <span className="w-8 h-1 bg-[#7c3aed]" />
            Minigames & Prototypes
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={playMode ? { scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 } : {}}
                className={`p-6 bg-[#111111] border border-slate-800 transition-all 
                  ${playMode ? 'border-[#7c3aed]/50 shadow-[0_0_15px_rgba(124,58,237,0.2)]' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] font-pixel px-2 py-1 ${
                    project.badge === 'Ongoing' ? 'bg-[#3b82f6]/20 text-[#3b82f6]' : 'bg-green-500/10 text-green-500 flex items-center gap-2'
                  }`}>
                    {project.badge}
                    {playMode && project.badge === 'Ongoing' && (
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping inline-block ml-2" />
                    )}
                  </span>
                </div>
                
                <h4 className="font-bold text-white mb-2 font-pixel text-sm sm:text-xs">
                  {project.title}
                </h4>
                <div className="text-slate-400 text-sm mb-4">
                  {project.type}
                </div>
                
                <div className="text-xs text-slate-600 font-pixel">
                  Mechanics / Logic / UI
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
