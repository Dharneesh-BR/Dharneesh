import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import ProgramsImage from '../components/sections/ProgramsImage';
import BrandCarousel from '../components/sections/BrandCarousel';

const MAGNA_COLORS = {
  M: '#2A1AD8',
  A: '#4E26E2',
  G: '#7231EC',
  N: '#953DF5',
  A2: '#B948FF'
};

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Load Razorpay script
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        console.log('Razorpay script loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay script');
      };
      document.head.appendChild(script);
    }
  }, []);

  const mentorProof = [
    "23+ years of building systems, scaling products, and creating measurable business impact",
    "Founder of Recibo.AI and EAZY.AI, enabling MNC brands across 23 countries with AI-powered Sales & Distribution solutions.",
    "Corporate leadership experience spanning FMCG, Consumer Durables, Mobile Devices, and Pharma, with a track record of working across global organizations including Samsung, Philips, Unilever, and GlaxoSmithKline..",
    "Partnered with 650+ brands in 8 countries to drive scalable growth and business outcomes.",
    "Practical frameworks at the intersection of business coaching, brand strategy, and founder transformation"
  ];

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: ''
  });

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showDownloadSection, setShowDownloadSection] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          return { hours, minutes, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 15, seconds: 0 }; // Reset to 15 minutes
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Load Razorpay script
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        console.log('Razorpay script loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay script');
      };
      document.head.appendChild(script);
    }
  }, []);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log('Initiating payment for:', formData);

    // Check if Razorpay is loaded
    if (!window.Razorpay) {
      console.error('Razorpay not loaded');
      alert('Payment service is loading. Please try again in a moment.');
      // Reload Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        console.log('Razorpay script reloaded');
        handlePayment(e); // Retry payment
      };
      script.onerror = () => {
        console.error('Failed to reload Razorpay script');
        alert('Unable to load payment service. Please refresh the page and try again.');
      };
      document.head.appendChild(script);
      return;
    }

    // Create Razorpay checkout options with error handling
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: 100, // Amount in paise (₹1)
      currency: 'INR',
      name: formData.name,
      description: 'Decode Diabetes Program Consultation',
      image: 'https://eterno.fit/icons/eterno-logo.png',
      handler: function (response) {
        console.log('Payment successful:', response);
        
        setShowBookingForm(false);
        setShowDownloadSection(true);
        setFormData({ name: '', mobileNumber: '', email: '' });
      },
      modal: {
        ondismiss: function() {
          console.log('Payment modal dismissed');
        },
        escape: true,
        backdropclose: true
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobileNumber
      },
      notes: {
        program: 'Decode Diabetes Consultation',
        timestamp: new Date().toISOString()
      },
      theme: {
        color: '#936af7'
      }
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function (response) {
        console.error('Payment failed:', response.error);
        alert('Payment failed: ' + response.error.description);
      });
      razorpay.open();
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
      alert('Payment initialization failed. Please try again.');
    }
  };

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
      letter: "M",
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
      letter: "A",
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
      letter: "G",
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
      letter: "N",
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
      letter: "A2",
      title: "Alignment of Team & Execution",
      subtitle: "Sustainable growth needs team alignment and peak performance.",
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
      {/* Floating Register Button */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <motion.button
          className="group relative inline-flex items-center justify-center w-full px-10 py-6 text-xl font-bold text-white overflow-hidden transition-all duration-300 shadow-2xl whitespace-nowrap"
          style={{
            background: 'rgba(0, 0, 71, 0.7)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.4), 0 20px 40px rgba(0, 0, 71, 0.3)',
            minHeight: '80px',
            borderRadius: '50px'
          }}
          whileHover={{ 
            scale: 1.08,
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.5), 0 25px 50px rgba(0, 0, 71, 0.35)'
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setShowBookingForm(true);
          }}
        >
          <span className="relative z-10 flex flex-col items-center">
              <span className="flex items-center gap-2 text-xl font-medium">
                <i className="fas fa-rocket text-xl"></i>
                Join Now @ just ₹199/- <span style={{ textDecoration: 'line-through' }}>2999</span>
              </span>
              <span className="text-xl opacity-90">
                <i className="fas fa-clock mr-1"></i>
                {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} left
              </span>
            </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </motion.button>
      </motion.div>
      
      <section className="pt-8 pb-12 px-6" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Hero Section */}
            <motion.section className="py-2 px-4" variants={itemVariants}>
              <div className="max-w-6xl mx-auto">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#000080] via-[#1e3a8a] to-[#1e40af] bg-clip-text text-transparent">
                      From Bottlenecks to Breakthrough Scale Your Consumer Brand 3X in 90 Days
                    </h1>
                    <div className=" rounded-xl shadow-lg bg-gradient-to-r from-[#3533cd] to-[#00ffff] p-4 border border-[#3533cd]/20">
                    <p className="text-white text-xl md:text-2xl font-medium text-center">
                      2 Day Live Intensive Workshop for MSME Consumer Brands
                    </p>
                  </div>
                  
                  {/* Padding after workshop box */}
                  <div className="py-4"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div variants={itemVariants} className="order-2 md:order-1">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Workshop Details</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-xl shadow-lg py-2 px-6 border border-[#3533cd]/20 text-center opacity-90">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-calendar text-white text-xs"></i>
                              </div>
                              <div>
                                <p className="text-gray-700 text-sm">30th & 31st of May</p>
                                <p className="text-gray-600 text-xs">at 6 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg py-2 px-6 border border-[#3533cd]/20 text-center opacity-90">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-language text-white text-xs"></i>
                              </div>
                              <div>
                                <p className="text-gray-700 text-sm">English, Hindi</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg py-2 px-6 border border-[#3533cd]/20 text-center opacity-90">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-video text-white text-xs"></i>
                              </div>
                              <div>
                                <p className="text-gray-700 text-sm">Live On Zoom</p>
                                <p className="text-gray-600 text-xs">Online</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg py-2 px-6 border border-[#3533cd]/20 text-center opacity-90">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3533cd] to-[#00ffff] flex items-center justify-center flex-shrink-0">
                                <i className="fas fa-clock text-white text-xs"></i>
                              </div>
                              <div>
                                <p className="text-gray-700 text-sm">Duration</p>
                                <p className="text-gray-600 text-xs">2 days</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <motion.button
                          className="w-full mt-8 py-4 px-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), 0 10px 25px rgba(53, 51, 205, 0.2)'
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 30px rgba(0, 255, 255, 0.4), 0 15px 35px rgba(53, 51, 205, 0.25)'
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowBookingForm(true)}
                        >
                          Join Now @ just ₹199/- <span style={{ textDecoration: 'line-through' }}>2999</span>
                        </motion.button>
                      </div>
                      
                      {/* Padding after Join Now button */}
                      <div className="py-6"></div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="order-1 md:order-2">
                      {/* Padding before image */}
                      <div className="py-3"></div>
                      <img
                        src="/Magna.png"
                        alt="Scale Your Consumer Brand"
                        className="w-full h-auto max-w-none rounded-2xl shadow-xl object-cover transform scale-125"
                      />
                      {/* Padding after image */}
                      <div className="py-3"></div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Meet Your Mentor Section */}
            <motion.section style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)' }} className="px-4 py-12" variants={itemVariants}>
              <div className="mx-auto w-full">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.div className="mb-8 text-center" variants={itemVariants}>
                    <h2 className="text-2xl font-bold leading-tight text-white">
                      Learn From a Proven Business Builder
                    </h2>
                  </motion.div>

                  <motion.div className="rounded-2xl border border-[#3533cd]/15 bg-gradient-to-br from-white to-cyan-50 p-5 shadow-xl" variants={itemVariants}>
                    <div className="mb-6 text-center">
                      <img
                        src="/Edited-1.png"
                        alt="Dharneesh B R"
                        className="mx-auto h-56 w-auto object-contain"
                      />
                      <div className="relative h-1 w-full mb-4 rounded-full" style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)' }}></div>
                      <h3 className="text-2xl font-bold text-blue-900">Dharneesh B R</h3>
                      <p className="mt-1 text-sm font-semibold text-gray-600">3x Founder | CPG Business Strategist</p>
                      <p className="mt-1 text-sm font-semibold text-gray-600">Ex-Samsung, Philips, Unilever, GSK</p>
                      <div className="relative h-1 w-full mt-4 rounded-full" style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)' }}></div>
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
             {/* Padding after mentor section */}
            <div className="py-8"></div>


            {/* Content Section with 2 Grids */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 lg:gap-8 items-start">
              {/* Left Grid - Content */}
              <div className="self-start rounded-lg shadow-md pt-4 px-4 pb-4 lg:-ml-3" style={{ background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',}}>
                <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                  Build a Business that scales without burning you out
                </h2>
                
                <div className="space-y-1 mb-2">
                  <div className="bg-red-50 rounded-lg p-3 mb-2">
                    <p className="text-base text-gray-700 font-bold text-left pb-1">Are you still:</p>
                    <ul className="space-y-2 text-base text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex rounded-full bg-red-600/10 px-1.5 py-1.5 items-center justify-center text-red-600 flex-shrink-0">
                          <i className="fas fa-times text-xs"></i>
                        </span>
                        <span>Handling sales, operations, and decisions yourself?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex rounded-full bg-red-600/10 px-1.5 py-1.5 items-center justify-center text-red-600 flex-shrink-0">
                          <i className="fas fa-times text-xs"></i>
                        </span>
                        <span>Growing—but feeling stuck, stressed, or unclear?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex rounded-full bg-red-600/10 px-1.5 py-1.5 items-center justify-center text-red-600 flex-shrink-0">
                          <i className="fas fa-times text-xs"></i>
                        </span>
                        <span>Working harder every year but not building real freedom?</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                                
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    A high impact business transformation program designed for MSME founders to:
                  </h3>
                  <div className="bg-green-50 rounded-md p-3">
                    <ul className="space-y-2 text-base text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex rounded-full bg-emerald-500/10 px-1.5 py-1.5 items-center justify-center text-emerald-600 flex-shrink-0">
                          <i className="fas fa-check text-xs"></i>
                        </span>
                        <span>Build system-driven businesses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex rounded-full bg-emerald-500/10 px-1.5 py-1.5 items-center justify-center text-emerald-600 flex-shrink-0">
                          <i className="fas fa-check text-xs"></i>
                        </span>
                        <span>Create predictable growth engines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex rounded-full bg-emerald-500/10 px-1.5 py-1.5 items-center justify-center text-emerald-600 flex-shrink-0">
                          <i className="fas fa-check text-xs"></i>
                        </span>
                        <span>Gain clarity, control, and sustainability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-2">
                  <p className="text-lg font-semibold text-white">
                    Unlike traditional programs, this is not about motivation or theory.
                  </p>
                  <p className="text-lg font-semibold text-white">
                    This is about restructuring how your business actually runs.
                  </p>
                </div>
              </div>
              
              {/* Right Grid - Image */}
              <div className="lg:ml-3 mt-2 lg:mt-0">
                <ProgramsImage />
              </div>
            </div>

            <section
              className="relative overflow-hidden py-20 md:py-24 mb-20"
              style={{
                backgroundColor: '#000047',
                width: '100vw',
                marginLeft: 'calc(50% - 50vw)',
                marginRight: 'calc(50% - 50vw)'
              }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
                <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
              </div>
              <motion.div
                variants={itemVariants}
              >
              <div className="relative z-10 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-14 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">MAGNA Framework</h2>
                  <p className="text-2xl font-semibold mb-8 text-white/90 max-w-3xl mx-auto">
                    A Conscious Growth System for Scaling Consumer Brands
                  </p>
                  
                </div>

                <div className="max-w-5xl mx-auto">
                  <div className="relative flex flex-col gap-6 md:gap-7">
                    <div className="hidden md:block absolute left-[64px] top-10 bottom-10 w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0" />
                    {magnaFramework.map((framework, index) => {
                      const letter = framework.letter;
                      const textColor = MAGNA_COLORS[letter];
                      return (
                        <motion.div
                          key={`${framework.number}-${index}-row`}
                          className={`group grid grid-cols-[76px_1fr] md:grid-cols-[128px_1fr] ${index === magnaFramework.length - 1 ? 'xl:grid-cols-[128px_1fr_280px]' : ''} gap-4 md:gap-8 items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-4 md:px-5 md:py-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]`}
                          variants={itemVariants}
                          initial={{ opacity: 0, y: 24 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.35 }}
                          transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                          whileHover={{ x: 6 }}
                        >
                          <div className="flex justify-center md:justify-center shrink-0">
                            <motion.div
                              className="w-[76px] h-[76px] md:w-[128px] md:h-[128px] rounded-full flex items-center justify-center shadow-lg"
                              style={{
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0 0 0 2px rgba(0, 255, 255, 0.35), 0 0 20px rgba(0, 255, 255, 0.55), 0 10px 24px rgba(0, 0, 0, 0.25)'
                              }}
                              initial={{ scale: 0.9, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              viewport={{ once: false, amount: 0.5 }}
                              transition={{ duration: 0.45, delay: index * 0.1 + 0.05, ease: "easeOut" }}
                              whileHover={{ scale: 1.05, rotate: -2 }}
                            >
                              <span
                                className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight"
                                style={{ color: textColor }}
                              >
                                {framework.number}
                              </span>
                            </motion.div>
                          </div>

                          <div className="min-w-0 md:pl-0">
                            <motion.h3
                              className="text-xl lg:text-2xl font-extrabold tracking-tight uppercase mb-2 text-[#E6E9FF] transition-all duration-300 group-hover:text-[#F2F4FF] drop-shadow-[0_0_10px_rgba(0,255,255,0.25)] group-hover:drop-shadow-[0_0_16px_rgba(0,255,255,0.45)]"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.5 }}
                              transition={{ duration: 0.4, delay: index * 0.08 + 0.12, ease: "easeOut" }}
                            >
                              {framework.title}
                            </motion.h3>
                            <motion.p
                              className="text-base md:text-lg lg:text-xl font-semibold text-white/85 mb-1 leading-snug transition-all duration-300 group-hover:text-[#D7FBFF] group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.35)]"
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: false, amount: 0.5 }}
                              transition={{ duration: 0.4, delay: index * 0.08 + 0.18, ease: "easeOut" }}
                            >
                              {framework.subtitle}
                            </motion.p>
                          </div>

                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Chart Section below A2 */}
                <motion.div
                  className="flex justify-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                >
                  <div className="rounded-2xl border border-cyan-300/30 bg-white/5 backdrop-blur-sm p-6 shadow-[0_12px_34px_rgba(0,0,0,0.25)]">
                    <svg viewBox="0 0 320 260" className="w-full h-auto max-w-md" role="img" aria-label="Growth chart animation">
                      <line x1="24" y1="22" x2="24" y2="232" stroke="#2A1AD8" strokeWidth="5" strokeLinecap="round" />
                      <line x1="24" y1="232" x2="300" y2="232" stroke="#2A1AD8" strokeWidth="5" strokeLinecap="round" />

                      {[52, 88, 126, 165, 206].map((x, idx) => (
                        <motion.rect
                          key={`a2-bar-${x}`}
                          x={x}
                          y={216 - (idx + 1) * 30}
                          width="34"
                          height={(idx + 1) * 30}
                          rx="3"
                          fill="#B948FF"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: false, amount: 0.7 }}
                          style={{ originY: 1 }}
                          transition={{ duration: 0.35, delay: 0.15 + idx * 0.1, ease: "easeOut" }}
                        />
                      ))}

                      <motion.line
                        x1="46"
                        y1="198"
                        x2="270"
                        y2="44"
                        stroke="#00ffff"
                        strokeWidth="9"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: false, amount: 0.7 }}
                        transition={{ duration: 0.65, delay: 0.75, ease: "easeOut" }}
                      />
                      <motion.polygon
                        points="270,44 250,44 270,26 286,44"
                        fill="#00ffff"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.7 }}
                        transition={{ duration: 0.25, delay: 1.4, ease: "easeOut" }}
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
              </motion.div>
            </section>

            {/* WHAT YOU WILL ACHIEVE Section */}
            <motion.div 
              className="mb-20 py-2 md:py-4 relative overflow-hidden"
              variants={itemVariants}
              style={{
                width: '100vw',
                marginLeft: 'calc(50% - 50vw)',
                marginRight: 'calc(50% - 50vw)'
              }}
            >
              
              <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">WHAT YOU WILL ACHIEVE</h2>
                  <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                </motion.div>

                {/* Achievement List */}
                <div className="max-w-4xl mx-auto mb-6 space-y-6">
                  {[
                    {
                      title: "Move From Chaos to Clarity",
                      description: "Stop reacting daily. Start operating with structure.",
                      color: MAGNA_COLORS.M
                    },
                    {
                      title: "Build Systems That Replace You",
                      description: "Create SOPs, workflows, and AI-powered systems that reduce dependency.",
                      color: MAGNA_COLORS.A
                    },
                    {
                      title: "Design Predictable Growth Engines", 
                      description: "No more guesswork—build repeatable marketing and sales systems.",
                      color: MAGNA_COLORS.G
                    },
                    {
                      title: "Gain Complete Financial Visibility",
                      description: "Understand your numbers, cash flow, and profitability clearly.",
                      color: MAGNA_COLORS.N
                    },
                    {
                      title: "Scale Without Burnout",
                      description: "Align your energy, team, and execution for long-term sustainability.",
                      color: MAGNA_COLORS.A2
                    }
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <div 
                        className="rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/20"
                        style={{
                          background: `linear-gradient(135deg, ${achievement.color}20 0%, ${achievement.color}40 100%)`
                        }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Numbered Circle */}
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                            style={{ backgroundColor: achievement.color }}
                          >
                            <span className="text-white text-lg font-bold">{index + 1}</span>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                              {achievement.title}
                            </h3>
                            
                            <p className="text-gray-700 leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                          className="w-full mt-8 py-4 px-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), 0 10px 25px rgba(53, 51, 205, 0.2)'
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 30px rgba(0, 255, 255, 0.4), 0 15px 35px rgba(53, 51, 205, 0.25)'
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowBookingForm(true)}
                        >
                          Join Now @ just ₹199/- <span style={{ textDecoration: 'line-through' }}>2999</span>
                        </motion.button> 
                        <div className='py-4'></div>

                        {/* Animated Running Clock */}
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative inline-block">
                  <div className="bg-red-50 rounded-xl shadow-lg p-6 w-80">
                    <div className="w-40 h-40 mx-auto p-4 flex items-center justify-center mb-4">
                      <motion.img
                        src="/Alaram.png"
                        alt="Alarm"
                        className="w-full h-full object-contain"
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </div>
                    
                    {/* Digital timer display below clock */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">
                        {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xl font-bold text-red-600">Remaining Time</div>
                      <motion.p 
                        className="mt-6 text-2xl font-bold text-red-700 text-center leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                         Don’t wait because your competition won’t
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
               
              </div>
            </motion.div>

            
            {/* WHAT MAKES MAGNA DIFFERENT Section */}
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
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">WHAT MAKES MAGNA DIFFERENT</h2>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6">
                      {/* Point 1 */}
                      <motion.div 
                        className="p-6 shadow-lg border border-white/20 relative overflow-hidden rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                          boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(0, 255, 255, 0.25), 0 20px 40px rgba(53, 51, 205, 0.15), 0 0 0 1px rgba(0, 255, 255, 0.3)',
                          y: -8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-4 border border-white/30">
                            <i className="fas fa-exchange-alt text-white text-lg"></i>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">Not Just Training — Transformation</h3>
                            <p className="text-sm text-white/90">We don't just teach. We redesign how your business operates.</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Point 2 */}
                      <motion.div 
                        className="p-6 shadow-lg border border-white/20 relative overflow-hidden rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                          boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(0, 255, 255, 0.25), 0 20px 40px rgba(53, 51, 205, 0.15), 0 0 0 1px rgba(0, 255, 255, 0.3)',
                          y: -8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-4 border border-white/30">
                            <i className="fas fa-industry text-white text-lg"></i>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">Built for MSME Reality</h3>
                            <p className="text-sm text-white/90">No startup theory. Everything is designed for real Indian businesses.</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Point 3 */}
                      <motion.div 
                        className="p-6 shadow-lg border border-white/20 relative overflow-hidden rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                          boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(0, 255, 255, 0.25), 0 20px 40px rgba(53, 51, 205, 0.15), 0 0 0 1px rgba(0, 255, 255, 0.3)',
                          y: -8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-4 border border-white/30">
                            <i className="fas fa-robot text-white text-lg"></i>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">AI + Business Systems Integration</h3>
                            <p className="text-sm text-white/90">We combine:<br/>• AI tools<br/>• Business frameworks<br/>• Execution systems</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Point 4 */}
                      <motion.div 
                        className="p-6 shadow-lg border border-white/20 relative overflow-hidden rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                          boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: '0 0 30px rgba(0, 255, 255, 0.25), 0 20px 40px rgba(53, 51, 205, 0.15), 0 0 0 1px rgba(0, 255, 255, 0.3)',
                          y: -8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-4 border border-white/30">
                            <i className="fas fa-users text-white text-lg"></i>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">Founder + Business Growth Together</h3>
                            <p className="text-sm text-white/90">Because scaling a business without evolving the founder leads to burnout.</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* WHO IS THIS FOR / NOT FOR Section */}
            <section
              
              
            >
              <div className="px-6">
                <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
                      Who is this for?
                    </h2>
                    <p className="text-2xl font-semibold mb-8 text-gray-700 max-w-3xl mx-auto">
                      Use this quick check to see if you're a fit for the Business MAGNA Program.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                  {/* FOR */}
                  <motion.div
                    className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl shadow-xl border border-cyan-200/50 overflow-hidden"
                    style={{
                      boxShadow: '0 0 25px rgba(0, 255, 255, 0.2), 0 15px 35px rgba(53, 51, 205, 0.15)'
                    }}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -4,
                      boxShadow: '0 0 35px rgba(0, 255, 255, 0.3), 0 25px 45px rgba(53, 51, 205, 0.2), 0 0 0 1px rgba(0, 255, 255, 0.4)'
                    }}
                  >
                    <div className="p-6 md:p-8 border-b border-gray-200">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div>
                          <p className="text-base sm:text-sm font-semibold text-[#3533cd]">WHO THIS IS FOR</p>
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
                    className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl shadow-xl border border-cyan-200/50 overflow-hidden"
                    style={{
                      boxShadow: '0 0 25px rgba(0, 255, 255, 0.2), 0 15px 35px rgba(53, 51, 205, 0.15)'
                    }}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -4,
                      boxShadow: '0 0 35px rgba(0, 255, 255, 0.3), 0 25px 45px rgba(53, 51, 205, 0.2), 0 0 0 1px rgba(0, 255, 255, 0.4)'
                    }}
                  >
                    <div className="p-6 md:p-8 border-b border-red-200">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div>
                          <p className="text-base sm:text-sm font-semibold text-red-600">WHO THIS IS NOT FOR</p>
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

                      
                    </div>
                  </motion.div>
                  </div>
                </motion.div>
                <p className="text-2xl font-semibold mb-8 text-gray-700 max-w-3xl mx-auto text-center pt-8 ">
                          This is for builders who want real transformation.
                        </p>
              </div>
            </section>

            

            {/* 2-DAY MAGNA BUSINESS PROGRAM Section */}
            <motion.div 
              className="relative mb-20 overflow-hidden py-24 md:py-32"
              variants={itemVariants}
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
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between items-center sm:items-start">
                        
                        <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-[#3533cd] shadow-[0_0_24px_rgba(0,255,255,0.35)]">
                          Day 1
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">FOUNDATION & SYSTEMS</h3>
                          
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
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between items-center sm:items-start">
                        
                        <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-extrabold text-[#953DF5] shadow-[0_0_24px_rgba(185,72,255,0.35)]">
                          Day 2
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">SCALE & SUSTAINABILITY</h3>
                          
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
              <motion.button
                          className="w-full mt-8 py-4 px-6 text-xl font-bold text-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
                          style={{
                            background: 'linear-gradient(135deg, #3533cd 0%, #00ffff 100%)',
                            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), 0 10px 25px rgba(53, 51, 205, 0.2)'
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0 0 30px rgba(0, 255, 255, 0.4), 0 15px 35px rgba(53, 51, 205, 0.25)'
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setShowBookingForm(true)}
                        >
                          Join Now @ just ₹199/- <span style={{ textDecoration: 'line-through' }}>2999</span>
                        </motion.button> 
                        <div className='py-4'></div>

                        {/* Animated Running Clock */}
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative inline-block">
                  <div className="bg-red-50 rounded-xl shadow-lg p-6 w-80">
                    <div className="w-40 h-40 mx-auto p-4 flex items-center justify-center mb-4">
                      <motion.img
                        src="/Alaram.png"
                        alt="Alarm"
                        className="w-full h-full object-contain"
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </div>
                    
                    {/* Digital timer display below clock */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">
                        {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xl font-bold text-red-600">Remaining Time</div>
                      <motion.p 
                        className="mt-6 text-2xl font-bold text-red-700 text-center leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                         Don’t wait because your competition won’t
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
            </motion.div>

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
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div>
                          <p className="text-lg sm:text-base font-semibold text-red-600">Before</p>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#000047] mt-1">Where most founders start</h3>
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
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div>
                          <p className="text-lg sm:text-base font-semibold text-emerald-600">After</p>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#000047] mt-1">What MAGNA unlocks</h3>
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

            

            {/* Trusted by Leading Brands Section */}
            <BrandCarousel />

            {/* Our Guarantee Section */}
            <motion.section className="bg-white px-4 py-12">
              <div className="mx-auto w-full">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <motion.div 
                    className="rounded-2xl border border-[#3533cd]/20 bg-gradient-to-br from-white to-[#f0f9ff] p-5 shadow-xl"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                    }}
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

            {/* WHAT MAKES THIS PROGRAM A MUST-ATTEND Section */}
            <section
              className="py-16 md:py-20 mb-0"
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
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">What Makes This Program a Must-Attend for Entrepreneurs</h2>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-8">
                    {/* Point 1 */}
                    <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl p-6 shadow-lg border border-cyan-200/50" 
                         style={{
                           boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                         }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-graduation-cap text-white text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Learn from a Proven Business Builder</h3>
                          <p className="text-gray-700">Gain real-world insights from a coach who has successfully built and scaled multiple businesses. No theory—only practical strategies tailored for MSMEs like yours.</p>
                        </div>
                      </div>
                    </div>
                    
                    
                    {/* Point 2 */}
                    <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl p-6 shadow-lg border border-cyan-200/50" 
                         style={{
                           boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                         }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-cogs text-white text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Follow a System That Drives Sustainable Growth</h3>
                          <p className="text-gray-700">Understand a proven framework used by 25,000+ business professionals to scale efficiently without being stuck in day-to-day operations.</p>
                        </div>
                      </div>
                    </div>
                    
                    
                    {/* Point 3 */}
                    <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl p-6 shadow-lg border border-cyan-200/50" 
                         style={{
                           boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                         }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-crown text-white text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Step into True Leadership</h3>
                          <p className="text-gray-700">Move beyond managing tasks. Learn how to build, train, and empower a team that runs independently while you focus on growth.</p>
                        </div>
                      </div>
                    </div>
                    
                    
                    {/* Point 4 */}
                    <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl p-6 shadow-lg border border-cyan-200/50" 
                         style={{
                           boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                         }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-lightbulb text-white text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Solve Your Most Critical Business Challenges</h3>
                          <p className="text-gray-700">Whether it's low margins, delayed payments, or stagnant sales—discover actionable solutions you can implement immediately.</p>
                        </div>
                      </div>
                    </div>
                    
                    
                    {/* Point 5 */}
                    <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl p-6 shadow-lg border border-cyan-200/50" 
                         style={{
                           boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                         }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-clock text-white text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Take Back Control of Your Time and Business</h3>
                          <p className="text-gray-700">Break free from daily chaos by building strong systems and teams that allow your business to run smoothly without constant supervision.</p>
                        </div>
                      </div>
                    </div>
                    
                    
                    {/* Point 6 */}
                    <div className="bg-gradient-to-br from-white to-[#f0f9ff] rounded-2xl p-6 shadow-lg border border-cyan-200/50" 
                         style={{
                           boxShadow: '0 0 20px rgba(0, 255, 255, 0.15), 0 10px 30px rgba(53, 51, 205, 0.1)'
                         }}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-clipboard-check text-white text-lg"></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Leave with a Clear, Actionable Growth Plan</h3>
                          <p className="text-gray-700">Walk away with a personalized action plan tailored to your business—ready to implement from day one.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

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

                      
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
                            

              {/* Animated Running Clock */}
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative inline-block">
                  <div className="bg-red-50 rounded-xl shadow-lg p-6 w-80">
                    <div className="w-40 h-40 mx-auto p-4 flex items-center justify-center mb-4">
                      <motion.img
                        src="/Alaram.png"
                        alt="Alarm"
                        className="w-full h-full object-contain"
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </div>
                    
                    {/* Digital timer display below clock */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">
                        {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xl font-bold text-red-600">Remaining Time</div>
                      <motion.p 
                        className="mt-6 text-2xl font-bold text-red-700 text-center leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                         Don’t wait because your competition won’t
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
          </motion.div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowBookingForm(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Register for MAGNA Program</h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent outline-none transition-all"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Pay ₹1 & Register
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By registering, you agree to our terms and conditions
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Download Section */}
      {showDownloadSection && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDownloadSection(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for registering for the MAGNA Business Program. We've sent a confirmation email with all the details.
              </p>
              <button
                onClick={() => {
                  setShowDownloadSection(false);
                }}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#3533cd] to-[#00ffff] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Download Program Guide
              </button>
              <button
                onClick={() => setShowDownloadSection(false)}
                className="w-full mt-3 py-3 px-6 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </div>
      </section>
    </div>
  );
};

export default Programs;
