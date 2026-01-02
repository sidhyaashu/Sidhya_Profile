"use client";

import { useEffect } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category?: string;
  github?: string;
  demo?: string;
};

export default function ProjectModal({ open, onClose, project }: { open: boolean; onClose: () => void; project?: Project | null; }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // trap focus could be added later
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-60 grid place-items-center" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-3xl w-[94%] bg-card text-card-foreground rounded-xl shadow-2xl border p-6 sm:p-8 z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
            <p className="text-sm text-white/70 mt-1">{project.category}</p>
          </div>
          <button aria-label="Close modal" onClick={onClose} className="text-white/70 hover:text-white">Close</button>
        </div>

        <div className="mt-4 space-y-4">
          <p className="text-white/80 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, i) => (
              <span key={i} className="text-xs bg-zinc-800/50 text-white/70 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">View Code</a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">Live Demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
