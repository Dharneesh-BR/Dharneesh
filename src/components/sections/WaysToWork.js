import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const WaysToWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.8,
      ease: "easeOut"
    },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const workWays = [
    {
      id: 1,
      title: "Business Magna Program",
      description: "Join our comprehensive business transformation program designed for MSME founders who want to scale their operations without burning out. Build systems, create predictable growth, and achieve sustainable success.",
      image: "/banner.png",
      buttonText: "Explore Business Magna",
      url: "/programs",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Eterno Partnership",
      description: "Partner with Eterno to leverage cutting-edge health optimization and performance enhancement solutions. Perfect for businesses and individuals looking to optimize their physical and mental well-being.",
      image: "/eterno-partnership.jpg",
      buttonText: "Discover Eterno",
      url: "https://eterno.fit/",
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section id="ways-to-work" className="py-20 px-6" style={{ backgroundColor: '#000047' }} ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ways to Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore different partnership opportunities designed to help you achieve your goals and scale your impact
            </p>
          </motion.div>

          {/* Two Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {workWays.map((way, index) => (
              <motion.div
                key={way.id}
                className="bg-white rounded-2xl shadow-xl shadow-cyan-500/60 overflow-hidden border border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/80 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Strip */}
                <div 
                  style={{ 
                    background: way.title.includes("Magna") 
                      ? 'linear-gradient(90deg, #3533cd 0%, #00ffff 100%)'
                      : 'linear-gradient(90deg, #9B26B6 0%, #d44fe6 100%)',
                    height: '8px' 
                  }}
                ></div>
                
                {/* Content Section */}
                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-4"
                    variants={itemVariants}
                  >
                    {way.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed mb-6"
                    variants={itemVariants}
                  >
                    {way.description}
                  </motion.p>

                  {/* Button */}
                  {way.title.includes("Magna") ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <Link
                        to={way.url}
                        className="inline-flex items-center px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg min-w-[200px] justify-center"
                        style={{
                          background: 'linear-gradient(90deg, #3533cd 0%, #00ffff 100%)'
                        }}
                      >
                        <span>{way.buttonText}</span>
                        <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <a
                        href={way.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg min-w-[200px] justify-center"
                        style={{
                          background: 'linear-gradient(90deg, #9B26B6 0%, #d44fe6 100%)'
                        }}
                      >
                        <span>{way.buttonText}</span>
                        <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaysToWork;
