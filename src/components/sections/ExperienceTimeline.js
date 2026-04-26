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

  const TimelineItem = ({ item, index, isLeft = true }) => {
    const [itemRef, itemInView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
      rootMargin: "-30px 0px"
    });

    return (
    <motion.div
      ref={itemRef}
      className={`flex items-center mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      variants={itemVariants}
      animate={itemInView ? "visible" : "hidden"}
    >
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-8 text-right' : 'md:pl-8'}`}>
        <motion.div 
          className="card-light p-6 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          {...useScrollAnimation()}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-heading">{item.name}</h3>
            <div className="w-10 h-10 bg-gradient-to-br from-[#5B6CFF] to-[#2D3AFF] rounded-full flex items-center justify-center">
              <i className={`fas ${item.icon} text-white text-sm`}></i>
            </div>
          </div>
          <p className="text-[#5B6CFF] font-semibold mb-2">{item.role}</p>
          <p className="text-subtext text-sm mb-3">{item.period}</p>
          <p className="text-subtext text-sm leading-relaxed">{item.description}</p>
          
          {item.achievement && (
            <div className="mt-3 p-2 bg-[#5B6CFF]/10 rounded-lg">
              <p className="text-[#5B6CFF] text-xs font-semibold">Achievement:</p>
              <p className="text-subtext text-xs">{item.achievement}</p>
            </div>
          )}
          
          {item.exit && (
            <div className="mt-3 p-2 bg-green-100 rounded-lg">
              <p className="text-green-700 text-xs font-semibold">Exit:</p>
              <p className="text-green-600 text-xs">{item.exit}</p>
            </div>
          )}
          
          {item.website && item.website !== "#" && (
            <a 
              href={item.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[#5B6CFF] hover:text-[#2D3AFF] text-sm underline"
            >
              Visit Website
            </a>
          )}
        </motion.div>
      </div>
      
      <div className="md:w-12 flex justify-center">
        <motion.div 
          className="w-4 h-4 bg-[#5B6CFF] rounded-full border-4 border-white shadow-lg"
          whileHover={{ scale: 1.5 }}
        ></motion.div>
      </div>
      
      <div className="md:w-1/2"></div>
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
            Professional Journey
          </motion.h2>
          
          <motion.p 
            className="text-lg text-subtext text-center mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            22+ years of building systems, scaling products, and creating value across multiple industries and ventures.
          </motion.p>

          {/* Current Ventures */}
          <div className="mb-16" ref={currentVenturesRef}>
            <motion.h2 
                className="text-3xl font-bold mb-8 text-heading"
                variants={itemVariants}
                animate={currentVenturesInView ? "visible" : "hidden"}
              >
                Current Ventures
              </motion.h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
              {currentVentures.map((venture, index) => (
                <TimelineItem 
                  key={venture.id} 
                  item={venture} 
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>

          {/* Past Ventures */}
          <div className="mb-16" ref={pastVenturesRef}>
            <motion.h3 
                className="text-2xl font-bold mb-6 text-heading"
                variants={itemVariants}
                animate={pastVenturesInView ? "visible" : "hidden"}
              >
                Successful Exits & Past Ventures
              </motion.h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
              {pastVentures.map((venture, index) => (
                <TimelineItem 
                  key={venture.id} 
                  item={venture} 
                  index={index}
                  isLeft={index % 2 === 1}
                />
              ))}
            </div>
          </div>

          {/* Corporate Experience */}
          <div ref={corporateExpRef}>
            <motion.h2 
                className="text-3xl font-bold mb-8 text-heading"
                variants={itemVariants}
                animate={corporateExpInView ? "visible" : "hidden"}
              >
                Corporate Leadership
              </motion.h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#5B6CFF] to-[#2D3AFF]"></div>
              
              {/* Timeline Items */}
              {corporateExperience.map((exp, index) => {
                const [corpItemRef, corpItemInView] = useInView({
                  triggerOnce: false,
                  threshold: 0.1,
                  rootMargin: "-30px 0px"
                });

                const isLeft = index % 2 === 0;
                
                return (
                  <TimelineItem 
                    key={exp.id}
                    item={{
                      name: exp.company,
                      role: exp.role,
                      period: exp.period,
                      description: exp.description,
                      icon: exp.icon,
                      iconColor: exp.iconColor
                    }}
                    index={index}
                    isLeft={isLeft}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
