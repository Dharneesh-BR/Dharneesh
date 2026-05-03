import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <section id="contact" className="py-16 px-6" style={{ backgroundColor: '#000047' }} ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-16">
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
              Whether you’re building a brand, evolving as a founder, or exploring deeper human transformation, Dharneesh is always open to engaging with ambitious individuals and forward-thinking ideas.
            </motion.p>
          </div>

          {/* Two Grid Layout */}
          <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Content */}
            <motion.div 
              className="space-y-8 lg:col-span-3"
              variants={itemVariants}
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
                <p className="text-gray-300 text-lg mb-8">
                  I'm always excited to connect with passionate individuals, innovative startups, and forward-thinking organizations. Let's discuss how we can create value together.
                </p>
              </div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 pt-4 items-center justify-center"
                variants={itemVariants}
              >
                <a 
                  href="mailto:contact@dharneesh.com" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center shadow-lg"
                >
                  <i className="fas fa-envelope mr-2"></i> Send Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/dharneesh/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center border border-white/20"
                >
                  <i className="fab fa-linkedin mr-2"></i> LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/dharneesh.br?igsh=cjFlbm9rNnhremVi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center border border-white/20"
                >
                  <i className="fab fa-instagram mr-2"></i> Instagram
                </a>
                <a 
                  href="https://www.facebook.com/share/17b6pqhyr6/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center border border-white/20"
                >
                  <i className="fab fa-facebook mr-2"></i> Facebook
                </a>
              </motion.div>

              {/* Additional Info */}
              <motion.div 
                className="pt-8 border-t border-white/20"
                variants={itemVariants}
              >
                
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              className="relative lg:col-span-2 flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.img
                src="/Contact.png"
                alt="Dharneesh B R - Contact"
                className="w-3/4 h-auto object-cover rounded-full mx-auto shadow-2xl shadow-cyan-500/50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
