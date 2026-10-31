import React, { useState } from 'react';
import {
  Building2,
  Truck,
  Fuel,
  Sprout,
  Pickaxe,
  CheckCircle2,
  Maximize2,
  X,
  ArrowRight
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { SprayBottleIcon } from '../components/icons';
import { SERVICE_MEDIA } from '../data/assets';

interface ServicesPageProps {
  onOpenContact: (sectorTitle?: string) => void;
}

interface ServiceRowData {
  number: string;
  title: string;
  icon: React.ReactNode;
  image?: string;
  imageCaption?: string;
  description: string;
  capabilities: string[];
  keyFacts: { label: string; value: string }[];
}

export function ServicesPage({ onOpenContact }: ServicesPageProps) {
  const [selectedPreviewImage, setSelectedPreviewImage] = useState<{ src: string; title: string } | null>(null);

  const services: ServiceRowData[] = [
    {
      number: "01",
      title: "RON PROPERTIES LIMITED",
      icon: <Building2 className="w-9 h-9 text-white" />,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Commercial & Prime Real Estate Assets",
      description: "RON Properties specializes in property development, real estate investment, property sales, leasing, and facility management. The company is dedicated to providing affordable, quality, and secure residential, commercial, and industrial properties that meet the diverse needs of individuals and businesses.",
      capabilities: [
        "Residential & Commercial Turnkey Development",
        "Asset Acquisition, Land Banking & Sales",
        "Corporate Facility Management & Maintenance",
        "Tenant Relations & Long-Term Capital Leasing"
      ],
      keyFacts: [
        { label: "Asset Focus", value: "Prime Estates & Commercial Suites" },
        { label: "Headquarters", value: "Ocean Centre, Gudu District, Abuja" }
      ]
    },
    {
      number: "02",
      title: "RON TRANSPORT & LOGISTICS SERVICES",
      icon: <Truck className="w-9 h-9 text-white" />,
      image: SERVICE_MEDIA.transportFleet,
      imageCaption: "RON Intercity Transport Fleet & Dispatch Operations",
      description: "RON Transport & Logistics provides efficient transportation, haulage, freight forwarding, supply chain management, and logistics solutions. The company leverages modern operational practices to ensure timely, safe, and cost-effective movement of goods and services across various locations.",
      capabilities: [
        "Interstate Passenger & Executive Van Charters",
        "Heavy Duty Freight & Long-Haul Trucking",
        "Dedicated Motorcycle Dispatch Courier Network",
        "Supply Chain Warehousing & Depot Freight Forwarding"
      ],
      keyFacts: [
        { label: "Fleet Scope", value: "Buses, Vans, Trucks & Dispatch Bikes" },
        { label: "Coverage", value: "Nationwide Transit Network" }
      ]
    },
    {
      number: "03",
      title: "RON PETROLEUM SERVICES",
      icon: <Fuel className="w-9 h-9 text-white" />,
      image: SERVICE_MEDIA.petroleumStation,
      imageCaption: "Certified Fuel Dispensing & Bulk Energy Distribution",
      description: "RON Petroleum Services operates within the oil and gas sector, offering petroleum product supply, distribution, storage, and related energy solutions. The company is committed to maintaining industry standards while ensuring reliable service delivery to customers and business partners.",
      capabilities: [
        "Bulk AGO (Diesel) & PMS Supply for Commercial Fleets",
        "Retail Petroleum Stations & Reliable Pump Stations",
        "Industrial Fuel Storage & Depot Procurement",
        "High-Grade Automotive Lubricants & Energy Support"
      ],
      keyFacts: [
        { label: "Products", value: "AGO, PMS, DPK & Industrial Oils" },
        { label: "Standards", value: "NMDPRA Compliant Logistics" }
      ]
    },
    {
      number: "04",
      title: "RON UNITY FARMS",
      icon: <Sprout className="w-9 h-9 text-white" />,
      image: SERVICE_MEDIA.poultryFarm,
      imageCaption: "Mechanized Poultry & Sustainable Agribusiness",
      description: "RON Unity Farms focuses on modern agricultural practices, including crop cultivation, livestock farming, agro-processing, and food production. The subsidiary is dedicated to promoting food security, sustainable farming techniques, and agricultural innovation to support local and national development.",
      capabilities: [
        "Commercial Poultry (Layers, Broilers & Egg Supply)",
        "Mechanized Crop Cultivation (Grains & Legumes)",
        "Value-Added Agro-Processing & Packaging",
        "Sustainable Soil & Modern Irrigation Husbandry"
      ],
      keyFacts: [
        { label: "Specialty", value: "Commercial Poultry & Crops" },
        { label: "Objective", value: "National Food Security & Value Addition" }
      ]
    },
    {
      number: "05",
      title: "RON MINERAL EXPLORERS LIMITED",
      icon: <Pickaxe className="w-9 h-9 text-white" />,
      image: SERVICE_MEDIA.mineralMining,
      imageCaption: "Solid Mineral Sluicing, Processing & Exploration",
      description: "RON Mineral Explorers is engaged in mineral exploration, resource assessment, mining support services, and the development of mineral assets. The company seeks to identify and responsibly develop valuable mineral resources while adhering to environmental and regulatory requirements.",
      capabilities: [
        "Geological Surveys, Mapping & Resource Valuation",
        "Surface & Underground Mineral Exploration",
        "Mining Extraction Support & Site Processing",
        "Environmental Impact Assessment & Remediation"
      ],
      keyFacts: [
        { label: "Focus", value: "Solid Minerals & Strategic Assets" },
        { label: "Compliance", value: "Responsible Environmental Mining" }
      ]
    },
    {
      number: "06",
      title: "RON CLEANING SERVICES",
      icon: <SprayBottleIcon className="w-9 h-9 text-white" />,
      image: SERVICE_MEDIA.cleaningCrew,
      imageCaption: "Trained Corporate Janitorial & Facility Hygiene",
      description: "RON Cleaning Services provides professional cleaning and maintenance solutions for residential, commercial, industrial, and institutional clients. Services include office cleaning, post-construction cleaning, industrial sanitization, fumigation, and routine facility janitorial services tailored to preserve pristine corporate environments.",
      capabilities: [
        "Comprehensive Corporate Janitorial & Office Maintenance",
        "Post-Construction Deep Cleaning & Site Scrubbing",
        "Specialized Floor Polishing, Stripping & Carpet Care",
        "Fumigation, Pest Control & Bio-Sanitization"
      ],
      keyFacts: [
        { label: "Target Sectors", value: "Corporate, Commercial & Residential" },
        { label: "Equipment", value: "Industrial Heavy Scrubbers & Sanitizers" }
      ]
    }
  ];

  return (
    <div className="w-full bg-white text-[#4B5563]">
      {/* 1. Page Banner */}
      <PageBanner
        whiteTitle="Our"
        redTitle="Services"
        subtitle="Six subsidiaries delivering specialized solutions across the economy."
      />

      {/* 2. Services List (white background, container 1200px) */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-[#E5E7EB]">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="py-[40px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left side (about 55%): Navy circular badge (84px) with 4px soft pink ring + number + title */}
                <div className="lg:col-span-6 xl:col-span-6 flex items-start gap-6">
                  {/* Navy circular icon badge (84px) with a 4px soft pink (#FCE8EA) ring around it and a white line icon inside */}
                  <div className="w-[84px] h-[84px] rounded-full bg-[#00206B] ring-4 ring-[#FCE8EA] flex items-center justify-center shrink-0 shadow-sm mt-1">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    {/* Small number: 12px Montserrat, letter-spacing 0.2em, light tan-grey (#C9B8A8) */}
                    <div className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#C9B8A8] mb-1">
                      {item.number}
                    </div>

                    {/* Service title: 28px Montserrat ExtraBold, uppercase, navy */}
                    <h2 className="text-[24px] sm:text-[28px] font-heading font-extrabold uppercase text-[#00206B] leading-[1.2] mb-3">
                      {item.title}
                    </h2>

                    {/* Operational Photo Preview Box */}
                    {item.image && (
                      <div
                        onClick={() => setSelectedPreviewImage({ src: item.image!, title: item.title })}
                        className="group relative mt-4 h-44 sm:h-48 bg-[#F4F4F4] border border-[#E5E7EB] sharp-corner overflow-hidden cursor-pointer shadow-xs hover:shadow-md hover:border-[#00206B] transition-all"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00206B]/80 via-transparent to-transparent flex items-end justify-between p-3 opacity-90 group-hover:opacity-100 transition-opacity">
                          <span className="text-[11px] font-heading font-semibold text-white tracking-wide">
                            {item.imageCaption}
                          </span>
                          <span className="text-white/90 bg-[#00206B]/80 p-1.5 sharp-corner">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side (about 45%): description paragraph + professional capabilities */}
                <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Service description: 17px Inter, line-height 1.6, grey */}
                    <p className="font-body text-[17px] text-[#4B5563] leading-[1.6] mb-5">
                      {item.description}
                    </p>

                    {/* Professional Key Capabilities */}
                    <div className="bg-[#F4F4F4] p-5 border-l-4 border-[#00206B] sharp-corner mb-5">
                      <div className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-[#00206B] mb-3">
                        Operational Scope & Core Strengths
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-[#4B5563] font-medium leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E31E2D] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Facts */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {item.keyFacts.map((fact, fIdx) => (
                        <div key={fIdx} className="border border-[#E5E7EB] p-3 bg-white sharp-corner">
                          <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#6B7280]">
                            {fact.label}
                          </div>
                          <div className="text-xs font-heading font-bold text-[#00206B] mt-0.5">
                            {fact.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div>
                    <button
                      onClick={() => onOpenContact(item.title)}
                      className="inline-flex items-center gap-2 bg-[#00206B] hover:bg-[#E31E2D] text-white font-heading font-bold text-[13px] uppercase tracking-[0.1em] px-5 py-3 sharp-corner transition-colors duration-150 cursor-pointer shadow-sm group"
                    >
                      <span>Inquire About {item.title.split(' ')[1] || 'Service'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Lightbox */}
      {selectedPreviewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative max-w-4xl w-full bg-white sharp-corner overflow-hidden border border-white/20">
            <div className="bg-[#00206B] px-5 py-3 text-white flex items-center justify-between">
              <span className="font-heading font-bold text-sm sm:text-base">
                {selectedPreviewImage.title}
              </span>
              <button
                onClick={() => setSelectedPreviewImage(null)}
                className="text-white hover:text-[#E31E2D] p-1 cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={selectedPreviewImage.src}
                alt={selectedPreviewImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between text-xs text-[#6B7280]">
              <span>RON GROUP OF COMPANIES LTD · Corporate Subsidiary Operations</span>
              <span className="font-heading font-bold text-[#00206B]">RC: 8895046</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
