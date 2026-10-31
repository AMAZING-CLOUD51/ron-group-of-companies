import React from 'react';
import { X, Users, Network, Image as ImageIcon, Bot, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface NavigationSectionModalProps {
  section: 'GALLERY' | 'DIRECTORS' | 'STRUCTURE' | 'ASSISTANT' | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function NavigationSectionModal({ section, onClose, onOpenContact }: NavigationSectionModalProps) {
  if (!section) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white sharp-corner border border-[#E5E7EB] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top accent line */}
        <div className="h-1 bg-[#E31E2D] w-full" />

        {/* Header */}
        <div className="bg-[#00206B] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#E31E2D]">
              RON GROUP OF COMPANIES LTD · RC: 8895046
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mt-1">
              {section === 'GALLERY' && 'Project & Operational Gallery'}
              {section === 'DIRECTORS' && 'Board of Directors & Governance'}
              {section === 'STRUCTURE' && 'Corporate Organizational Structure'}
              {section === 'ASSISTANT' && 'Corporate Client Concierge'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors sharp-corner cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body based on section */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#4B5563] font-body text-[15px] leading-[1.7]">
          {section === 'GALLERY' && (
            <div>
              <p className="mb-4 text-[#4B5563]">
                Highlighting milestone achievements, facility deployments, and strategic projects across our 6 core operating subsidiaries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#E5E7EB] p-4 bg-[#F4F4F4]">
                  <div className="h-36 bg-[#00206B]/10 flex items-center justify-center mb-3">
                    <ImageIcon className="w-8 h-8 text-[#00206B]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#00206B] uppercase">Commercial Real Estate Portfolio</h4>
                  <p className="text-xs text-[#6B7280] mt-1">Ocean Centre Suites & prime residential estates in Abuja and Plateau State.</p>
                </div>
                <div className="border border-[#E5E7EB] p-4 bg-[#F4F4F4]">
                  <div className="h-36 bg-[#00206B]/10 flex items-center justify-center mb-3">
                    <ImageIcon className="w-8 h-8 text-[#00206B]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#00206B] uppercase">Interstate Fleet & Logistics Hub</h4>
                  <p className="text-xs text-[#6B7280] mt-1">Heavy-duty transport haulage trucks operating across central and northern freight corridors.</p>
                </div>
                <div className="border border-[#E5E7EB] p-4 bg-[#F4F4F4]">
                  <div className="h-36 bg-[#00206B]/10 flex items-center justify-center mb-3">
                    <ImageIcon className="w-8 h-8 text-[#00206B]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#00206B] uppercase">Agribusiness & Mechanized Farming</h4>
                  <p className="text-xs text-[#6B7280] mt-1">RON Unity Farms crop cultivation and livestock facilities ensuring sustainable food security.</p>
                </div>
                <div className="border border-[#E5E7EB] p-4 bg-[#F4F4F4]">
                  <div className="h-36 bg-[#00206B]/10 flex items-center justify-center mb-3">
                    <ImageIcon className="w-8 h-8 text-[#00206B]" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#00206B] uppercase">Petroleum Distribution Terminals</h4>
                  <p className="text-xs text-[#6B7280] mt-1">Bulk storage facilities and energy supply operations meeting industrial demands.</p>
                </div>
              </div>
            </div>
          )}

          {section === 'DIRECTORS' && (
            <div>
              <p className="mb-4 text-[#4B5563]">
                The Board of Directors of RON Group of Companies Ltd provides fiduciary stewardship, strategic governance, and oversight across all subsidiary operations:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#E31E2D]">
                  <h4 className="font-heading font-bold text-[#00206B] text-base uppercase">Executive Chairman & Group CEO</h4>
                  <p className="text-xs font-heading font-bold text-[#E31E2D] uppercase tracking-wider mt-0.5">Corporate Governance & Group Strategy</p>
                  <p className="text-sm text-[#4B5563] mt-2">
                    Leading the conglomerate&apos;s multi-sector expansion, investment allocation, and strategic partnerships since inception in June 2015.
                  </p>
                </div>
                <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#00206B]">
                  <h4 className="font-heading font-bold text-[#00206B] text-base uppercase">Executive Director of Operations</h4>
                  <p className="text-xs font-heading font-bold text-[#6B7280] uppercase tracking-wider mt-0.5">Subsidiary Fleet, Supply Chain & Logistics</p>
                  <p className="text-sm text-[#4B5563] mt-2">
                    Overseeing logistical networks, real estate development schedules, and industrial operations across all corporate territories.
                  </p>
                </div>
                <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#00206B]">
                  <h4 className="font-heading font-bold text-[#00206B] text-base uppercase">Group Financial Controller & Fiduciary Board</h4>
                  <p className="text-xs font-heading font-bold text-[#6B7280] uppercase tracking-wider mt-0.5">Audit, Compliance & Asset Management</p>
                  <p className="text-sm text-[#4B5563] mt-2">
                    Enforcing regulatory compliance with CAC guidelines (RC: 8895046), financial audit standards, and risk mitigation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {section === 'STRUCTURE' && (
            <div>
              <p className="mb-4 text-[#4B5563]">
                RON Group of Companies Ltd operates as a parent holding conglomerate with six wholly-owned and managed subsidiary divisions:
              </p>
              <div className="p-5 border border-[#E5E7EB] bg-[#F4F4F4] text-center">
                <div className="inline-block px-5 py-2.5 bg-[#00206B] text-white font-heading font-bold text-sm uppercase tracking-wider">
                  RON GROUP OF COMPANIES LTD (HOLDING)
                </div>
                <div className="w-0.5 h-6 bg-[#E31E2D] mx-auto" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-left mt-2">
                  <div className="bg-white p-3 border-l-2 border-[#E31E2D] text-xs font-heading font-bold text-[#00206B] uppercase">
                    1. RON Properties Ltd
                  </div>
                  <div className="bg-white p-3 border-l-2 border-[#E31E2D] text-xs font-heading font-bold text-[#00206B] uppercase">
                    2. RON Transport & Logistics
                  </div>
                  <div className="bg-white p-3 border-l-2 border-[#E31E2D] text-xs font-heading font-bold text-[#00206B] uppercase">
                    3. RON Petroleum Services
                  </div>
                  <div className="bg-white p-3 border-l-2 border-[#E31E2D] text-xs font-heading font-bold text-[#00206B] uppercase">
                    4. RON Unity Farms
                  </div>
                  <div className="bg-white p-3 border-l-2 border-[#E31E2D] text-xs font-heading font-bold text-[#00206B] uppercase">
                    5. RON Mineral Explorers Ltd
                  </div>
                  <div className="bg-white p-3 border-l-2 border-[#E31E2D] text-xs font-heading font-bold text-[#00206B] uppercase">
                    6. RON Cleaning Services
                  </div>
                </div>
              </div>
            </div>
          )}

          {section === 'ASSISTANT' && (
            <div>
              <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#E31E2D] mb-4">
                <h4 className="font-heading font-bold text-[#00206B] uppercase">Corporate Desk & Inquiry Routing</h4>
                <p className="text-sm text-[#4B5563] mt-1">
                  Connect with the designated desk officer for any subsidiary division, procurement partnership, or executive meeting.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 border border-[#E5E7EB]">
                  <strong className="text-[#00206B] block">General Secretariat:</strong>
                  <span className="text-[#6B7280]">rongroupofcompanies@gmail.com</span>
                </div>
                <div className="p-3 border border-[#E5E7EB]">
                  <strong className="text-[#00206B] block">Immediate Support:</strong>
                  <span className="text-[#6B7280]">07077104798 / 08120295062</span>
                </div>
                <div className="p-3 border border-[#E5E7EB]">
                  <strong className="text-[#00206B] block">Headquarters:</strong>
                  <span className="text-[#6B7280]">Suite No. 4 Ocean Centre, Gudu District, Abuja</span>
                </div>
                <div className="p-3 border border-[#E5E7EB]">
                  <strong className="text-[#00206B] block">Branch Locations:</strong>
                  <span className="text-[#6B7280]">Plateau State (Jos) & Kaduna</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-heading font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#00206B]"
            >
              Back to Home
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[13px] uppercase tracking-[0.1em] px-5 py-2.5 sharp-corner cursor-pointer flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
