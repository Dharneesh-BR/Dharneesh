import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

const MAGNA_HEX_BLUE = '#3533cd';
const MAGNA_HEX_ORANGE = '#f97316';

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const handleMouseEnter = (index) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);
  const handleClick = (index) => setActiveIndex(activeIndex === index ? null : index);

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

  const magnaFramework = [
    {
      number: "M",
      title: "Mindset Alignment",
      subtitle: "Before strategy, fix the lens of thinking.",
      description: "Shift from operator → builder → leader. Remove scarcity-based decision making. Align founder identity with long-term vision. Build belief systems for scale, not survival.",
      items: [
        "Shift from operator → builder → leader",
        "Remove scarcity-based decision making",
        "Align founder identity with long-term vision",
        "Build belief systems for scale, not survival"
      ],
      keyQuestion: " Am I building from pressure or from purpose?",
      bgGradient: "from-blue-900/80 to-purple-900/80"
    },
    {
      number: "A",
      title: "Architecture of Systems",
      subtitle: "Business stops depending on you when systems start thinking.",
      description: "Create SOPs for every repeatable process. Map sales, marketing, and delivery clearly. Build hiring systems over hero employees. Create dashboards for visibility where numbers trump assumptions.",
      items: [
        "SOPs for every repeatable process",
        "Sales, marketing, delivery mapped clearly",
        "Hiring system > hero employees",
        "Dashboards for visibility (numbers > assumptions)"
      ],
      keyQuestion: " If I disappear for 30 days, what breaks first?",
      bgGradient: "from-blue-900/80 to-purple-900/80"
    },
    {
      number: "G",
      title: "Growth Engine Design",
      subtitle: "Growth is engineered, not hoped for.",
      description: "Build predictable lead generation systems. Optimize conversion funnels. Expand customer lifetime value. Create referral and retention loops.",
      items: [
        "Predictable lead generation system",
        "Conversion optimization funnels",
        "Customer lifetime value expansion",
        "Referral + retention loops"
      ],
      keyQuestion: " Where exactly is my growth leaking?",
      bgGradient: "from-blue-900/80 to-purple-900/80"
    },
    {
      number: "N",
      title: "Numbers & Navigation",
      subtitle: "What gets measured gets multiplied.",
      description: "Track daily/weekly KPIs. Maintain cashflow visibility beyond just revenue. Gain unit economics clarity. Create founder dashboard for informed decisions.",
      items: [
        "Daily/weekly KPI tracking",
        "Cashflow visibility (not just revenue)",
        "Unit economics clarity",
        "Founder dashboard for decisions"
      ],
      keyQuestion: " Am I running my business or guessing it?",
      bgGradient: "from-blue-900/80 to-purple-900/80"
    },
    {
      number: "A",
      title: "Alignment of Energy & Execution",
      subtitle: "Sustainable growth needs founder longevity.",
      description: "Focus on energy management over time management. Align health, clarity, and decision quality. Create team alignment with vision and values. Reduce chaos-driven execution.",
      items: [
        "Energy management > time management",
        "Health, clarity, decision quality alignment",
        "Team alignment with vision & values",
        "Reduce chaos-driven execution"
      ],
      keyQuestion: " Is my business growing faster than my capacity to sustain it?",
      bgGradient: "from-blue-900/80 to-purple-900/80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfaf9]">
      <Navigation />
      
      <section className="pt-24 pb-12 px-6" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <div className="text-center mb-4">
                <div className="relative inline-block">
                  <div className="absolute -inset-x-6 -inset-y-3 bg-gradient-to-r from-[#3533cd]/10 to-[#00ffff]/10 blur-2xl" />
                  <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-[#000080] via-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent">
                    JOIN THE BUSINESS MAGNA PROGRAM
                  </h1>
                  <div className="relative mx-auto h-1.5 w-32 md:w-40 lg:w-48 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" />
                </div>

                

              </div>

              <div className="grid lg:grid-cols-5 gap-6 items-center">
                {/* Left side - Image */}
                <motion.div 
                  className="relative lg:col-span-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    {/* Background decoration */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#3533cd]/10 to-[#00ffff]/10 rounded-3xl opacity-60" />
                    
                    {/* Main image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-xs mx-auto">
                      <img 
                        src="/banner.png" 
                        alt="Business Magna Program" 
                        className="w-full h-auto object-cover"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3533cd]/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>

                {/* Right side - Text content */}
                <div className="text-center lg:text-left lg:col-span-3">
                  <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900 pt-4">
                      Build a Business That Scales Without Burning You Out
                    </h2>
                    
                    <div className="space-y-3">
                      <p className="text-base text-gray-700">Are you still:</p>
                      <ul className="space-y-3 text-base text-subtext">
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Handling sales, operations, and decisions yourself?</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Growing—but feeling stuck, stressed, or unclear?</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Working harder every year but not building real freedom?</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-base text-gray-700 mb-2">
                        You don't need more hustle. You need a structured business evolution system.
                      </p>
                    </div>

                    <div className="text-center mb-6 max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-900 pb-4">
                      A high-impact business transformation program designed for MSME founders:
                    </h2>                  
                    <div className="text-left max-w-3xl mx-auto">
                    <ul className="space-y-3 text-base text-gray-700">
                      <li className="flex items-start gap-4">
                        <span className="mt-1 w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <i className="fas fa-check text-sm"></i>
                        </span>
                        <span>Build system-driven businesses</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="mt-1 w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <i className="fas fa-check text-sm"></i>
                        </span>
                        <span>Create predictable growth engines</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="mt-1 w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <i className="fas fa-check text-sm"></i>
                        </span>
                        <span>Gain clarity, control, and sustainability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            </motion.div>

            
            
            {/* MAGNA Framework Section — one row per pillar (circle + copy, vertically centered) */}
            <section
              className="py-16 md:py-20 mb-20"
              style={{
                backgroundColor: '#000047',
                width: '100vw',
                marginLeft: 'calc(50% - 50vw)',
                marginRight: 'calc(50% - 50vw)'
              }}
            >
              <motion.div
                variants={itemVariants}
              >
              <div className="px-6 max-w-5xl mx-auto">
                <div className="text-center mb-14 md:mb-16">
                  <h2 className="text-4xl font-bold mb-4 text-white">MAGNA Framework</h2>
                  <p className="text-xl font-semibold mb-8 text-white/90 max-w-3xl mx-auto">
                    A Conscious Growth System for MSME Founders & Business Scaling
                  </p>
                  <p className="text-lg italic text-cyan-400 max-w-4xl mx-auto">
                    &ldquo;Build businesses that scale consciously — where growth, systems, and founder longevity evolve together.&rdquo;
                  </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-12">
                  {magnaFramework.map((framework, index) => {
                    const isBlue = index % 2 === 0;
                    const fill = isBlue ? MAGNA_HEX_BLUE : MAGNA_HEX_ORANGE;
                    const titleColor = fill;
                    return (
                      <motion.div
                        key={`${framework.number}-${index}-row`}
                        className="grid grid-cols-[76px_1fr] md:grid-cols-[128px_1fr] gap-5 md:gap-10 items-center"
                        variants={itemVariants}
                      >
                        <div className="flex justify-center md:justify-center shrink-0">
                          <div
                            className="w-[76px] h-[76px] md:w-[128px] md:h-[128px] rounded-full flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: fill }}
                          >
                            <span className="text-white text-5xl md:text-7xl font-extrabold leading-none tracking-tight">
                              {framework.number}
                            </span>
                          </div>
                        </div>

                        <div className="min-w-0 md:pl-0">
                          <h3
                            className="text-lg md:text-xl font-extrabold tracking-tight uppercase mb-3"
                            style={{ color: titleColor }}
                          >
                            {framework.title}
                          </h3>
                          <p className="text-sm md:text-[15px] font-semibold text-gray-700 mb-2 leading-snug">
                            {framework.subtitle}
                          </p>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {framework.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              </motion.div>
            </section>

            {/* WHAT YOU WILL ACHIEVE Section */}
            <motion.div 
              className="mb-20 py-16 md:py-20"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-20 text-heading">
                WHAT YOU WILL ACHIEVE
              </h2>
              
              {/* Desktop layout */}
              <div ref={cardsRef} className="relative hidden md:block max-w-6xl mx-auto min-h-[620px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={cardsInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="w-[480px] h-[320px] rounded-2xl overflow-hidden bg-gray-100">
                      <img 
                        src="/banner.png" 
                        alt="Program mentor" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute top-0 left-12 z-20 w-[280px] rounded-2xl bg-white border border-gray-300 border-b-2 border-b-[#6cc6d8] p-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                  initial={{ opacity: 0, x: -24, y: -12 }}
                  animate={cardsInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -24, y: -12 }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                >
                  <p className="text-[64px] leading-none font-semibold text-[#5B8FE8]">01</p>
                  <p className="mt-5 text-[17px] leading-[1.45] font-semibold text-[#111827]">
                    Move From Chaos → Clarity
                  </p>
                </motion.div>

                <motion.div
                  className="absolute top-8 right-6 z-20 w-[300px] rounded-2xl bg-white border border-gray-300 border-b-2 border-b-[#6cc6d8] p-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                  initial={{ opacity: 0, x: 24, y: -12 }}
                  animate={cardsInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 24, y: -12 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                >
                  <p className="text-[64px] leading-none font-semibold text-[#5B8FE8]">03</p>
                  <p className="mt-5 text-[17px] leading-[1.45] font-semibold text-[#111827]">
                    Design Predictable Growth Engines
                  </p>
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-8 z-20 w-[300px] rounded-2xl bg-white border border-gray-300 border-b-2 border-b-[#6cc6d8] p-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                  initial={{ opacity: 0, x: -24, y: 12 }}
                  animate={cardsInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -24, y: 12 }}
                  transition={{ duration: 0.55, delay: 0.45 }}
                >
                  <p className="text-[64px] leading-none font-semibold text-[#5B8FE8]">02</p>
                  <p className="mt-5 text-[17px] leading-[1.45] font-semibold text-[#111827]">
                    Build Systems That Replace You
                  </p>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-8 z-20 w-[300px] rounded-2xl bg-white border border-gray-300 border-b-2 border-b-[#6cc6d8] p-8 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                  initial={{ opacity: 0, x: 24, y: 12 }}
                  animate={cardsInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 24, y: 12 }}
                  transition={{ duration: 0.55, delay: 0.6 }}
                >
                  <p className="text-[64px] leading-none font-semibold text-[#5B8FE8]">04</p>
                  <p className="mt-5 text-[17px] leading-[1.45] font-semibold text-[#111827]">
                    Gain Complete Financial Visibility
                  </p>
                </motion.div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden space-y-5 max-w-md mx-auto">
                {[
                  { number: "01", text: "Move From Chaos → Clarity" },
                  { number: "02", text: "Build Systems That Replace You" },
                  { number: "03", text: "Design Predictable Growth Engines" },
                  { number: "04", text: "Gain Complete Financial Visibility" }
                ].map((card) => (
                  <motion.div
                    key={card.number}
                    className="rounded-2xl bg-white border border-gray-300 p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    initial={{ opacity: 0, y: 12 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p className="text-5xl leading-none font-semibold text-[#5B8FE8]">{card.number}</p>
                    <p className="mt-4 text-lg leading-relaxed text-[#111827]">{card.text}</p>
                  </motion.div>
                ))}
                <div className="pt-2">
                  <div className="w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-100">
                    <img
                      src="/banner.png"
                      alt="Program mentor"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WHO IS THIS FOR / NOT FOR Section */}
            <section
              className="py-16 md:py-20 mb-20"
              style={{
                backgroundColor: '#000047',
                width: '100vw',
                marginLeft: 'calc(50% - 50vw)',
                marginRight: 'calc(50% - 50vw)'
              }}
            >
              <div className="px-6">
                <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                      Is This For You?
                    </h2>
                    <p className="mt-4 text-lg text-gray-100/90 max-w-3xl mx-auto">
                      Use this quick check to see if you're a fit for the Business MAGNA Program.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                  {/* FOR */}
                  <motion.div
                    className="bg-gradient-to-br from-white to-[#f3f4ff] rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="p-6 md:p-8 border-b border-gray-200">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#3533cd]">WHO THIS IS FOR</p>
                          <h3 className="text-2xl font-extrabold text-[#000047] mt-1">This program is designed for:</h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <ul className="space-y-4 text-lg text-gray-800">
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-[#3533cd]/10 flex items-center justify-center text-[#3533cd] flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>MSME founders stuck in daily operations</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-[#3533cd]/10 flex items-center justify-center text-[#3533cd] flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>Business owners with ₹20L–₹5Cr+ revenue looking to scale</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-[#3533cd]/10 flex items-center justify-center text-[#3533cd] flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>Entrepreneurs who want systems, not just ideas</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-[#3533cd]/10 flex items-center justify-center text-[#3533cd] flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>Founders ready to move from operator → architect → leader</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* NOT FOR */}
                  <motion.div
                    className="bg-gradient-to-br from-white to-[#fff1f2] rounded-2xl shadow-xl border border-red-200 overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="p-6 md:p-8 border-b border-red-200">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-red-600">WHO THIS IS NOT FOR</p>
                          <h3 className="text-2xl font-extrabold text-[#000047] mt-1">This will not be a fit if:</h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                          <i className="fas fa-times"></i>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <ul className="space-y-4 text-lg text-gray-800 mb-8">
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>People looking for quick hacks or shortcuts</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Founders unwilling to implement</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Those expecting "motivation-only" programs</span>
                        </li>
                      </ul>

                      <div className="bg-white/70 border border-red-200 rounded-2xl p-5 text-center">
                        <p className="text-lg font-extrabold text-[#000047]">
                          This is for builders who want real transformation.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                </motion.div>
              </div>
            </section>

            {/* BEFORE vs AFTER MAGNA Section */}
            <motion.div 
              className="mb-20"
              variants={itemVariants}
            >
              <div className="text-center mb-12">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-tight">
                  BEFORE vs AFTER MAGNA
                </h2>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Before Column */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-white to-[#fff1f2] rounded-2xl shadow-xl border border-red-200 overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="h-1.5 w-full bg-gradient-to-r from-red-500 to-rose-400" />
                    <div className="p-6 md:p-8 border-b border-red-200">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-red-600">Before</p>
                          <h3 className="text-2xl font-extrabold text-[#000047] mt-1">Where most founders start</h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                          <i className="fas fa-exclamation"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4 text-lg text-gray-800">
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Constant firefighting</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>No time to think</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Revenue is inconsistent</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 flex-shrink-0">
                            <i className="fas fa-times text-sm"></i>
                          </span>
                          <span>Business depends on you</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* After Column */}
                  <motion.div 
                    className="relative bg-gradient-to-br from-white to-[#ecfeff] rounded-2xl shadow-xl border border-emerald-200 overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
                    <div className="p-6 md:p-8 border-b border-emerald-200">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-emerald-600">After</p>
                          <h3 className="text-2xl font-extrabold text-[#000047] mt-1">What MAGNA unlocks</h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-400 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="space-y-4 text-lg text-gray-800">
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>Structured systems in place</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>Team operates independently</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>Growth becomes predictable</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-1 w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <i className="fas fa-check text-sm"></i>
                          </span>
                          <span>You lead instead of execute</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* LIMITED SEATS ONLY Section */}
            <section
              className="py-16 md:py-20 mb-20"
              style={{
                backgroundColor: '#000047',
                width: '100vw',
                marginLeft: 'calc(50% - 50vw)',
                marginRight: 'calc(50% - 50vw)'
              }}
            >
              <div className="px-6">
                <motion.div 
                  variants={itemVariants}
                  className="max-w-6xl mx-auto"
                >
                  <div className="text-center mb-16">
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                      LIMITED SEATS ONLY
                    </h2>
                    <div className="relative mx-auto h-1.5 w-32 md:w-40 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] mb-6" />
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                      This is not a mass program. This is transformation.
                    </p>
                  </div>

                  <div className="max-w-5xl mx-auto">
                    <div className="relative">
                      {/* Background decoration */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-60" />
                      
                      {/* Main content */}
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                        {/* Top gradient bar */}
                        <div className="h-2 w-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" />
                        
                        <div className="p-8 md:p-12">
                          {/* Alert badge */}
                          <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
                              <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse" />
                              <span className="text-sm font-semibold text-white">Only 12 Seats Per Batch</span>
                            </div>
                          </div>

                      {/* Main message */}
                      <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          We work closely with founders to ensure
                        </h3>
                        <p className="text-lg text-white/80">
                          Real transformation requires deep focus and personalized attention
                        </p>
                      </div>

                      {/* Feature grid */}
                      <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <motion.div 
                          className="text-center group"
                          whileHover={{ y: -4 }}
                        >
                          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3533cd] to-[#3533cd] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <i className="fas fa-brain text-white text-2xl"></i>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">Personal Clarity</h4>
                          <p className="text-white/80 text-sm leading-relaxed">
                            Deep dive into your unique business challenges and breakthrough opportunities
                          </p>
                        </motion.div>

                        <motion.div 
                          className="text-center group"
                          whileHover={{ y: -4 }}
                        >
                          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#00ffff] to-[#3533cd] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <i className="fas fa-cogs text-white text-2xl"></i>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">Real Implementation</h4>
                          <p className="text-white/80 text-sm leading-relaxed">
                            Build actual systems during the program, not just theoretical frameworks
                          </p>
                        </motion.div>

                        <motion.div 
                          className="text-center group"
                          whileHover={{ y: -4 }}
                        >
                          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3533cd] to-[#00ffff] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <i className="fas fa-chart-line text-white text-2xl"></i>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">Measurable Outcomes</h4>
                          <p className="text-white/80 text-sm leading-relaxed">
                            Track concrete improvements in revenue, systems, and personal freedom
                          </p>
                        </motion.div>
                      </div>

                      {/* Urgency message */}
                      <div className="bg-gradient-to-r from-[#3533cd] to-[#00ffff] rounded-2xl p-6 text-center text-white">
                        <div className="flex items-center justify-center mb-3">
                          <i className="fas fa-clock text-3xl mr-3"></i>
                          <span className="text-xl font-bold">Limited Availability</span>
                        </div>
                        <p className="text-lg opacity-95">
                          Every batch fills up within 48 hours of announcement
                        </p>
                        <div className="mt-4 flex justify-center gap-2">
                          {[1,2,3,4,5,6,7,8,9,10,11,12].map((seat) => (
                            <div 
                              key={seat}
                              className={`w-3 h-3 rounded-full ${
                                seat <= 8 ? 'bg-white/30' : 'bg-white/80'
                              }`}
                              title={`Seat ${seat <= 8 ? 'Taken' : 'Available'}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm mt-2 opacity-80">8 of 12 seats already filled</p>
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* FINAL CALL Section */}
            <motion.div 
              className="mb-20"
              variants={itemVariants}
            >
              <div className="max-w-5xl mx-auto">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-[#3533cd]/10 to-[#00ffff]/10 rounded-3xl opacity-60" />
                  
                  {/* Main content */}
                  <div className="relative bg-gradient-to-br from-[#3533cd] to-[#00ffff] rounded-3xl shadow-2xl overflow-hidden">
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                    
                    <div className="relative p-10 md:p-16">
                      {/* Header with badge */}
                      <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <i className="fas fa-bullhorn text-2xl text-white"></i>
                          </div>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">
                          FINAL CALL
                        </h2>
                        
                        <div className="relative mx-auto h-1.5 w-24 md:w-32 rounded-full bg-gray-900/40 mb-8" />
                        
                        <div className="max-w-3xl mx-auto">
                          <p className="text-xl md:text-2xl mb-6 leading-relaxed text-gray-800">
                            Most founders spend years trying to figure this out.
                          </p>
                          <p className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                            You don't have to.
                          </p>
                        </div>
                      </div>

                      {/* Program benefits */}
                      <div className="text-center mb-12">
                        <p className="text-lg md:text-xl mb-8 text-gray-800">
                          The Business MAGNA Program gives you:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                          <motion.div 
                            className="group"
                            whileHover={{ y: -4 }}
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 h-full shadow-lg">
                              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#3533cd] to-[#00ffff] flex items-center justify-center group-hover:shadow-lg transition-all">
                                <i className="fas fa-sitemap text-white text-xl"></i>
                              </div>
                              <p className="text-lg font-bold text-gray-900">Structure</p>
                            </div>
                          </motion.div>

                          <motion.div 
                            className="group"
                            whileHover={{ y: -4 }}
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 h-full shadow-lg">
                              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#00ffff] to-[#3533cd] flex items-center justify-center group-hover:shadow-lg transition-all">
                                <i className="fas fa-cogs text-white text-xl"></i>
                              </div>
                              <p className="text-lg font-bold text-gray-900">Systems</p>
                            </div>
                          </motion.div>

                          <motion.div 
                            className="group"
                            whileHover={{ y: -4 }}
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 h-full shadow-lg">
                              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#3533cd] to-[#00ffff] flex items-center justify-center group-hover:shadow-lg transition-all">
                                <i className="fas fa-lightbulb text-white text-xl"></i>
                              </div>
                              <p className="text-lg font-bold text-gray-900">Clarity</p>
                            </div>
                          </motion.div>

                          <motion.div 
                            className="group"
                            whileHover={{ y: -4 }}
                          >
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 h-full shadow-lg">
                              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#00ffff] to-[#3533cd] flex items-center justify-center group-hover:shadow-lg transition-all">
                                <i className="fas fa-gamepad text-white text-xl"></i>
                              </div>
                              <p className="text-lg font-bold text-gray-900">Control</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Transformation message */}
                      <div className="text-center mb-12">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/50 max-w-3xl mx-auto shadow-lg">
                          <p className="text-lg md:text-xl mb-4 italic text-gray-800">
                            So your business stops depending on you…
                          </p>
                          <p className="text-xl md:text-2xl font-bold text-gray-900">
                            and starts scaling with you.
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center">
                        <motion.button
                          className="bg-gray-900 text-white px-12 py-5 rounded-full text-xl md:text-2xl font-bold shadow-2xl shadow-black/30 transition-all hover:shadow-black/40 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="flex items-center gap-3">
                            <span>👉 APPLY / JOIN NOW</span>
                            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                          </span>
                        </motion.button>

                        <div className="mt-8 max-w-2xl mx-auto">
                          <p className="text-lg md:text-xl italic leading-relaxed text-gray-800">
                            Build a business that doesn't just grow—
                          </p>
                          <p className="text-xl md:text-2xl font-bold text-gray-900">
                            but evolves intelligently.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
