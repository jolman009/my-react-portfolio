import { useEffect } from "react";
import { motion } from "motion/react";
import { X, ExternalLink, Github, Layers, AlertCircle, CheckCircle2 } from "lucide-react";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key press and prevent background scrolling
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Dialog Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden glass border border-glass-border bg-bg-primary/95 shadow-2xl"
      >
        {/* Header Image with close button */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-90" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-105 active:scale-95 focus:outline-none"
          >
            <X size={20} />
          </button>

          {/* Title and short overview inside header banner */}
          <div className="absolute bottom-4 left-6 right-6">
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-1"
            >
              {project.title}
            </h2>
            <p className="text-sm text-text-secondary line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent-purple mb-2">
              Project Overview
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
              {project.detailedDescription}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-accent-blue" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                Technologies Used
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl bg-surface-bg border border-surface-border text-xs sm:text-sm font-medium text-text-primary hover:border-accent-purple/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid sm:grid-cols-2 gap-5 pt-2">
            {/* Challenges */}
            <div className="p-4 rounded-2xl bg-surface-bg border border-surface-border space-y-2.5">
              <div className="flex items-center gap-2 text-accent-blue">
                <AlertCircle size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Challenges Faced
                </h4>
              </div>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-blue shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-4 rounded-2xl bg-surface-bg border border-surface-border space-y-2.5">
              <div className="flex items-center gap-2 text-accent-cyan">
                <CheckCircle2 size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">
                  Solutions & Impact
                </h4>
              </div>
              <ul className="space-y-2">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-cyan shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer with External Links */}
        <div className="p-6 border-t border-surface-border bg-surface-bg/40 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-text-secondary hidden sm:block">
            Click outside or press <kbd className="px-1.5 py-0.5 rounded bg-surface-bg border border-surface-border text-[11px] font-mono">Esc</kbd> to exit
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold glass glass-hover text-text-primary hover:text-accent-purple transition-all"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-text-primary text-bg-primary hover:opacity-90 transition-all shadow-md active:scale-95"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
