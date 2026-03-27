'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';

const certificates = [
  { title: "Learn HTML and CSS from Beginning...", instructor: "Marcus Menti, Zechariah Tech", date: "Aug. 8, 2024", duration: "5 hrs", category: "Web Development" },
  { title: "Learn JavaScript - For Beginners", instructor: "YouAccel Training", date: "Feb. 23, 2024", duration: "1.5 hrs", category: "Web Development" },
  { title: "CSS Complete Course For Beginners", instructor: "PROPER DOT INSTITUTE", date: "Feb. 20, 2024", duration: "2 hrs", category: "Web Development" },
  { title: "JavaScript And PHP Programming Complete", instructor: "PROPER DOT INSTITUTE", date: "April 15, 2024", duration: "5 hrs", category: "Web Development" },
  { title: "CSS3 Ultimate Guide", instructor: "Josh Werner", date: "April 9, 2025", duration: "6 hrs", category: "Web Development" },
  { title: "Javascript For Beginners Complete Course", instructor: "PROPER DOT INSTITUTE", date: "Feb. 21, 2024", duration: "2 hrs", category: "Web Development" },
  { title: "HTML - The Complete Guide to HTML...", instructor: "Sara Academy", date: "Feb. 22, 2024", duration: "2 hrs", category: "Web Development" },
  { title: "HTML, CSS, JavaScript, React...", instructor: "YouAccel Training, Blue Digital", date: "April 9, 2025", duration: "16 hrs", category: "Web Development" },
  { title: "CSS Animation With Latest Effects...", instructor: "B Praveen Kumar", date: "April 9, 2025", duration: "2.5 hrs", category: "Web Development" },
  { title: "CSS And Javascript Crash Course", instructor: "PROPER DOT INSTITUTE", date: "April 15, 2024", duration: "1 hr", category: "Web Development" },
  
  { title: "CSS, JavaScript And Python Complete Course", instructor: "PROPER DOT INSTITUTE", date: "April 9, 2025", duration: "7 hrs", category: "Programming" },
  { title: "CSS, JavaScript, PHP And Python...", instructor: "PROPER DOT INSTITUTE", date: "April 18, 2024", duration: "10 hrs", category: "Programming" },
  { title: "Raspberry Pi Step By Step...", instructor: "Educational Engineering Team", date: "Feb. 17, 2025", duration: "3.5 hrs", category: "Programming" },
  { title: "The Complete C & C++ Programming...", instructor: "Sara Academy", date: "Feb. 17, 2025", duration: "4.5 hrs", category: "Programming" },
  { title: "Mastering C Language...", instructor: "Sara Academy", date: "Feb. 22, 2024", duration: "1.5 hrs", category: "Programming" },

  { title: "ChatGPT Masterclass...", instructor: "Chetan Pujari", date: "Feb. 17, 2025", duration: "4 hrs", category: "AI" },
  { title: "Master Any Language with ChatGPT...", instructor: "Ellen Chamilothoris", date: "Feb. 17, 2025", duration: "1 hr", category: "AI" },
  { title: "ChatGPT and Generative AI in Business...", instructor: "MTF Inst. of Mgmt", date: "Jan. 22, 2026", duration: "4 hrs", category: "AI" },

  { title: "Essential Canva for Graphics Design...", instructor: "Learnify IT", date: "Feb. 17, 2025", duration: "4 hrs", category: "Design" },
  { title: "Essential Canva Course for Graphics...", instructor: "Marcus Menti, Zechariah Tech", date: "Oct. 29, 2024", duration: "2 hrs", category: "Design" },
  { title: "Learn Graphic Design using Canva...", instructor: "Khadin Akbar", date: "Sept. 1, 2024", duration: "2 hrs", category: "Design" },
  { title: "How to Draw Ep.3 - SHADING BASICS...", instructor: "Tamas Benko", date: "Feb. 17, 2025", duration: "3 hrs", category: "Design" },

  { title: "Windows Command Mastery for Ethical Hackers", instructor: "Cyber Twinkle", date: "April 9, 2025", duration: "30 mins", category: "Misc" },
  { title: "Hackers Toolkit", instructor: "Frank Anemaet", date: "July 26, 2024", duration: "36 mins", category: "Misc" },
  { title: "Microsoft Word Ultimate Guide", instructor: "Josh Werner", date: "Feb. 22, 2024", duration: "4.5 hrs", category: "Misc" },
  { title: "Essential English Grammar...", instructor: "Armin Doushabi", date: "Feb. 22, 2024", duration: "-", category: "Misc" },
  { title: "Building Flappy Bird & Ping Pong Games", instructor: "Christ Raharja", date: "Sept. 22, 2023", duration: "4 hrs", category: "Misc" },
];

const categories = ["All", "Web Development", "Programming", "AI", "Design", "Misc"];

export function CertificatesSection() {
  const [filter, setFilter] = useState("All");
  const { playMode } = useMode();

  const filteredCerts = filter === "All" 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  return (
    <section id="certificates" className="py-20 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="CERTIFICATES" subtitle="Continuous learning & verified achievements" />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-pixel text-[10px] uppercase transition-all duration-300 pixel-border ${
                filter === cat
                  ? 'bg-[#7c3aed] text-white border-[#7c3aed]'
                  : 'bg-transparent text-slate-400 border-slate-700 hover:text-white hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`bg-[#111111] border border-slate-800 p-5 flex flex-col justify-between group 
                  ${playMode ? 'hover:-translate-y-1 hover:border-[#7c3aed] hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]' : ''}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[#3b82f6] text-[10px] uppercase font-pixel tracking-tighter sm:tracking-normal">
                      {cert.category}
                    </span>
                    <span className="text-slate-500 font-pixel text-[9px]">{cert.duration}</span>
                  </div>
                  <h4 className="text-white font-bold leading-tight mb-2 text-sm">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 text-xs line-clamp-2">
                    {cert.instructor}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 text-slate-500 text-xs font-pixel">
                  {cert.date}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
