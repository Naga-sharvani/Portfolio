import React, { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILL_CATEGORIES, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-3xl bg-[#111215] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Toolbar */}
        <div className="flex items-center justify-between bg-zinc-900/90 px-5 py-3.5 border-b border-zinc-800">
          <div className="text-sm font-semibold text-zinc-200">
            Resume / Curriculum Vitae
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded border border-zinc-700/80 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-zinc-200 hover:bg-white text-zinc-950 font-medium text-xs rounded flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-200 rounded hover:bg-zinc-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-zinc-300 text-xs sm:text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-5">
            <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-xs text-zinc-400 font-mono mt-1">
              {PERSONAL_INFO.email} • {PERSONAL_INFO.education.degree}
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400 mt-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white underline">
                GitHub
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noreferrer" className="hover:text-white underline">
                LeetCode (200+ Solved)
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-1 mb-2">
              Education
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-zinc-100 font-medium">
              <span>{PERSONAL_INFO.education.institution}</span>
              <span className="text-xs font-mono text-zinc-400">{PERSONAL_INFO.education.graduation}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 mt-0.5">
              <span>{PERSONAL_INFO.education.degree}</span>
              <span className="text-emerald-400 font-mono font-medium">CGPA: {PERSONAL_INFO.education.cgpa}</span>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-1 mb-2">
              Experience
            </div>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-semibold text-zinc-100">{exp.role}</span>
                  <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                </div>
                <div className="text-xs text-zinc-400">
                  {exp.organization}, {exp.subOrg}
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-300">
                  {exp.bullets.slice(0, 3).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-1 mb-2">
              Projects
            </div>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="font-semibold text-zinc-100 flex items-center gap-2">
                    {proj.title}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-zinc-400 hover:text-white inline-flex items-center"
                      >
                        [GitHub]
                      </a>
                    )}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {proj.techStack.join(', ')}
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-300">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-1 mb-2">
              Technical Skills
            </div>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-medium text-zinc-200">Languages:</span>{' '}
                <span className="text-zinc-400">Python, C++, TypeScript, JavaScript, Java, C</span>
              </div>
              <div>
                <span className="font-medium text-zinc-200">Backend:</span>{' '}
                <span className="text-zinc-400">FastAPI, Node.js, Express.js, REST APIs, SQLAlchemy</span>
              </div>
              <div>
                <span className="font-medium text-zinc-200">Databases:</span>{' '}
                <span className="text-zinc-400">PostgreSQL, MySQL, MongoDB</span>
              </div>
              <div>
                <span className="font-medium text-zinc-200">Machine Learning:</span>{' '}
                <span className="text-zinc-400">Scikit-learn, YOLOv8, Pandas, NumPy, Matplotlib</span>
              </div>
              <div>
                <span className="font-medium text-zinc-200">Problem Solving:</span>{' '}
                <span className="text-zinc-400">200+ LeetCode DSA solved • OOP, DBMS, OS, CN</span>
              </div>
              <div>
                <span className="font-medium text-zinc-200">Tools:</span>{' '}
                <span className="text-zinc-400">Git, GitHub, VS Code, Figma, Postman</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-1 mb-2">
              Achievements
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-zinc-300">
              {ACHIEVEMENTS.slice(0, 3).map((ach) => (
                <li key={ach.id}>
                  <strong className="text-zinc-200">{ach.title}:</strong> {ach.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
