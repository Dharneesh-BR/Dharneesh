import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Milestone from './Milestone';

const milestones = [
  { title: "Glaxo Smithkline", description: "Healthcare expansion", position: "Medical Representative", year: "2004", logo: "/GSK.png" },
  { title: "Hindustan Unilever", description: "FMCG scale partnership", position: "Territory Sales Officer", year: "2008", logo: "/Unilever.png" },
  { title: "Philips", description: "Global brand association", position: "Branch Manager", year: "2010", logo: "/Philips.png" },
  { title: "Samsung", description: "Enterprise collaboration", position: "Retail MArketing Head,MT", year: "2013", logo: "/Samsung.png" },
  { title: "Recibo", description: "Market expansion", position: "Founder, Director", year: "2017", logo: "/recibo-logo.png" },
  { title: "Eazy", description: "Scaling operations", position: "Co-founder, COO", year: "2022", logo: "/eazy.png" },
  { title: "Mind Magna", description: "Early growth partnership", position: "Founder, Chief Consultant", year: "2019", logo: "/mind magna.png" },
  { title: "Eterno", description: "Initial brand collaboration", position: "Founder, CEO", year: "2026", logo: "/Eterno_logo.webp" }
];

const majorBrands = ["Samsung", "Philips", "Hindustan Unilever", "Glaxo Smithkline"];

