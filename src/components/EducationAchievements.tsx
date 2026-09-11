import React from 'react';
import { PERSONAL_INFO, ACHIEVEMENTS } from '../data/portfolioData';

export function EducationAchievements() {
  return (
    <section id="education" className="py-12 border-t border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        {/* Education */}
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white mb-6">
            Education
          </h2>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-base font-semibold text-zinc-100">
                {PERSONAL_INFO.education.institution}
              </h3>
              <span className="text-xs font-mono text-zinc-400">
                {PERSONAL_INFO.education.graduation}
              </span>
            </div>

            <div className="text-sm text-zinc-300">
              {PERSONAL_INFO.education.degree}
            </div>

            <div className="text-xs font-mono text-emerald-400 font-medium pt-1">
              CGPA: {PERSONAL_INFO.education.cgpa}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div id="achievements">
          <h2 className="text-xl font-bold tracking-tight text-white mb-6">
            Achievements &amp; Activities
          </h2>

          <div className="space-y-3">
            {ACHIEVEMENTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs sm:text-sm"
              >
                <div className="font-semibold text-zinc-100 mb-1">
                  {item.title}
                </div>
                <div className="text-zinc-300 leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
