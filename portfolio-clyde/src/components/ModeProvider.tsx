'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModeContextType = {
  playMode: boolean;
  togglePlayMode: () => void;
};

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [playMode, setPlayMode] = useState(true);

  const togglePlayMode = () => setPlayMode((prev) => !prev);

  return (
    <ModeContext.Provider value={{ playMode, togglePlayMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
