'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';
import { GraduationCap, BookOpen } from 'lucide-react';

const academics = [
  {
    icon: <GraduationCap size={40} className="text-[#3b82f6]" />,
    degree: 'Bachelor of Science in Information Technology',
    institution: 'St. Andrew’s College, Mumbai',
    period: '2023 – 2026',
    description: 'Current student focusing on modern software development, web engineering, and algorithms.',
  },
  {
    icon: <BookOpen size={40} className="text-[#ec4899]" />,
    degree: '12th Grade (Commerce with IT & Math)',
    institution: 'Marceline Junior College',
    period: 'Completed',
    score: '71%',
    description: 'Foundation in Mathematics, Information Technology, and core commercial concepts.',
  },
];

export function AcademicSection() {
  const { playMode } = useMode();

  return (
    <section id="academic" className="py-20 bg-[#0a0a0a] min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading title="ACADEMICS" subtitle="Educational journey and foundation" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-[#111111] p-8 pixel-border transition-all duration-300 ${
                playMode ? 'hover:scale-[1.02] hover:-translate-y-2' : ''
              }`}
              style={{
                borderColor: index === 0 ? '#3b82f6' : '#ec4899',
              }}
            >
              <div
                className={`absolute top-0 right-0 p-4 opacity-10 ${
                  playMode ? 'animate-pulse' : ''
                }`}
              >
                {item.icon}
              </div>

              <div className="mb-6">{item.icon}</div>
              
              <h3
                className={`text-xl font-bold mb-2 font-pixel tracking-tighter sm:text-lg ${
                  index === 0 ? 'text-[#3b82f6]' : 'text-[#ec4899]'
                }`}
                style={{ lineHeight: '1.4' }}
              >
                {item.degree}
              </h3>
              
              <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-4">
                <span className="text-white font-medium">{item.institution}</span>
                <span className="text-sm font-pixel text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1">
                  {item.period}
                </span>
              </div>
              
              <p className="text-slate-400 mb-4">{item.description}</p>
              
              {item.score && (
                <div className="inline-block mt-2 bg-[#ec4899]/10 border border-[#ec4899]/30 px-3 py-1 font-pixel text-[#ec4899] text-[10px]">
                  SCORE: {item.score}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
