import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { animations, useScrollAnimation, useHoverAnimation } from '../../utils/animations';
import { profileInfo } from '../../data/profileData';

const Hero = () => {
  const scrollAnimation = useScrollAnimation();
  const hoverAnimation = useHoverAnimation();
  const navigate = useNavigate();

  const heroTitles = ['Transforming Founders to', 'SuperHuman Leaders'];

  const statsData = [
    {
      number: "26k+",
      label: "Business Professionals transformed",
      icon: "fa-chart-line",
      color: "text-premium-500"
    },
    {
      number: "650+",
      label: "Brands Scaled",
      icon: "fa-rocket",
      color: "text-premium-500"
    },
    {
      number: "8+",
      label: "Trained Across Countries",
      icon: "fa-globe",
      color: "text-blue-500"
    },
    {
      number: "23+",
      label: "Years of Experience",
      icon: "fa-calendar-alt",
      color: "text-purple-500"
    }
  ];

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
    <section className="pt-24 pb-16 px-6" style={{ backgroundColor: '#fbfaf9' }}>
      <div className="container mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Mobile Title */}
            <motion.div variants={itemVariants} className="text-left mb-8 pt-8">
              <motion.h1 className="text-4xl font-bold mb-6 leading-tight tracking-wide text-center">
                {heroTitles.map((title, index) => (
                  <Fragment key={title}>
                    <motion.span
                      custom={index}
                      variants={animations.heroTitle}
                      initial="hidden"
                      animate="show"
                      className={`inline-block ${index === 1 ? 'bg-gradient-to-r from-[#3533cd] via-[#00ffff] to-[#00ffff] bg-clip-text text-transparent' : ''}`}
                      style={index === 0 ? { color: '#000047' } : {}}
                    >
                      {title}
                    </motion.span>
                    {index < heroTitles.length - 1 && <br className="mb-4" />}
                  </Fragment>
                ))}
              </motion.h1>
            </motion.div>

            
            {/* Mobile Bio */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.p 
                className="text-base text-subtext leading-relaxed font-large text-center"
                variants={itemVariants}
                {...scrollAnimation}
              >
                {profileInfo.bio}
              </motion.p>
            </motion.div>

            {/* Mobile Buttons */}
            <motion.div 
              className="flex flex-col gap-4"
              variants={itemVariants}
              {...scrollAnimation}
            >
              <motion.button 
                className="w-full px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)', color: '#FFFFFF', border: '1px solid #00FFFF' }}
                variants={animations.buttonPress}
                initial="rest"
                whileHover="hover"
                whileTap="press"
                {...hoverAnimation}
                onClick={() => navigate('/contact-us')}
              >
                Book a Strategy Call
              </motion.button>
              <motion.button 
                className="w-full px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)', color: '#FFFFFF', border: '1px solid #00FFFF' }}
                variants={animations.buttonPress}
                initial="rest"
                whileHover="hover"
                whileTap="press"
                {...hoverAnimation}
                onClick={() => {
                  const element = document.getElementById('ways-to-work');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Programs
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Image */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="relative mx-auto w-64 h-64">
                <motion.img
                  src="/Edited.png"
                  alt="Hero Banner"
                  className="w-72 h-72 object-contain rounded-lg relative z-10 mx-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Title and Content */}
            <motion.div variants={itemVariants}>
              {/* Hero Title */}
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wide">
                {heroTitles.map((title, index) => (
                  <Fragment key={title}>
                    <motion.span
                      custom={index}
                      variants={animations.heroTitle}
                      initial="hidden"
                      animate="show"
                      className={`inline-block ${index === 1 ? 'bg-gradient-to-r from-[#3533cd] via-[#00ffff] to-[#00ffff] bg-clip-text text-transparent' : ''}`}
                      style={index === 0 ? { color: '#000047' } : {}}
                    >
                      {title}
                    </motion.span>
                    {index < heroTitles.length - 1 && <br className="mb-6" />}
                  </Fragment>
                ))}
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-subtext mb-8 leading-relaxed font-medium"
                variants={itemVariants}
                {...scrollAnimation}
              >
                {profileInfo.bio}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
                {...scrollAnimation}
              >
                <motion.button 
                  className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)', color: '#FFFFFF', border: '1px solid #00FFFF' }}
                  variants={animations.buttonPress}
                  initial="rest"
                  whileHover="hover"
                  whileTap="press"
                  {...hoverAnimation}
                  onClick={() => navigate('/contact-us')}
                >
                  Book a Strategy Call
                </motion.button>
                <motion.button 
                  className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)', color: '#FFFFFF', border: '1px solid #00FFFF' }}
                  variants={animations.buttonPress}
                  initial="rest"
                  whileHover="hover"
                  whileTap="press"
                  {...hoverAnimation}
                  onClick={() => {
                    const element = document.getElementById('ways-to-work');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Explore Programs
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="relative overflow-hidden"
              >
                <div 
                  className="absolute flex items-center justify-center pointer-events-none sm:block hidden"
                  style={{
                    top: '36%',
                    width: '75%',
                    height: '75%',
                    borderRadius: '50%',
                    background: 'linear-gradient(65deg, #3533cd 0%, #00ffff 100%)',
                    left: '12.5%',
                    WebkitClipPath: 'inset(0 0 15% 0)',
                    clipPath: 'inset(0 0 15% 0)'
                  }}
                />
                {/* Mobile background circle */}
                <div 
                  className="absolute flex items-center justify-center pointer-events-none sm:hidden"
                  style={{
                    top: '30%',
                    width: '60%',
                    height: '60%',
                    borderRadius: '50%',
                    background: 'linear-gradient(65deg, #3533cd 0%, #00ffff 100%)',
                    left: '20%',
                    WebkitClipPath: 'inset(0 0 20% 0)',
                    clipPath: 'inset(0 0 20% 0)'
                  }}
                />
                <motion.img
                  src="/Edited.png"
                  alt="Hero Banner"
                  className="w-full h-auto max-h-screen object-contain rounded-lg relative z-10"
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
        
        {/* Stats Cards */}
        <motion.div 
          className="max-w-6xl mx-auto mt-0 p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm"
          style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 text-center relative z-10 rounded-2xl shadow-xl border border-purple-200 backdrop-blur-sm flex-1 min-w-[200px] max-w-[280px]"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.1), 0 20px 60px rgba(102, 126, 234, 0.05)'
                }}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15), 0 25px 80px rgba(102, 126, 234, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)' }}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <i className={`fas ${stat.icon} text-white text-2xl drop-shadow-lg`}></i>
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-600 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
