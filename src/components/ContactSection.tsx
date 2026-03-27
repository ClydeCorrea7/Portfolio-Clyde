'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';
import { Mail, Phone, Code, Briefcase, Send } from 'lucide-react';

export function ContactSection() {
  const { playMode } = useMode();

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] min-h-screen flex flex-col justify-center relative border-t-2 border-[#3b82f6]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent shadow-[0_0_20px_rgba(124,58,237,0.8)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <SectionHeading title="CONTACT" subtitle="Let's build something amazing" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className={`bg-[#0f0f0f] border border-[#3b82f6] p-8 md:p-12 relative overflow-hidden ${
            playMode ? 'shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''
          }`}
        >
          {/* Subtle grid bg inside card */}
          <div className="absolute inset-0 pixel-bg opacity-30 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left flex-1 w-full relative">
              <h3 className="font-pixel text-xl text-white mb-6">REACH OUT</h3>
              <p className="text-slate-400 mb-8 max-w-sm font-medium">
                Looking for a creative technologist or full-stack developer? I&apos;m currently open to new opportunities and exciting collaborations.
              </p>
              
              <div className="space-y-4 mb-4">
                <a href="mailto:clydecorrea78@gmail.com" className="flex items-center text-slate-300 hover:text-[#ec4899] transition-colors group">
                  <div className={`p-2 bg-[#ec4899]/10 mr-4 ${playMode ? 'group-hover:animate-pulse group-hover:bg-[#ec4899]/20' : ''}`}>
                    <Mail className="w-5 h-5 text-[#ec4899]" />
                  </div>
                  <span className="font-pixel text-[10px] sm:text-xs">clydecorrea78@gmail.com</span>
                </a>

                <a href="tel:9867320317" className="flex items-center text-slate-300 hover:text-[#3b82f6] transition-colors group">
                  <div className={`p-2 bg-[#3b82f6]/10 mr-4 ${playMode ? 'group-hover:animate-pulse group-hover:bg-[#3b82f6]/20' : ''}`}>
                    <Phone className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <span className="font-pixel text-[10px] sm:text-xs">9867320317</span>
                </a>
              </div>
            </div>

            <div className="flex-1 w-full flex flex-col gap-4 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-800 font-pixel text-6xl opacity-10 pointer-events-none select-none">
                #
              </div>

              <a
                href="mailto:clydecorrea78@gmail.com"
                className={`flex items-center justify-center gap-3 bg-[#3b82f6] text-white p-4 font-pixel uppercase text-xs pixel-border transition-all
                  ${playMode ? 'hover:bg-[#2563eb] hover:-translate-y-1 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'hover:bg-blue-600'}`}
              >
                <Send className="w-4 h-4" /> Email Me
              </a>
              
              <a
                href="https://github.com/ClydeCorrea7"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 bg-[#111111] text-white border border-[#7c3aed] p-4 font-pixel uppercase text-xs transition-all
                  ${playMode ? 'hover:bg-[#7c3aed]/10 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(124,58,237,0.3)]' : 'hover:bg-[#7c3aed]/20'}`}
              >
                <Code className="w-4 h-4 text-[#7c3aed]" /> GitHub Profile
              </a>
              
              <a
                href="https://www.linkedin.com/in/clyde-correa-b12406373/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 bg-[#111111] text-white border border-[#0ea5e9] p-4 font-pixel uppercase text-xs transition-all
                  ${playMode ? 'hover:bg-[#0ea5e9]/10 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(14,165,233,0.3)]' : 'hover:bg-[#0ea5e9]/20'}`}
              >
                <Briefcase className="w-4 h-4 text-[#0ea5e9]" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-slate-500 font-pixel text-[10px]">
          <p>© {new Date().getFullYear()} Clyde Correa. All rights reserved.</p>
          <p className="mt-2 text-slate-600">Built with Next.js, Framer Motion, and Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
}
