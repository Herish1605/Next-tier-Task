import React, { useState } from 'react';

const PortfolioSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const portfolioItems = [
    {
      id: 1,
      image: "/images/img_lampungbrand.png",
      title: "Brand Logo",
      description: "We designed a bold and memorable brand logo that reflects the essence of the client’s identity.",
      icon: "/images/img_figma.svg"
    },
    {
      id: 2,
      image: "/images/img_lampungbrand_610x410.png",
      title: "Charity Website",
      description: "Empowering communities through support, donations, and volunteer opportunities for lasting change.",
      icon: "/images/img_figma.svg"
    },
    {
      id: 3,
      image: "/images/img_lampungbrand_1.png",
      title: "Finance App",
      description: "Track your spending, manage budgets, and achieve financial goals with ease",
      icon: "/images/img_github.svg"
    }
    
  ];
  
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="relative">
            <h2 className="text-[44px] font-syne font-semibold text-white">
              Portfolio & Projects
            </h2>
            <img 
              src="/images/img_selectanimation.png" 
              alt="Decoration" 
              className="absolute -top-4 left-0 w-[86px] h-[75px]"
            />
          </div>
          
          <a href="#" className="text-[21px] font-syne text-white">
            See all our projects
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto rounded-[16px]"
              />
              
              <div className="absolute bottom-0 left-0 w-full h-[365px] bg-gradient-to-t from-black/90 to-transparent rounded-[16px] p-8 flex flex-col justify-end">
                <h3 className="text-[34px] font-syne font-medium text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[21px] font-syne text-white mb-6">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="bg-[#1a1a2b] rounded-[18px] w-[38px] h-[37px] border border-[#1e293b] flex items-center justify-center">
                    <img src={item.icon} alt="Technology icon" className="w-[23px] h-[23px]" />
                  </div>
                  
                  <button className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center">
                    <img src="/images/img_arrowforward.svg" alt="View project" className="w-[38px] h-[38px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`w-[12px] h-[12px] rounded-full mx-1 ${
                index === activeSlide 
                  ? 'bg-gradient-to-b from-[#a74dfe] to-[#13abeb]' 
                  : 'bg-[#181155]'
              }`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;