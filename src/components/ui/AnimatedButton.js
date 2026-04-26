import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../utils/animations';

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-premium-600 text-white hover:bg-premium-700',
    secondary: 'border-2 border-premium-600 text-premium-500 hover:bg-premium-600 hover:text-white',
    dark: 'bg-dark-800 text-gray-200 hover:bg-dark-700',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-12 py-5 text-xl',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={buttonClasses}
      variants={animations.buttonPress}
      initial="rest"
      whileHover="hover"
      whileTap="press"
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedButton;
