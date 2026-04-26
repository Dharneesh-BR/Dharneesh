import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { animations, useScrollAnimation, useHoverAnimation } from '../../utils/animations';
import { profileInfo } from '../../data/profileData';

const Hero = () => {
  const scrollAnimation = useScrollAnimation();
  const hoverAnimation = useHoverAnimation();

  const heroTitles = ['Transforming Founders to', 'SuperHuman Leaders'];
  const heroColors = ['text-[#565449]', 'text-[#565449]'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="pt-24 pb-12 px-6" style={{ backgroundColor: '#fbfaf9' }}>
      <div className="container mx-auto">
        {/* Two Column Grid for Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Title and Content */}
          <motion.div variants={itemVariants}>
            {/* Hero Title */}
            <motion.h1 className="text-2xl md:text-4xl font-forum mb-8 leading-tight tracking-wide">
              {heroTitles.map((title, index) => (
                <Fragment key={title}>
                  <motion.span
                    custom={index}
                    variants={animations.heroTitle}
                    initial="hidden"
                    animate="show"
                    className="inline-block text-heading"
                  >
                    {title}
                  </motion.span>
                  {index < heroTitles.length - 1 && <br className="mb-4" />}
                </Fragment>
              ))}
            </motion.h1>
            
            <motion.p 
              className="text-xl text-subtext mb-6 leading-relaxed font-medium"
              variants={itemVariants}
              {...scrollAnimation}
            >
              {profileInfo.tagline}
            </motion.p>
            <motion.p 
              className="text-lg text-subtext mb-6 leading-relaxed"
              variants={itemVariants}
              {...scrollAnimation}
            >
              {profileInfo.bio}
            </motion.p>
            <motion.p 
              className="text-xl text-subtext mb-8 leading-relaxed font-medium"
              variants={itemVariants}
              {...scrollAnimation}
            >
              {profileInfo.subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
              {...scrollAnimation}
            >
              <motion.button 
                className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)', color: '#1A1A1A', border: '1px solid #00FFFF' }}
                variants={animations.buttonPress}
                initial="rest"
                whileHover="hover"
                whileTap="press"
                {...hoverAnimation}
              >
                Book a Strategy Call
              </motion.button>
              <motion.button 
                className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)', color: '#1A1A1A', border: '1px solid #00FFFF' }}
                variants={animations.buttonPress}
                initial="rest"
                whileHover="hover"
                whileTap="press"
                {...hoverAnimation}
              >
                Explore Programs
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="relative"
            >
                <motion.img
                  src="/chair-2.png"
                  alt="Hero Banner"
                  className="w-full h-auto max-h-screen object-contain rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
