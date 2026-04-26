import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Mission from './components/sections/Mission';
import Services from './components/sections/Services';
import Ventures from './components/sections/Ventures';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Experience from './pages/Experience';
import Programs from './pages/Programs';
import Insights from './pages/Insights';
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
    <>
      <Navigation />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Ventures />
      <Testimonials />
      <Contact />
      <Footer />
    </>
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
            <Route path="/experience" element={<Experience />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default AppRouter;
