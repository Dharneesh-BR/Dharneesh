import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Add = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfaf9] to-[#f8f9fa]">
      {/* Header Section */}
      <motion.section 
        className="py-16 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-[#3533cd] to-[#00ffff] bg-clip-text text-transparent">
              MAGNA Business Workshop
            </h1>
            <div className="relative mx-auto h-1.5 w-32 md:w-40 lg:w-48 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" />
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Join and Become Like The Top 1% Successful Business Owners & Entrepreneurs Before It's Too Late
            </p>
          </motion.div>

          {/* Coach Info */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              I will be your coach for 4 hours
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              Dharneesh BR
            </h2>
            <p className="text-lg text-gray-600">
              India's MSME Business Coach | Trained over 7,88,175 Business Owners in Last 6 Years
            </p>
          </motion.div>

          {/* Rating */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3533cd]/10 to-[#00ffff]/10 rounded-full border border-[#3533cd]/20">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <span className="font-semibold text-blue-900">4.96</span>
              <span className="text-gray-600">(70,000+ People Rated My Programs)</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What Happens Section */}
      <motion.section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
              variants={itemVariants}
            >
              What Happens When You Join?
            </motion.h2>
            
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                  <i className="fas fa-unlock"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    You Unlock Secrets To Create Time & Wealth In Business
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    You Learn Strong Foundational Activities To Win In Your Business
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Your Business Growth With Increased Revenue & Cashflow
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                  <i className="fas fa-trophy"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    More Profit, More Freedom, More Scale Is Guaranteed If You Follow The Exact Steps Covered In The Workshop
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Workshop Details */}
      <motion.section className="py-16 px-6 bg-gradient-to-br from-[#3533cd]/5 to-[#00ffff]/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900"
              variants={itemVariants}
            >
              To Unlock Bonuses Worth ₹6,487
            </motion.h2>
            
            <motion.div className="grid md:grid-cols-2 gap-8 mt-12" variants={itemVariants}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#3533cd]/20">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Who This Workshop Will Help The Best?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                    <span className="text-gray-700">MSME Business Owners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                    <span className="text-gray-700">Entrepreneurs looking to scale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                    <span className="text-gray-700">Founders stuck in daily operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                    <span className="text-gray-700">Business owners seeking growth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#3533cd]/20">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">What You Will Learn In 4 Hrs?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span className="text-gray-700">How to build a growth business rather than a survival business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span className="text-gray-700">Characteristics of growth and survival businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span className="text-gray-700">3 Reasons why business owners get stuck in survival</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span className="text-gray-700">Focus areas to build a growth business</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timer and Pricing */}
      <motion.section className="py-16 px-6 bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              variants={itemVariants}
            >
              Bonuses If You Register Before Timer Hits 0
            </motion.h2>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
              variants={itemVariants}
            >
              <div className="text-6xl md:text-8xl font-bold mb-4 font-mono">
                {formatTime(timeLeft)}
              </div>
              <p className="text-xl">Offer Ends In</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Today's Price: ₹99/-</h3>
              <motion.button
                className="inline-flex items-center px-12 py-6 bg-white text-[#3533cd] font-bold text-xl rounded-full hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <span>Register Now at ₹99/- Only</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
              </motion.button>
              <p className="mt-4 text-lg opacity-90">
                Reserve your seat before the timer ends to unlock bonuses worth ₹6,487/-
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
              variants={itemVariants}
            >
              I'm On A MISSION To Help 1 Million Business Owners Achieve Profit & Growth
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">7.8L+</div>
                <p className="text-gray-600">Business Owners Trained</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">2.3M+</div>
                <p className="text-gray-600">Social Media Reach</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">600+</div>
                <p className="text-gray-600">Workshops Conducted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">4.96</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Guarantee */}
      <motion.section className="py-16 px-6 bg-gradient-to-br from-[#fbfaf9] to-[#f8f9fa]">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 border border-[#3533cd]/20"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Our Guarantee</h2>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center">
                  <i className="fas fa-shield-alt text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">A Promise</h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  If you don't feel this workshop provides immense value and actionable insights to transform your business, 
                  we'll refund your investment. No questions asked.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.h2>
            
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Who should attend this workshop?</h3>
                <p className="text-gray-700">MSME business owners, entrepreneurs, and founders looking to scale their business and break free from daily operations.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">What will I learn in 4 hours?</h3>
                <p className="text-gray-700">You'll learn proven strategies to build a growth business, characteristics of successful businesses, and actionable steps to increase revenue and profit.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Is the price really just ₹99?</h3>
                <p className="text-gray-700">Yes! Today's special price is ₹99/- only. Register before the timer ends to secure this special offer and bonuses worth ₹6,487/-.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">What if I'm not satisfied?</h3>
                <p className="text-gray-700">We offer a 100% satisfaction guarantee. If you don't find value in the workshop, we'll refund your investment.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="text-gray-400">© 2026 Dharneesh BR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Add;
