import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 relative">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
        <img 
          src="/images/img_ellipse_69.png" 
          alt="Background shape" 
          className="absolute top-0 left-0 z-0"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-16">
          {/* Team Stat */}
          <div className="text-center md:text-left">
            <h3 className="text-[36px] font-poppins font-semibold text-white mb-2">100+</h3>
            <p className="text-[14px] font-syne text-[#7b9292]">Our Professional Team</p>
          </div>
          
          {/* Experience Stat */}
          <div className="text-center md:text-left">
            <h3 className="text-[36px] font-poppins font-semibold text-white mb-2">25+</h3>
            <p className="text-[14px] font-syne text-[#7b9292]">Years of Experience</p>
          </div>
          
          {/* Customer Stat */}
          <div className="text-center md:text-left">
            <h3 className="text-[36px] font-poppins font-semibold text-white mb-2">16k+</h3>
            <p className="text-[14px] font-inter text-[#7b9292]">Happy Customer</p>
          </div>
          
          {/* Partner Logos */}
          <div className="flex items-center space-x-8">
            <img src="/images/img_type.svg" alt="Partner logo" className="h-[14px]" />
            <img src="/images/img_logo.svg" alt="Partner logo" className="h-[18px]" />
            <img src="/images/img_group.svg" alt="Partner logo" className="h-[23px]" />
            <span className="text-[24px] font-gothic-a1 font-bold text-[#7b9292]">slack</span>
            <img src="/images/img_logo_blue_gray_400_01.svg" alt="Partner logo" className="h-[23px]" />
            <img src="/images/img_group_1171275034.svg" alt="Partner logo" className="h-[20px]" />
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-[1px] w-full bg-[#8e5cfc] mt-16"></div>
      </div>
    </section>
  );
};

export default StatsSection;