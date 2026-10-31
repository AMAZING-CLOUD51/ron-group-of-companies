import React, { useState } from 'react';
import { Building2, Target, Eye, Maximize2, X } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { WORK_IMAGES, CorporateWorkImage } from '../data/assets';

export function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<CorporateWorkImage | null>(null);

  // Six images specified by the user for the right column grid
  const sixGalleryImages = [
    WORK_IMAGES[0], // IMG-20261031-WA0012: Logistics motorbikes
    WORK_IMAGES[1], // IMG-20261031-WA0018: Cleaning team
    WORK_IMAGES[2], // IMG-20261031-WA0031: Poultry farm
    WORK_IMAGES[3], // IMG-20261031-WA0032: Petroleum lubricants/drum
    WORK_IMAGES[4], // IMG-20261031-WA0011: Transport passenger fleet
    WORK_IMAGES[5], // IMG-20261031-WA0021: Mining operations
  ];

  return (
    <div className="w-full bg-white text-[#4B5563]">
      {/* 1. Page Banner */}
      <PageBanner
        whiteTitle="About"
        redTitle="Us"
        subtitle="A diversified conglomerate committed to excellence across multiple sectors of the economy."
      />

      {/* 2. Company Overview section (white background, two columns, top padding 90px) */}
      <section className="bg-white pt-[90px] pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left column */}
            <div className="lg:col-span-6">
              {/* Soft pink (40px) square containing a red building icon + Heading "Company Overview" (navy, 22px) */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-[22px] font-heading font-bold text-[#00206B] leading-tight">
                  Company Overview
                </h2>
              </div>

              {/* Under the heading, two short horizontal lines side by side: one red, one navy (each about 155px wide, 2px) */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-[155px] h-[2px] bg-[#E31E2D]" />
                <div className="w-[155px] h-[2px] bg-[#00206B]" />
              </div>

              {/* Paragraph */}
              <p className="font-body text-[16px] leading-[1.7] text-[#4B5563] text-justify md:text-left">
                RON Group of Companies is a diversified business conglomerate committed to delivering excellence across multiple sectors of the economy. Established on June 25, 2015, and headquartered in Suite No. 4 Ocean Centre, Oladipo Diya Road, Opp. Gudu Library, Gudu District Abuja, AMAC, FCT. With operations spanning real estate, transportation and logistics, petroleum services, agriculture, mineral exploration, and professional cleaning services, the Group is committed to delivering innovative solutions, exceptional service, and sustainable value to its clients and stakeholders. Through its growing network of subsidiaries and branches, RON Group of Companies continues to contribute to economic development while upholding the highest standards of professionalism, integrity, and excellence.
              </p>
            </div>

            {/* Right column: the picture uploaded all in a six like boxes to show our work */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {sixGalleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className="group relative bg-[#F4F4F4] border border-[#E5E7EB] sharp-corner overflow-hidden cursor-pointer h-36 sm:h-40 shadow-xs hover:shadow-md hover:border-[#00206B] transition-all"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00206B]/90 via-[#00206B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                      <span className="text-[9px] font-heading font-bold uppercase tracking-wider text-[#E31E2D] bg-white px-1.5 py-0.5 self-start mb-1">
                        {img.category}
                      </span>
                      <p className="text-[11px] font-heading font-semibold text-white leading-tight line-clamp-2">
                        {img.title}
                      </p>
                      <div className="absolute top-2 right-2 text-white/80">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#6B7280]">
                <span>Operational field photos from RON subsidiaries</span>
                <span className="font-heading font-semibold text-[#00206B]">6 Operating Sectors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission and Vision section (full-width light grey #F4F4F4 background band, about 330px tall, 80px vertical padding) */}
      <section className="w-full bg-[#F4F4F4] py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] items-stretch">
            {/* Left card, 4px RED (#E31E2D) top border */}
            <div className="bg-white border border-[#E5E7EB] border-t-4 border-t-[#E31E2D] p-[32px] sharp-corner flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-[22px] font-heading font-bold text-[#00206B]">
                    Mission Statement
                  </h3>
                </div>
                <p className="font-body text-[16px] leading-[1.7] text-[#4B5563]">
                  To provide high-quality products and services through our diverse business operations while fostering economic growth, customer satisfaction, environmental responsibility, and continuous improvement.
                </p>
              </div>
            </div>

            {/* Right card, 4px NAVY (#00206B) top border */}
            <div className="bg-white border border-[#E5E7EB] border-t-4 border-t-[#00206B] p-[32px] sharp-corner flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 bg-[#FCE8EA] text-[#E31E2D] flex items-center justify-center sharp-corner shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-[22px] font-heading font-bold text-[#00206B]">
                    Vision Statement
                  </h3>
                </div>
                <p className="font-body text-[16px] leading-[1.7] text-[#4B5563]">
                  To become a leading and trusted multi-sector business group recognized for excellence, innovation, and sustainable value creation across Africa and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Commitment box (white section background, with a navy #00206B box inside the 1200px container, about 295px tall, centered content, vertical margin 90px) */}
      <section className="bg-white my-[90px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#00206B] min-h-[295px] p-8 sm:p-12 md:p-14 sharp-corner flex flex-col items-center justify-center text-center shadow-lg">
            {/* Small red label, centered: "OUR COMMITMENT" */}
            <div className="text-[12px] font-heading font-bold uppercase tracking-[0.25em] text-[#E31E2D] mb-4">
              OUR COMMITMENT
            </div>

            {/* Paragraph, white, 18px Inter, centered, line-height 1.65, max-width 760px */}
            <p className="font-body text-[18px] text-white leading-[1.65] max-w-[760px] mx-auto">
              RON Group of Companies Limited has successfully participated in and executed projects across real estate development, construction, logistics support, agriculture, mining-related operations, and facility management. Our commitment to quality, professionalism, safety, innovation, and client satisfaction continues to drive our success across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Image Preview Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative max-w-3xl w-full bg-white sharp-corner overflow-hidden border border-white/20">
            <div className="bg-[#00206B] px-5 py-3 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-heading font-bold text-[#E31E2D] uppercase tracking-wider block">
                  {selectedImage.subsidiary}
                </span>
                <span className="font-heading font-bold text-sm sm:text-base">
                  {selectedImage.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-white hover:text-[#E31E2D] p-1 cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between text-xs text-[#6B7280]">
              <span>RON GROUP OF COMPANIES LTD · Corporate Operations</span>
              <span className="font-heading font-bold text-[#00206B]">RC: 8895046</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
