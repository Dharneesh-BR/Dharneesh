import React, { useState, useEffect, useRef } from "react";

const BrandCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const intervalRef = useRef(null);

  const brands = [
    { id: 1, name: "Brand 1", image: "/Company Logos/1-2.png" },
    { id: 2, name: "Brand 2", image: "/Company Logos/2.png" },
    { id: 3, name: "Brand 3", image: "/Company Logos/3.png" },
    { id: 4, name: "Brand 4", image: "/Company Logos/4.png" },
    { id: 5, name: "Brand 5", image: "/Company Logos/5.png" },
    { id: 6, name: "Brand 6", image: "/Company Logos/6.png" },
    { id: 7, name: "Brand 7", image: "/Company Logos/7.png" },
    { id: 8, name: "Brand 8", image: "/Company Logos/8-2.png" },
    { id: 9, name: "Brand 9", image: "/Company Logos/9.png" },
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  // Auto-scroll functionality (desktop only)
  useEffect(() => {
    // Only auto-scroll on desktop (screen width > 768px)
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
      }, 2000); // Change every 2 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [brands.length]);

  // Calculate transform for infinite scroll
  const getTransform = () => {
    const itemWidth = 100 / brands.length; // Percentage width per item
    return `translateX(-${currentIndex * itemWidth}%)`;
  };

  // Handle touch events for mobile scrolling
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setTouchStart(touchStart);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        // Swipe left - next
        setCurrentIndex((prev) => (prev + 1) % brands.length);
      } else {
        // Swipe right - previous
        setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length);
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <section className="py-12 px-3 sm:px-4 lg:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Trusted by Leading Brands
          </h2>
          <div className="relative mx-auto h-1 w-20 sm:w-24 bg-gradient-to-r from-[#3533cd] to-[#00ffff] mb-6 rounded-full" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partnered with industry leaders to drive innovation and excellence
          </p>
        </div>

        {/* Dark Strip */}
        <div style={{ backgroundColor: '#000047', height: '4px', margin: '0 auto', padding: '0 4rem' }}></div>

        {/* Padding after strip */}
        <div style={{ paddingBottom: '2rem' }}></div>

        {/* Brand Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-2000 ease-in-out"
              style={{ 
                transform: getTransform(),
                transitionDuration: '2000ms'
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ 
                    width: 'clamp(120px, 12vw, 162.5px)',
                    marginRight: 'clamp(8px, 2vw, 20px)'
                  }}
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image w-full h-auto object-contain"
                      src={brand.image}
                      alt={brand.name}
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${brand.name}/162/100.jpg`;
                      }}
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>

         {/* Padding after strip */}
        <div style={{ paddingBottom: '2rem' }}></div>
             
        {/* Dark Strip Below */}
        <div style={{ backgroundColor: '#000047', height: '4px', margin: '0 auto', padding: '0 4rem' }}></div>
      </div>
    </section>
  );
};

export default BrandCarousel;