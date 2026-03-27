'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';
import { Briefcase } from 'lucide-react';

export function WorkExperienceSection() {
  const { playMode } = useMode();

  return (
    <section id="experience" className="py-20 relative bg-[#0a0a0a] min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SectionHeading title="EXPERIENCE" subtitle="My professional journey & roles" />

        <div className="relative pl-8 sm:pl-0">
          {/* Vertical line timeline */}
          <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-800" />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col sm:flex-row items-center w-full relative"
          >
            {/* Dot Indicator */}
            <div className={`absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a0a0a] border-4 border-[#7c3aed] z-10 ${
              playMode ? 'shadow-[0_0_15px_#7c3aed]' : ''
            }`} />

            {/* Content Box */}
            <div className="w-full sm:w-1/2 sm:pr-12 md:pr-16 self-start md:self-center ml-10 sm:ml-0 text-left sm:text-right">
              <div
                className={`p-6 bg-[#111111]/80 backdrop-blur-sm border-l-4 border-l-[#7c3aed] transition-all duration-300 relative ${
                  playMode ? 'hover:bg-[#151515] shadow-lg hover:shadow-[#7c3aed]/20' : ''
                }`}
              >
                <div className="flex flex-col sm:items-end mb-4">
                  <div className="flex items-center gap-2 mb-2 text-[#7c3aed]">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-pixel text-xs tracking-widest">GRAPHIC DESIGNER</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Andrean Entrepreneurship and Incubation Cell
                  </h3>
                  <div className="text-slate-400 font-medium">St. Andrew’s College</div>
                  <div className="mt-2 text-xs font-pixel bg-[#7c3aed]/10 text-[#7c3aed] px-2 py-1 inline-block">
                    July 2023 – April 2026
                  </div>
                </div>

                <ul className="text-slate-300 space-y-2 mt-4 text-sm sm:text-right list-none">
                  <li className="relative">
                    <span className="absolute left-[-15px] sm:left-auto sm:right-[-15px] top-1.5 w-1.5 h-1.5 bg-[#7c3aed]" />
                    Designed posters, banners, and event branding materials
                  </li>
                  <li className="relative">
                    <span className="absolute left-[-15px] sm:left-auto sm:right-[-15px] top-1.5 w-1.5 h-1.5 bg-[#7c3aed]" />
                    Collaborated with organizing teams on promotions and visual identity
                  </li>
                  <li className="relative">
                    <span className="absolute left-[-15px] sm:left-auto sm:right-[-15px] top-1.5 w-1.5 h-1.5 bg-[#7c3aed]" />
                    Contributed to creative direction of college events
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Empty space for timeline spacing on desktop */}
            <div className="hidden sm:block sm:w-1/2 sm:pl-12 md:pl-16">
              {playMode && (
                <div className="font-pixel text-[10px] text-slate-700 opacity-30 select-none">
                  // LOGFILE: EXPERIENCE.DAT<br />
                  // STATUS: ACTIVE<br />
                  // LEVEL: 3
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
