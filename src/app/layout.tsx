import type { Metadata } from 'next';
import { Inter, Press_Start_2P } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: 'Clyde Correa | Full-Stack Developer & Creative Technologist',
  description: 'Portfolio of Clyde Correa, showcasing modern interactive design and retro game aesthetics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${pressStart2P.variable} bg-[#0a0a0a] text-slate-200 font-pixel text-[10px] sm:text-xs min-h-screen flex flex-col antialiased selection:bg-purple-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
