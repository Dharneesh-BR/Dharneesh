import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

const Programs = () => {
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

  const programs = [
    {
      title: "Conscious Brand Builder",
      description: "A structured coaching program for founders and emerging brands to build differentiated, scalable brands.",
      icon: "fa-lightbulb",
      gradient: "from-[#5B6CFF] to-[#2D3AFF]"
    },
    {
      title: "Founder Performance OS",
      description: "A performance operating system for sharper thinking, better decisions and sustained energy.",
      icon: "fa-cogs",
      gradient: "from-[#FF6B6B] to-[#FF5252]"
    },
    {
      title: "Longevity Optimization Blueprint",
      description: "Practical frameworks for improving healthspan, vitality and peak human performance.",
      icon: "fa-heartbeat",
      gradient: "from-[#4ECDC4] to-[#3DBDB4]"
    },
    {
      title: "Human Transformation Mastermind",
      description: "A deeper transformational container integrating identity, performance, longevity and conscious growth.",
      icon: "fa-brain",
      gradient: "from-[#FFD93D] to-[#FFC107]"
    }
  ];

  const targetAudience = [
    "Founders",
    "Business Owners", 
    "CXOs",
    "Creators",
    "Coaches",
    "Growth Leaders",
    "High Performers"
  ];

  const results = [
    "Greater brand clarity",
    "Better strategic decisions",
    "Faster growth thinking",
    "Stronger founder performance",
    "Higher energy and sharper focus",
    "Long-term personal transformation"
  ];

  return (
    <div className="min-h-screen bg-[#fbfaf9]">
      <Navigation />
      
      <section className="py-24 px-6" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div 
              className="text-center mb-20"
              variants={itemVariants}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading">
                Signature Programs
              </h1>
              <p className="text-xl text-subtext max-w-3xl mx-auto leading-relaxed">
                Transformative coaching programs designed to elevate both your brand and your performance
              </p>
            </motion.div>

            {/* Programs Grid */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-20"
              variants={containerVariants}
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  className="card-light p-8 cursor-pointer hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-full flex items-center justify-center mr-4`}>
                      <i className={`fas ${program.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-heading">{program.title}</h3>
                  </div>
                  <p className="text-subtext leading-relaxed">{program.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Who This Is For */}
            <motion.div 
              className="mb-20"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-heading">
                Who This Is For
              </h2>
              <div className="text-center mb-8">
                <p className="text-lg text-subtext mb-8">This is for:</p>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {targetAudience.map((audience, index) => (
                    <motion.div
                      key={index}
                      className="px-6 py-3 bg-gradient-to-r from-[#5B6CFF]/10 to-[#2D3AFF]/10 rounded-full border border-[#5B6CFF]/20"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-[#5B6CFF] font-semibold">{audience}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-heading font-medium max-w-2xl mx-auto">
                  If you want to scale your brand and elevate yourself, this is for you.
                </p>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div 
              className="mb-20"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-heading">
                The Mind Magna Philosophy
              </h2>
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-6 text-[#5B6CFF]">
                  Conscious Brand Building for Magnifying Growth
                </h3>
                <p className="text-lg text-subtext leading-relaxed mb-8">
                  Great brands are not built by tactics alone. They are built through consciousness, clarity and compounding.
                  The same is true for human transformation.
                </p>
                <p className="text-lg text-heading font-medium leading-relaxed">
                  When identity, intelligence, energy and strategy align—growth magnifies.
                  <br />
                  <span className="text-[#5B6CFF] font-bold">That is the Mind Magna philosophy.</span>
                </p>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div 
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-heading">
                Results You Can Expect
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 card-light rounded-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#5B6CFF] to-[#2D3AFF] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-check text-white text-sm"></i>
                    </div>
                    <span className="text-subtext font-medium">{result}</span>
                  </motion.div>
                ))}
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
