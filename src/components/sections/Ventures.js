import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { currentVentures, pastVentures } from '../../data/profileData';

const Ventures = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  // Combine current and past ventures for display
  const allVentures = [
    ...currentVentures.filter(v => v.featured),
    ...pastVentures.filter(v => v.featured)
  ];

  // Background images for each venture
  const ventureImages = {
    'Eterno - AI Longevity Platform': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    'Mind Magna': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    'PHYGIT - CPG Distribution Consulting': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'Svasam Life Sciences': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    'EAZY': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    'Recibo.ai': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  };

  // Gradient colors for each venture
  const ventureGradients = {
    'Eterno - AI Longevity Platform': 'from-red-900/85 to-pink-900/85',
    'Mind Magna': 'from-purple-900/85 to-indigo-900/85',
    'PHYGIT - CPG Distribution Consulting': 'from-green-900/85 to-teal-900/85',
    'Svasam Life Sciences': 'from-blue-900/85 to-cyan-900/85',
    'EAZY': 'from-cyan-900/85 to-blue-900/85',
    'Recibo.ai': 'from-indigo-900/85 to-violet-900/85',
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="ventures" className="py-16 px-4 md:px-6 bg-[#f6f4f2]" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-heading">
            Portfolio Ventures
          </h2>
          <p className="text-lg text-subtext text-center mb-12 max-w-3xl mx-auto">
            From AI-powered platforms to sustainable solutions, explore the diverse ventures that showcase innovation and impact across multiple industries.
          </p>
          
          {/* Desktop: Horizontal expanding cards */}
          <div 
            className="hidden md:flex flex-row gap-3 h-[500px] lg:h-[550px]"
            onMouseLeave={handleMouseLeave}
          >
            {allVentures.map((venture, index) => {
              const isActive = activeIndex === index;
              const isInactive = activeIndex !== null && activeIndex !== index;
              const bgImage = ventureImages[venture.name] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80';
              const gradient = ventureGradients[venture.name] || 'from-gray-900/85 to-black/85';
              
              return (
                <motion.div
                  key={venture.id}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    flex: isActive ? 3 : isInactive ? 0.7 : 1,
                  }}
                  animate={{
                    flex: isActive ? 3 : isInactive ? 0.7 : 1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() => handleClick(index)}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ 
                      backgroundImage: `url(${bgImage})`,
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${gradient} transition-opacity duration-700`}
                    style={{
                      opacity: isActive ? 0.9 : isInactive ? 0.95 : 0.85,
                    }}
                  />
                  
                  {/* Dark overlay for inactive cards */}
                  <div 
                    className="absolute inset-0 bg-black transition-opacity duration-700"
                    style={{
                      opacity: isInactive ? 0.5 : 0,
                    }}
                  />
                  
                                    
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                    {/* Icon */}
                    <div className="mb-3">
                      <i className={`fas ${venture.icon} text-3xl text-white/90`}></i>
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-lg lg:text-xl font-bold text-white mb-2 transition-all duration-500"
                    >
                      {venture.name}
                    </h3>
                    
                    {/* Role & Period - always visible */}
                    <div 
                      className="transition-all duration-500"
                      style={{
                        opacity: isActive ? 0 : 1,
                        maxHeight: isActive ? 0 : '60px',
                        overflow: 'hidden',
                      }}
                    >
                      <p className="text-sm text-cyan-300 font-semibold">{venture.role}</p>
                      <p className="text-xs text-white/60">{venture.period}</p>
                    </div>
                    
                    {/* Expanded Content */}
                    <div 
                      className="overflow-hidden transition-all duration-700 ease-in-out"
                      style={{
                        maxHeight: isActive ? '300px' : 0,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                      }}
                    >
                      <p className="text-cyan-300 text-sm font-semibold mb-1">{venture.role}</p>
                      <p className="text-white/70 text-xs mb-3">{venture.period}</p>
                      
                      <p className="text-white/90 text-sm mb-4 leading-relaxed">
                        {venture.description}
                      </p>
                      
                                            
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {venture.tags.slice(0, 4).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-white/20 rounded-full text-xs text-white/90 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {venture.website && venture.website !== "#" && (
                        <a 
                          href={venture.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-300"
                        >
                          Visit Website <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
          
          {/* Mobile: Vertical stack with click to expand */}
          <div className="flex md:hidden flex-col gap-4">
            {allVentures.map((venture, index) => {
              const isActive = activeIndex === index;
              const bgImage = ventureImages[venture.name] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80';
              const gradient = ventureGradients[venture.name] || 'from-gray-900/85 to-black/85';
              
              return (
                <motion.div
                  key={venture.id}
                  className="relative rounded-xl overflow-hidden cursor-pointer"
                  initial={false}
                  animate={{
                    height: isActive ? 400 : 140,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  onClick={() => handleClick(index)}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${gradient}`}
                    style={{ opacity: 0.9 }}
                  />
                  
                                    
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-5">
                    <i className={`fas ${venture.icon} text-2xl text-white/90 mb-2`}></i>
                    <h3 className="text-base font-bold text-white mb-1">
                      {venture.name}
                    </h3>
                    
                    {/* Expanded Content */}
                    <div 
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isActive ? 250 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="text-cyan-300 text-xs font-semibold mb-1">{venture.role}</p>
                      <p className="text-white/60 text-xs mb-2">{venture.period}</p>
                      <p className="text-white/80 text-sm mb-3">{venture.description}</p>
                      
                      {venture.achievement && (
                        <div className="mb-2 p-2 bg-white/10 rounded">
                          <p className="text-cyan-300 text-xs">{venture.achievement}</p>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {venture.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-0.5 bg-white/20 rounded text-xs text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {venture.website && venture.website !== "#" && (
                        <a 
                          href={venture.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-cyan-300 text-xs hover:underline"
                        >
                          Visit Website <i className="fas fa-external-link-alt ml-1"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ventures;
