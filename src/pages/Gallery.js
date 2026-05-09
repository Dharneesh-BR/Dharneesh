import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []); // Only run once on mount

  // All 25 images with varied sizes
  const allImages = [
    { id: 1, src: '/Gallery Images/Image 1.webp', alt: 'Gallery Image 1', size: 'small' },
    { id: 2, src: '/Gallery Images/Image 2.jpg', alt: 'Gallery Image 2', size: 'medium' },
    { id: 3, src: '/Gallery Images/Image 2.webp', alt: 'Gallery Image 2 WebP', size: 'large' },
    { id: 4, src: '/Gallery Images/Image 3.webp', alt: 'Gallery Image 3', size: 'vertical-large' },
    { id: 5, src: '/Gallery Images/Image 4.jpg', alt: 'Gallery Image 4', size: 'horizontal-large' },
    { id: 6, src: '/Gallery Images/Image 4.webp', alt: 'Gallery Image 4 WebP', size: 'small' },
    { id: 7, src: '/Gallery Images/Image 5.jpg', alt: 'Gallery Image 5', size: 'medium' },
    { id: 8, src: '/Gallery Images/Image 5.webp', alt: 'Gallery Image 5 WebP', size: 'large' },
    { id: 9, src: '/Gallery Images/Image 6.jpg', alt: 'Gallery Image 6', size: 'vertical-large' },
    { id: 10, src: '/Gallery Images/Image 6.webp', alt: 'Gallery Image 6 WebP', size: 'horizontal-large' },
    { id: 11, src: '/Gallery Images/Image 7 (2).jpg', alt: 'Gallery Image 7', size: 'small' },
    { id: 12, src: '/Gallery Images/Image 7.jpg', alt: 'Gallery Image 7', size: 'medium' },
    { id: 13, src: '/Gallery Images/Image 8.jpg', alt: 'Gallery Image 8', size: 'large' },
    { id: 14, src: '/Gallery Images/Image 9.jpg', alt: 'Gallery Image 9', size: 'vertical-large' },
    { id: 15, src: '/Gallery Images/Image 10.jpg', alt: 'Gallery Image 10', size: 'horizontal-large' },
    { id: 16, src: '/Gallery Images/Image 11.jpg', alt: 'Gallery Image 11', size: 'small' },
    { id: 17, src: '/Gallery Images/Image 12.jpg', alt: 'Gallery Image 12', size: 'medium' },
    { id: 18, src: '/Gallery Images/Image 13.jpg', alt: 'Gallery Image 13', size: 'large' },
    { id: 19, src: '/Gallery Images/Image 14.jpg', alt: 'Gallery Image 14', size: 'vertical-large' },
    { id: 20, src: '/Gallery Images/Image 15.jpg', alt: 'Gallery Image 15', size: 'horizontal-large' },
    { id: 21, src: '/Gallery Images/Inage 16.jpg', alt: 'Gallery Image 16', size: 'small' },
    { id: 22, src: '/Gallery Images/Image 17.jpg', alt: 'Gallery Image 17', size: 'medium' },
    { id: 23, src: '/Gallery Images/Image19.webp', alt: 'Gallery Image 19', size: 'large' },
    { id: 24, src: '/Gallery Images/Image 20.webp', alt: 'Gallery Image 20', size: 'vertical-large' },
    { id: 25, src: '/Gallery Images/Image 21.webp', alt: 'Gallery Image 21', size: 'horizontal-large' },
  ];

  // Function to get height class based on size
  const getHeightClass = (size) => {
    const sizeMap = {
      'small': 'h-48',
      'medium': 'h-64',
      'large': 'h-80',
      'vertical-large': 'h-96',
      'horizontal-large': 'h-56'
    };
    return sizeMap[size] || 'h-64';
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observer.current) {
              observer.current.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all gallery items
    const observeImages = () => {
      allImages.forEach((image) => {
        const imgElement = document.getElementById(`gallery-${image.id}`);
        if (imgElement) {
          observer.current?.observe(imgElement);
        }
      });
    };

    // Initial observation when component mounts and images are loaded
    if (loadedImages.size > 0) {
      observeImages();
    }

    // Cleanup when component unmounts
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loadedImages]); // Dependency on loadedImages

  // Handle image load
  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages((prev) => new Set(prev).add(imageId));
  }, []);

  // Lightbox handlers
  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8" ref={galleryRef}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Complete Gallery
            </h1>
            <div className="relative mx-auto h-1 w-20 sm:w-24 bg-gradient-to-r from-[#3533cd] to-[#00ffff] mb-8 rounded-full" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our complete collection of business transformation moments, success stories, and memorable events
            </p>
          </motion.div>

          {/* Masonry Gallery - All 25 Images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {allImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="break-inside-avoid group relative"
                style={{ breakInside: 'avoid' }}
              >
                {/* Skeleton Loader */}
                {!loadedImages.has(image.id) && (
                  <div className={`w-full ${getHeightClass(image.size)} bg-gray-200 rounded-2xl animate-pulse`} />
                )}
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-[1.02]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full ${getHeightClass(image.size)} object-cover object-top rounded-2xl transition-opacity duration-500 ${
                      loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${image.alt}/400/300.jpg`;
                    }}
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.alt}</h3>
                      <p className="text-white/90 text-sm">Click to view</p>
                    </div>
                  </div>

                  {/* Click Handler */}
                  <button
                    onClick={() => openLightbox(image)}
                    className="absolute inset-0 w-full h-full cursor-pointer rounded-2xl"
                    aria-label={`View ${image.alt} in lightbox`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>

              {/* Image */}
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-full object-contain rounded-2xl"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${lightboxImage.alt}/800/600.jpg`;
                }}
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white font-semibold text-xl mb-2">{lightboxImage.alt}</h3>
                <p className="text-white/80">Business transformation and success stories</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;
