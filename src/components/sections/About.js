import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animations, useScrollAnimation } from '../../utils/animations';

const About = () => {
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

  const statsData = [
    {
      number: "22+",
      label: "Years Experience",
      icon: "fa-calendar-alt",
      color: "text-premium-500"
    },
    {
      number: "600+",
      label: "Brands Impacted",
      icon: "fa-chart-line",
      color: "text-green-500"
    },
    {
      number: "8",
      label: "Countries",
      icon: "fa-globe",
      color: "text-blue-500"
    },
    {
      number: "150+",
      label: "Companies Scaled",
      icon: "fa-rocket",
      color: "text-purple-500"
    }
  ];

  const aboutContent = {
  title: "Growth Begins in the Mind. Scale Begins in Consciousness.",
  introduction: "Hi, I'm Dharneesh.",
  mainContent: [
    "I work at the intersection of <span style='color: #000000; font-weight: 700;'>Brand Strategy</span>, <span style='color: #000000; font-weight: 700;'>Founder Coaching</span>, <span style='color: #000000; font-weight: 700;'>Peak Performance</span> and <span style='color: #000000; font-weight: 700;'>Longevity Optimization</span>.",
    "With over 22+ years of building systems, scaling products and creating value for businesses\u2014from working with top MNCs like Samsung, Philips, Unilever and GlaxoSmithKline, to founding and growing ventures like EAZY.AI, Recibo.AI, Mind Magna and Eterno serving 600+ brands across 8 countries\u2014I've come to believe growth is rarely limited by strategy alone. More often, it is constrained by the founder and the systems behind the brand.",
    "I believe better businesses are built at the intersection of clear thinking, aligned energy and intelligent systems.",
    "My work sits where conscious brand building, AI-powered growth, founder performance and human potential meet\u2014because lasting scale comes from optimizing both the business and the builder.",
    "<span style='color: #000000; font-weight: 700;'>Iconic brands are built when scalable systems, conscious leadership and human optimization come together.</span>"
  ]
};

  return (
    <section id="about" className="py-16 px-6" style={{ backgroundColor: '#fbfaf9' }} ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-heading"
            variants={itemVariants}
          >
            About Dharneesh
          </motion.h2>
          
          {/* Animated Stats Section */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={itemVariants}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 text-center relative z-10 rounded-2xl shadow-xl border border-purple-200 backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
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
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15), 0 25px 80px rgba(102, 126, 234, 0.1)',
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <i className={`fas ${stat.icon} text-purple-600 text-2xl drop-shadow-lg`}></i>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-1 drop-shadow-md"
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
                  className="text-gray-800 text-sm font-medium drop-shadow-sm"
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
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-heading"
              variants={itemVariants}
            >
              {aboutContent.title}
            </motion.h3>
            
            <motion.p 
              className="text-2xl text-subtext mb-8 text-center font-medium"
              variants={itemVariants}
            >
              {aboutContent.introduction}
            </motion.p>
            
            <div className="space-y-6">
              {aboutContent.mainContent.map((paragraph, index) => (
                <motion.p 
                  key={`content-${index}`}
                  className="text-lg text-subtext leading-relaxed"
                  variants={itemVariants}
                  custom={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
