import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-700" style={{ backgroundColor: '#000047', color: '#FFFFFF' }}>
      <div className="container mx-auto text-center">
        <p className="mb-4 text-gray-400">© 2026 Dharneesh B R. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-premium-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-premium-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-premium-500 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
