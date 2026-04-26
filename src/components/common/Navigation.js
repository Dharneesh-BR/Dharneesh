import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigationLinks } from '../../data/portfolioData';
import { animations, useScrollAnimation } from '../../utils/animations';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['about', 'experience', 'ventures', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(section === 'testimonials' ? '#testimonials' : `#${section}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsMobileMenuOpen(false);
    } else if (href && href.startsWith('/')) {
      // Handle page navigation
      navigate(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
      style={{ backgroundColor: '#000047' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.button
            className="flex items-center"
            variants={animations.textReveal}
            {...useScrollAnimation()}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/Black_Logo.webp"
              alt="Dharneesh B R Logo"
              className="h-14 w-auto"
            />
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navigationLinks.map((link, index) => {
              const isRoute = link.href.startsWith('/');
              const sectionId = link.href.replace('#', '').replace('/', '');
              const isActive = location.pathname === link.href || activeSection === sectionId;
              
              // Hide Home link when on home page
              if (link.name === 'Home' && location.pathname === '/') {
                return null;
              }
              
              const NavComponent = isRoute ? Link : 'a';
              const navProps = isRoute ? { to: link.href } : { href: link.href, onClick: (e) => handleLinkClick(e, link.href) };
              
              return (
                <motion.div
                  key={link.name}
                  variants={animations.navItem}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavComponent
                    className="nav-link px-4 py-2 rounded-lg transition-all duration-300 relative block font-semibold"
                    style={{ color: '#40E0D0' }}
                    {...navProps}
                  >
                    <span style={{ color: '#40E0D0', fontWeight: 600 }}>{link.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: '#40E0D0' }}
                        layoutId="activeIndicator"
                      />
                    )}
                  </NavComponent>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden transition-colors font-semibold"
            style={{ color: '#40E0D0' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.i 
              className="fas fa-bars text-2xl"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-800 pt-4 pb-2 space-y-2"
              style={{ backgroundColor: '#000047' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navigationLinks.map((link, index) => {
                const isRoute = link.href.startsWith('/');
                const sectionId = link.href.replace('#', '').replace('/', '');
                const isActive = location.pathname === link.href || activeSection === sectionId;
                
                // Hide Home link when on home page
                if (link.name === 'Home' && location.pathname === '/') {
                  return null;
                }
                
                const NavComponent = isRoute ? Link : 'a';
                const navProps = isRoute ? { to: link.href } : { href: link.href, onClick: (e) => handleLinkClick(e, link.href) };
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(92, 236, 230, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavComponent
                      className="block transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-900 font-semibold"
                      style={{ color: '#40E0D0' }}
                      {...navProps}
                    >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {isActive && (
                            <i className="fas fa-circle text-xs mr-3" style={{ color: '#40E0D0' }}></i>
                          )}
                          <span style={{ color: '#40E0D0', fontWeight: 600 }}>{link.name}</span>
                        </div>
                        <i className="fas fa-chevron-right text-xs" style={{ color: '#40E0D0' }}></i>
                      </div>
                    </NavComponent>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
