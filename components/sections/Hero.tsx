"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typing from '@/components/ui/Typing';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Professional gradient background - Vercel style */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className={`text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-4 sm:mb-6 animate-pulse-slow group">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full p-1 transition-transform duration-300 motion-reduce:transition-none">
            {/* glow overlay (absolute) - becomes visible on hover via group */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: '0 28px 64px rgba(255,255,255,0.06)' }}
            />

            <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden shadow-inner relative border border-transparent transition-all duration-300 motion-reduce:transition-none group-hover:border-white/40 group-hover:border-4 group-hover:shadow-[0_12px_40px_rgba(255,255,255,0.06)]">
              <Image
                src="/me.jpg"
                alt="Asutosh Sidhya"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <p className="text-white/70 text-sm sm:text-base md:text-lg animate-fade-in">
            Hi, I'm Asutosh
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight">
            Building{' '}
            <span className="text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">digital</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight">
            <span className="text-white/80">products</span>,{' '}
            <span className="text-white/60">AI systems</span> and
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight text-white/50">
            experience.
          </h1>
          <div className="mt-2 text-white/70">
            <Typing phrases={["AI & Software Engineer", "Building intelligent systems", "Designing great UX"]} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-40 hover:opacity-60 transition-opacity duration-300">
            <div className="text-white/60 font-semibold text-xs sm:text-sm md:text-base">
              Gameonix Esports
            </div>
            <div className="text-white/60 font-semibold text-xs sm:text-sm md:text-base">
              Entrepreneur Growth Labs
            </div>
            <div className="text-white/60 font-semibold text-xs sm:text-sm md:text-base">
              Techno Billion AI
            </div>
            <div className="text-white/60 font-semibold text-xs sm:text-sm md:text-base">
              Brainware University
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
