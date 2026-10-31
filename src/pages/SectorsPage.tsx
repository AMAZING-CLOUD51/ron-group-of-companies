import React from 'react';
import { Building2, Truck, Fuel, Sprout, Pickaxe } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { SprayBottleIcon } from '../components/icons';

interface SectorsPageProps {
  onOpenContact?: (sectorTitle?: string) => void;
}

interface SectorCard {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}

export function SectorsPage({ onOpenContact }: SectorsPageProps) {
  const subsidiaryCards: SectorCard[] = [
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      label: "REAL ESTATE",
      title: "RON PROPERTIES LIMITED",
      description: "Property development, real estate investment, property sales, leasing, and facility management delivering affordable, quality residential, commercial, and industrial properties."
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      label: "TRANSPORT & LOGISTICS",
      title: "RON TRANSPORT & LOGISTICS SERVICES",
      description: "Transportation, haulage, freight forwarding, supply chain management, and logistics solutions ensuring timely, safe, and cost-effective movement of goods."
    },
    {
      icon: <Fuel className="w-6 h-6 text-white" />,
      label: "OIL & GAS",
      title: "RON PETROLEUM SERVICES",
      description: "Petroleum product supply, distribution, storage, and related energy solutions maintaining industry standards and reliable service delivery."
    },
    {
      icon: <Sprout className="w-6 h-6 text-white" />,
      label: "AGRICULTURE",
      title: "RON UNITY FARMS",
      description: "Crop cultivation, livestock farming, agro-processing, and food production promoting food security and sustainable agricultural innovation."
    },
    {
      icon: <Pickaxe className="w-6 h-6 text-white" />,
      label: "MINING",
      title: "RON MINERAL EXPLORERS LIMITED",
      description: "Mineral exploration, resource assessment, mining support services, and responsible development of valuable mineral assets."
    },
    {
      icon: <SprayBottleIcon className="w-6 h-6 text-white" />,
      label: "FACILITY SERVICES",
      title: "RON CLEANING SERVICES",
      description: "Professional cleaning and maintenance solutions for residential, commercial, industrial, and institutional clients including post-construction and facility sanitation."
    }
  ];

  return (
    <div className="w-full bg-white text-[#4B5563]">
      {/* =========================================================================
          1. PAGE BANNER
          Height about 355px, navy #00206B background with a faint photo of tall
          glass skyscrapers shot from below, covered by a navy overlay at about 92% opacity.
          Left-aligned content:
          - Title "Business Sectors" ("Business" white, "Sectors" red).
          - A short red horizontal line (190px wide, 2px) under the title.
          - Subtitle: "Six integrated subsidiaries driving diversified value across Nigeria."
          ========================================================================= */}
      <PageBanner
        whiteTitle="Business"
        redTitle="Sectors"
        subtitle="Six integrated subsidiaries driving diversified value across Nigeria."
        bannerHeight="h-[355px] min-h-[355px]"
      />

      {/* =========================================================================
          2. INTRO TEXT SECTION (white background, 100px top padding)
          Three left-aligned paragraphs in a column about 770px wide (the right side
          of the 1200px container stays empty). 20px space between paragraphs.
          17px Inter, color #4B5563, line-height 1.55 (26px).
          ========================================================================= */}
      <section className="bg-white pt-[100px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[770px] space-y-[20px]">
            <p className="font-body text-[17px] text-[#4B5563] leading-[1.55] text-justify sm:text-left">
              Diversified conglomerates play a foundational role in Nigeria&apos;s economic landscape, pooling capital, expertise, and operational capacity across multiple industries to deliver integrated solutions that no single-sector business could match. RON Group of Companies exemplifies this model. Since its incorporation in 2015, the Group has built a portfolio of six operating subsidiaries spanning real estate development, transportation and logistics, petroleum services, agriculture, mineral exploration, and professional cleaning — each managed by dedicated specialists yet united by shared standards of quality, integrity, and sustainable value creation.
            </p>

            <p className="font-body text-[17px] text-[#4B5563] leading-[1.55] text-justify sm:text-left">
              Operating from offices in Plateau State, Abuja, and Kaduna, RON Group serves clients across Nigeria with a commitment to local capacity building and regulatory compliance. The Group&apos;s real estate arm delivers residential, commercial, and industrial properties; its logistics subsidiary moves goods safely and on time; its petroleum division supplies energy products to industrial and retail customers; RON Unity Farms advances food security through modern agriculture; RON Mineral Explorers develops Nigeria&apos;s mineral wealth responsibly; and RON Cleaning Services keeps commercial and institutional facilities safe and sanitary.
            </p>

            <p className="font-body text-[17px] text-[#4B5563] leading-[1.55] text-justify sm:text-left">
              By diversifying across these complementary sectors, RON Group balances risk, creates internal synergies, and contributes meaningfully to employment, infrastructure, and economic development. The Group continues to invest in people, processes, and partnerships that deliver lasting value to clients, communities, and shareholders — building a trusted, multi-sector enterprise positioned for sustainable growth across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR OPERATING SUBSIDIARIES (white background)
          - 50px below the paragraphs: two short horizontal lines side by side
            (one red, one navy, each about 155px wide, 2px thick, 8px gap).
          - Heading below them: "Our Operating Subsidiaries" (navy, left-aligned, 32px Montserrat ExtraBold).
          - 40px below the heading: a 3-column x 2-row grid of white cards, 24px gap between cards,
            each card with a thin 1px border (#E5E7EB), 24px inner padding, and about 255px height.
          ========================================================================= */}
      <section className="bg-white pt-[50px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two short horizontal lines side by side (one red, one navy, each about 155px wide, 2px thick, 8px gap) */}
          <div className="flex items-center gap-[8px] mb-4">
            <div className="w-[155px] h-[2px] bg-[#E31E2D]" />
            <div className="w-[155px] h-[2px] bg-[#00206B]" />
          </div>

          {/* Section heading: "Our Operating Subsidiaries" (32px Montserrat ExtraBold, navy) */}
          <h2 className="font-heading font-extrabold text-[28px] sm:text-[32px] text-[#00206B] leading-tight mb-[40px] text-left">
            Our Operating Subsidiaries
          </h2>

          {/* 3-column x 2-row grid of white cards, 24px gap between cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {subsidiaryCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => onOpenContact && onOpenContact(card.title)}
                className="group relative bg-white border border-[#E5E7EB] p-[24px] min-h-[255px] sharp-corner flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                {/* Thin red line indicator on top edge on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E31E2D] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Navy SQUARE icon block (48px x 48px, sharp corners, white line icon centered) */}
                  <div className="w-[48px] h-[48px] bg-[#00206B] sharp-corner flex items-center justify-center shrink-0 mb-[22px] shadow-xs">
                    {card.icon}
                  </div>

                  {/* Tiny red uppercase label (11px Montserrat Medium, red, UPPERCASE, letter-spacing 0.2em) */}
                  <div className="font-heading font-medium text-[11px] uppercase tracking-[0.2em] text-[#E31E2D] mb-1">
                    {card.label}
                  </div>

                  {/* Card title: 17px Montserrat Bold, navy, UPPERCASE, line-height 1.3 */}
                  <h3 className="font-heading font-bold text-[17px] uppercase text-[#00206B] leading-[1.3] mb-2.5">
                    {card.title}
                  </h3>

                  {/* Card description: 15px Inter, grey, line-height 1.55 */}
                  <p className="font-body text-[15px] text-[#4B5563] leading-[1.55]">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F4F4F4] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#00206B]">
                    Inquire Sector Operations
                  </span>
                  <span className="text-[#E31E2D] font-bold text-sm">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
