import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { recommendations } from '../../data/profileData';

const Testimonials = () => {
  const [ref, inView] = useInView({
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index}
        className={`fas fa-star ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      ></i>
    ));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <section id="testimonials" className="py-16 px-6 bg-dark-900">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title text-4xl font-bold text-center mb-4"
            variants={itemVariants}
          >
            LinkedIn Recommendations
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            What colleagues and leaders say about working with Dharneesh
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recommendations.map((recommendation) => {
              const [testimonialRef, testimonialInView] = useInView({
                triggerOnce: false,
                threshold: 0.1,
                rootMargin: "-30px 0px"
              });

              return (
              <motion.div
                key={recommendation.id}
                ref={testimonialRef}
                className="testimonial-card p-6 rounded-xl border border-dark-700"
                variants={itemVariants}
                animate={testimonialInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  {renderStars(recommendation.rating)}
                  <span className="ml-2 text-xs text-gray-400">{formatDate(recommendation.date)}</span>
                </div>
                <p className="text-gray-200 mb-4 italic leading-relaxed">
                  "{recommendation.content}"
                </p>
                <div className="border-t border-dark-600 pt-4">
                  <p className="font-semibold text-gray-300">{recommendation.author}</p>
                  <p className="text-sm text-gray-400 mb-1">{recommendation.role}</p>
                  <p className="text-xs text-premium-400">{recommendation.relationship}</p>
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

export default Testimonials;
