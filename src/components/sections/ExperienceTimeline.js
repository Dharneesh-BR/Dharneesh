import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { currentVentures, pastVentures, corporateExperience } from '../../data/profileData';
import { animations, useScrollAnimation } from '../../utils/animations';

const ExperienceTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  // Separate observers for each section
  const [currentVenturesRef, currentVenturesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  const [pastVenturesRef, pastVenturesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  const [corporateExpRef, corporateExpInView] = useInView({
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const RoadmapItem = ({ item, index, isLast = false }) => {
    const [itemRef, itemInView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
      rootMargin: "-30px 0px"
    });

    return (
      <motion.div
        ref={itemRef}
        className="relative flex flex-col items-center"
        variants={itemVariants}
        animate={itemInView ? "visible" : "hidden"}
        initial={{ opacity: 0, y: 30 }}
      >
        {/* Milestone Marker */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Milestone Post */}
          <motion.div 
            className="w-3 h-12 bg-gray-700 rounded-t-sm"
            initial={{ scaleY: 0 }}
            animate={itemInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ transformOrigin: 'top' }}
          />
          
          {/* Milestone Sign */}
          <motion.div 
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-md border border-gray-300 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          >
            <p className="text-xs font-bold text-gray-800">{item.name}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-16 px-6 bg-[#fbfaf9]" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center mb-4 text-heading"
            variants={itemVariants}
          >
            Professional Journey Road
          </motion.h2>
          
          <motion.p 
            className="text-lg text-subtext text-center mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            22+ years of building systems, scaling products, and creating value across multiple industries and ventures.
          </motion.p>

          {/* Single Road with All Milestones */}
          <div className="relative overflow-x-auto pb-16">
            {/* Road Base */}
            <div className="relative min-h-[200px] bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg mx-8">
              {/* Road Surface */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg">
                {/* Road Lines */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-yellow-400 opacity-60"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-yellow-400"></div>
                  ))}
                </div>
              </div>
              
              {/* Milestones Container */}
              <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center px-12">
                <div className="flex items-center justify-between w-full min-w-max">
                  {/* Current Ventures */}
                  {currentVentures.map((venture, index) => (
                    <RoadmapItem 
                      key={venture.id}
                      item={venture} 
                      index={index}
                      isLast={false}
                    />
                  ))}
                  
                  {/* Past Ventures */}
                  {pastVentures.map((venture, index) => (
                    <RoadmapItem 
                      key={venture.id}
                      item={venture} 
                      index={index + currentVentures.length}
                      isLast={false}
                    />
                  ))}
                  
                  {/* Corporate Experience */}
                  {corporateExperience.map((exp, index) => (
                    <RoadmapItem 
                      key={exp.id}
                      item={{
                        name: exp.company,
                        role: exp.role,
                        period: exp.period,
                        description: exp.description,
                        icon: 'fa-building'
                      }}
                      index={index + currentVentures.length + pastVentures.length}
                      isLast={index === corporateExperience.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
