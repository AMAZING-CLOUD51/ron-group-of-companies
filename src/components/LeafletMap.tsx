import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation, Layers } from 'lucide-react';

interface MarkerData {
  lat: number;
  lng: number;
  title: string;
  address?: string;
}

interface LeafletMapProps {
  center: [number, number];
  zoom?: number;
  markers?: MarkerData[];
  height?: string;
  className?: string;
  query?: string;
  title?: string;
  address?: string;
}

export function LeafletMap({
  center,
  zoom = 14,
  markers = [],
  height = "225px",
  className = "",
  query,
  title,
  address
}: LeafletMapProps) {
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');

  // Determine the best query for the location
  const primaryMarker = markers[0];
  const locationTitle = title || primaryMarker?.title || 'RON Group Office';
  const locationAddress = address || primaryMarker?.address || '';
  
  // Format query for Google Maps embed
  const searchQuery = query || (
    locationAddress 
      ? encodeURIComponent(`${locationAddress}, Nigeria`)
      : `${center[0]},${center[1]}`
  );

  // Direct Google Maps navigation URL
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${searchQuery}`;

  // Embedded map URL
  const embedUrl = `https://maps.google.com/maps?q=${searchQuery}&t=${mapType === 'satellite' ? 'k' : ''}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      style={{ height }}
      className={`w-full bg-[#E5E7EB] relative overflow-hidden group select-none border-t border-[#E5E7EB] ${className}`}
    >
      {/* Live Interactive Map iframe */}
      <iframe
        title={`Map locating ${locationTitle}`}
        src={embedUrl}
        className="w-full h-full border-0 filter contrast-[1.02]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Floating Header Badge with Green Pin (#8CC63F) */}
      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 shadow-md border border-[#E5E7EB] pointer-events-auto max-w-[85%]">
        <div className="w-3.5 h-3.5 rounded-full bg-[#8CC63F] flex items-center justify-center shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        <span className="font-heading font-bold text-[11px] text-[#00206B] uppercase tracking-wide truncate">
          {locationTitle}
        </span>
      </div>

      {/* Floating Action Buttons: Map Type Switcher & Google Maps Directions */}
      <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setMapType(mapType === 'roadmap' ? 'satellite' : 'roadmap')}
          title="Toggle Satellite View"
          className="bg-white/95 hover:bg-white text-[#00206B] px-2 py-1 text-[10px] font-heading font-semibold uppercase tracking-wider flex items-center gap-1 shadow-md border border-[#E5E7EB] transition-colors cursor-pointer"
        >
          <Layers className="w-3 h-3 text-[#E31E2D]" />
          <span>{mapType === 'roadmap' ? 'Sat' : 'Map'}</span>
        </button>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Open in Google Maps for turn-by-turn directions"
          className="bg-[#00206B] hover:bg-[#E31E2D] text-white px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider flex items-center gap-1 shadow-md transition-colors cursor-pointer"
        >
          <Navigation className="w-3 h-3 text-[#8CC63F]" />
          <span>Directions</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-80" />
        </a>
      </div>
    </div>
  );
}
