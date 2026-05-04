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
              Business Growth Masterclass
            </h1>
            <div className="relative mx-auto h-1.5 w-32 md:w-40 lg:w-48 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" />
          </motion.div>

          {/* Workshop Details */}
          <motion.div 
            className="text-center mb-4"
            variants={itemVariants}
          >
            <div className="inline-block bg-gradient-to-r from-[#3533cd] to-[#00ffff] rounded-lg p-6 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                4 hour Online Workshop
              </h3>
              <p className="text-xl md:text-2xl text-white mb-2 font-semibold">
                ON 6th May 2026
              </p>
              <p className="text-lg text-white/90">
                (9:00 AM - 1:00 PM IST)
              </p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <div className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto p-4 border-2 border-[#3533cd] rounded-lg">
              Join and Become Like The Top 1% Successful<br/> Business Owners & Entrepreneurs <br/> Before It's Too Late
            </div>
          </motion.div>

          {/* Trainer and Benefits Grid */}
          <motion.div 
            className="bg-blue-900 -mx-6 px-6 py-8 mb-12"
            variants={itemVariants}
          >
            <div className="container mx-auto max-w-4xl">
              <div className="grid md:grid-cols-2 gap-0 relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
            {/* Left: Trainer Information */}
            <motion.div 
              className="pr-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <img 
                  src="/Edited-1.png" 
                  alt="Dharneesh BR" 
                  className="w-24 h-24 mx-auto mb-8 shadow-lg rounded-lg object-contain"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Dharneesh BR
                </h3>
                <p className="text-lg text-gray-200 mb-4">
                  India's MSME Business Coach
                </p>
                <p className="text-gray-300 mb-4">
                  Trained over 7,88,175 Business Owners in Last 6 Years
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="font-semibold text-white">4.96</span>
                </div>
              </div>
            </motion.div>

            {/* Right: What Happens When You Join */}
            <motion.div 
              className="pl-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What Happens When You Join?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-unlock"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">
                      You Unlock Secrets To Create Time & Wealth In Business
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">
                      You Learn Strong Foundational Activities To Win In Your Business
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">
                      Your Business Growth With Increased Revenue & Cashflow
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">
                      More Profit, More Freedom, More Scale Is Guaranteed If You Follow The Exact Steps Covered In The Workshop
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div className="text-center mt-8" variants={itemVariants}>
              <p className="text-lg text-gray-600 mb-4">Register in next</p>
              <div className="bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white rounded-2xl p-8 mb-6 max-w-md mx-auto">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-lg">Minutes Seconds</p>
              </div>
              <p className="text-lg text-gray-700 mb-6">To Unlock Bonuses Worth Rs 6,487</p>
              <motion.button
                className="bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white font-bold text-xl px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                REGISTER NOW AT ₹99/- ONLY
              </motion.button>
            </motion.div>
      </motion.section>


      {/* Workshop Details */}
      <motion.section className="px-6 bg-bg-white/20">
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
            
            <div className="flex justify-center mt-12">
              <motion.img 
                src="/Program.png" 
                alt="Workshop Program"
                className="w-full max-w-sm"
                variants={itemVariants}
              />
            </div>
        </div>
      </motion.section>

      {/* What Will Change In Your Business Section */}
      <motion.section className="py-16 px-6 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              variants={itemVariants}
            >
              What Will Change In Your Business?
            </motion.h2>

            <div className="relative flex items-center justify-center mb-12" style={{ minHeight: '400px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center shadow-lg z-10">
                <p className="text-center font-bold text-lg px-4 text-white">Business Breakthrough</p>
              </div>

              {/* Top: Right Psychology */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 md:w-48 p-3 md:p-4 border-2 border-dashed border-[#00ffff] rounded-lg flex items-center justify-center bg-gray-900">
                <p className="text-center text-xs md:text-sm text-white">Right Psychology Of Running The Business</p>
              </div>
              
              {/* Bottom Right: Right Strategies */}
              <div className="absolute bottom-16 md:bottom-20 right-4 md:right-8 w-40 md:w-48 p-3 md:p-4 border-2 border-dashed border-[#00ffff] rounded-lg flex items-center justify-center bg-gray-900">
                <p className="text-center text-xs md:text-sm text-white">Right Strategies</p>
              </div>
              
              {/* Bottom Left: Right Systems */}
              <div className="absolute bottom-16 md:bottom-20 left-4 md:left-8 w-40 md:w-48 p-3 md:p-4 border-2 border-dashed border-[#00ffff] rounded-lg flex items-center justify-center bg-gray-900">
                <p className="text-center text-xs md:text-sm text-white">Right Systems</p>
              </div>
              
                                        </div>

            <motion.button
              className="bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white font-bold text-xl px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              REGISTER NOW AT ₹99/- ONLY
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Who This Workshop Is NOT For Section */}
      <motion.section className="py-20 px-6 bg-white-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900"
              variants={itemVariants}
            >
              Who This Workshop Will Help The Best?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Circular Graphic */}
              <motion.div className="relative" variants={itemVariants}>
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                  {/* Circular Segmented Shape */}
                  <svg viewBox="0 0 320 320" className="w-full h-full">
                    {/* Segment 1 */}
                    <path d="M 160 40 A 120 120 0 0 1 280 160" 
                          fill="none" 
                          stroke="#3533cd" 
                          strokeWidth="8" 
                          strokeLinecap="round"/>
                    {/* Segment 2 */}
                    <path d="M 280 160 A 120 120 0 0 1 160 280" 
                          fill="none" 
                          stroke="#00ffff" 
                          strokeWidth="8" 
                          strokeLinecap="round"/>
                    {/* Segment 3 */}
                    <path d="M 160 280 A 120 120 0 0 1 40 160" 
                          fill="none" 
                          stroke="#3533cd" 
                          strokeWidth="8" 
                          strokeLinecap="round"/>
                    {/* Segment 4 */}
                    <path d="M 40 160 A 120 120 0 0 1 160 40" 
                          fill="none" 
                          stroke="#00ffff" 
                          strokeWidth="8" 
                          strokeLinecap="round"/>
                    
                    {/* Center Text */}
                    <text x="160" y="160" 
                          textAnchor="middle" 
                          dominantBaseline="middle" 
                          className="fill-blue-900 font-bold text-xl uppercase"
                          style={{ letterSpacing: '2px' }}>
                      DON'T JOIN IF
                    </text>
                  </svg>
                </div>
              </motion.div>

              {/* Right: Bullet Points */}
              <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
                {/* Bullet Point 1 */}
                <div className="flex items-start gap-4 relative">
                  {/* Connecting Line from Circle */}
                  <div className="absolute top-1/2 left-0 w-20 md:w-32 h-px bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translateX(-100%)' }}></div>
                  {/* Dot at connection point */}
                  <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translate(-50%, -50%)' }}></div>
                  <div className="w-4"></div>
                  <p className="text-lg md:text-xl font-medium text-blue-900">You Are Not A Business Owner</p>
                </div>

                {/* Bullet Point 2 */}
                <div className="flex items-start gap-4 relative">
                  {/* Connecting Line from Circle */}
                  <div className="absolute top-1/2 left-0 w-20 md:w-32 h-px bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translateX(-100%)' }}></div>
                  {/* Dot at connection point */}
                  <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translate(-50%, -50%)' }}></div>
                  <div className="w-4"></div>
                  <p className="text-lg md:text-xl font-medium text-blue-900">You Are Not An Action Taker</p>
                </div>

                {/* Bullet Point 3 */}
                <div className="flex items-start gap-4 relative">
                  {/* Connecting Line from Circle */}
                  <div className="absolute top-1/2 left-0 w-20 md:w-32 h-px bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translateX(-100%)' }}></div>
                  {/* Dot at connection point */}
                  <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translate(-50%, -50%)' }}></div>
                  <div className="w-4"></div>
                  <p className="text-lg md:text-xl font-medium text-blue-900">You Are Not Serious About Your Business</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timer and Pricing - Main CTA Section */}
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
                <motion.img 
                  src="/Guarntee.webp" 
                  alt="Guarantee"
                  className="w-32 h-32 mx-auto mb-6"
                  variants={itemVariants}
                />
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
