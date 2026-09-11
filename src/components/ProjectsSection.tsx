import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 border-t border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl font-bold tracking-tight text-white mb-2">
          Featured Projects
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-8">
          Selected software engineering and machine learning systems.
        </p>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors space-y-3"
            >
              {/* Project title and link */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-zinc-100">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors inline-flex items-center"
                      title="View GitHub Repository"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
