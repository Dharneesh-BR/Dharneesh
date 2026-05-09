import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatWeHaveBuilt from './components/sections/WhatWeHaveBuilt';
import Services from './components/sections/Services';
import { Roadmap } from './components/Roadmap';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Programs from './pages/Programs';
import Insights from './pages/Insights';
import BlogPost from './pages/BlogPost';
import Add from './pages/Add';
import Newad from './pages/Newad';
import GalleryPage from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Mission from './components/sections/Mission';
import BrandCarousel from './components/sections/BrandCarousel';
import Gallery from './components/sections/Gallery';
import WaysToWork from './components/sections/WaysToWork';
import { pageTransition } from './utils/animations';

function AppRouter() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const HomePage = () => (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Roadmap />
      <BrandCarousel />
      <WhatWeHaveBuilt />
      <WaysToWork />
      <Services />
      <Testimonials />
      <Mission />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <Router>
      <motion.div
        className="App"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            <Route path="/add" element={<Add />} />
            <Route path="/magna-business-masterclass" element={<Newad />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default AppRouter;
