import React from "react";

const BrandCarouselMobile = () => {
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

  return (
    <section className="py-8 px-4 bg-gray-50 md:hidden rounded-2xl border-2 border-gray-800 mx-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Trusted by Leading Brands
          </h2>
          <div className="relative mx-auto h-1 w-16 bg-gradient-to-r from-[#3533cd] to-[#00ffff] mb-6 rounded-full" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Partnered with industry leaders to drive innovation and excellence
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-3 gap-1">
          {brands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex items-center justify-center"
              style={{ minHeight: '80px' }}
            >
              <img
                decoding="async"
                loading="lazy"
                className="max-w-full max-h-full object-contain"
                src={brand.image}
                alt={brand.name}
                style={{ maxHeight: '60px', width: 'auto' }}
                onError={(e) => {
                  console.log(`Failed to load ${brand.image}`);
                  e.target.src = `https://picsum.photos/seed/brand${index}/162/100.jpg`;
                }}
                onLoad={() => {
                  console.log(`Successfully loaded ${brand.image}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarouselMobile;
