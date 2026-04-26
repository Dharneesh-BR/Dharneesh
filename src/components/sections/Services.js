import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  const services = [
    {
      number: "01",
      title: "Conscious Brand Building",
      subtitle: "Position your brand for relevance, trust and growth.",
      description: "Build a brand that resonates with your audience and stands the test of time. We focus on strategic positioning, authentic storytelling, and sustainable growth frameworks.",
      items: [
        "Brand Strategy",
        "Positioning",
        "Growth Architecture",
        "Consumer Brand Building",
        "Founder-Led Brand Building"
      ],
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      bgGradient: "from-purple-900/80 to-blue-900/80"
    },
    {
      number: "02",
      title: "Business Coaching",
      subtitle: "Move from hustle to scale with clarity.",
      description: "Transform your business approach with proven frameworks and personalized coaching. Build systems that scale while maintaining your vision and values.",
      items: [
        "Growth frameworks",
        "Strategic clarity",
        "Founder decision coaching",
        "Scale systems",
        "Business acceleration"
      ],
      bgImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      bgGradient: "from-emerald-900/80 to-teal-900/80"
    },
    {
      number: "03",
      title: "Peak Performance",
      subtitle: "Perform at your highest level consistently.",
      description: "Unlock your full potential with science-backed performance optimization. Develop routines and systems that sustain elite-level output.",
      items: [
        "Energy optimization",
        "Focus enhancement",
        "Cognitive performance",
        "High-performance routines",
        "Personal operating systems"
      ],
      bgImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      bgGradient: "from-orange-900/80 to-red-900/80"
    },
    {
      number: "04",
      title: "Longevity & Transformation",
      subtitle: "Upgrade how long and how well you live.",
      description: "Invest in your most valuable asset - yourself. Discover cutting-edge approaches to extend your healthspan and maximize human potential.",
      items: [
        "Longevity principles",
        "Metabolic optimization",
        "Biohacking fundamentals",
        "Performance health protocols",
        "Human potential coaching"
      ],
      bgImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      bgGradient: "from-indigo-900/80 to-purple-900/80"
    }
  ];

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
    <section id="services" className="py-16 px-4 md:px-6 bg-[#fbfaf9]" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-heading">
            What I Help You Achieve
          </h2>
          
          {/* Desktop: Horizontal expanding cards */}
          <div 
            className="hidden md:flex flex-row gap-3 h-[500px] lg:h-[550px]"
            onMouseLeave={handleMouseLeave}
          >
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              const isInactive = activeIndex !== null && activeIndex !== index;
              
              return (
                <motion.div
                  key={service.number}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  style={{
                    flex: isActive ? 3 : isInactive ? 0.8 : 1,
                  }}
                  animate={{
                    flex: isActive ? 3 : isInactive ? 0.8 : 1,
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
                      backgroundImage: `url(${service.bgImage})`,
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient} transition-opacity duration-700`}
                    style={{
                      opacity: isActive ? 0.9 : isInactive ? 0.95 : 0.85,
                    }}
                  />
                  
                  {/* Dark overlay for inactive cards */}
                  <div 
                    className="absolute inset-0 bg-black transition-opacity duration-700"
                    style={{
                      opacity: isInactive ? 0.4 : 0,
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                    {/* Number */}
                    <span 
                      className="text-sm font-medium text-white/70 mb-2 transition-all duration-500"
                      style={{
                        transform: isActive ? 'translateY(0)' : 'translateY(0)',
                        opacity: 1,
                      }}
                    >
                      {service.number}
                    </span>
                    
                    {/* Title */}
                    <h3 
                      className="text-xl lg:text-2xl font-bold text-white mb-2 transition-all duration-500"
                      style={{
                        transform: isActive ? 'translateY(0)' : 'translateY(0)',
                      }}
                    >
                      {service.title}
                    </h3>
                    
                    {/* Subtitle - always visible */}
                    <p 
                      className="text-sm text-white/80 transition-all duration-500"
                      style={{
                        opacity: isActive ? 0 : 1,
                        maxHeight: isActive ? 0 : '60px',
                        overflow: 'hidden',
                      }}
                    >
                      {service.subtitle}
                    </p>
                    
                    {/* Expanded Content */}
                    <div 
                      className="overflow-hidden transition-all duration-700 ease-in-out"
                      style={{
                        maxHeight: isActive ? '300px' : 0,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                      }}
                    >
                      <p className="text-white/90 text-sm lg:text-base mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {service.items.slice(0, 3).map((item, itemIndex) => (
                          <li 
                            key={itemIndex} 
                            className="flex items-center text-white/80 text-sm"
                            style={{
                              transitionDelay: `${itemIndex * 100}ms`,
                            }}
                          >
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-300">
                        Learn More
                      </button>
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
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={service.number}
                  className="relative rounded-xl overflow-hidden cursor-pointer"
                  initial={false}
                  animate={{
                    height: isActive ? 350 : 120,
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
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient}`}
                    style={{ opacity: 0.9 }}
                  />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-5">
                    <span className="text-xs font-medium text-white/70 mb-1">
                      {service.number}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    
                    {/* Expanded Content */}
                    <div 
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isActive ? 200 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <p className="text-white/80 text-sm mb-3">
                        {service.subtitle}
                      </p>
                      <ul className="space-y-1.5">
                        {service.items.slice(0, 3).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-white/70 text-xs">
                            <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
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

export default Services;
