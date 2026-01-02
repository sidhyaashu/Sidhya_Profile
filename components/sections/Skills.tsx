'use client';

import { useState, useEffect, useRef } from 'react';
import { skillCategories, coreValues } from '@/lib/data/skills';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { BlogCardArt, ArtVariant } from '@/components/ui/BlogCardArt';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const activeCategory = skillCategories.find(c => c.id === activeTab) || skillCategories[0];

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

  const getCategoryTheme = (id: string) => {
    switch (id) {
      case 'ai-ml': return '#d946ef'; // Fuchsia
      case 'full-stack': return '#3b82f6'; // Blue
      case 'backend': return '#22c55e'; // Green
      case 'devops': return '#f97316'; // Orange
      case 'cloud': return '#06b6d4'; // Cyan
      case 'automation': return '#ec4899'; // Pink
      case 'ai-agents': return '#8b5cf6'; // Violet
      default: return '#a855f7';
    }
  };

  const getCategoryArt = (id: string): ArtVariant => {
    switch (id) {
      case 'ai-ml': return 'continuous-planning'; // Magnetic
      case 'full-stack': return 'remote-work'; // Grid/Globe
      case 'devops': return 'customer-experience'; // Tree/Flow
      case 'cloud': return 'remote-work'; // Globe
      case 'automation': return 'design-code'; // Spirograph
      case 'ai-agents': return 'self-driving'; // UI Flowchart
      case 'backend': return 'customer-experience';
      default: return 'remote-work';
    }
  };

  const currentTheme = getCategoryTheme(activeCategory.id);
  const currentArt = getCategoryArt(activeCategory.id);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className={`mb-16 sm:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Ideate and specify <br /> what to build next
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          {/* Left Column: Vertical Tabs */}
          <div className={`lg:col-span-4 flex flex-col gap-2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`text-left px-4 py-3 border-l-2 transition-all duration-300 text-lg ${activeTab === category.id
                  ? 'border-white text-white font-medium pl-6'
                  : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                  }`}
                style={activeTab === category.id ? { borderColor: currentTheme } : {}}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Right Column: IDE Content */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div
              className="bg-zinc-900/30 border rounded-xl overflow-hidden min-h-[450px] flex flex-col relative group transition-colors duration-500"
              style={{ borderColor: `${currentTheme}40` }}
            >
              {/* IDE Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b bg-zinc-900/50 relative z-20" style={{ borderColor: `${currentTheme}20` }}>
                <div className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
                  {/* Icon rendered safely */}
                  {(() => { const Icon = activeCategory.icon; return <Icon className="w-4 h-4" style={{ color: currentTheme }} /> })()}
                  <span>skills</span>
                  <ChevronRight className="w-3 h-3" />
                  <span style={{ color: currentTheme }}>{activeCategory.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
              </div>

              {/* Background Art - VIBRANT & CENTERED */}
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-40">
                {/* 
                     Using a radial gradient mask to fade pure edges 
                     and scaling up slightly to fill space nicely 
                  */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                <div className="w-[120%] h-[120%] animate-pulse-slow">
                  <BlogCardArt
                    variant={currentArt}
                    className="!bg-transparent"
                    primaryColor={currentTheme}
                  />
                </div>
              </div>

              {/* IDE Body */}
              <div className="p-8 sm:p-10 flex-1 relative z-10 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/80 pointer-events-none" />

                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                  {activeCategory.title}
                </h3>
                <p className="text-zinc-400 mb-8 border-b border-zinc-800/50 pb-6 text-lg">
                  Technologies and tools used to build scalable solutions.
                </p>

                <div className="space-y-4">
                  {activeCategory.skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center gap-4 text-zinc-300 group/item hover:text-white transition-colors pl-2"
                      style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${currentTheme}15`, color: currentTheme }}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-base tracking-wide">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: Core Values */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-zinc-800 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Icon className="w-5 h-5" />
                  <h3>{value.title}</h3>
                </div>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(5px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-pulse-slow {
                animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
            }
        `}</style>
    </section>
  );
}
