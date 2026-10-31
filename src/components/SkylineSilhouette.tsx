import React from 'react';

/**
 * A decorative city-skyline silhouette strip made of lighter navy blocks of different heights,
 * placed along the bottom edge of the CTA band.
 */
export function SkylineSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`}>
      {/* Repeating architectural silhouette blocks of varying heights */}
      <svg
        viewBox="0 0 1200 65"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 block"
      >
        {/* Layer 1: background lighter navy silhouettes (#0B2972) */}
        <g fill="#0B2972" opacity="0.6">
          <rect x="0" y="25" width="45" height="40" />
          <rect x="50" y="15" width="30" height="50" />
          <rect x="85" y="30" width="55" height="35" />
          <rect x="145" y="10" width="35" height="55" />
          <rect x="185" y="20" width="50" height="45" />
          <rect x="240" y="8" width="28" height="57" />
          <rect x="272" y="28" width="48" height="37" />
          <rect x="325" y="18" width="35" height="47" />
          <rect x="365" y="5" width="42" height="60" />
          <rect x="412" y="22" width="38" height="43" />
          <rect x="455" y="12" width="50" height="53" />
          <rect x="510" y="26" width="32" height="39" />
          <rect x="546" y="16" width="44" height="49" />
          <rect x="595" y="6" width="36" height="59" />
          <rect x="636" y="24" width="48" height="41" />
          <rect x="690" y="14" width="34" height="51" />
          <rect x="730" y="4" width="40" height="61" />
          <rect x="775" y="20" width="46" height="45" />
          <rect x="826" y="10" width="36" height="55" />
          <rect x="868" y="28" width="44" height="37" />
          <rect x="918" y="15" width="38" height="50" />
          <rect x="962" y="8" width="48" height="57" />
          <rect x="1015" y="22" width="35" height="43" />
          <rect x="1055" y="12" width="42" height="53" />
          <rect x="1102" y="25" width="48" height="40" />
          <rect x="1155" y="10" width="45" height="55" />
        </g>

        {/* Layer 2: foreground lighter navy blocks (#103387) */}
        <g fill="#103387" opacity="0.9">
          <rect x="20" y="38" width="35" height="27" />
          <rect x="65" y="28" width="40" height="37" />
          <rect x="115" y="42" width="28" height="23" />
          <rect x="150" y="24" width="45" height="41" />
          <rect x="205" y="35" width="38" height="30" />
          <rect x="250" y="18" width="32" height="47" />
          <rect x="290" y="32" width="44" height="33" />
          <rect x="340" y="26" width="35" height="39" />
          <rect x="382" y="16" width="38" height="49" />
          <rect x="428" y="34" width="42" height="31" />
          <rect x="478" y="24" width="36" height="41" />
          <rect x="520" y="38" width="34" height="27" />
          <rect x="562" y="28" width="40" height="37" />
          <rect x="608" y="20" width="32" height="45" />
          <rect x="648" y="36" width="44" height="29" />
          <rect x="700" y="25" width="36" height="40" />
          <rect x="742" y="18" width="38" height="47" />
          <rect x="788" y="32" width="42" height="33" />
          <rect x="838" y="22" width="34" height="43" />
          <rect x="878" y="37" width="44" height="28" />
          <rect x="930" y="26" width="38" height="39" />
          <rect x="976" y="18" width="42" height="47" />
          <rect x="1025" y="35" width="35" height="30" />
          <rect x="1068" y="24" width="38" height="41" />
          <rect x="1115" y="38" width="45" height="27" />
          <rect x="1165" y="22" width="35" height="43" />
        </g>
      </svg>
    </div>
  );
}
