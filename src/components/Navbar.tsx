import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-zinc-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors">
          <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-mono text-xs font-semibold text-zinc-200">
            N
          </div>
          <span className="font-semibold text-sm tracking-tight">P. Naga Sharvani</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-5 text-xs text-zinc-400 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs border border-zinc-700/60 transition-colors flex items-center gap-1 ml-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-200 text-xs border border-zinc-700/60"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c0d10] border-b border-zinc-800 px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-zinc-300 hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
