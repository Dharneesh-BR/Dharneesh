import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How I'll get link to attend program?",
      answer: "You will get an email right after you register. Do check spam and promotions tab just in case it landed there."
    },
    {
      question: "Will I get recording of Program?",
      answer: "This is online workshop. So no recording will be provided."
    },
    {
      question: "Who is this seminar ideal for?",
      answer: "Entrepreneurs and entrepreneurs only. If you have an existing business with products/services or a team and don't know what is your next step in business then this is for you."
    },
    {
      question: "Can I attend this program along with my business partner(s)?",
      answer: "Yes you can, it is preferred you attend with your partners so that you can learn together."
    },
    {
      question: "Is it a LIVE webinar?",
      answer: "This is a LIVE streamed webinar which starts at 9am and ends at 1pm. Rajiv will not be live for this session."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 rounded-2xl bg-gradient-to-r from-[#3533cd] to-[#00ffff]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-white max-w-2xl mx-auto">
            Got questions? We've got answers to help you make the most of your MAGNA experience
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                boxShadow: '0 0 25px rgba(0, 255, 255, 0.2), 0 15px 35px rgba(53, 51, 205, 0.15)',
                y: -2
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <motion.i
                  className={`fas fa-chevron-down text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
