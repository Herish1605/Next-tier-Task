import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative pt-10 pb-32 px-4 md:px-10 overflow-hidden">
      {/* Background elements */}
      <img 
        src="/images/img_ellipse_8.png" 
        alt="Background shape" 
        className="absolute top-0 left-0 z-0 w-[678px] h-[555px]"
      />
      <img 
        src="/images/img_ellipse_1.png" 
        alt="Background shape" 
        className="absolute top-[266px] right-[468px] z-0"
      />
      <img 
        src="/images/img_starimg.svg" 
        alt="Star" 
        className="absolute top-[237px] right-[263px] z-0 w-[64px] h-[74px]"
      />
      <img 
        src="/images/img_starimg_white_a700.svg" 
        alt="Star" 
        className="absolute top-[611px] right-[251px] z-0 w-[39px] h-[54px]"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-[60px] font-syne font-bold leading-[82px] mb-8">
            <span className="bg-gradient-to-b from-white to-[#00baea] bg-clip-text text-transparent">
              Join global freelancers for business
            </span>
            <span className="bg-gradient-to-b from-[#ad4aff] to-[#00baea] bg-clip-text text-transparent">
              {" transformation."}
            </span>
          </h1>
          
          <p className="text-[22px] font-syne text-white/80 mb-12 max-w-[645px]">
            Access quality projects, simplify your freelance journey with MakBig, and unlock limitless potential collaborating with top talent
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Button 
              variant="primary" 
              outlined={true}
              className="h-[81px] w-[253px] border border-white rounded-[40px] flex items-center justify-center"
            >
              <span className="text-[25px] font-syne font-semibold">Explore</span>
            </Button>
            
            <Button 
              variant="primary"
              className="h-[81px] w-[253px] bg-gradient-to-r from-[#ad4aff] to-[#5480f7] rounded-[40px] flex items-center justify-center"
            >
              <span className="text-[25px] font-syne font-semibold">Book a demo</span>
            </Button>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <img 
            src="/images/img_82_1.png" 
            alt="3D character illustration" 
            className="w-full h-auto max-w-[722px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;