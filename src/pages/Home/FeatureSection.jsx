import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/ui/Button';

const FeatureSection = () => {
  return (
    <section className="py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-12">
          {/* Onboarding Tutorials Card */}
          <Card 
            borderGradient={true}
            className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div>
              <h2 className="text-[34px] font-syne font-semibold text-white mb-6">
                Get Started with MakBig's <br />
                <span className="text-[#5169f6]">Onboarding Tutorials</span>
              </h2>
              <p className="text-[18px] font-syne leading-[30px] text-[#fcfcfc]">
                New to MakBig? No problem. Our onboarding tutorials guide you through the process of creating a profile, posting a project, and submitting proposals. With MakBig's user-friendly interface and helpful tutorials, you'll be up and running in no time. Join our community of skilled freelancers, trusted clients, and experienced mentors today.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/images/img_group_182790.svg" 
                alt="Tutorial illustration" 
                className="max-w-full h-auto"
              />
            </div>
          </Card>
          
          {/* Industry Insights Card */}
          <Card 
            borderGradient={true}
            className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="relative">
              <div className="bg-[#0d1117] rounded-[15px] border border-[#475569] p-4 mb-6 relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#21262d] rounded-[2px] h-[11px] w-[31px]"></div>
                  <div className="bg-[#21262d] rounded-[2px] h-[11px] w-[31px]"></div>
                  <div className="bg-[#21262d] rounded-[2px] h-[11px] w-[31px]"></div>
                  <div className="bg-[#1f6feb] rounded-[2px] h-[11px] w-[31px] ml-auto"></div>
                </div>
                <p className="text-[15px] font-['Space_Grotesk'] text-white mb-4">
                  <span className="text-[#4da1f4]">github</span>
                  <span className="text-[#58a1d2]"> </span>
                  <span className="text-[#94a3b8]">/ </span>
                  <span className="text-[#4da1f4] font-semibold">diosamuel</span>
                </p>
                <div className="bg-[#161b22] h-[14px] w-full rounded-t-[3px]"></div>
              </div>
              
              <div className="absolute top-[135px] left-[67px]">
                <img src="/images/img_rectangle_12.svg" alt="Rectangle" className="w-[41px] h-[40px]" />
              </div>
              
              <div className="bg-[#0f172ae5] border border-[#0e2f75e5] rounded-[20px] shadow-md p-6 relative z-10 ml-[94px] mt-[30px]">
                <h3 className="text-[27px] font-['Nunito_Sans'] font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img src="/images/img_vector.svg" alt="Icon" className="w-[41px] h-[36px]" />
                  <img src="/images/img_shape_green_600.svg" alt="Icon" className="w-[36px] h-[41px]" />
                  <div className="flex flex-wrap">
                    <div className="bg-[#f24e1e] w-[14px] h-[14px] rounded-[7px_0px_7px_0px]"></div>
                    <div className="bg-[#ff7262] w-[14px] h-[14px] rounded-[0px_7px_0px_7px]"></div>
                    <div className="bg-[#a259ff] w-[13px] h-[14px] rounded-[6px_0px_6px_0px]"></div>
                    <img src="/images/img_vector_light_blue_400.svg" alt="Icon" className="w-[14px] h-[13px]" />
                    <div className="bg-[#0acf83] w-[14px] h-[14px] rounded-[7px_0px_7px_7px]"></div>
                  </div>
                  <img src="/images/img_shape.svg" alt="Icon" className="w-[39px] h-[38px]" />
                </div>
              </div>
              
              <img src="/images/img_vector_2.svg" alt="Vector" className="absolute right-[104px] top-[255px] z-20" />
              <img src="/images/img_vector_3.svg" alt="Vector" className="absolute right-[46px] top-[255px] z-20" />
            </div>
            
            <div>
              <h2 className="text-[34px] font-syne font-semibold text-white mb-6">
                Stay Ahead of the Game with <br />
                MakBig's Industry InSights
              </h2>
              <p className="text-[18px] font-syne leading-[30px] text-[#fcfcfc]">
                Get ahead of the competition with MakBig exclusive industry insights and trends. Our platform offers valuable content that keeps you-to-date on the latest developments in your industry, allowing you to make informed decisions on your projects. With MakBig, you're always one step ahead.
              </p>
            </div>
          </Card>
          
          {/* Hire Top Talent Card */}
          <Card 
            borderGradient={true}
            className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div>
              <img 
                src="/images/img_image.png" 
                alt="Professional freelancer" 
                className="rounded-[15px] max-w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-[34px] font-['Nunito_Sans'] font-semibold text-white mb-6">
                Hire Top Talent
              </h2>
              <p className="text-[18px] font-syne leading-[30px] text-[#fcfcfc] mb-12">
                Create an attractive employer brand: Develop a Strong and appealing employer brand that showcase your company culture, values, and benefits. Highlight what makes your organization a great place to work.
              </p>
              <Button 
                variant="primary"
                className="bg-gradient-to-r from-[#ab48fe] to-[#17a7ec] rounded-[30px] h-[60px] w-[235px] border-2 border-[#8892ca4c]"
              >
                <span className="text-[30px] font-syne font-semibold">Hire now</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;