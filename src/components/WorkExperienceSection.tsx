'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { useMode } from './ModeProvider';
import { Briefcase, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

const designs = [
  {
    id: 1,
    title: 'Dussehra Poster',
    subtitle: 'Archer Silhouette',
    description: 'A minimal and symbolic festive poster created for Dussehra, using strong visual contrast and silhouette design to represent the triumph of good over evil. The composition centers around a lone archer against a full moon.',
    src: '/designs/1.png',
    type: 'image',
  },
  {
    id: 2,
    title: 'Recruitment Poster',
    subtitle: 'Join Us Now',
    description: 'A vibrant and engaging recruitment poster designed for AEIC to attract student participation across multiple departments. The design uses bold colors, friendly illustrations, and clear hierarchy.',
    src: '/designs/2.jpg',
    type: 'image',
  },
  {
    id: 3,
    title: 'Himani Yadav Feature',
    subtitle: 'Editorial Design',
    description: 'A profile-style editorial design highlighting an entrepreneur’s journey. The layout combines typography, imagery, and storytelling to create a clean and informative visual narrative.',
    src: '/designs/3.png',
    type: 'image',
  },
  {
    id: 4,
    title: 'Ghazal Alagh Feature',
    subtitle: 'Editorial Poster',
    description: 'A modern editorial poster showcasing Ghazal Alagh, using a collage-inspired layout with layered imagery and bold typography. Blends grayscale photography with strong typographic contrast.',
    src: '/designs/4.png',
    type: 'image',
  },
  {
    id: 5,
    title: 'Tropical Flea Market',
    subtitle: 'Event Poster',
    description: 'A themed event poster designed with a tropical aesthetic, incorporating vibrant colors, organic shapes, and playful typography.',
    src: '/designs/5.png',
    type: 'image',
  },
  {
    id: 6,
    title: 'Cybersecurity Event',
    subtitle: 'Poster Version 1',
    description: 'A high-impact promotional poster for a cybersecurity session featuring a keynote speaker. The design uses neon gradients, dark backgrounds, and tech-inspired visuals.',
    src: '/designs/6.png',
    type: 'image',
  },
  {
    id: 7,
    title: 'Cybersecurity Event',
    subtitle: 'Poster Version 2',
    description: 'An alternate layout for the cybersecurity event, focusing on improved information flow and readability while retaining the futuristic visual style.',
    src: '/designs/7.png',
    type: 'image',
  },
  {
    id: 8,
    title: 'E-Conclave Brochure',
    subtitle: 'Multi-page Document',
    description: 'A comprehensive multi-page brochure designed for AEIC’s E-Conclave event, covering event overview, sponsorship details, and institutional information.',
    src: '/designs/Brochure.pdf',
    type: 'pdf',
  },
];

export function WorkExperienceSection() {
  const { playMode } = useMode();

  return (
    <section id="experience" className="py-20 relative bg-[#0a0a0a] min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <SectionHeading title="EXPERIENCE" subtitle="My professional journey & roles" />

        <div className="relative pl-8 sm:pl-0 max-w-4xl mx-auto mb-20">
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
                  <div className="text-slate-400 font-medium">St. Andrew&apos;s College</div>
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
                  {"// LOGFILE: EXPERIENCE.DAT"}<br />
                  {"// STATUS: ACTIVE"}<br />
                  {"// LEVEL: 3"}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Design Showcase Section */}
        <div className="mt-20">
          <SectionHeading title="DESIGN PORTFOLIO" subtitle="Selected works from my role as Graphic Designer" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-xl overflow-hidden bg-[#111] border border-slate-800 flex flex-col h-full ${
                  playMode ? 'hover:border-[#7c3aed]/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] transition-all duration-300' : ''
                }`}
              >
                {/* Image/Preview Container */}
                <div className="relative w-full aspect-[4/5] bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                  {design.type === 'image' ? (
                    <>
                      <Image
                        src={design.src}
                        alt={design.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400 group-hover:text-[#7c3aed] transition-colors duration-300">
                      <FileText className="w-16 h-16 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="font-pixel text-sm uppercase tracking-wider mb-2">PDF Document</div>
                      <div className="text-xs">Click to view full brochure</div>
                    </div>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#7c3aed]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-sm">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm md:text-base leading-relaxed hidden sm:block">
                        {design.description}
                      </p>
                      <a 
                        href={design.src} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 bg-white text-[#7c3aed] px-4 py-2 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors"
                      >
                        {design.type === 'image' ? (
                          <>
                            <ImageIcon className="w-4 h-4" />
                            View Full Image
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            Open Brochure
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex flex-col flex-grow relative z-10 bg-[#111]">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-[#7c3aed] transition-colors line-clamp-1">
                      {design.title}
                    </h4>
                    {playMode && (
                      <span className="font-pixel text-[10px] text-[#7c3aed] bg-[#7c3aed]/10 px-2 py-1 rounded whitespace-nowrap">
                        ITEM_{design.id}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 font-medium mb-3">{design.subtitle}</p>
                  
                  {/* Mobile description (visible only on small screens since hover overlay is tricky) */}
                  <p className="text-sm text-slate-500 sm:hidden mt-auto line-clamp-3">
                    {design.description}
                  </p>
                  
                  {/* Mobile View Button */}
                  <div className="sm:hidden mt-4 pt-4 border-t border-slate-800">
                     <a 
                        href={design.src} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-[#7c3aed] font-medium"
                      >
                        {design.type === 'image' ? 'View Image' : 'View PDF'}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
