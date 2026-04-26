import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6 border-t border-dark-800">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-gray-400">© 2024 Dharneesh B R. All rights reserved.</p>
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
