import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/common/Navigation';
import Banner from './components/sections/Banner';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatWeHaveBuilt from './components/sections/WhatWeHaveBuilt';
import Services from './components/sections/Services';
import { Roadmap } from './components/Roadmap';
import Ventures from './components/sections/Ventures';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { pageTransition } from './utils/animations';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <LoadingSpinner size="xl" color="premium" />
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen scroll-smooth bg-dark-950"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence mode="wait">
        <Navigation key="navigation" />
        <Banner key="banner" />
        <Hero key="hero" />
        <About key="about" />
        <WhatWeHaveBuilt key="what-we-have-built" />
        <Services key="services" />
        <Roadmap key="roadmap" />
        <Ventures key="ventures" />
        <Testimonials key="testimonials" />
        <Contact key="contact" />
        <Footer key="footer" />
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
