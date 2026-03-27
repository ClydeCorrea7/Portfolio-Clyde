'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  'Booting Portfolio...',
  'Loading Assets...',
  'Rendering Experience...',
];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Message interval
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 800);

    // Progress interval
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-slate-200 pixel-bg"
        >
          <div className="w-full max-w-md px-6 flex flex-col items-center gap-8">
            <h1 className="font-pixel text-xl md:text-2xl text-center text-glow-blue text-[#3b82f6] tracking-widest animate-pulse">
              SYSTEM INIT...
            </h1>

            <div className="w-full">
              <div className="flex justify-between mb-2 font-pixel text-[10px] md:text-xs">
                <span className="text-slate-400">{messages[messageIndex]}</span>
                <span className="text-[#3b82f6]">{Math.min(progress, 100)}%</span>
              </div>
              <div className="h-4 w-full border-2 border-[#3b82f6] p-0.5">
                <div
                  className="h-full bg-[#3b82f6] transition-all duration-200 ease-out"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>

            <div className="font-pixel text-[10px] text-slate-500 animate-pulse">
              PLEASE WAIT
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
