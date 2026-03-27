'use client';

import { useState } from 'react';
import { ModeProvider } from './ModeProvider';
import { LoadingScreen } from './LoadingScreen';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { AcademicSection } from './AcademicSection';
import { WorkExperienceSection } from './WorkExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { CertificatesSection } from './CertificatesSection';
import { ContactSection } from './ContactSection';

export function ClientWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ModeProvider>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <HeroSection />
            <AcademicSection />
            <WorkExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <CertificatesSection />
            <ContactSection />
          </main>
        </div>
      )}
    </ModeProvider>
  );
}
