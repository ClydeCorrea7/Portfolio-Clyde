'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';
import { TerminalSquare, LayoutTemplate, Database, PenTool, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <TerminalSquare className="w-8 h-8 text-[#ec4899]" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++'],
    color: '#ec4899',
  },
  {
    title: 'Frontend',
    icon: <LayoutTemplate className="w-8 h-8 text-[#3b82f6]" />,
    skills: ['React', 'HTML', 'CSS'],
    color: '#3b82f6',
  },
  {
    title: 'Backend',
    icon: <Database className="w-8 h-8 text-[#10b981]" />,
    skills: ['Node.js', 'PHP', 'Supabase'],
    color: '#10b981',
  },
  {
    title: 'Tools & Platforms',
    icon: <PenTool className="w-8 h-8 text-[#f59e0b]" />,
    skills: ['Git', 'Vite', 'Godot Engine', 'Figma', 'VS Code'],
    color: '#f59e0b',
  },
  {
    title: 'Other Specs',
    icon: <Cpu className="w-8 h-8 text-[#7c3aed]" />,
    skills: ['OpenAI API', 'REST APIs', 'UI/UX Design'],
    color: '#7c3aed',
  },
];

export function SkillsSection() {
  const { playMode } = useMode();

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="SKILLS" subtitle="Technical arsenal and core competencies" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-[#111111] p-6 pixel-border transition-all duration-300 flex flex-col items-center text-center
                ${playMode ? 'hover:scale-105 hover:-translate-y-2 group' : ''}`}
              style={{ borderColor: playMode ? 'transparent' : category.color }}
            >
              {/* Dynamic hover border glow */}
              {playMode && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 20px ${category.color}40`, border: `2px solid ${category.color}` }}
                />
              )}

              <div className={`mb-4 p-4 rounded-full bg-slate-900/50 relative`}>
                {playMode && (
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: category.color }} />
                )}
                {category.icon}
              </div>

              <h3 className="text-white font-bold mb-6 font-pixel text-sm sm:text-lg tracking-tighter" style={{ color: category.color }}>
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-black/40 text-slate-300 text-xs sm:text-sm border border-slate-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
