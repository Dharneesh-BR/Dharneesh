import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactOptions } from '../../data/portfolioData';

const Contact = () => {
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-16 px-6 bg-dark-900" ref={ref}>
      <div className="container mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Connect With Dharneesh
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Whether you're looking to invest, collaborate, or seek mentorship, Dharneesh is always open to connecting with passionate individuals and innovative ideas.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <a 
              href="mailto:contact@dharneesh.com" 
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              <i className="fas fa-envelope mr-2"></i> Send Email
            </a>
            <a 
              href="#" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
            <a 
              href="#" 
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center"
            >
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactOptions.map((option) => (
              <motion.div
                key={option.id}
                className="text-center"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 ${option.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${option.icon} ${option.iconColor} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200">{option.title}</h3>
                <p className="text-gray-400">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
