import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ParticlesBackground from '@/components/layout/ParticlesBackground';
import ScrollProgress from '@/components/layout/ScrollProgress';
import GridOverlay from '@/components/layout/GridOverlay';
import TriangleDecoration from '@/components/layout/TriangleDecoration';
import CursorRing from '@/components/layout/CursorRing';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Asutosh Sidhya - AI & Software Engineer',
  description: 'AI & Software Engineer passionate about building intelligent, scalable, and automation-driven systems. Expertise in Generative AI, NLP, DevOps, and Full-Stack Development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground />
        <GridOverlay />
        <TriangleDecoration />
        <CursorRing />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
