"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ExternalLink, Github, Code2, Zap, GitBranch, Bot, Search, ArrowRight, Layers,
  Atom, LayoutTemplate, Database, FileCode2, Container, Cloud, Brain, Workflow, Terminal, Cpu
} from 'lucide-react';
import ProjectModal from '@/components/sections/ProjectModal';
import { projects } from '@/lib/data/projects';
import TiltCard from '@/components/ui/TiltCard';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

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

  const getCategoryIcon = (category: string) => {
    if (category.includes('DevOps')) return GitBranch;
    if (category.includes('AI')) return Bot;
    if (category.includes('Research')) return Search;
    return Layers;
  }

  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('react')) return Atom;
    if (t.includes('next')) return LayoutTemplate;
    if (t.includes('data') || t.includes('sql')) return Database;
    if (t.includes('type') || t.includes('script')) return FileCode2;
    if (t.includes('docker') || t.includes('kubernetes')) return Container;
    if (t.includes('aws') || t.includes('cloud')) return Cloud;
    if (t.includes('llm') || t.includes('ai') || t.includes('nlp')) return Brain;
    if (t.includes('n8n') || t.includes('flow')) return Workflow;
    if (t.includes('python')) return Terminal;
    if (t.includes('tensorflow') || t.includes('ml')) return Cpu;
    return Code2;
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden bg-black"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className={`mb-16 sm:mb-24 space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 font-mono">
            {'<'}Featured_Work{' />'}
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg border-l-2 border-zinc-800 pl-4">
            Engineering high-impact solutions with modern architecture and AI integration.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);

            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  onClick={() => setSelected(index)}
                  className="h-full bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:shadow-[0_0_30px_-5px_rgba(120,119,198,0.1)]"
                >

                  <div className="p-8 sm:p-10 flex flex-col h-full relative z-10">
                    {/* Top Bar: Icon & Category */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-lg bg-black border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-colors shadow-inner">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        {/* Github Icon Link - Stop propagation to prevent modal open */}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-full bg-zinc-800/50 hover:bg-white hover:text-black flex items-center justify-center transition-all text-zinc-400"
                            title="View Source Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-3 py-2 rounded bg-black/50 flex items-center">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors font-mono tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer: Tech Stack (Overlapped Circles) & Action */}
                    <div className="pt-8 border-t border-zinc-800 flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        {/* No hover expand effect on the stack container */}
                        <div className="flex -space-x-3">
                          {project.technologies.slice(0, 3).map((tech, i) => {
                            const TechIcon = getTechIcon(tech);
                            return (
                              <div
                                key={i}
                                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg relative z-[1]"
                                title={tech}
                              >
                                <TechIcon className="w-5 h-5" />
                              </div>
                            );
                          })}
                          {project.technologies.length > 3 && (
                            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-mono shadow-lg relative z-0">
                              +{project.technologies.length - 3}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 group-hover:text-white group-hover:border-zinc-500 transition-colors flex items-center gap-2">
                        DETAILS <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <ProjectModal open={selected !== null} onClose={() => setSelected(null)} project={selected !== null ? projects[selected] : null} />
      </div>
    </section>
  );
}
