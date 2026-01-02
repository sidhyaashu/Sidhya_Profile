"use client";

import { useEffect } from "react";
import { X, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export default function ProjectModal({ open, onClose, project }: { open: boolean; onClose: () => void; project?: Project | null; }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = 'auto';
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Header Image / Gradient Placeholder */}
        <div className="h-32 bg-gradient-to-br from-zinc-800 to-black relative">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 -mt-12 relative z-10">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4">
            {project.category || 'PROJECT'}
          </span>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
            </div>

            {/* Tech Stack Grid */}
            <div>
              <h4 className="text-sm font-medium text-zinc-500 mb-3 uppercase tracking-wider">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm font-mono flex items-center gap-2">
                    <Tag className="w-3 h-3 opacity-50" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-zinc-800/50">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800/50 text-zinc-500 font-medium cursor-not-allowed">
                  <Github className="w-5 h-5" />
                  Private Repo
                </div>
              )}

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800/50 text-zinc-500 font-medium cursor-not-allowed">
                  <ExternalLink className="w-5 h-5" />
                  No Demo
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
