import React from 'react';
import { Network, Building2, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';

export function StructurePage() {
  const divisions = [
    {
      name: "RON Properties Limited",
      sector: "Real Estate & Infrastructure",
      units: ["Property Development", "Commercial Leasing", "Facility Maintenance", "Asset Valuation"]
    },
    {
      name: "RON Transport & Logistics Services",
      sector: "Haulage & Supply Chain",
      units: ["Intercity Passenger Van Charters", "Heavy Duty Cargo Haulage", "Dispatch Courier Fleet", "Depot Warehousing"]
    },
    {
      name: "RON Petroleum Services",
      sector: "Downstream Oil & Gas",
      units: ["Bulk AGO / PMS Distribution", "Retail Service Stations", "Industrial Storage", "Lubricant Procurement"]
    },
    {
      name: "RON Unity Farms",
      sector: "Commercial Agribusiness",
      units: ["Poultry Layer & Broiler Units", "Mechanized Grain Cultivation", "Agro-Processing", "Feed Distribution"]
    },
    {
      name: "RON Mineral Explorers Limited",
      sector: "Solid Mineral Development",
      units: ["Geological Field Surveys", "Mining Extraction Operations", "Mineral Sluice Processing", "Environmental Compliance"]
    },
    {
      name: "RON Cleaning Services",
      sector: "Facility Hygiene & Maintenance",
      units: ["Corporate Janitorial Care", "Post-Construction Cleaning", "Industrial Sanitization", "Fumigation & Pest Control"]
    }
  ];

  return (
    <div className="w-full bg-white text-[#4B5563]">
      {/* 1. Page Banner */}
      <PageBanner
        whiteTitle="Corporate"
        redTitle="Structure"
        subtitle="Organized for institutional governance, subsidiary agility and operational excellence."
        bannerHeight="h-[355px] min-h-[355px]"
      />

      {/* 2. Organizational Chart Section */}
      <section className="bg-white pt-[90px] pb-[80px]">
        <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center mb-14">
            <div className="font-heading font-bold text-[12px] uppercase tracking-[0.2em] text-[#E31E2D] mb-2">
              ORGANIZATIONAL GOVERNANCE
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] text-[#00206B] leading-tight mb-4">
              Group Corporate Hierarchy
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-[155px] h-[2px] bg-[#E31E2D]" />
              <div className="w-[155px] h-[2px] bg-[#00206B]" />
            </div>
          </div>

          {/* Hierarchy Chart */}
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Tier 1: Board of Directors */}
            <div className="w-full max-w-md bg-[#00206B] text-white p-5 sharp-corner text-center shadow-md border-t-4 border-[#E31E2D]">
              <span className="text-[10px] font-heading font-bold text-[#E31E2D] uppercase tracking-widest block mb-1">
                Fiduciary Oversight
              </span>
              <h3 className="font-heading font-bold text-lg uppercase tracking-wide">
                Board of Directors
              </h3>
              <p className="text-xs text-[#C7D0E8] mt-1">
                Fiduciary Governance, Capital Allocation & Strategic Direction
              </p>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-[2px] h-8 bg-[#00206B]" />

            {/* Tier 2: Executive Management */}
            <div className="w-full max-w-lg bg-[#F4F4F4] border border-[#E5E7EB] border-l-4 border-l-[#E31E2D] p-5 sharp-corner text-center shadow-xs">
              <span className="text-[10px] font-heading font-bold text-[#6B7280] uppercase tracking-widest block mb-1">
                Executive Leadership
              </span>
              <h4 className="font-heading font-bold text-base text-[#00206B] uppercase">
                Managing Director & Chief Executive Officer
              </h4>
              <p className="text-xs text-[#4B5563] mt-1">
                Corporate Secretariat · Financial Controller · Head of Operations · Legal Directorate
              </p>
            </div>

            {/* Connecting Line */}
            <div className="w-[2px] h-8 bg-[#00206B]" />

            {/* Tier 3: Holding Conglomerate */}
            <div className="w-full bg-[#00206B] text-white py-3 px-6 sharp-corner text-center mb-8 shadow-sm">
              <span className="font-heading font-bold text-sm tracking-wider uppercase">
                RON GROUP OF COMPANIES LTD (HOLDING COMPANY · RC: 8895046)
              </span>
            </div>

            {/* Tier 4: Six Operating Subsidiaries Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((div, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] p-5 sharp-corner hover:border-[#00206B] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-heading font-bold text-white bg-[#00206B] px-2 py-0.5 sharp-corner">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-heading font-bold text-[#E31E2D] uppercase tracking-wider">
                        {div.sector}
                      </span>
                    </div>

                    <h5 className="font-heading font-bold text-[15px] uppercase text-[#00206B] mb-3 leading-snug">
                      {div.name}
                    </h5>

                    <div className="space-y-1.5 mb-4">
                      {div.units.map((unit, uIdx) => (
                        <div key={uIdx} className="flex items-center gap-2 text-xs text-[#4B5563]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E2D] shrink-0" />
                          <span>{unit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#F4F4F4] text-[11px] text-[#6B7280] font-heading font-semibold uppercase">
                    Subsidiary Division · Nigeria
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Regional Operating Footprint */}
      <section className="bg-[#F4F4F4] py-[70px] border-t border-[#E5E7EB]">
        <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E5E7EB] border-l-4 border-l-[#E31E2D] p-8 sharp-corner shadow-xs">
            <h4 className="font-heading font-bold text-xl text-[#00206B] uppercase mb-2">
              Regional Branch Administration
            </h4>
            <p className="font-body text-[15px] text-[#4B5563] leading-relaxed mb-6">
              To support localized delivery and swift stakeholder response across Northern and Central Nigeria, RON Group of Companies maintains administrative hubs across three strategic jurisdictions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#F4F4F4] sharp-corner border border-[#E5E7EB]">
                <div className="font-heading font-bold text-sm text-[#00206B] uppercase">Plateau State (Jos)</div>
                <div className="text-xs text-[#E31E2D] font-heading font-bold uppercase mt-1">Head Office</div>
                <div className="text-xs text-[#4B5563] mt-2">Adjacent Cocin Rayfield, Along Jonah David Jang Way</div>
              </div>
              <div className="p-4 bg-[#F4F4F4] sharp-corner border border-[#E5E7EB]">
                <div className="font-heading font-bold text-sm text-[#00206B] uppercase">Abuja (FCT)</div>
                <div className="text-xs text-[#00206B] font-heading font-bold uppercase mt-1">Federal Capital Hub</div>
                <div className="text-xs text-[#4B5563] mt-2">Suite No. 4, Ocean Centre, Gudu District, AMAC</div>
              </div>
              <div className="p-4 bg-[#F4F4F4] sharp-corner border border-[#E5E7EB]">
                <div className="font-heading font-bold text-sm text-[#00206B] uppercase">Kaduna State</div>
                <div className="text-xs text-[#00206B] font-heading font-bold uppercase mt-1">North-West Logistics</div>
                <div className="text-xs text-[#4B5563] mt-2">No. FF3 El-Gibbor Plaza, Opposite Barnawa Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
