import React from 'react';
import { X, Building2, Calendar, MapPin, ShieldCheck, CheckCircle } from 'lucide-react';

interface ReadMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function ReadMoreModal({ isOpen, onClose, onOpenContact }: ReadMoreModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white sharp-corner border border-[#E5E7EB] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top accent bar */}
        <div className="h-1 bg-[#E31E2D] w-full" />

        {/* Header */}
        <div className="bg-[#00206B] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#E31E2D]">
              CORPORATE PROFILE & HISTORY
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mt-1">
              About RON Group of Companies Ltd
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#4B5563] font-body text-[15px] leading-[1.7]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 bg-[#E31E2D]" />
            <div className="w-8 h-1 bg-[#00206B]" />
          </div>

          <p>
            <strong className="text-[#00206B]">RON Group of Companies Ltd (RC: 8895046)</strong> is a premier Nigerian diversified business conglomerate committed to driving sustainable growth, institutional integrity, and transformative industrial capability across multiple vital sectors of the economy.
          </p>

          <p>
            Incorporated on <strong>June 25, 2015</strong>, the conglomerate maintains its corporate headquarters at <strong>Suite No. 4 Ocean Centre, Oladipo Diya Road, Opp. Gudu Library, Gudu District Abuja, AMAC, FCT</strong>, alongside established operational regional branches in <strong>Plateau State (Jos)</strong> and <strong>Kaduna State</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#E31E2D] sharp-corner">
              <Calendar className="w-5 h-5 text-[#00206B] mb-2" />
              <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#6B7280]">Incorporated</div>
              <div className="text-base font-heading font-bold text-[#00206B]">June 25, 2015</div>
            </div>
            <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#E31E2D] sharp-corner">
              <ShieldCheck className="w-5 h-5 text-[#00206B] mb-2" />
              <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#6B7280]">CAC Reg No</div>
              <div className="text-base font-heading font-bold text-[#00206B]">RC: 8895046</div>
            </div>
            <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#E31E2D] sharp-corner">
              <MapPin className="w-5 h-5 text-[#00206B] mb-2" />
              <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#6B7280]">Head Office</div>
              <div className="text-base font-heading font-bold text-[#00206B]">Plateau & Abuja</div>
            </div>
          </div>

          <h4 className="text-lg font-heading font-bold text-[#00206B] pt-2">
            Integrated Sector Strengths
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#E31E2D] mt-1 shrink-0" />
              <span><strong>Real Estate & Infrastructure:</strong> Large-scale property development, commercial leasing, and facility management through RON Properties Limited.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#E31E2D] mt-1 shrink-0" />
              <span><strong>Energy & Downstream Petroleum:</strong> Product haulage, bulk storage, and reliable energy supply through RON Petroleum Services.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#E31E2D] mt-1 shrink-0" />
              <span><strong>Logistics & Fleet Haulage:</strong> Nationwide freight forwarding and supply chain solutions via RON Transport & Logistics Services.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#E31E2D] mt-1 shrink-0" />
              <span><strong>Commercial Agriculture:</strong> Modern agro-processing and food security through RON Unity Farms.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#E31E2D] mt-1 shrink-0" />
              <span><strong>Solid Minerals & Exploration:</strong> Mineral asset assessment and mining support with RON Mineral Explorers Limited.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#E31E2D] mt-1 shrink-0" />
              <span><strong>Industrial Cleaning:</strong> Specialized corporate, residential, and industrial maintenance via RON Cleaning Services.</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-heading font-bold uppercase tracking-wider text-[#6B7280] hover:text-[#00206B]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[13px] uppercase tracking-[0.1em] px-5 py-2.5 sharp-corner cursor-pointer"
            >
              Contact Group Secretariat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
