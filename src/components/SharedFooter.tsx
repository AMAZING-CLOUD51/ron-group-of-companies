import React from 'react';
import { Mail, Globe, Phone, MapPin } from 'lucide-react';
import { RonLogo } from './RonLogo';
import { SkylineSilhouette } from './SkylineSilhouette';
import { PageId } from './SharedNavbar';

interface SharedFooterProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (sectorTitle?: string) => void;
}

export function SharedFooter({ onNavigate, onOpenContact }: SharedFooterProps) {
  return (
    <footer id="shared-footer" className="bg-[#00206B] text-white overflow-hidden">
      {/* At the very top of the footer, a decorative city-skyline silhouette strip made of lighter navy blocks of different heights */}
      <div className="w-full bg-[#001c5e] pt-2">
        <SkylineSilhouette className="opacity-95" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Column 1: the RON logo, then the text and small red uppercase letter-spaced slogan */}
          <div className="lg:col-span-4">
            <RonLogo onClick={() => onNavigate('HOME')} />
            <p className="text-[14px] leading-[1.7] text-white/80 mt-5 mb-5 font-body">
              A diversified business conglomerate delivering innovative solutions and exceptional value across multiple sectors of the economy.
            </p>
            <div className="text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-[#E31E2D] leading-relaxed">
              DIVERSIFIED EXCELLENCE. TRUSTED SOLUTIONS. SUSTAINABLE GROWTH.
            </div>
          </div>

          {/* Column 2 heading "NAVIGATION" (white, bold, uppercase) with links */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-heading font-bold uppercase tracking-[0.12em] text-white mb-5">
              NAVIGATION
            </h4>
            <ul className="space-y-3 font-body text-[14px]">
              <li>
                <button
                  onClick={() => onNavigate('ABOUT')}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('SERVICES')}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('GALLERY')}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Project Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('DIRECTORS')}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Board of Directors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('STRUCTURE')}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Structure
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 heading "SECTORS" with links */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-heading font-bold uppercase tracking-[0.12em] text-white mb-5">
              SECTORS
            </h4>
            <ul className="space-y-3 font-body text-[14px]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('SERVICES');
                    onOpenContact('RON PROPERTIES LIMITED');
                  }}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Real Estate
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('SERVICES');
                    onOpenContact('RON TRANSPORT & LOGISTICS SERVICES');
                  }}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Transport & Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('SERVICES');
                    onOpenContact('RON PETROLEUM SERVICES');
                  }}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Petroleum Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('SERVICES');
                    onOpenContact('RON UNITY FARMS');
                  }}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Agriculture
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('SERVICES');
                    onOpenContact('RON MINERAL EXPLORERS LIMITED');
                  }}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Mineral Exploration
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('SERVICES');
                    onOpenContact('RON CLEANING SERVICES');
                  }}
                  className="text-[#C7D0E8] hover:text-white transition-colors cursor-pointer"
                >
                  Cleaning Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 heading "CONTACT" with red line icons beside each item */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-heading font-bold uppercase tracking-[0.12em] text-white mb-5">
              CONTACT
            </h4>
            <ul className="space-y-3.5 font-body text-[14px]">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E31E2D] shrink-0 mt-0.5" />
                <a
                  href="mailto:rongroupofcompanies@gmail.com"
                  className="text-[#C7D0E8] hover:text-white transition-colors break-all"
                >
                  rongroupofcompanies@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#E31E2D] shrink-0 mt-0.5" />
                <span className="text-[#C7D0E8]">
                  @rongroups.company.site
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E31E2D] shrink-0 mt-0.5" />
                <span className="text-[#C7D0E8]">
                  07077104798, 08120295062
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E31E2D] shrink-0 mt-0.5" />
                <span className="text-[#C7D0E8] leading-snug">
                  Gudu District, Abuja · Jos · Kaduna
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar, separated by a thin light line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-[#C7D0E8] font-body text-center md:text-left">
            © 2026 RON Group of Companies Ltd. RC: 8895046. All rights reserved.
          </div>
          <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#C7D0E8] text-center md:text-right">
            EXPERIENCED LEADERS. EXCEPTIONAL RESULTS.
          </div>
        </div>
      </div>
    </footer>
  );
}
