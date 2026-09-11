import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-zinc-800/80 text-xs text-zinc-500">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.name}
        </div>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-zinc-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-zinc-300 transition-colors">Experience</a>
          <button
            onClick={scrollToTop}
            className="hover:text-zinc-300 transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
