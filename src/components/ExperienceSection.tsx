import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';

export function ExperienceSection() {
  const exp = EXPERIENCE[0];

  return (
    <section id="experience" className="py-12 border-t border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl font-bold tracking-tight text-white mb-6">
          Experience
        </h2>

        <div className="space-y-6">
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {exp.role}
                </h3>
                <div className="text-sm text-zinc-300 font-medium">
                  {exp.organization}
                </div>
                <div className="text-xs text-zinc-400">
                  {exp.subOrg}
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-400 flex items-center gap-2 sm:text-right shrink-0 mt-1 sm:mt-0">
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
              {exp.bullets.slice(0, 3).map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
