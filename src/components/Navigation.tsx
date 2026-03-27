'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMode } from './ModeProvider';
import { Gamepad2, BriefcaseBusiness, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Academic', href: '#academic' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { playMode, togglePlayMode } = useMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active tab logic based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for navbar
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b-[2px] border-[#3b82f6]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 font-pixel text-[#7c3aed] text-glow sm:text-lg text-sm tracking-tighter">
              Clyde_Correa
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-pixel text-[10px] uppercase tracking-widest px-3 py-2 transition-all ${
                      activeSection === link.href.substring(1)
                        ? 'text-[#3b82f6] border-b-2 border-[#3b82f6] text-glow-blue'
                        : 'text-slate-400 hover:text-[#7c3aed] hover:-translate-y-1'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={togglePlayMode}
                className="flex items-center gap-2 font-pixel text-[10px] text-white bg-[#0a0a0a] pixel-border border-[#7c3aed] px-3 py-2 hover:bg-[#7c3aed]/20 transition-colors"
              >
                {playMode ? <Gamepad2 className="w-4 h-4 text-[#ec4899]" /> : <BriefcaseBusiness className="w-4 h-4 text-[#3b82f6]" />}
                {playMode ? 'PLAY' : 'PRO'}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={togglePlayMode}
                className="mr-4 p-2 pixel-border border-[#7c3aed] hover:bg-[#7c3aed]/20"
              >
                {playMode ? <Gamepad2 className="w-4 h-4 text-[#ec4899]" /> : <BriefcaseBusiness className="w-4 h-4 text-[#3b82f6]" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2 pixel-border border-slate-600"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0a0a0a] border-b-2 border-[#3b82f6] overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-pixel text-[10px] uppercase block w-full text-left px-3 py-3 ${
                      activeSection === link.href.substring(1)
                        ? 'text-[#3b82f6] bg-[#3b82f6]/10'
                        : 'text-slate-300 hover:text-[#7c3aed] hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
