'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code2, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github: string;
  demo: string;
}

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <Card
        className="relative z-10 w-[90%] max-w-2xl bg-neutral-900 border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
              <Badge variant="secondary" className="bg-neutral-800 text-white/80">
                {project.category}
              </Badge>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-neutral-300 leading-relaxed">{project.description}</p>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-neutral-800 text-white/80 rounded-full border border-neutral-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Live Demo</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
