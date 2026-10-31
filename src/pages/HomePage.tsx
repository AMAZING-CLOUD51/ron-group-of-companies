import React from 'react';
import {
  Building2,
  MapPin,
  Calendar,
  Globe,
  Truck,
  Fuel,
  Sprout,
  Pickaxe,
  FileText,
  Settings,
  Users,
  ArrowRight
} from 'lucide-react';
import { SprayBottleIcon } from '../components/icons';
import { SkylineSilhouette } from '../components/SkylineSilhouette';
import { PageId } from '../components/SharedNavbar';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContact: (sectorTitle?: string) => void;
  onOpenReadMore: () => void;
  onOpenAllServices: () => void;
}

export function HomePage({
  onNavigate,
  onOpenContact,
  onOpenReadMore,
  onOpenAllServices
}: HomePageProps) {
  return (
    <div className="w-full">
      {/* =========================================================================
          2. HERO SECTION
          ========================================================================= */}
      <section className="relative w-full min-h-[580px] lg:min-h-[680px] flex items-center bg-[#00174D] overflow-hidden">
        {/* Full-width background photo of tall glass skyscrapers shot from below */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2160&q=85')`
          }}
          role="img"
          aria-label="Tall glass skyscrapers shot from below"
        />

        {/* Navy (#00206B) overlay at about 85% opacity */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 32, 107, 0.85)' }}
        />

        {/* Hero Content Container (max width 1200px) */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Small pill badge (transparent with thin light border, rounded-full) with a red dot and text */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-xs text-white text-xs md:text-sm font-heading font-semibold tracking-wider mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E31E2D] shrink-0 animate-pulse" />
            <span>ESTABLISHED 2015 · RC: 8895046</span>
          </div>

          {/* Giant title on two lines: "RON GROUP" (white) and "OF COMPANIES" (red) */}
          <h1 className="font-heading font-extrabold uppercase text-4xl sm:text-6xl lg:text-[72px] leading-[1.05] tracking-tight mb-6">
            <span className="text-white block">RON GROUP</span>
            <span className="text-[#E31E2D] block">OF COMPANIES</span>
          </h1>

          {/* Paragraph in white/light text */}
          <p className="text-white/90 text-base sm:text-lg lg:text-[18px] max-w-2xl font-body leading-[1.7] mb-10">
            A diversified business conglomerate delivering excellence across real estate, logistics, petroleum, agriculture, mining and cleaning services.
          </p>

          {/* Two buttons side by side */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            {/* 1. Solid red button: "OUR SERVICES" with a right arrow icon */}
            <button
              onClick={() => onNavigate('SERVICES')}
              className="bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[14px] uppercase tracking-[0.1em] px-8 py-4 flex items-center justify-center gap-2.5 sharp-corner transition-colors duration-150 cursor-pointer shadow-lg"
            >
              <span>OUR SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* 2. Outlined button (white 2px border, transparent background, white text): "CONTACT US" */}
            <button
              onClick={() => onOpenContact()}
              className="border-2 border-white bg-transparent hover:bg-white hover:text-[#00206B] text-white font-heading font-bold text-[14px] uppercase tracking-[0.1em] px-8 py-4 flex items-center justify-center sharp-corner transition-colors duration-150 cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WELCOME SECTION (white background, two columns)
          ========================================================================= */}
      <section id="welcome-section" className="bg-white py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div className="lg:col-span-7">
              {/* Red small label: "WELCOME TO THE GROUP" */}
              <div className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#E31E2D] mb-3">
                WELCOME TO THE GROUP
              </div>

              {/* Heading (navy): "One Group. Multiple Solutions." */}
              <h2 className="text-3xl md:text-[40px] font-heading font-bold text-[#00206B] leading-tight mb-4">
                One Group. Multiple Solutions.
              </h2>

              {/* Under the heading, two short horizontal lines side by side: one red, one navy */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-1 bg-[#E31E2D]" />
                <div className="w-10 h-1 bg-[#00206B]" />
              </div>

              {/* Paragraph: cut off with "..." exactly like this */}
              <p className="text-[16px] leading-[1.7] text-[#4B5563] mb-8 font-body">
                RON Group of Companies is a diversified business conglomerate committed to delivering excellence across multiple sectors of the economy. Established on June 25, 2015, and headquartered in Suite No. 4 Ocean Centre, Oladipo Diya Road, Opp. Gudu Library, Gudu District Abuja, AMAC, FCT. With operations spanning real estate, transportation and logistics, petroleu...
              </p>

              {/* Link: "READ MORE" with an arrow icon (navy, bold, uppercase) */}
              <button
                onClick={onOpenReadMore}
                className="inline-flex items-center gap-2 text-[#00206B] hover:text-[#E31E2D] font-heading font-bold uppercase text-[14px] tracking-[0.1em] transition-colors duration-150 cursor-pointer group"
              >
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right column: a 2x2 grid of light grey (#F4F4F4) stat boxes, each with a 4px red left border */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-5">
                {/* 1. Building icon, "6+", "SUBSIDIARIES" */}
                <div className="bg-[#F4F4F4] border-l-4 border-[#E31E2D] p-6 sharp-corner hover:shadow-md transition-shadow">
                  <Building2 className="w-6 h-6 text-[#00206B] mb-3" />
                  <div className="text-[28px] font-heading font-bold text-[#00206B] leading-none mb-1">
                    6+
                  </div>
                  <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    SUBSIDIARIES
                  </div>
                </div>

                {/* 2. Map pin icon, "3", "BRANCH OFFICES" */}
                <div className="bg-[#F4F4F4] border-l-4 border-[#E31E2D] p-6 sharp-corner hover:shadow-md transition-shadow">
                  <MapPin className="w-6 h-6 text-[#00206B] mb-3" />
                  <div className="text-[28px] font-heading font-bold text-[#00206B] leading-none mb-1">
                    3
                  </div>
                  <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    BRANCH OFFICES
                  </div>
                </div>

                {/* 3. Calendar icon, "2015", "ESTABLISHED" */}
                <div className="bg-[#F4F4F4] border-l-4 border-[#E31E2D] p-6 sharp-corner hover:shadow-md transition-shadow">
                  <Calendar className="w-6 h-6 text-[#00206B] mb-3" />
                  <div className="text-[28px] font-heading font-bold text-[#00206B] leading-none mb-1">
                    2015
                  </div>
                  <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    ESTABLISHED
                  </div>
                </div>

                {/* 4. Globe icon, "Nigeria", "COVERAGE" */}
                <div className="bg-[#F4F4F4] border-l-4 border-[#E31E2D] p-6 sharp-corner hover:shadow-md transition-shadow">
                  <Globe className="w-6 h-6 text-[#00206B] mb-3" />
                  <div className="text-[28px] font-heading font-bold text-[#00206B] leading-none mb-1">
                    Nigeria
                  </div>
                  <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    COVERAGE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES / SUBSIDIARIES SECTION (light grey #F4F4F4 background)
          ========================================================================= */}
      <section id="services-section" className="bg-[#F4F4F4] py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#E31E2D] mb-3">
              SUBSIDIARIES & DIVISIONS
            </div>
            <h2 className="text-3xl md:text-[40px] font-heading font-bold text-[#00206B] leading-tight mb-4">
              Our Core Services
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-1 bg-[#E31E2D]" />
              <div className="w-10 h-1 bg-[#00206B]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* ROW 1: Card 1 - Building icon */}
            <div className="bg-white border border-[#E5E7EB] p-6 sharp-corner hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00206B] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-heading font-bold uppercase text-[#00206B] mb-3 leading-snug">
                  RON PROPERTIES LIMITED
                </h3>
                <p className="text-[15px] font-body text-[#4B5563] leading-[1.7]">
                  RON Properties specializes in property development, real estate investment, property sales, leasing, and facility management. The...
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F4F4F4]">
                <button
                  onClick={() => onOpenContact('RON PROPERTIES LIMITED')}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] hover:text-[#E31E2D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ROW 1: Card 2 - Truck icon */}
            <div className="bg-white border border-[#E5E7EB] p-6 sharp-corner hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00206B] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <Truck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-heading font-bold uppercase text-[#00206B] mb-3 leading-snug">
                  RON TRANSPORT & LOGISTICS SERVICES
                </h3>
                <p className="text-[15px] font-body text-[#4B5563] leading-[1.7]">
                  RON Transport & Logistics provides efficient transportation, haulage, freight forwarding, supply chain management, and logistics solutions. The...
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F4F4F4]">
                <button
                  onClick={() => onOpenContact('RON TRANSPORT & LOGISTICS SERVICES')}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] hover:text-[#E31E2D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ROW 1: Card 3 - Fuel pump icon */}
            <div className="bg-white border border-[#E5E7EB] p-6 sharp-corner hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00206B] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <Fuel className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-heading font-bold uppercase text-[#00206B] mb-3 leading-snug">
                  RON PETROLEUM SERVICES
                </h3>
                <p className="text-[15px] font-body text-[#4B5563] leading-[1.7]">
                  RON Petroleum Services operates within the oil and gas sector, offering petroleum product supply, distribution, storage, and related energy...
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F4F4F4]">
                <button
                  onClick={() => onOpenContact('RON PETROLEUM SERVICES')}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] hover:text-[#E31E2D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ROW 2: Card 4 - Plant/sprout icon */}
            <div className="bg-white border border-[#E5E7EB] p-6 sharp-corner hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00206B] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <Sprout className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-heading font-bold uppercase text-[#00206B] mb-3 leading-snug">
                  RON UNITY FARMS
                </h3>
                <p className="text-[15px] font-body text-[#4B5563] leading-[1.7]">
                  RON Unity Farms focuses on modern agricultural practices, including crop cultivation, livestock farming, agro-processing, and food production....
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F4F4F4]">
                <button
                  onClick={() => onOpenContact('RON UNITY FARMS')}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] hover:text-[#E31E2D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ROW 2: Card 5 - Pickaxe icon */}
            <div className="bg-white border border-[#E5E7EB] p-6 sharp-corner hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00206B] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <Pickaxe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-heading font-bold uppercase text-[#00206B] mb-3 leading-snug">
                  RON MINERAL EXPLORERS LIMITED
                </h3>
                <p className="text-[15px] font-body text-[#4B5563] leading-[1.7]">
                  RON Mineral Explorers is engaged in mineral exploration, resource assessment, mining support services, and the development of mineral assets...
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F4F4F4]">
                <button
                  onClick={() => onOpenContact('RON MINERAL EXPLORERS LIMITED')}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] hover:text-[#E31E2D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ROW 2: Card 6 - Spray-bottle icon */}
            <div className="bg-white border border-[#E5E7EB] p-6 sharp-corner hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#00206B] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <SprayBottleIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-heading font-bold uppercase text-[#00206B] mb-3 leading-snug">
                  RON CLEANING SERVICES
                </h3>
                <p className="text-[15px] font-body text-[#4B5563] leading-[1.7]">
                  RON Cleaning Services provides professional cleaning and maintenance solutions for residential, commercial, industrial, and...
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#F4F4F4]">
                <button
                  onClick={() => onOpenContact('RON CLEANING SERVICES')}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#00206B] hover:text-[#E31E2D] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => onNavigate('SERVICES')}
              className="border-2 border-[#00206B] bg-transparent hover:bg-[#00206B] hover:text-white text-[#00206B] font-heading font-bold text-[14px] uppercase tracking-[0.1em] px-8 py-3.5 flex items-center gap-2.5 sharp-corner transition-colors duration-150 cursor-pointer shadow-sm group"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHO WE ARE SECTION (white background, centered heading)
          ========================================================================= */}
      <section id="who-we-are-section" className="bg-white py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#E31E2D] mb-3">
              COMPANY AT A GLANCE
            </div>
            <h2 className="text-3xl md:text-[40px] font-heading font-bold text-[#00206B] leading-tight mb-4">
              Who We Are
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-1 bg-[#E31E2D]" />
              <div className="w-10 h-1 bg-[#00206B]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E7EB] sharp-corner overflow-hidden shadow-xs">
            {/* Cell 1: Building icon */}
            <div className="bg-white border-r border-b border-[#E5E7EB] p-6 flex flex-col justify-between min-h-[148px]">
              <div className="w-9 h-9 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                  COMPANY NAME
                </div>
                <div className="text-[16px] font-heading font-bold text-[#00206B] leading-snug">
                  RON Group of Companies Ltd
                </div>
              </div>
            </div>

            {/* Cell 2: Document icon */}
            <div className="bg-white border-r border-b border-[#E5E7EB] p-6 flex flex-col justify-between min-h-[148px]">
              <div className="w-9 h-9 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                  RC NUMBER
                </div>
                <div className="text-[16px] font-heading font-bold text-[#00206B] leading-snug">
                  8895046
                </div>
              </div>
            </div>

            {/* Cell 3: Calendar icon */}
            <div className="bg-white border-r border-b border-[#E5E7EB] p-6 flex flex-col justify-between min-h-[148px]">
              <div className="w-9 h-9 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                  YEAR ESTABLISHED
                </div>
                <div className="text-[16px] font-heading font-bold text-[#00206B] leading-snug">
                  2015
                </div>
              </div>
            </div>

            {/* Cell 4: Map pin icon */}
            <div className="bg-white border-r border-b border-[#E5E7EB] p-6 flex flex-col justify-between min-h-[148px]">
              <div className="w-9 h-9 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                  HEAD OFFICE
                </div>
                <div className="text-[16px] font-heading font-bold text-[#00206B] leading-snug">
                  Plateau State
                </div>
              </div>
            </div>

            {/* Cell 5: Globe icon */}
            <div className="bg-white border-r border-b border-[#E5E7EB] p-6 flex flex-col justify-between min-h-[148px]">
              <div className="w-9 h-9 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                  BRANCH OFFICES
                </div>
                <div className="text-[16px] font-heading font-bold text-[#00206B] leading-snug">
                  Abuja, Kaduna
                </div>
              </div>
            </div>

            {/* Cell 6: Gear icon */}
            <div className="bg-white border-r border-b border-[#E5E7EB] p-6 flex flex-col justify-between min-h-[148px]">
              <div className="w-9 h-9 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner mb-4">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                  CORE SECTORS
                </div>
                <div className="text-[15px] font-heading font-bold text-[#00206B] leading-snug">
                  Real Estate, Petroleum, Agriculture, Logistics, Mining, Cleaning
                </div>
              </div>
            </div>

            {/* Cell 7: People icon */}
            <div className="bg-white border-r border-b border-[#E5E7EB] p-6 flex flex-col justify-between min-h-[148px]">
              <div className="w-9 h-9 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner mb-4">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                  COVERAGE
                </div>
                <div className="text-[16px] font-heading font-bold text-[#00206B] leading-snug">
                  Nigeria
                </div>
              </div>
            </div>

            {/* Cell 8: An empty light grey box (#E5E5E5), no content */}
            <div
              className="border-r border-b border-[#E5E7EB] min-h-[148px]"
              style={{ backgroundColor: '#E5E5E5' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. CALL TO ACTION BAND (navy background #00206B)
          ========================================================================= */}
      <section className="relative bg-[#00206B] text-white pt-16 md:pt-20 pb-0 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-[36px] font-heading font-bold text-white leading-tight mb-2">
                Ready to work with us?
              </h2>
              <p className="text-white/85 text-[16px] font-body">
                Experienced leaders delivering exceptional results across every sector.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onOpenContact()}
                className="bg-[#E31E2D] hover:bg-[#c81926] text-white font-heading font-bold text-[14px] uppercase tracking-[0.1em] px-8 py-4 flex items-center gap-2.5 sharp-corner transition-colors duration-150 cursor-pointer shadow-lg group"
              >
                <span>CONTACT THE GROUP</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
        <SkylineSilhouette className="mt-auto" />
      </section>
    </div>
  );
}
