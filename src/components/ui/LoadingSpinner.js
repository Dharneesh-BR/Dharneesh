import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', color = 'premium' }) => {
  const sizeClasses = {
    sm: 'w-32 h-26',
    md: 'w-48 h-40',
    lg: 'w-64 h-52',
    xl: 'w-80 h-64',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fbfaf9] z-50">
      <motion.svg 
        className={`${sizeClasses[size]}`}
        viewBox="0 0 320 260" 
        role="img" 
        aria-label="Loading chart animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Chart axes */}
        <motion.line 
          x1="24" y1="22" x2="24" y2="232" 
          stroke="#2A1AD8" 
          strokeWidth="5" 
          strokeLinecap="round" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.line 
          x1="24" y1="232" x2="300" y2="232" 
          stroke="#2A1AD8" 
          strokeWidth="5" 
          strokeLinecap="round" 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Animated bars */}
        {[52, 88, 126, 165, 206].map((x, idx) => (
          <motion.rect
            key={`loading-bar-${x}`}
            x={x}
            y={216 - (idx + 1) * 30}
            width="34"
            height={(idx + 1) * 30}
            rx="3"
            fill="#B948FF"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.35, delay: 0.5 + idx * 0.1 }}
          />
        ))}

        {/* Animated line */}
        <motion.line
          x1="46"
          y1="198"
          x2="270"
          y2="44"
          stroke="#00ffff"
          strokeWidth="9"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: 1.2 }}
        />
        
        {/* Animated arrow */}
        <motion.polygon
          points="270,44 250,44 270,26 286,44"
          fill="#00ffff"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, delay: 1.8 }}
        />
      </motion.svg>
    </div>
  );
};

export default LoadingSpinner;
