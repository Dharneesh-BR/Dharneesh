import React from 'react';
import { motion } from 'framer-motion';

const Milestone = ({ 
  milestone, 
  index, 
  position, 
  isMajor, 
  onClick,
  isVisible 
}) => {
  // Different colors for variety
  const colors = [
    'bg-gradient-to-br from-blue-500 to-blue-600',
    'bg-gradient-to-br from-purple-500 to-purple-600', 
    'bg-gradient-to-br from-green-500 to-green-600',
    'bg-gradient-to-br from-orange-500 to-orange-600',
    'bg-gradient-to-br from-red-500 to-red-600',
    'bg-gradient-to-br from-indigo-500 to-indigo-600',
    'bg-gradient-to-br from-pink-500 to-pink-600',
    'bg-gradient-to-br from-teal-500 to-teal-600'
  ];
  
  const colorClass = colors[index % colors.length];
  const nodeSize = 'w-20 h-20';
  const iconSize = 'w-16 h-16';
  
  // Calculate vertical offset for alternating layout
  // Samsung (index 3) and Eazy (index 5) should be closer to road
  // Philips should be moved a little bit up
  let offset;
  if (milestone.title === "Samsung" || milestone.title === "Eazy") {
    offset = 0; // Very close to road
  } else if (milestone.title === "Philips") {
    offset = -20; // Move Philips a little bit more up
  } else if (milestone.title === "GSK") {
    offset = -8; // Move GSK a little bit down (less than -12)
  } else {
    offset = index % 2 === 0 ? -12 : 12;
  }
  
  // Determine if content should appear above the icon
  const isContentAbove = ["Philips", "Recibo", "Mind Magna"].includes(milestone.title);

  return (
    <motion.div
      className={`absolute cursor-pointer`}
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y + offset}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 20
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(milestone.title)}
    >
      {/* Milestone Node */}
      <motion.div
        className={`${nodeSize} bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-300 relative`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 0 30px rgba(0,0,0,0.2)'
        }}
      >
        {/* Logo */}
        <img 
          src={milestone.logo}
          alt={milestone.title}
          className={`${iconSize} relative z-10 object-contain`}
        />
      </motion.div>
      
      {/* Content */}
      <div className={`absolute ${isContentAbove ? 'bottom-full mb-4' : 'top-full mt-4'} left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap bg-white rounded-lg shadow-lg p-3 border border-gray-200`}>
        <h3 className="font-bold text-gray-800 text-sm mb-1">
          {milestone.title}
        </h3>
        <p className="text-xs font-semibold text-purple-600 mb-1">
          {milestone.year}
        </p>
        <p className="text-xs text-gray-600">
          {milestone.position}
        </p>
      </div>
    </motion.div>
  );
};

export default Milestone;
