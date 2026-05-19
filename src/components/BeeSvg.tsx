import React from 'react';

interface BeeSvgProps {
  className?: string;
}

const BeeSvg: React.FC<BeeSvgProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wings */}
      <ellipse cx="18" cy="24" rx="10" ry="6" fill="#f8fafc" opacity="0.8" />
      <ellipse cx="46" cy="24" rx="10" ry="6" fill="#f8fafc" opacity="0.8" />
      
      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="18" fill="#facc15" />
      
      {/* Stripes */}
      <ellipse cx="32" cy="28" rx="12" ry="4" fill="#111827" />
      <ellipse cx="32" cy="38" rx="13" ry="4" fill="#111827" />
      <ellipse cx="32" cy="48" rx="10" ry="3" fill="#111827" />
      
      {/* Head */}
      <circle cx="32" cy="14" r="10" fill="#facc15" />
      
      {/* Eyes */}
      <circle cx="28" cy="12" r="3" fill="#111827" />
      <circle cx="36" cy="12" r="3" fill="#111827" />
      <circle cx="29" cy="11" r="1" fill="white" />
      <circle cx="37" cy="11" r="1" fill="white" />
      
      {/* Antennae */}
      <path d="M28 6 Q26 2, 22 2" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M36 6 Q38 2, 42 2" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="2" r="2" fill="#111827" />
      <circle cx="42" cy="2" r="2" fill="#111827" />
      
      {/* Stinger */}
      <path d="M32 54 L32 60" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default BeeSvg;
