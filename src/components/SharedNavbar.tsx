import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RonLogo } from './RonLogo';

export type PageId =
  | 'HOME'
  | 'ABOUT'
  | 'SERVICES'
  | 'GALLERY'
  | 'DIRECTORS'
  | 'STRUCTURE'
  | 'SECTORS'
  | 'CONTACT';

interface SharedNavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact?: () => void;
}

export function SharedNavbar({ currentPage, onNavigate }: SharedNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 8 links: Home, About, Services, Gallery, Directors, Structure, Sectors, Contact
  const navLinks: { id: PageId; label: string }[] = [
    { id: 'HOME', label: 'HOME' },
    { id: 'ABOUT', label: 'ABOUT' },
    { id: 'SERVICES', label: 'SERVICES' },
    { id: 'GALLERY', label: 'GALLERY' },
    { id: 'DIRECTORS', label: 'DIRECTORS' },
    { id: 'STRUCTURE', label: 'STRUCTURE' },
    { id: 'SECTORS', label: 'SECTORS' },
    { id: 'CONTACT', label: 'CONTACT' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00206B] shadow-[0_2px_10px_rgba(0,0,0,0.25)] select-none">
      {/* Thin 4px red (#E31E2D) line across the very top edge */}
      <div className="h-[4px] w-full bg-[#E31E2D]" />

      {/* Navbar bar: Height 72px */}
      <div className="w-full h-[72px] flex items-center">
        {/* Inner container: max-width 1216px, centered, with 71px margin at 1366px */}
        <div className="w-full max-w-[1216px] mx-auto px-4 sm:px-6 xl:px-0 h-full flex items-center justify-between">
          {/* 1. LOGO (far left) */}
          <div className="shrink-0 flex items-center">
            <RonLogo onClick={() => onNavigate('HOME')} />
          </div>

          {/* 2. NAVIGATION LINKS: Home, About, Services, Gallery, Directors, Structure, Sectors, Contact */}
          <nav
            className="hidden min-[1000px]:flex items-center h-full space-x-[22px] min-[1140px]:space-x-[28px] min-[1240px]:space-x-[32px] ml-auto whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative h-full flex items-center text-[13px] font-heading uppercase tracking-[0.1em] transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#C7D0E8] font-normal hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Active link underline: 2px solid red (#E31E2D), extending 12px on each side, sitting flush at the bottom edge */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 -left-[12px] -right-[12px] h-[2px] bg-[#E31E2D] pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* MOBILE / TABLET Hamburger (< 1000px) */}
          <div className="flex min-[1000px]:hidden items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#E31E2D] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="min-[1000px]:hidden bg-[#001850] border-t border-white/10 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-[13px] font-heading uppercase tracking-[0.1em] py-2.5 px-3 transition-colors ${
                    isActive
                      ? 'text-white font-bold bg-[#00206B] border-l-4 border-[#E31E2D]'
                      : 'text-[#C7D0E8] font-normal hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
