import React from 'react';

interface MandalaPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
}

const MandalaPattern: React.FC<MandalaPatternProps> = ({ 
  className = '', 
  size = 600,
  opacity = 0.15 
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="currentColor"
        strokeWidth="0.5"
        className="animate-rotate-slow"
        style={{ transformOrigin: 'center' }}
      />
      
      {/* Second ring with dots */}
      <g className="animate-rotate-reverse" style={{ transformOrigin: 'center' }}>
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.3" />
        {[...Array(16)].map((_, i) => (
          <circle
            key={i}
            cx={100 + 80 * Math.cos((i * 22.5 * Math.PI) / 180)}
            cy={100 + 80 * Math.sin((i * 22.5 * Math.PI) / 180)}
            r="2"
            fill="currentColor"
          />
        ))}
      </g>

      {/* Inner decorative rings */}
      <g className="animate-rotate-slow" style={{ transformOrigin: 'center' }}>
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1={100 + 45 * Math.cos((i * 30 * Math.PI) / 180)}
            y1={100 + 45 * Math.sin((i * 30 * Math.PI) / 180)}
            x2={100 + 60 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={100 + 60 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke="currentColor"
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Petal pattern */}
      <g className="animate-rotate-reverse" style={{ transformOrigin: 'center' }}>
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="55"
            rx="8"
            ry="20"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            transform={`rotate(${i * 45} 100 100)`}
          />
        ))}
      </g>

      {/* Center circle */}
      <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="0.3" />
      <circle cx="100" cy="100" r="5" fill="currentColor" />
    </svg>
  );
};

export default MandalaPattern;
