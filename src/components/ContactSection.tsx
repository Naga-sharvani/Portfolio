import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 border-t border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl font-bold tracking-tight text-white mb-2">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed max-w-xl">
          Feel free to reach out if you want to chat about engineering roles, machine learning research, or campus marketplace platforms.
        </p>

        <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-zinc-200">
              <Mail className="w-4 h-4 text-zinc-400" />
              <span className="font-mono text-xs sm:text-sm">{PERSONAL_INFO.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs border border-zinc-700/80 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800/60 text-xs text-zinc-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode (200+)</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
