'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { experiences } from '@/lib/data/experience';
import { ArrowRight } from 'lucide-react';
import RainbowCurve from '@/components/ui/RainbowCurve';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen bg-black flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative overflow-hidden"
    >
      {/* Rainbow Tech Curve Background */}
      <div className="absolute top-0 left-0 w-full h-[200px] opacity-30 pointer-events-none">
        <RainbowCurve className="transform -scale-y-100 opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className={`mb-16 sm:mb-24 space-y-4 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 text-purple-500 mb-4">
            <span className="h-px w-8 bg-purple-500/50"></span>
            <span className="text-sm font-medium tracking-wider uppercase">Career Path</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Professional <br /> Experience.
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Building scalable systems, automating workflows, and pushing the boundaries of AI & DevOps.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24 lg:gap-y-20">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link href={`/experience/${exp.id}`} className="block space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors duration-300" />
                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base pr-4">
                    <span className="block text-zinc-500 text-xs mb-2 font-mono uppercase tracking-wide">{exp.company}</span>
                    {exp.shortDescription || exp.description[0]}
                  </p>

                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium group-hover:text-purple-400 transition-all duration-300 pt-2">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
