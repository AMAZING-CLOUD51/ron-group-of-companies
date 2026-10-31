import React, { useState } from 'react';
import { Maximize2, X, Filter } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';

export function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filterOptions = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'Real Estate', label: 'Real Estate & Buildings' },
    { id: 'Logistics', label: 'Logistics & Fleet' },
    { id: 'Petroleum', label: 'Petroleum Services' },
    { id: 'Agriculture', label: 'Agriculture & Farms' },
    { id: 'Mining', label: 'Mining & Minerals' },
    { id: 'Cleaning', label: 'Cleaning & Maintenance' }
  ];

  const filteredItems = activeFilter === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.sectorTag === activeFilter);

  return (
    <div className="w-full bg-white text-[#4B5563]">
      {/* =========================================================================
          1. PAGE BANNER
          Height about 355px, navy #00206B background with a faint photo of tall
          glass skyscrapers shot from below, covered by a navy overlay at about 92% opacity.
          ========================================================================= */}
      <PageBanner
        whiteTitle="Project"
        redTitle="Gallery"
        subtitle="Showcasing our commitment to excellence and quality delivery."
        bannerHeight="h-[355px] min-h-[355px]"
      />

      {/* =========================================================================
          2. GALLERY GRID SECTION (white background, 60px top padding, 80px bottom padding)
          ========================================================================= */}
      <section className="bg-white pt-[60px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#00206B]">
              <Filter className="w-4 h-4 text-[#E31E2D]" />
              <span>Filter by Subsidiary Sector:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {filterOptions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer sharp-corner ${
                    activeFilter === f.id
                      ? 'bg-[#00206B] text-white shadow-xs'
                      : 'bg-[#F4F4F4] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#00206B]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3-column grid inside the 1200px container, gap 32px, each card about 380px wide x 285px tall (4:3 ratio) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {filteredItems.map((item) => (
              <div
                key={item.number}
                onClick={() => setSelectedItem(item)}
                className="group relative w-full h-[285px] overflow-hidden sharp-corner bg-black cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Full-bleed photo (object-fit: cover) */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark gradient overlay on the lower half (transparent to rgba(0,0,0,0.85)) so the text is readable */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.1) 75%, transparent 100%)'
                  }}
                />

                {/* Top-left (12px from the corner): small dark translucent badge with card number in white */}
                <div className="absolute top-[12px] left-[12px] z-10">
                  <span
                    className="inline-block text-[11px] font-heading font-semibold text-white px-2 py-1 rounded-[4px]"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Expand indicator icon on top right */}
                <div className="absolute top-[12px] right-[12px] z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1.5 rounded-[4px] bg-black/60 text-white inline-flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom-left (16px padding): white bold title and lighter description */}
                <div className="absolute bottom-0 left-0 right-0 p-[16px] z-10 text-left">
                  {/* Gallery card title: 16px Montserrat Bold, white */}
                  <h3 className="font-heading font-bold text-[16px] text-white leading-snug mb-1">
                    {item.title}
                  </h3>

                  {/* Gallery card description: 13px Inter, white at 80% opacity, line-height 1.5 */}
                  <p className="font-body text-[13px] text-white/80 leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-[#6B7280]">
            <span>Showing {filteredItems.length} documented operational milestones</span>
            <span className="font-heading font-bold text-[#00206B]">RON GROUP OF COMPANIES LTD</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR COMMITMENT (white background, 80px bottom padding)
          Inside the 1200px container, a box with light grey #F4F4F4 background,
          a 4px solid red (#E31E2D) LEFT border only, and 32px inner padding.
          ========================================================================= */}
      <section className="bg-white pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F4F4F4] border-l-4 border-[#E31E2D] p-[32px] sharp-corner shadow-xs">
            {/* Heading: "Our Commitment" (navy, 20px Montserrat Bold) */}
            <h2 className="font-heading font-bold text-[20px] text-[#00206B] leading-tight mb-3">
              Our Commitment
            </h2>

            {/* Paragraph: 16px Inter, line-height 1.7, color #4B5563 */}
            <p className="font-body text-[16px] leading-[1.7] text-[#4B5563]">
              RON Group of Companies Limited has successfully participated in and executed projects across real estate development, construction, logistics support, agriculture, mining-related operations, and facility management. Our commitment to quality, professionalism, safety, innovation, and client satisfaction continues to drive our success across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FULL-SIZE LIGHTBOX MODAL
          ========================================================================= */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white sharp-corner overflow-hidden border border-white/20 shadow-2xl">
            {/* Modal Header */}
            <div className="bg-[#00206B] px-6 py-4 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#E31E2D] bg-[#FCE8EA] px-2 py-0.5 inline-block mb-1">
                  Project {selectedItem.number} · {selectedItem.category}
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-white">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 cursor-pointer transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="bg-black max-h-[68vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[68vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 bg-white border-t border-[#E5E7EB]">
              <p className="text-sm font-body text-[#4B5563] leading-relaxed mb-3">
                {selectedItem.description}
              </p>
              <div className="flex items-center justify-between text-xs text-[#6B7280]">
                <span>Subsidiary Division: <strong className="text-[#00206B]">{selectedItem.category}</strong></span>
                <span className="font-heading font-bold text-[#00206B]">RC: 8895046</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
