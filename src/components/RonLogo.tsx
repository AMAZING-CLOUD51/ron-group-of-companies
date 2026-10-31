import React from 'react';
import { SplitO } from './icons';

interface RonLogoProps {
  className?: string;
  onClick?: () => void;
  innerCutoutBg?: string;
}

export function RonLogo({
  className = "",
  onClick,
  innerCutoutBg = "#00206B"
}: RonLogoProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col select-none cursor-pointer group text-left ${className}`}
      role="banner"
      aria-label="RON Group of Companies Ltd Logo"
    >
      {/* Top line: "RON" in bold white Montserrat, about 24px, letter-spacing 0.05em */}
      <div className="flex items-center font-heading font-bold text-white text-[24px] tracking-[0.05em] leading-none">
        <span>R</span>
        <span className="inline-flex items-center justify-center mx-[1px]">
          <SplitO size={20} innerCutoutBg={innerCutoutBg} />
        </span>
        <span>N</span>
      </div>

      {/* Under it, in small bold white caps (about 9px, Montserrat, letter-spacing 0.05em): "GROUP OF COMPANIES LTD" */}
      <div className="font-heading font-bold text-white text-[9px] uppercase tracking-[0.05em] mt-[2px] leading-tight whitespace-nowrap">
        GROUP OF COMPANIES LTD
      </div>

      {/* Under that, even smaller (about 8px, Inter, light grey-blue #C7D0E8): "RC: 8895046" */}
      <div className="font-body font-normal text-[#C7D0E8] text-[8px] uppercase tracking-[0.04em] mt-[1px] leading-none whitespace-nowrap">
        RC: 8895046
      </div>
    </div>
  );
}