const Roadmap = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [isInView]);

  const handleMilestoneClick = (title) => {
    console.log(`Milestone clicked: ${title}`);
  };

  // Calculate positions dynamically based on SVG path
  useEffect(() => {
    if (!isMobile && pathRef.current) {
      const calculatePositions = () => {
        const path = pathRef.current;
        if (!path) return;
        const totalLength = path.getTotalLength();

        const newPositions = milestones.map((_, index) => {
          const point = path.getPointAtLength(
            (index / (milestones.length - 1)) * totalLength
          );

          return {
            x: (point.x / 1200) * 100,
            y: (point.y / 600) * 100
          };
        });

        setPositions(newPositions);
      };

      // Small delay to ensure SVG is rendered
      const timer = setTimeout(calculatePositions, 100);
      return () => clearTimeout(timer);
    } else if (isMobile) {
      // Mobile: vertical stacking
      const mobilePositions = milestones.map((_, index) => ({
        x: 50,
        y: (index + 1) * (100 / (milestones.length + 1))
      }));
      setPositions(mobilePositions);
    }
  }, [isMobile, milestones.length]);

  
  if (isMobile) {
    // Mobile Vertical Timeline
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              My Growth Story
            </h1>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Milestones that shaped my 23+ years journey in Building, Scaling, and Transforming Businesses
            </h3>
          </motion.div>

          <div className="relative h-[950px]">
            {/* Mobile Curved Road */}
            <svg
              className="absolute inset-0 w-full h-full z-5"
              viewBox="0 0 100 800"
              preserveAspectRatio="xMidYMin meet"
            >
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2f2f2f" />
                  <stop offset="100%" stopColor="#3a3a3a" />
                </linearGradient>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              
              {/* Main Curved Road */}
              <path
                d="M -20 50 
                   C -40 100, -40 100, -20 150
                   S 0 200, -20 250
                   S -40 300, -20 350
                   S 0 400, -20 450
                   S -40 500, -20 550
                   S 0 600, -20 650
                   S -30 700, -10 750"
                stroke="url(#roadGradient)"
                strokeWidth="15"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Road Edges */}
              <path
                d="M -20 50 
                   C -40 100, -40 100, -20 150
                   S 0 200, -20 250
                   S -40 300, -20 350
                   S 0 400, -20 450
                   S -40 500, -20 550
                   S 10 600, -10 650
                   S -30 700, -10 750"
                stroke="#1a1a1a"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                opacity="0.3"
              />
              <path
                d="M -20 50 
                   C -40 100, -40 100, -20 150
                   S 0 200, -20 250
                   S -40 300, -20 350
                   S 0 400, -20 450
                   S -40 500, -20 550
                   S 10 600, -10 650
                   S -30 700, -10 750"
                stroke="#1a1a1a"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                opacity="0.3"
              />
              
              {/* Center Dashed Line */}
              <path
                d="M -20 50 
                   C -40 100, -40 100, -20 150
                   S 0 200, -20 250
                   S -40 300, -20 350
                   S 0 400, -20 450
                   S -40 500, -20 550
                   S 0 600, -20 650
                   S -40 700, -20 750"
                stroke="white"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="5 4"
                opacity="0.7"
              />
              
              {/* Animated Progress Line */}
              <motion.path
                d="M -20 50 
                   C -40 100, -40 100, -20 150
                   S 0 200, -20 250
                   S -40 300, -20 350
                   S 0 400, -20 450
                   S -40 500, -20 550
                   S 10 600, -10 650
                   S -30 700, -10 750"
                stroke="url(#progressGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="800"
                strokeDashoffset={800 - (progress * 8)}
                initial={{ strokeDashoffset: 800 }}
                animate={{ strokeDashoffset: 800 - (progress * 8) }}
                transition={{ duration: 0.3 }}
              />
            </svg>
            
            {/* Mobile Milestones */}
            {milestones.map((milestone, index) => {
              // Consistent spacing calculation
              const yPos = 60 + (index * 115);
              
              return (
              <motion.div
                key={milestone.title}
                className="absolute"
                style={{ 
                  left: '50px',
                  top: `${yPos}px`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Milestone Node on Road - Larger */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-500 relative z-10">
                  <img 
                    src={milestone.logo}
                    alt={milestone.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                
                {/* Content Card */}
                <div className="absolute left-full ml-8 top-1/2 transform -translate-y-1/2 w-48 bg-white rounded-xl shadow-lg p-4 border border-gray-200 z-20"
                     onClick={() => handleMilestoneClick(milestone.title)}>
                  <div className="mb-1">
                    <h3 className="font-bold text-gray-800 text-sm leading-tight">
                      {milestone.title}
                    </h3>
                    <p className="text-blue-600 font-bold text-sm">
                      {milestone.year}
                    </p>
                  </div>
                  <p className="text-gray-600 font-medium text-sm">
                    {milestone.position}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Desktop Curved Road
  return (
    <div ref={containerRef} className="min-h-screen pt-16 pb-8 px-6" style={{ backgroundColor: '#fbfaf9' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Growth Story
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Milestones that shaped my 23+ years journey in <br/>Building, Scaling, and Transforming Businesses
          </h3>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative h-[600px] mx-auto"
          style={{ maxWidth: '1200px' }}
        >
          {/* SVG Road */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2f2f2f" />
                <stop offset="100%" stopColor="#3a3a3a" />
              </linearGradient>
            </defs>
            
            {/* Main Road with 8 Proper Curves */}
            <path
              ref={pathRef}
              d="M 120 300 
                 C 160 200, 200 200, 240 300
                 S 320 400, 360 300
                 S 440 200, 480 300
                 S 560 400, 600 300
                 S 680 200, 720 300
                 S 800 400, 840 300
                 S 920 200, 960 300
                 S 1040 400, 1080 300"
              stroke="url(#roadGradient)"
              strokeWidth="40"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Road Edges */}
            <path
              d="M 100 300 
                 C 140 200, 180 200, 220 300
                 S 300 400, 340 300
                 S 420 200, 460 300
                 S 540 400, 580 300
                 S 660 200, 700 300
                 S 780 400, 820 300
                 S 900 200, 940 300
                 S 1020 400, 1060 300"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.3"
            />
            <path
              d="M 140 300 
                 C 180 200, 220 200, 260 300
                 S 340 400, 380 300
                 S 460 200, 500 300
                 S 580 400, 620 300
                 S 700 200, 740 300
                 S 820 400, 860 300
                 S 940 200, 980 300
                 S 1060 400, 1100 300"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.3"
            />
            
            {/* Center Dashed Line */}
            <path
              d="M 120 300 
                 C 160 200, 200 200, 240 300
                 S 320 400, 360 300
                 S 440 200, 480 300
                 S 560 400, 600 300
                 S 680 200, 720 300
                 S 800 400, 840 300
                 S 920 200, 960 300
                 S 1040 400, 1080 300"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20 15"
              opacity="0.7"
            />
            
            {/* Animated Progress Line */}
            <motion.path
              d="M 120 300 
                 C 160 200, 200 200, 240 300
                 S 320 400, 360 300
                 S 440 200, 480 300
                 S 560 400, 600 300
                 S 680 200, 720 300
                 S 800 400, 840 300
                 S 920 200, 960 300
                 S 1040 400, 1080 300"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset={1000 - (progress * 10)}
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: 1000 - (progress * 10) }}
              transition={{ duration: 0.3 }}
            />
            
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestones */}
          {positions.length > 0 && milestones.map((milestone, index) => {
            const position = positions[index];
            const isMajor = majorBrands.includes(milestone.title);
            
            return (
              <Milestone
                key={milestone.title}
                milestone={milestone}
                index={index}
                position={position}
                isMajor={isMajor}
                onClick={handleMilestoneClick}
                isVisible={isInView}
              />
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;
