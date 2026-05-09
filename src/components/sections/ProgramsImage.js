import React from 'react';

const ProgramsImage = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="/Program.png" 
            alt="Business Magna Program" 
            className="w-full h-60 object-contain"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="relative rounded-3xl overflow-hidden">
          <img 
            src="/Programs.png" 
            alt="Business Magna Program" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ProgramsImage;
