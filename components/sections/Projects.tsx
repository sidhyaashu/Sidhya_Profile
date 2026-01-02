"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedTag from '@/components/ui/AnimatedTag';
import GlassCard from '@/components/ui/GlassCard';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';
import ProjectModal from '@/components/sections/ProjectModal';

const projects = [
  {
    title: 'AI-Powered EdTech Platform',
    description:
      'Built an intelligent educational platform using Next.js, React, and LLMs to provide personalized learning experiences with adaptive content generation.',
    technologies: ['Next.js', 'React', 'LLM', 'PostgreSQL', 'TypeScript'],
    category: 'Full-Stack AI',
    github: '#',
    demo: '#',
  },
  {
    title: 'DevOps CI/CD Pipeline',
    description:
      'Designed and implemented a complete CI/CD pipeline using GitHub Actions, Docker, Kubernetes, and ArgoCD for automated deployments.',
    technologies: ['Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'AWS'],
    category: 'DevOps',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Agent Automation Framework',
    description:
      'Developed an MCP-based automation framework for enterprise workflows using AI agents, n8n, and LLM integrations.',
    technologies: ['Python', 'LLM', 'n8n', 'FastAPI', 'MCP'],
    category: 'AI Automation',
    github: '#',
    demo: '#',
  },
  {
    title: 'NLP Handwriting Analysis',
    description:
      'Research project using NLP and LLMs to analyze handwriting and generate personalized learning content for students.',
    technologies: ['Python', 'NLP', 'TensorFlow', 'LLM', 'Research'],
    category: 'AI Research',
    github: '#',
    demo: '#',
  },
];

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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      {/* Orange/Red gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(251,146,60,0.2),transparent_60%)]" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(239,68,68,0.15),transparent_60%)]" /> */}
      
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        <div className={`text-center space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg">
            Showcasing my work in AI, full-stack development, and DevOps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div key={index} style={{ transitionDelay: `${index * 150}ms` }} className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <TiltCard className="rounded-xl">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(index)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(index); } }}
                  className="cursor-pointer"
                  aria-label={`Open project ${project.title}`}
                >
                  <Card
                    className={`bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/70 hover:scale-[1.02] hover:shadow-xl group`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <Code2 className="h-5 w-5 text-white/70" />
                            <CardTitle className="text-lg sm:text-xl text-white">
                              {project.title}
                            </CardTitle>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-zinc-800 text-white/80 text-xs"
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <AnimatedTag key={idx} className="bg-zinc-800/50 text-white/70 hover:bg-zinc-800 text-xs">
                            {tech}
                          </AnimatedTag>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
        <ProjectModal open={selected !== null} onClose={() => setSelected(null)} project={selected !== null ? projects[selected] : null} />
      </div>
    </section>
  );
}

