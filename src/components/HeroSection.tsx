'use client';

import { motion } from 'framer-motion';
import { useMode } from './ModeProvider';
import { Terminal, MapPin, Mail, Phone, Link2 } from 'lucide-react';

export function HeroSection() {
  const { playMode } = useMode();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden pixel-bg"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/90" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div 
            animate={playMode ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center space-x-2 bg-[#7c3aed]/10 border border-[#7c3aed]/30 px-4 py-2 pixel-corners text-[#7c3aed] text-xs font-pixel mb-6"
          >
            <motion.div animate={playMode ? { rotate: 360 } : {}} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Terminal className="w-4 h-4 mr-2" />
            </motion.div>
            <span>HELLO_WORLD</span>
          </motion.div>

          <h1
            className={`font-pixel text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tighter ${
              playMode ? 'animate-glitch text-glow-blue text-[#3b82f6]' : 'text-white'
            }`}
          >
            Clyde<br />Correa
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-400 font-medium mb-8 max-w-2xl mx-auto">
            Full-Stack Developer &<br className="md:hidden" /> Creative Technologist
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-10">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-[#ec4899]" /> Vidhyavihar, Mumbai
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-1 text-[#3b82f6]" /> clydecorrea78@gmail.com
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1 text-[#7c3aed]" /> 9867320317
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden text-slate-400 max-w-2xl mx-auto md:text-lg mb-12"
          >
            Focused on building interactive applications and game-based experiences, 
            blending modern UI systems with real-time AI-powered features.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.a
            whileHover={playMode ? { scale: 1.1, rotate: 2 } : { y: -4 }}
            href="#projects"
            className={`group relative px-6 py-4 bg-[#3b82f6] text-white font-pixel text-xs uppercase tracking-widest pixel-border border-[#3b82f6] overflow-hidden block sm:inline-block ${
              playMode ? 'shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse' : 'transition-transform'
            }`}
          >
            <span className="relative z-10 group-hover:text-white text-glow">View Projects</span>
            {playMode && (
              <div className="absolute inset-0 bg-[#7c3aed] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300" />
            )}
          </motion.a>
          
          <motion.a
            whileHover={playMode ? { scale: 1.1, rotate: -2 } : { y: -4 }}
            href="#certificates"
            className={`group relative px-6 py-4 bg-transparent text-[#7c3aed] font-pixel text-xs uppercase tracking-widest pixel-border border-[#7c3aed] hover:bg-[#7c3aed]/10 block sm:inline-block ${
              playMode ? 'shadow-[0_0_15px_rgba(124,58,237,0.4)]' : 'transition-colors'
            }`}
          >
            View Certificates
          </motion.a>

          <a
            href="#contact"
            className="group relative px-6 py-4 bg-transparent text-slate-300 font-pixel text-xs uppercase tracking-widest pixel-border border-slate-600 hover:border-slate-400 transition-colors hover:-translate-y-1 block sm:inline-block"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
