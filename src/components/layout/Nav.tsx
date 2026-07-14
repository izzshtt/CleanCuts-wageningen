'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const BOOKING_URL =
  'https://knipklok.nl/kapperszaak/cleancutswageningen/afspraak?shopname=cleancutswageningen&r=1';

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Over ons', href: '#over-ons' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#footer' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-14 h-[68px]">
        {/* Logo */}
        <a
          href="#home"
          className="font-outfit font-semibold text-[23px] tracking-[3px] text-white no-underline"
        >
          CLEAN&nbsp;CUTS
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-[26px] text-[14px] text-[rgba(255,255,255,0.92)]">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`nav-link no-underline text-[rgba(255,255,255,0.92)] hover:text-white transition-colors ${
                l.active ? 'font-semibold opacity-100' : 'font-normal opacity-80'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-5 text-white">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline bg-[#f4f4f4] text-[#111111] font-semibold text-[14px] px-6 py-3 rounded-[40px] hover:bg-white transition-colors"
          >
            Maak een afspraak
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 -mr-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden glass-nav">
          <div className="flex flex-col px-5 sm:px-8 py-5 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[rgba(255,255,255,0.92)] text-[15px] no-underline hover:text-white transition-colors py-2.5 flex items-center min-h-[44px]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="no-underline bg-[#f4f4f4] text-[#111111] font-semibold text-[14px] px-6 py-3 rounded-[40px] text-center"
            >
              Maak een afspraak
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
