import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations, useScrollAnimation } from '../utils/animations';
import Navigation from '../components/common/Navigation';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import Mission from '../components/sections/Mission';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#fbfaf9]">
      {/* Navigation */}
      <Navigation />
      
      {/* Mission Section */}
      <Mission />

      {/* Experience Timeline Section */}
      <div className="pt-24">
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Experience;
