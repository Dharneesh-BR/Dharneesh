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
      title: "MAGNA Business Program",
      description: "Join our comprehensive business transformation program designed to scale operations without burning out. Learn the strategies to build a profitable & scalable business.",
      image: "/1.png",
      buttonText: "Show Me How To Scale",
      url: "/programs",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Longevity Blueprint ",
      description: "The Longevity Blueprint creates long-term systems for vitality, peak performance, and disease prevention - supporting a stronger, sharper, and more resilient life at every stage.",
      image: "/2.png",
      buttonText: "I Am Ready for Peak Performance",
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
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
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
                    background: way.title.includes("MAGNA") 
                      ? 'linear-gradient(90deg, #3533cd 0%, #00ffff 100%)'
                      : 'linear-gradient(90deg, #9B26B6 0%, #d44fe6 100%)',
                    height: '8px' 
                  }}
                ></div>
                
                {/* Image Section */}
                <div className="w-full h-72 overflow-hidden">
                  <img 
                    src={way.image} 
                    alt={way.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-4">
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
                  {way.title.includes("MAGNA") ? (
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
