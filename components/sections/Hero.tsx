'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import CompassCurve from '@/components/ui/CompassCurve';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-10 sm:pt-20 overflow-hidden bg-black pb-20">

      {/* Background Gradients - Subtle & Deep */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Centered Content */}
      <div className={`relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Feature Visual: Compass Curve - Positioned Behind Image */}
        {/* We position it absolute relative to this container, moved up to sit behind the head */}
        <div className="absolute top-[-100px] sm:top-[-120px] left-1/2 -translate-x-1/2 w-[140%] max-w-[1400px] h-[500px] z-0 opacity-50 pointer-events-none">
          <CompassCurve />
        </div>

        {/* Profile Picture with Rainbow/Holo Glow */}
        <div className="mb-12 relative group cursor-pointer z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
          <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 relative z-10 box-content">
            <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
              <Image
                src="/me.jpg"
                alt="Profile"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 150px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Linear Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md hover:bg-white/10 transition-colors relative z-10">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <span className="text-sm font-mono font-medium tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-200">LINEAR PLAN</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] relative z-10">
          Plan and navigate <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            from idea to launch.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 relative z-10">
          Architecting intelligent systems and high-performance interfaces
          that merge engineering precision with fluid design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
          <a href="#projects" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <span className="mr-2 text-lg">View Work</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="group inline-flex h-14 items-center justify-center rounded-full bg-zinc-900/80 px-10 font-medium text-white ring-1 ring-white/20 transition-all duration-300 hover:bg-zinc-800 hover:ring-white/50 active:scale-95 backdrop-blur-sm">
            Contact Me
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>

      <style jsx>{`
        .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
