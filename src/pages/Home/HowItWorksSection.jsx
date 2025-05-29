import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Outline Your Business Goal",
      description: "Long-established: A reader is distracted by readable content and layout when viewing a page."
    },
    {
      number: "Step 2",
      title: "Reach Your Right Customer",
      description: "Long-established: A reader is distracted by readable content and layout when viewing a page."
    },
    {
      number: "Step 3",
      title: "Get Your Result",
      description: "Long-established: A reader is distracted by readable content and layout when viewing a page."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-10 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[18px] font-syne font-medium uppercase mb-4 bg-gradient-to-b from-[#925afc] to-[#16a8ec] bg-clip-text text-transparent">
            Working Process
          </p>
          <h2 className="text-[44px] font-syne font-semibold text-white">
            How Does Bestkit Works?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-b from-[#ad4aff] to-[#5480f7] w-[80px] h-[80px] rounded-[18px] border border-white flex items-center justify-center mb-6">
                {index === 0 && (
                  <img src="/images/img_send.svg" alt="Step icon" className="w-[30px] h-[30px]" />
                )}
                {index === 1 && (
                  <img src="/images/img_usercheck_2.svg" alt="Step icon" className="w-[30px] h-[30px]" />
                )}
                {index === 2 && (
                  <img src="/images/img_coffee_1.svg" alt="Step icon" className="w-[30px] h-[30px]" />
                )}
              </div>
              
              <p className="text-[14px] font-syne font-medium text-[#777e90] mb-2">
                {step.number}
              </p>
              <h3 className="text-[18px] font-syne font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-[16px] font-syne text-white/80 max-w-[280px]">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[5.8rem] left-[calc(16.67% + 8rem + 1rem)] w-[256px] h-[50px]">
                  <img 
                    src="/images/img_group_1171275044.svg" 
                    alt="Connection line" 
                    className="w-full h-full"
                  />
                </div>
              )}
              
              {index === 0 && (
                <div className="hidden md:block absolute top-[5.8rem] left-[calc(50% + 1rem)] w-[256px] h-[50px]">
                  <img 
                    src="/images/img_group_1171275044.svg" 
                    alt="Connection line" 
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Background element */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[5.5rem] w-[520px] h-[148px] bg-[#4a4efc66] rounded shadow-xl opacity-30"></div>
      </div>
    </section>
  );
};

export default HowItWorksSection;