import React from 'react';
import { Mail, Github, Linkedin, Code2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-28 pb-14 sm:pt-36 sm:pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Active status indicator */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>AI/ML Intern @ IIT Ropar • CBIT CSE &apos;28</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          {PERSONAL_INFO.name}
        </h1>

        <p className="text-sm sm:text-base font-medium text-zinc-400 mb-6">
          Software Engineer &amp; AI/ML Developer
        </p>

        {/* Bio paragraph */}
        <div className="space-y-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
          <p>
            I am a Computer Science undergraduate at <strong className="text-zinc-100 font-medium">Chaitanya Bharathi Institute of Technology (CBIT)</strong> with a <strong className="text-zinc-100 font-medium">9.81 / 10 CGPA</strong>. Currently, I am a Summer AI/ML Research Intern at <strong className="text-zinc-100 font-medium">IIT Ropar (VLED Lab)</strong> working on machine learning-based agricultural price prediction models.
          </p>
        </div>

        {/* Links row */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5 text-xs">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/80 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-2.5 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-colors flex items-center gap-1"
            title="Copy email"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-zinc-400" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>LeetCode (200+)</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>

        {/* Minimal Stats Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-zinc-800/80 pt-6">
          <div className="bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/60">
            <div className="text-xl font-bold font-mono text-zinc-100">9.81 / 10</div>
            <div className="text-xs text-zinc-400 mt-0.5">CGPA at CBIT</div>
          </div>

          <div className="bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/60">
            <div className="text-xl font-bold font-mono text-zinc-100">IIT Ropar</div>
            <div className="text-xs text-zinc-400 mt-0.5">AI/ML Fellow</div>
          </div>

          <div className="bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/60">
            <div className="text-xl font-bold font-mono text-zinc-100">200+</div>
            <div className="text-xs text-zinc-400 mt-0.5">LeetCode Solved</div>
          </div>

          <div className="bg-zinc-900/40 p-3 rounded-lg border border-zinc-800/60">
            <div className="text-xl font-bold font-mono text-zinc-100">Top Rank</div>
            <div className="text-xs text-zinc-400 mt-0.5">20-Yr Record Broken</div>
          </div>
        </div>
      </div>
    </section>
  );
}
