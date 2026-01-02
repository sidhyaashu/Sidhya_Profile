import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

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
      <body className={cn(inter.className, "bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}
