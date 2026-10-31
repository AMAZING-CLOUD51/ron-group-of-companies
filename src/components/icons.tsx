import React from 'react';

// Custom Spray Bottle Line Icon matching Lucide stroke style (2px stroke, round caps/joins)
export function SprayBottleIcon({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Trigger & nozzle */}
      <path d="M10 2h4" />
      <path d="M12 2v4" />
      <path d="M9 6h6" />
      <path d="M9 6l-3 4h6" />
      {/* Bottle neck & body */}
      <path d="M10 10v2a4 4 0 0 1-2 3.46V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5.54A4 4 0 0 1 14 12v-2" />
      {/* Spray droplets */}
      <path d="M4 4l-1-1" />
      <path d="M3 6h-1" />
      <path d="M4 8l-1 1" />
    </svg>
  );
}

// Split O for RON Logo
export function SplitO({
  size = 28,
  innerCutoutBg = "#00206B"
}: {
  size?: number;
  innerCutoutBg?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="inline-block align-middle select-none mx-[1px]"
      style={{ minWidth: size, minHeight: size }}
    >
      {/* Left semicircle: Accent Red #E31E2D */}
      <path d="M 50 6 A 44 44 0 0 0 50 94 Z" fill="#E31E2D" />
      {/* Right semicircle: White #FFFFFF */}
      <path d="M 50 6 A 44 44 0 0 1 50 94 Z" fill="#FFFFFF" />
      {/* Inner cutout matching background to form a thick corporate ring */}
      <circle cx="50" cy="50" r="24" fill={innerCutoutBg} />
    </svg>
  );
}
