import React from 'react';

interface PageBannerProps {
  whiteTitle: string;
  redTitle: string;
  subtitle: string;
  bannerHeight?: string;
}

export function PageBanner({ whiteTitle, redTitle, subtitle, bannerHeight = "h-[355px] min-h-[355px]" }: PageBannerProps) {
  return (
    <section className={`relative w-full ${bannerHeight} flex items-center bg-[#00206B] overflow-hidden`}>
      {/* Faint photo of tall glass skyscrapers shot from below */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2160&q=85')`
        }}
        role="img"
        aria-label="Tall glass skyscrapers background"
      />

      {/* Navy overlay at about 92% opacity so the buildings are barely visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 32, 107, 0.92)' }}
      />

      {/* Left-aligned content container (1200px max width) */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big title: 64px Montserrat ExtraBold, line-height 1.1 */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] tracking-tight">
          <span className="text-white">{whiteTitle} </span>
          <span className="text-[#E31E2D]">{redTitle}</span>
        </h1>

        {/* Short red horizontal line (190px wide, 2px) under the title */}
        <div className="w-[190px] h-[2px] bg-[#E31E2D] my-4" />

        {/* Banner subtitle: 18px Inter, white/light, line-height 1.6, max-width 600px */}
        <p className="font-body text-white/85 text-[18px] leading-[1.6] max-w-[600px]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
