import React from 'react';
import { X, Building2, Truck, Fuel, Sprout, Pickaxe, ArrowRight } from 'lucide-react';
import { SprayBottleIcon } from './icons';

interface ViewAllServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export function ViewAllServicesModal({ isOpen, onClose, onSelectService }: ViewAllServicesModalProps) {
  if (!isOpen) return null;

  const services = [
    {
      title: "RON PROPERTIES LIMITED",
      icon: <Building2 className="w-6 h-6 text-white" />,
      tag: "REAL ESTATE & INFRASTRUCTURE",
      description: "RON Properties specializes in property development, real estate investment, property sales, leasing, and facility management. The company undertakes residential and commercial projects engineered for long-term capital appreciation and operational efficiency.",
      capabilities: ["Property Development", "Commercial & Residential Sales", "Asset Leasing", "Facility Management & Maintenance"]
    },
    {
      title: "RON TRANSPORT & LOGISTICS SERVICES",
      icon: <Truck className="w-6 h-6 text-white" />,
      tag: "HAULAGE & FREIGHT",
      description: "RON Transport & Logistics provides efficient transportation, haulage, freight forwarding, supply chain management, and logistics solutions. The company operates a robust fleet ensuring seamless distribution across Nigeria's major commercial corridors.",
      capabilities: ["Interstate Heavy Haulage", "Freight Forwarding", "Warehousing & Depot Logistics", "Cold Chain & Express Delivery"]
    },
    {
      title: "RON PETROLEUM SERVICES",
      icon: <Fuel className="w-6 h-6 text-white" />,
      tag: "OIL & GAS DOWNSTREAM",
      description: "RON Petroleum Services operates within the oil and gas sector, offering petroleum product supply, distribution, storage, and related energy solutions tailored for industrial consumers, retail networks, and infrastructure projects.",
      capabilities: ["AGO & PMS Bulk Distribution", "Industrial Fuel Supply", "Depot Storage Solutions", "Lubricants & Specialty Products"]
    },
    {
      title: "RON UNITY FARMS",
      icon: <Sprout className="w-6 h-6 text-white" />,
      tag: "AGRIBUSINESS & FOOD PRODUCTION",
      description: "RON Unity Farms focuses on modern agricultural practices, including crop cultivation, livestock farming, agro-processing, and food production. The entity champions mechanized farming and sustainable food security initiatives.",
      capabilities: ["Commercial Crop Cultivation", "Livestock & Poultry Management", "Agro-Processing & Value Addition", "Commodity Trading & Distribution"]
    },
    {
      title: "RON MINERAL EXPLORERS LIMITED",
      icon: <Pickaxe className="w-6 h-6 text-white" />,
      tag: "SOLID MINERALS & MINING",
      description: "RON Mineral Explorers is engaged in mineral exploration, resource assessment, mining support services, and the development of mineral assets across strategic geological reserves in Nigeria.",
      capabilities: ["Geological Surveys & Mapping", "Mineral Deposit Valuation", "Mining Support & Extraction", "Compliance & Environmental Stewardship"]
    },
    {
      title: "RON CLEANING SERVICES",
      icon: <SprayBottleIcon className="w-6 h-6 text-white" />,
      tag: "FACILITY HYGIENE & MAINTENANCE",
      description: "RON Cleaning Services provides professional cleaning and maintenance solutions for residential, commercial, industrial, and institutional premises with rigorous sanitization standards.",
      capabilities: ["Corporate Office Janitorial", "Industrial Deep Cleaning", "Post-Construction Clean-Up", "Specialized Fumigation & Pest Control"]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white sharp-corner border border-[#E5E7EB] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top accent line */}
        <div className="h-1 bg-[#E31E2D] w-full" />

        {/* Header */}
        <div className="bg-[#00206B] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#E31E2D]">
              CONGLOMERATE SUBSIDIARIES PORTFOLIO
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold mt-1">
              All Services & Subsidiaries
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

        {/* Body list */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 font-body bg-[#F4F4F4]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-[#E5E7EB] sharp-corner hover:border-[#00206B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#00206B] flex items-center justify-center shrink-0">
                      {s.icon}
                    </div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#E31E2D] bg-[#FCE8EA] px-2.5 py-1">
                      {s.tag}
                    </span>
                  </div>

                  <h4 className="text-[16px] font-heading font-bold uppercase text-[#00206B] mb-2 leading-tight">
                    {s.title}
                  </h4>

                  <p className="text-[14px] text-[#4B5563] leading-[1.65] mb-4">
                    {s.description}
                  </p>

                  <div className="space-y-1 mb-5">
                    <div className="text-[10px] font-heading font-bold text-[#6B7280] uppercase tracking-wider mb-1.5">
                      Core Operations
                    </div>
                    {s.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="text-xs text-[#00206B] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#E31E2D] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectService(s.title);
                  }}
                  className="w-full mt-2 bg-[#00206B] hover:bg-[#E31E2D] text-white font-heading font-bold text-[12px] uppercase tracking-[0.1em] py-2.5 flex items-center justify-center gap-2 transition-colors sharp-corner cursor-pointer"
                >
                  <span>Inquire About This Subsidiary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between">
          <div className="text-xs text-[#6B7280]">
            6 Operating Subsidiaries under RON Group of Companies Ltd (RC: 8895046)
          </div>
          <button
            onClick={onClose}
            className="bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[13px] uppercase tracking-[0.1em] px-5 py-2 sharp-corner cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
