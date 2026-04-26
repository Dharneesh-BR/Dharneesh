import { motion } from 'framer-motion';

// Advanced animation presets
export const animations = {
  // Stagger container animations
  staggerContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  },

  // Fade up animations
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Scale and fade animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Slide from left
  slideInLeft: {
    hidden: { opacity: 0, x: -100 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Slide from right
  slideInRight: {
    hidden: { opacity: 0, x: 100 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Hero text animations
  heroTitle: {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  },

  // Card hover animations
  cardHover: {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  },

  // Floating animation
  floating: {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // Glow animation
  glow: {
    initial: { boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" },
    animate: {
      boxShadow: [
        "0 0 20px rgba(245, 158, 11, 0.3)",
        "0 0 40px rgba(245, 158, 11, 0.6)",
        "0 0 20px rgba(245, 158, 11, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // Pulse animation
  pulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  // Text reveal animation
  textReveal: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Navigation animations
  navItem: {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },

  // Button press animation
  buttonPress: {
    rest: { scale: 1 },
    press: { scale: 0.95 },
    hover: { scale: 1.05 },
  },

  // Parallax scroll animation
  parallax: {
    initial: { y: 0 },
    whileInView: {
      y: [-50, 50],
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
  },
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// Scroll animation hook
export const useScrollAnimation = () => {
  const controls = animations.fadeInUp;
  
  return {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.3 },
    variants: controls,
  };
};

// Hover animation hook
export const useHoverAnimation = () => {
  return {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95, transition: { duration: 0.1 } },
  };
};
