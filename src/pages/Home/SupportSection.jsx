import React from 'react';
import Button from '../../components/ui/Button';

const SupportSection = () => {
  return (
    <section className="py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="bg-[#120e33] border border-transparent rounded-[20px] p-8 relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(180deg, #a44ffe 0%, #12aeeb 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            borderColor: "transparent"
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            <div className="lg:col-span-3">
              <h2 className="text-[36px] font-syne font-medium text-white text-center mb-4">
                Ready for your next hire?
              </h2>
              <p className="text-[16px] font-syne text-white text-center mb-8">
                Along with conventional advertising & below the line activities & organizations have come to realize that they need to invest
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <Button 
              variant="primary"
              className="bg-gradient-to-r from-[#a44ffe] to-[#04b7ea] rounded-[27px] h-[54px] w-[224px]"
            >
              <span className="text-[16px] font-syne font-semibold">Login to Community</span>
            </Button>
          </div>
          
          {/* Profile Images */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src="/images/img_image_130x130.png" 
              alt="Team member" 
              className="absolute top-[134px] left-[78px] rounded-full w-[130px] h-[130px]"
            />
            <img 
              src="/images/img_image_80x80.png" 
              alt="Team member" 
              className="absolute top-[293px] left-[227px] rounded-full w-[80px] h-[80px]"
            />
            <img 
              src="/images/img_image_32x32.png" 
              alt="Team member" 
              className="absolute top-[176px] left-[300px] rounded-full w-[32px] h-[32px]"
            />
            <img 
              src="/images/img_image_46x46.png" 
              alt="Team member" 
              className="absolute top-[411px] left-[352px] rounded-full w-[46px] h-[46px]"
            />
            <img 
              src="/images/img_image_53x53.png" 
              alt="Team member" 
              className="absolute top-[145px] left-[619px] rounded-full w-[53px] h-[53px]"
            />
            <img 
              src="/images/img_image_64x64.png" 
              alt="Team member" 
              className="absolute top-[134px] right-[290px] rounded-full w-[64px] h-[64px]"
            />
            <img 
              src="/images/img_image_44x44.png" 
              alt="Team member" 
              className="absolute top-[134px] right-[77px] rounded-full w-[44px] h-[44px]"
            />
            <img 
              src="/images/img_image_88x88.png" 
              alt="Team member" 
              className="absolute top-[239px] right-[167px] rounded-full w-[88px] h-[88px]"
            />
            <img 
              src="/images/img_image_118x118.png" 
              alt="Team member" 
              className="absolute top-[363px] right-[236px] rounded-full w-[118px] h-[118px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;