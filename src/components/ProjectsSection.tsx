'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';
import { ExternalLink, Code2, Play, ChevronDown, ChevronUp } from 'lucide-react';

const otherProjects = [
  { title: 'Wordle Clone', type: 'Game Utility', badge: 'Completed' },
  { title: 'Fruit Ninja-Style Game', type: 'Interactive Art', badge: 'Completed' },
  { title: 'Color Blast', type: 'Arcade Game', badge: 'Completed' },
  { title: 'Godot Engine Project', type: 'Game Development', badge: 'Ongoing' },
];

export function ProjectsSection() {
  const { playMode } = useMode();
  const [showDetails, setShowDetails] = useState(false);

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
            {/* Project Image Placeholder Box -> Live Browser Preview */}
            <div className="md:w-5/12 bg-[#050505] p-4 flex flex-col border-b md:border-b-0 md:border-r border-[#3b82f6] min-h-[300px] overflow-hidden">
              <div className="w-full h-full flex flex-col border border-slate-800 rounded-md overflow-hidden bg-slate-900 group relative">
                <div className="absolute inset-0 bg-[#3b82f6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                {/* Browser Header */}
                <div className="h-6 bg-slate-950 flex items-center px-3 gap-1.5 border-b border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                {/* Iframe content */}
                <div className="flex-1 relative w-full bg-black overflow-hidden pointer-events-none">
                  <iframe 
                    src="https://flash-learn-iota.vercel.app/"
                    title="FlashLearn Preview"
                    tabIndex={-1}
                    className="absolute top-0 left-0 w-[150%] h-[150%] scale-[0.66] origin-top-left border-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
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
              
              <p className="text-slate-300 font-medium mb-6 leading-relaxed text-sm">
                AI-Powered Flashcard App with automated generation, structured JSON output, and an interactive study mode featuring progress tracking and streak systems.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Vite', 'Supabase', 'OpenAI API'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1a1a1a] text-[#3b82f6] text-xs font-pixel rounded-none border border-[#3b82f6]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mb-4">
                <a 
                  href="https://flash-learn-iota.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-3 font-pixel text-[10px] uppercase transition-colors pixel-border border-[#3b82f6]"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <button 
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 bg-transparent hover:bg-slate-800 text-slate-300 px-6 py-3 font-pixel text-[10px] uppercase transition-colors pixel-border border-slate-600 hover:border-slate-400"
                >
                  <Code2 className="w-4 h-4" /> {showDetails ? 'Hide Details' : 'View Details'}
                  {showDetails ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                </button>
              </div>

              {/* Expandable Details Section */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden mt-2 border-t border-slate-800/60 pt-6"
                  >
                    <div className="space-y-6 text-sm text-slate-300 leading-relaxed pr-2">
                      <div>
                        <h4 className="font-pixel text-xs text-[#3b82f6] mb-2 uppercase">Project Overview & Vision</h4>
                        <p>
                          FlashLearn is designed to make studying engaging and efficient by combining AI automation with gamified learning mechanics. It aims to revolutionize how students learn and retain information by providing intelligent tools for creating and studying flashcards.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-pixel text-xs text-[#3b82f6] mb-2 uppercase">Key Features</h4>
                        <ul className="list-disc pl-5 space-y-2 marker:text-slate-500">
                          <li><strong className="text-white font-medium">AI-Generated Flashcards:</strong> Leverage the power of the OpenAI API to automatically generate flashcards from your input, saving you time and effort.</li>
                          <li><strong className="text-white font-medium">Structured JSON Output:</strong> AI-generated content is provided in a structured JSON format for seamless integration and storage.</li>
                          <li><strong className="text-white font-medium">Deck Creation &amp; Management:</strong> Organize your study material into custom decks for efficient learning.</li>
                          <li><strong className="text-white font-medium">Manual &amp; AI Flashcard Creation:</strong> Create flashcards manually or let AI assist you in generating them.</li>
                          <li><strong className="text-white font-medium">Study Mode:</strong> Engage in an interactive study session that tracks your correct and incorrect answers.</li>
                          <li><strong className="text-white font-medium">Progress Tracking:</strong> Monitor your learning journey with mastery levels and study streaks.</li>
                          <li><strong className="text-white font-medium">User Authentication:</strong> Securely manage your decks and progress with user accounts powered by Supabase.</li>
                        </ul>
                        <p className="mt-3 text-xs text-slate-400 italic">Note: Adaptive scheduling and personalization features are planned for future development.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-pixel text-xs text-[#3b82f6] mb-2 uppercase">Technology Stack</h4>
                          <ul className="space-y-1 text-xs text-slate-400">
                            <li><strong className="text-slate-300">Frontend:</strong> React, TypeScript, Vite, Radix UI, Lucide React, Recharts, React Hook Form, Embla Carousel, Sonner, Vaul, Next-themes</li>
                            <li><strong className="text-slate-300">Backend:</strong> Supabase (Auth, PostgreSQL)</li>
                            <li><strong className="text-slate-300">AI Integration:</strong> OpenAI API</li>
                            <li><strong className="text-slate-300">Build Tool:</strong> Vite</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-pixel text-xs text-[#3b82f6] mb-2 uppercase">Architecture</h4>
                          <p className="text-xs text-slate-400">
                            FlashLearn utilizes a modern frontend architecture built with React and Vite. User data, authentication, and deck information are managed via Supabase, providing a robust and scalable backend. AI-powered flashcard generation is handled through direct integration with the OpenAI API.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
