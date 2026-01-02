"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen mx-auto flex flex-col items-center justify-center text-center overflow-hidden bg-[#000000]"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),hsla(0,0%,100%,0))'
      }}
    >
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Asutosh Sidhya
        </h1>
        <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-300">
          Software & AI Engineer
        </h2>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-400">
          I build high-quality digital products and intelligent systems that deliver exceptional user experiences.
        </p>
        <div className="mt-8 flex flex-row items-center gap-4">
          <Button size="lg" className="group">
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            View my work
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-4">
            Trusted by teams at world-class companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-4 opacity-60">
            <div className="text-gray-400 font-semibold text-sm">
              Gameonix Esports
            </div>
            <div className="text-gray-400 font-semibold text-sm">
              Entrepreneur Growth Labs
            </div>
            <div className="text-gray-400 font-semibold text-sm">
              Techno Billion AI
            </div>
            <div className="text-gray-400 font-semibold text-sm">
              Brainware University
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}