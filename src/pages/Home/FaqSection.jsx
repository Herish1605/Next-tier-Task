import React from 'react';
import Accordion from '../../components/common/Accordion';

const FaqSection = () => {
  const faqItems = [
    {
      title: "Why should my company use MakBig?",
      content: "MakBig provides access to a global pool of talented freelancers who can help your business with various digital needs. Our platform offers a streamlined process for finding, hiring, and collaborating with professionals across different fields."
    },
    {
      title: "How can we use MakBig effectively?",
      content: "To use MakBig effectively, create a detailed project brief, set clear expectations, communicate regularly with freelancers, and provide feedback. Our platform offers tools to help you manage projects, track progress, and ensure successful outcomes."
    },
    {
      title: "Is Makbig secure?",
      content: "Yes, MakBig implements robust security measures to protect your data and transactions. We use encryption, secure payment processing, and verification procedures to ensure a safe environment for both clients and freelancers."
    },
    {
      title: "Is Makbig more secure than email?",
      content: "Absolutely. Unlike email which can be vulnerable to phishing and security breaches, MakBig provides a secure platform with encrypted communications, secure file sharing, and protected payment processing specifically designed for professional collaborations."
    },
    {
      title: "What is makbig Connect?",
      content: "MakBig Connect is our premium service that provides personalized matching between businesses and top-tier freelancers. It includes additional support, curated talent pools, and enhanced collaboration tools for more complex or high-value projects."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="bg-[#07071c] border border-transparent rounded-[20px] p-12 relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(180deg, #a44ffe 0%, #12aeeb 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            borderColor: "transparent"
          }}
        >
          <h2 className="text-[44px] font-syne font-semibold text-white text-center mb-12">
            Frequently asked questions
          </h2>
          
          <Accordion items={faqItems} className="max-w-4xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;