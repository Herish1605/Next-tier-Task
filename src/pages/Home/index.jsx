import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import StatsSection from './StatsSection';
import FeatureSection from './FeatureSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';
import SupportSection from './SupportSection';
import HowItWorksSection from './HowItWorksSection';
import FaqSection from './FaqSection';
import NewsletterSection from './NewsletterSection';

const HomePage = () => {
  return (
    <div className="bg-[#07071c] min-h-screen">
      {/* Background elements */}
      <img 
        src="/images/img_looper3.png" 
        alt="Background shape" 
        className="absolute top-[1258px] right-[1118px] z-0"
      />
      <img 
        src="/images/img_looper3_blue_gray_900.png" 
        alt="Background shape" 
        className="absolute top-[2721px] left-0 z-0"
      />
      <img 
        src="/images/img_group_11.png" 
        alt="Background shape" 
        className="absolute top-[4740px] right-[1319px] z-0"
      />
      
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <ServicesSection />
        <PortfolioSection />
        <SupportSection />
        <HowItWorksSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;