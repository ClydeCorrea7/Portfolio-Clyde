'use client';

import { motion } from 'framer-motion';
import { useMode } from './ModeProvider';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { playMode } = useMode();

  return (
    <div className="mb-12 md:mb-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={`font-pixel text-2xl md:text-4xl text-[#7c3aed] mb-4 uppercase inline-block ${playMode ? 'text-glow animate-pulse' : ''}`}
      >
        {'>'} {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 font-medium tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 h-1 w-24 mx-auto bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]"
      />
    </div>
  );
}
