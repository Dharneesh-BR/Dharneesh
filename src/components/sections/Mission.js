import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations, useScrollAnimation } from '../../utils/animations';

const Mission = () => {
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

  const missionPoints = [
    "Build conscious brands with clarity and differentiation",
    "Scale businesses with strategic thinking",
    "Upgrade decision-making and founder performance",
    "Optimize energy, focus and longevity for sustained success",
    "Create personal and professional transformation that compounds"
  ];

  return (
    <section id="mission" className="py-10 px-6" style={{ backgroundColor: '#171716' }} ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              MISSION
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-100 mb-3 leading-relaxed font-medium"
              variants={itemVariants}
            >
              Help founders build stronger brands, sharper minds, healthier bodies and more meaningful lives.
            </motion.p>
            
            <motion.p 
              className="text-base md:text-lg text-white mb-6 leading-relaxed font-semibold"
              variants={itemVariants}
            >
              Because true growth isn't just business growth. It is <span style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>Brand Growth</span>. <span style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>Human Growth</span>. <span style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>Life Growth</span>.
            </motion.p>
            
            <motion.p 
              className="text-lg text-subtext mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Through coaching, strategic advisory and transformational programs, I help people:
            </motion.p>
            
            <motion.div 
              className="space-y-2 text-left max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-start mb-3"
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.div
                    className="w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    variants={animations.pulse}
                    animate="animate"
                  >
                    <i className="fas fa-check text-white text-sm"></i>
                  </motion.div>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
                    variants={itemVariants}
                  >
                    {point}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
