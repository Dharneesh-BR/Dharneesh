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

  const painPoints = [
    "Handling sales, operations, team follow-ups, and decisions yourself",
    "Growing, but still feeling stuck, stressed, or unclear",
    "Working harder every year without building real freedom",
    "Facing inconsistent revenue, shrinking margins, or cashflow pressure",
    "Depending too much on people instead of repeatable systems",
    "Not having a clear roadmap to scale profitably",
    "Feeling trapped in daily firefighting instead of strategic growth"
  ];

  const growthOutcomes = [
    "Build a system-driven business that can run without constant founder involvement",
    "Create predictable growth engines instead of relying on guesswork",
    "Gain clarity on numbers, cashflow, profitability, and key business levers",
    "Upgrade your decision-making from operator mode to leadership mode",
    "Design workflows, SOPs, and AI-enabled structures that reduce chaos"
  ];

  const magnaPoints = [
    {
      letter: "M",
      title: "Mindset Alignment",
      copy: "Shift from pressure-based execution to clear founder leadership."
    },
    {
      letter: "A",
      title: "Architecture of Systems",
      copy: "Build SOPs, workflows, dashboards, and repeatable operating systems."
    },
    {
      letter: "G",
      title: "Growth Engine Design",
      copy: "Engineer leads, conversion, retention, referrals, and revenue visibility."
    },
    {
      letter: "N",
      title: "Numbers & Navigation",
      copy: "Track the few metrics that actually reveal growth, leaks, and profit."
    },
    {
      letter: "A",
      title: "Alignment of Team & Execution",
      copy: "Create team ownership so growth does not depend only on you."
    }
  ];

  const agendaItems = [
    {
      title: "Fix What Is Stopping Your Growth",
      copy: "Identify the patterns that keep business owners stuck in survival mode."
    },
    {
      title: "Build A Strong Growth Foundation",
      copy: "Understand the difference between a survival business and a growth business."
    },
    {
      title: "Design Systems That Reduce Dependency",
      copy: "Map the repeatable activities, SOPs, workflows, and tools your business needs."
    },
    {
      title: "Create Predictable Revenue",
      copy: "See where growth leaks happen across leads, conversion, pricing, and follow-up."
    },
    {
      title: "Read Your Numbers Clearly",
      copy: "Get sharper visibility on cashflow, margins, KPIs, and founder decisions."
    },
    {
      title: "Ask, Clarify, And Plan Next Steps",
      copy: "Leave with practical direction for implementation after the workshop."
    }
  ];

  const fitItems = [
    "MSME founders stuck in daily operations",
    "Business owners with revenue who want to scale with clarity",
    "Entrepreneurs who want systems, not just ideas",
    "Retail, service, manufacturing, and consumer-brand owners building repeatable growth",
    "Founders ready to move from operator to architect to leader"
  ];

  const notFitItems = [
    "People looking for shortcuts or overnight success",
    "Founders unwilling to implement after learning",
    "Anyone expecting motivation-only content without practical work",
    "People not serious about building long-term systems",
    "Non-business owners who are not ready to take action"
  ];

  const mentorProof = [
    "23+ years of building systems, scaling products, and creating measurable business impact",
    "Experience across Samsung, Philips, Unilever, GlaxoSmithKline, EAZY, Recibo.AI, and Mind Magna",
    "650+ brands served across 8 countries through venture and growth work",
    "7,88,175+ business owners trained in the last 6 years",
    "Practical frameworks at the intersection of business coaching, brand strategy, and founder transformation"
  ];

  return (
    <>
    <div className="min-h-screen bg-neutral-100">
      {/* Header Section */}
      <motion.section 
        className="px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto w-full">
          <motion.div 
            className="mb-8 text-center"
            variants={itemVariants}
          >
            <h1 className="mb-4 bg-gradient-to-r from-[#3533cd] to-[#00ffff] bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent">
              Business Growth Masterclass
            </h1>
            <div className="relative mx-auto h-1.5 w-28 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" />
          </motion.div>

          {/* Workshop Details */}
          <motion.div 
            className="text-center mb-4"
            variants={itemVariants}
          >
            <div className="inline-block rounded-lg bg-gradient-to-r from-[#3533cd] to-[#00ffff] p-4 shadow-xl">
              <h3 className="mb-2 text-2xl font-bold leading-tight text-white">
                4 hour Online Workshop
              </h3>
              <p className="mb-2 text-xl font-semibold text-white">
                ON 6th May 2026
              </p>
              <p className="text-base text-white/90">
                (9:00 AM - 1:00 PM IST)
              </p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            className="mb-8 text-center"
            variants={itemVariants}
          >
            <div className="mx-auto rounded-lg border-2 border-[#3533cd] p-3 text-base leading-relaxed text-gray-600">
              Join and Become Like The Top 1% Successful<br/> Business Owners & Entrepreneurs <br/> Before It's Too Late
            </div>
          </motion.div>

          {/* Trainer and Benefits Grid */}
          <motion.div 
            className="-mx-4 mb-8 bg-blue-900 px-4 py-8"
            variants={itemVariants}
          >
            <div className="mx-auto w-full">
              <div className="grid gap-8">
            {/* Left: Trainer Information */}
            <motion.div 
              className="px-2"
              variants={itemVariants}
            >
              <div className="text-center">
                <img
                  src="/Edited-1.png"
                  alt="Dharneesh BR"
                  className="mx-auto h-72 w-auto object-contain"
                />
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Dharneesh B R
                </h3>
                <p className="mb-4 text-base text-gray-200">
                  India's MSME Business Coach
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-300">
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
              className="px-2"
              variants={itemVariants}
            >
              <h3 className="mb-6 text-center text-2xl font-bold text-white">
                What Happens When You Join?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-unlock"></i>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold leading-snug text-gray-200">
                      You Unlock Secrets To Create Time & Wealth In Business
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold leading-snug text-gray-200">
                      You Learn Strong Foundational Activities To Win In Your Business
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold leading-snug text-gray-200">
                      Your Business Growth With Increased Revenue & Cashflow
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center text-white flex-shrink-0">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold leading-snug text-gray-200">
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
        <motion.div className="mt-8 text-center" variants={itemVariants}>
              <p className="mb-4 text-base text-gray-600">Register in next</p>
              <div className="mx-auto mb-6 rounded-2xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] p-6 text-white">
                <div className="mb-2 text-4xl font-bold">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-lg">Minutes Seconds</p>
              </div>
              <p className="mb-6 text-base text-gray-700">To Unlock Bonuses Worth Rs 6,487</p>
              <motion.button
                className="w-full rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                REGISTER NOW AT Rs 99/- ONLY
              </motion.button>
            </motion.div>
      </motion.section>


      {/* Workshop Details */}
      <motion.section className="bg-bg-white/20 px-4">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="mb-4 text-center text-2xl font-bold leading-tight text-blue-900"
              variants={itemVariants}
            >
              To Unlock Bonuses Worth Rs 6,487
            </motion.h2>
            <motion.div className="mt-8 grid gap-6" variants={itemVariants}>
              <div className="rounded-2xl border border-[#3533cd]/20 bg-white p-5 shadow-xl">
                <h3 className="mb-5 text-xl font-bold leading-tight text-blue-900">Who This Workshop Will Help The Best?</h3>
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

              <div className="rounded-2xl border border-[#3533cd]/20 bg-white p-5 shadow-xl">
                <h3 className="mb-5 text-xl font-bold leading-tight text-blue-900">What You Will Learn In 4 Hrs?</h3>
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

      {/* Business Reality Check */}
      <motion.section className="bg-white px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="mb-8 text-center" variants={itemVariants}>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3533cd]">Stop here if this feels familiar</p>
              <h2 className="text-2xl font-bold leading-tight text-blue-900">
                Are You Still Struggling To Run And Scale Your Business?
              </h2>
            </motion.div>

            <motion.div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-lg" variants={itemVariants}>
              <ul className="space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <i className="fas fa-times text-xs"></i>
                    </span>
                    <span className="text-sm leading-relaxed text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="mt-6 rounded-2xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] p-5 text-center text-white shadow-xl" variants={itemVariants}>
              <h3 className="mb-2 text-xl font-bold">If You Are Nodding Along, It Is Time To Make A Change.</h3>
              <p className="text-sm leading-relaxed text-white/90">
                This workshop is built to help you move from daily firefighting to structured, profitable, system-led growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Growth Outcomes */}
      <motion.section className="bg-gradient-to-br from-[#fbfaf9] to-[#f8f9fa] px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="mb-8 text-center" variants={itemVariants}>
              <h2 className="text-2xl font-bold leading-tight text-blue-900">
                How Your Business Can Transform After This Workshop
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Get clarity, systems, and practical direction for scaling without burning yourself out.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              {growthOutcomes.map((outcome, index) => (
                <div key={outcome} className="rounded-2xl border border-[#3533cd]/15 bg-white p-5 shadow-lg">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-relaxed text-gray-800">{outcome}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* MAGNA Growth System */}
      <motion.section className="bg-blue-900 px-4 py-12 text-white">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="mb-8 text-center" variants={itemVariants}>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-cyan-200">The MAGNA Growth System</p>
              <h2 className="text-2xl font-bold leading-tight text-white">
                A Conscious Growth Framework For Scaling Smarter
              </h2>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              {magnaPoints.map((point) => (
                <div key={`${point.letter}-${point.title}`} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-extrabold text-[#3533cd]">
                      {point.letter}
                    </span>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">{point.title}</h3>
                      <p className="text-sm leading-relaxed text-white/80">{point.copy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Workshop Agenda */}
      <motion.section className="bg-white px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="mb-8 text-center" variants={itemVariants}>
              <h2 className="text-2xl font-bold leading-tight text-blue-900">
                What You Will Learn Inside The Workshop
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                A practical, no-fluff flow designed to help you identify leaks and build the next version of your business.
              </p>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              {agendaItems.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-[#3533cd]/15 bg-gradient-to-br from-white to-cyan-50 p-5 shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold leading-tight text-gray-950">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{item.copy}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Fit Check */}
      <motion.section className="bg-gradient-to-br from-[#fbfaf9] to-[#f8f9fa] px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="mb-8 text-center" variants={itemVariants}>
              <h2 className="text-2xl font-bold leading-tight text-blue-900">
                Is This Workshop Right For You?
              </h2>
            </motion.div>

            <motion.div className="space-y-5" variants={itemVariants}>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-emerald-700">You Are A Great Fit If You Are:</h3>
                <ul className="space-y-3">
                  {fitItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <i className="fas fa-check text-xs"></i>
                      </span>
                      <span className="text-sm leading-relaxed text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50 p-5 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-red-700">This May Not Be A Fit If You Are:</h3>
                <ul className="space-y-3">
                  {notFitItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <i className="fas fa-times text-xs"></i>
                      </span>
                      <span className="text-sm leading-relaxed text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mentor Credibility */}
      <motion.section className="bg-white px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div className="mb-8 text-center" variants={itemVariants}>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#3533cd]">Meet Your Mentor</p>
              <h2 className="text-2xl font-bold leading-tight text-blue-900">
                Learn From A Proven Business Builder
              </h2>
            </motion.div>

            <motion.div className="rounded-2xl border border-[#3533cd]/15 bg-gradient-to-br from-white to-cyan-50 p-5 shadow-xl" variants={itemVariants}>
              <div className="mb-6 text-center">
                <img
                  src="/Edited-1.png"
                  alt="Dharneesh B R"
                  className="mx-auto h-56 w-auto object-contain"
                />
                <h3 className="text-2xl font-bold text-blue-900">Dharneesh B R</h3>
                <p className="mt-1 text-sm font-semibold text-gray-600">Business Growth Strategist | Founder & Business Coach</p>
              </div>

              <ul className="space-y-4">
                {mentorProof.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white">
                      <i className="fas fa-check text-xs"></i>
                    </span>
                    <span className="text-sm leading-relaxed text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* What Will Change In Your Business Section */}
      <motion.section className="bg-blue-900 px-4 py-12 text-white">
        <div className="mx-auto w-full text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="mb-10 text-center text-2xl font-bold leading-tight text-white"
              variants={itemVariants}
            >
              What Will Change In Your Business?
            </motion.h2>

            <div className="relative mb-10 flex items-center justify-center" style={{ minHeight: '360px', width: '100%', margin: '0 auto' }}>
              {/* Central Circle */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] shadow-lg">
                <p className="px-3 text-center text-base font-bold leading-snug text-blue-950">Business Breakthrough</p>
              </div>

              {/* Top: Right Psychology */}
              <div className="absolute left-1/2 top-0 flex w-40 -translate-x-1/2 items-center justify-center rounded-lg border-2 border-dashed border-[#00ffff] bg-gray-900 p-3">
                <p className="text-center text-xs text-white">Right Psychology Of Running The Business</p>
              </div>
              
              {/* Bottom Right: Right Strategies */}
              <div className="absolute bottom-14 right-0 flex w-36 items-center justify-center rounded-lg border-2 border-dashed border-[#00ffff] bg-gray-900 p-3">
                <p className="text-center text-xs text-white">Right Strategies</p>
              </div>
              
              {/* Bottom Left: Right Systems */}
              <div className="absolute bottom-14 left-0 flex w-36 items-center justify-center rounded-lg border-2 border-dashed border-[#00ffff] bg-gray-900 p-3">
                <p className="text-center text-xs text-white">Right Systems</p>
              </div>
              
                                        </div>

            <motion.button
              className="w-full rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              REGISTER NOW AT Rs 99/- ONLY
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Who This Workshop Is NOT For Section */}
      <motion.section className="bg-white-20 px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* Heading */}
            <motion.h2 
              className="mb-10 text-center text-2xl font-bold leading-tight text-blue-900"
              variants={itemVariants}
            >
              Who This Workshop Will Help The Best?
            </motion.h2>

            <div className="grid gap-8">
              {/* Left: Circular Graphic */}
              <motion.div className="relative" variants={itemVariants}>
                <div className="relative mx-auto h-64 w-64">
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
              <motion.div className="space-y-6" variants={itemVariants}>
                {/* Bullet Point 1 */}
                <div className="flex items-start gap-4 relative">
                  {/* Connecting Line from Circle */}
                  <div className="hidden" 
                       style={{ transform: 'translateX(-100%)' }}></div>
                  {/* Dot at connection point */}
                  <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translate(-50%, -50%)' }}></div>
                  <div className="w-4"></div>
                  <p className="text-base font-medium text-blue-900">You Are Not A Business Owner</p>
                </div>

                {/* Bullet Point 2 */}
                <div className="flex items-start gap-4 relative">
                  {/* Connecting Line from Circle */}
                  <div className="hidden" 
                       style={{ transform: 'translateX(-100%)' }}></div>
                  {/* Dot at connection point */}
                  <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translate(-50%, -50%)' }}></div>
                  <div className="w-4"></div>
                  <p className="text-base font-medium text-blue-900">You Are Not An Action Taker</p>
                </div>

                {/* Bullet Point 3 */}
                <div className="flex items-start gap-4 relative">
                  {/* Connecting Line from Circle */}
                  <div className="hidden" 
                       style={{ transform: 'translateX(-100%)' }}></div>
                  {/* Dot at connection point */}
                  <div className="absolute top-1/2 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff]" 
                       style={{ transform: 'translate(-50%, -50%)' }}></div>
                  <div className="w-4"></div>
                  <p className="text-base font-medium text-blue-900">You Are Not Serious About Your Business</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timer and Pricing - Main CTA Section */}
      <motion.section className="bg-gradient-to-r from-[#3533cd] to-[#00ffff] px-4 py-12 text-white">
        <div className="mx-auto w-full text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="mb-8 text-2xl font-bold leading-tight"
              variants={itemVariants}
            >
              Bonuses If You Register Before Timer Hits 0
            </motion.h2>
            
            <motion.div 
              className="mb-8 rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="mb-4 font-mono text-5xl font-bold">
                {formatTime(timeLeft)}
              </div>
              <p className="text-xl">Offer Ends In</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-3xl font-bold leading-tight">Today's Price: Rs 99/-</h3>
              <motion.button
                className="group inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-lg font-bold text-[#3533cd] transition-all duration-300 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <span>Register Now at Rs 99/- Only</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </span>
              </motion.button>
              <p className="mt-4 text-lg opacity-90">
                Reserve your seat before the timer ends to unlock bonuses worth Rs 6,487/-
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section className="bg-white px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="mb-10 text-center text-2xl font-bold leading-tight text-blue-900"
              variants={itemVariants}
            >
              I'm On A MISSION To Help 1 Million Business Owners Achieve Profit & Growth
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-900">7.8L+</div>
                <p className="text-gray-600">Business Owners Trained</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-900">2.3M+</div>
                <p className="text-gray-600">Social Media Reach</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-900">600+</div>
                <p className="text-gray-600">Workshops Conducted</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-900">4.96</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Guarantee */}
      <motion.section className="bg-gradient-to-br from-[#fbfaf9] to-[#f8f9fa] px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div 
              className="rounded-2xl border border-[#3533cd]/20 bg-white p-5 shadow-xl"
              variants={itemVariants}
            >
              <h2 className="mb-8 text-center text-2xl font-bold text-blue-900">Our Guarantee</h2>
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
      <motion.section className="bg-white px-4 py-12">
        <div className="mx-auto w-full">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              className="mb-10 text-center text-2xl font-bold text-blue-900"
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
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Is the price really just Rs 99?</h3>
                <p className="text-gray-700">Yes! Today's special price is Rs 99/- only. Register before the timer ends to secure this special offer and bonuses worth Rs 6,487/-.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">What if I'm not satisfied?</h3>
                <p className="text-gray-700">We offer a 100% satisfaction guarantee. If you don't find value in the workshop, we'll refund your investment.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Is this a live workshop?</h3>
                <p className="text-gray-700">Yes. The workshop is designed as a live, interactive learning experience with practical business examples and implementation clarity.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Will this help if my business is already running?</h3>
                <p className="text-gray-700">Yes. This is especially useful for owners who already have a business and want to move from daily operations into structured growth, systems, and leadership.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Do I need advanced marketing or finance knowledge?</h3>
                <p className="text-gray-700">No. The workshop focuses on practical frameworks that business owners can understand, apply, and refine inside their own context.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

    {/* 2-DAY MAGNA BUSINESS PROGRAM Section - Full width section */}
    <motion.div 
      className="relative mb-20 overflow-hidden py-16 md:py-20"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        backgroundColor: '#000047',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)'
      }}
    >
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(0,255,255,0.12)_0%,rgba(255,255,255,0)_36%,rgba(185,72,255,0.14)_100%)]" />

        <div className="relative z-10 mx-auto mb-12 max-w-4xl px-6 text-center">
          
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">Join the MAGNA Business Program</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg md:text-xl leading-relaxed text-white/75">
            Two focused days to move from founder-led chaos to a system-driven business with clearer growth, control, and execution.
          </p>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* DAY 1 */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl border border-white/30 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
              style={{
                background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                boxShadow: '0 0 25px rgba(0, 255, 255, 0.2), 0 15px 35px rgba(53, 51, 205, 0.15)'
              }}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: '0 0 35px rgba(0, 255, 255, 0.3), 0 25px 45px rgba(53, 51, 205, 0.2), 0 0 0 1px rgba(0, 255, 255, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#3533cd] via-[#7231EC] to-[#00ffff]" />
              <div 
                className="p-6 md:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">FOUNDATION & SYSTEMS</h3>
                    
                  </div>
                  <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-[#3533cd] shadow-[0_0_24px_rgba(0,255,255,0.35)]">
                    Day 1
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 md:px-8 md:pb-8 space-y-5">
                {/* Session 1 */}
                <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-lg">
                  <h5 className="mb-3 text-left text-lg font-extrabold text-gray-950">Session 1: M — Mindset </h5>
                                   
                <div className="mb-3">
                      <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#3533cd]">→</span>
                        <span>The 3 identity shifts required to scale beyond ₹1Cr → ₹100 Cr+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#3533cd]">→</span>
                        <span>Why "hard work" is killing growth (and what replaces it)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#3533cd]">→</span>
                        <span>Breaking "founder dependency loop"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#3533cd]">→</span>
                        <span>Moving from firefighting → foresight-driven leadership</span>
                      </li>
                    </ul>
                  </div>
                  
                                    </div>
                
                
                
                {/* Session 2 */}
                <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-lg">
                  <h5 className="mb-3 text-left text-lg font-extrabold text-gray-950">Session 2: A — Architecture </h5>
                                      
                <div className="mb-3">
                      <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#4E26E2]">→</span>
                        <span>How to remove "people dependency"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#4E26E2]">→</span>
                        <span>Designing SOPs that actually get followed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#4E26E2]">→</span>
                        <span>Tools & workflows to reduce manual effort by 30–50%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#4E26E2]">→</span>
                        <span>Automating marketing, sales follow-ups, and operation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#4E26E2]">→</span>
                        <span>Where AI actually fits in MSME businesses </span>
                      </li>
                    </ul>
                  </div>
                  
                                                
                                    </div>
                
                
                {/* Session 3 */}
                <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-lg">
                  <h5 className="mb-3 text-left text-lg font-extrabold text-gray-950">Session 3: G — Growth </h5>
                  
                  
                  <div className="mb-3">
                  
                    <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#7231EC]">→</span>
                        <span>How to create predictable monthly revenue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#7231EC]">→</span>
                        <span>Fixing inconsistent sales pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#7231EC]">→</span>
                        <span>Positioning & messaging for premium growth</span>
                      </li>
                      
                    </ul>
                  </div>
                  
                                    </div>
                
                                    </div>
            </motion.div>

            {/* DAY 2 */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl border border-white/30 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
              style={{
                background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                boxShadow: '0 0 25px rgba(0, 255, 255, 0.2), 0 15px 35px rgba(53, 51, 205, 0.15)'
              }}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: '0 0 35px rgba(0, 255, 255, 0.3), 0 25px 45px rgba(53, 51, 205, 0.2), 0 0 0 1px rgba(0, 255, 255, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#953DF5] via-[#B948FF] to-[#00ffff]" />
              <div 
                className="p-6 md:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">SCALE & SUSTAINABILITY</h3>
                    
                  </div>
                  <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-[#953DF5] shadow-[0_0_24px_rgba(185,72,255,0.35)]">
                    Day 2
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 md:px-8 md:pb-8 space-y-5">
                {/* Session 4 */}
                <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-lg">
                  <h5 className="mb-3 text-left text-lg font-extrabold text-gray-950">Session 4: N — Numbers </h5>
                  
                  
                  
                  <div className="mb-3">
                    
                    <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#953DF5]">→</span>
                        <span>The only KPIs that actually matter for founders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#953DF5]">→</span>
                        <span>Understanding CAC, LTV, conversion ratios, and margins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#953DF5]">→</span>
                        <span>How to stop "profit leaks" in your business</span>
                      </li>
                      
                    </ul>
                  </div>
                  
                                                
                                    </div>
                
                
                {/* Session 5 */}
                <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-lg">
                  <h5 className="mb-3 text-left text-lg font-extrabold text-gray-950">Session 5:A — Alignment  </h5>
                  
                  
                  
                  <div className="mb-3">
                    
                    <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#B948FF]">→</span>
                        <span>Aligning team, systems, and founder energy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#B948FF]">→</span>
                        <span>Hiring for scale vs hiring for survival</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#B948FF]">→</span>
                        <span>Time, energy & focus management for founders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-[#B948FF]">→</span>
                        <span>Creating a culture of ownership, not dependency</span>
                      </li>
                    </ul>
                  </div>
                  
                                    </div>
                
                
                {/* Session 6 */}
                <div className="rounded-2xl border border-cyan-200/70 bg-gradient-to-br from-white to-cyan-50 p-5 shadow-lg">
                  <h5 className="mb-3 text-left text-lg font-extrabold text-gray-950">Session 6: Q & A Session </h5>
                  
                  
                  
                  <div className="mb-3">
                    
                    <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-cyan-600">→</span>
                        <span>Addressing specific challenges and questions from participants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 font-bold text-cyan-600">→</span>
                        <span>Final insights and next steps for implementation</span>
                      </li>
                    </ul>
                  </div>
                  
                                    </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-8 text-center text-white">
        <p className="text-gray-400">(C) 2026 Dharneesh BR. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Add;
