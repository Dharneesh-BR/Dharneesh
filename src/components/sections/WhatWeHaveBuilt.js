import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations, useScrollAnimation } from '../../utils/animations';

const WhatWeHaveBuilt = () => {
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Mindset Transformation",
      subtitle: "Build Founder Before Business",
      description: "Every business reflects the thinking of its founder.\nWe work on upgrading decision-making, clarity, and leadership mindset so growth is not driven by pressure, but by precision. \n\nWe restructure how founders think, decide, and lead.",
      icon: "fa-brain"
    },
    {
      title: "System Architecture Design",
      subtitle: "From Dependency to Scalable Systems",
      description: "We help you design your business to run on systems, not individuals. \nFrom SOPs to workflows to AI-enabled structures, every layer is built to reduce chaos and increase consistency.\n\nThe goal is simple: A business that operates with or without the founder.",
      icon: "fa-cogs"
    },
    {
      title: "Growth & Control Engine",
      subtitle: "Predictable Growth with Measurable Control",
      description: "Growth is not guesswork; it is engineered.\n We build structured growth engines backed by clear numbers, conversion systems, and performance tracking. \n\nYou don't just grow faster. \nYou grow with visibility, control, and sustainability.",
      icon: "fa-chart-line"
    }
  ];

  return (
    <section id="what-we-have-built" className="py-16 px-6" style={{ backgroundColor: '#fbfaf9' }} ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Title */}
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            variants={itemVariants}
          >
            What We Have Built
          </motion.h2>

          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            variants={itemVariants}
          >
            Scale-up Ecosystem for MSMEs
          </motion.h2>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className=" p-8 rounded-2xl shadow-lg border border-gray-200"
                style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)', color: '#000000', border: '1px solid #00FFFF' }}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ background: '#ffffff' }}
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <i className={`fas ${feature.icon} text-2xl`} style={{ color: '#000047' }}></i>
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-xl font-bold text-white mb-2 text-center"
                  variants={itemVariants}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.h4
                  className="text-lg font-semibold text-white mb-4 text-center opacity-90"
                  variants={itemVariants}
                >
                  {feature.subtitle}
                </motion.h4>
                
                <motion.p
                  className="text-gray-900 leading-relaxed whitespace-pre-line font-semibold"
                  variants={itemVariants}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeHaveBuilt;
