"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code2 } from 'lucide-react';
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
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <section
        id="projects"
        className="relative w-full py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(251,146,60,0.15),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-white/60 text-base md:text-lg">
              Showcasing my work in AI, full-stack development, and DevOps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-neutral-900 border-neutral-800 flex flex-col cursor-pointer hover:border-neutral-700 transition-colors"
                onClick={() => setSelectedProject(index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-white/70" />
                        <CardTitle className="text-xl text-white">
                          {project.title}
                        </CardTitle>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-neutral-800 text-white/80 text-xs"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal
        project={selectedProject !== null ? projects[selectedProject] : null}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}