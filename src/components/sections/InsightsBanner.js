import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InsightsBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#fbfaf9' }}>
      {/* Full-width Video Banner */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
        className="relative w-full h-96 md:h-[500px]"
      >
        <motion.video
          src="/Insights Banner.mp4"
          alt="Insights and Articles Banner"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          onError={(e) => {
            console.error('Video error:', e);
            e.target.style.display = 'none';
          }}
          onLoadedData={() => {
            console.log('Video loaded successfully');
          }}
        />
        
        {/* Overlay Content */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        
        {/* Text Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-wide text-white"
              variants={itemVariants}
            >
              <motion.span
                variants={itemVariants}
                className="inline-block bg-gradient-to-r from-[#3533cd] via-[#00ffff] to-[#00ffff] bg-clip-text text-transparent"
              >
                INSIGHTS
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Clarity Drives Growth
            </motion.p>

            <motion.div 
              className="relative h-1 w-20 sm:w-24 bg-gradient-to-r from-[#3533cd] to-[#00ffff] mx-auto mt-8 rounded-full"
              variants={itemVariants}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InsightsBanner;
