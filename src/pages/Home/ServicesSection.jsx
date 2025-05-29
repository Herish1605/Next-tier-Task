import React from 'react';
import Card from '../../components/common/Card';

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile app desiging",
      description: "Mobile app design shapes the visual interface and user experience, involving layout, colors, and interactive features.",
      icon: <img src="/images/img_group_1171275029.svg" alt="Mobile app design icon" className="w-[109px] h-[109px]" />
    },
    {
      title: "Website Designing",
      description: "Website design combines visual elements, layout, graphic design, and coding for an attractive and seamless online presence.",
      icon: <img src="/images/img_group_175.svg" alt="Website design icon" className="w-[107px] h-[107px]" />
    },
    {
      title: "Digital marketing",
      description: "Digital marketing uses online channels—social media, search engines, email—to engage target audiences.",
      icon: (
        <div className="bg-[#251951a5] rounded-[53px] w-[107px] h-[107px] flex items-center justify-center">
          <img src="/images/img_group_deep_purple_a200_05.svg" alt="Digital marketing icon" className="w-[37px] h-[35px]" />
        </div>
      )
    }
  ];

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[44px] font-syne font-semibold text-white mb-6">
            Services that lead the way to better business
          </h2>
          <p className="text-[22px] font-syne text-white/80 max-w-4xl mx-auto">
            Faucibus fringilla sed integer cursus tellus et, quis ultricies. Aliquam, faucibus arcu in laoreet ac elementum in eget. Massa urna viverra vulputate euismod pulvinar nibh in vel. Laoreet blandit etiam orci est in vel lacus neque pretiu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              gradient={true}
              borderGradient={true}
              className="p-6 flex flex-col items-center text-center h-[402px]"
              title={service.title}
              description={service.description}
              icon={
                <div className="mb-12 mt-8">
                  {service.icon}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;