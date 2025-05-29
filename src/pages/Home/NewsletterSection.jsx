import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="bg-gradient-to-b from-[#ad4aff] to-[#5480f7] rounded-[20px] py-12 px-8 max-w-4xl mx-auto">
          <h2 className="text-[30px] font-syne font-semibold text-white text-center mb-8">
            Subscribe to newsletter to stay up to<br />
            data on our latest news
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-grow">
              <InputField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
                className="h-[75px] rounded-[15px]"
              />
            </div>
            <Button 
              type="submit"
              variant="primary"
              className="bg-[#3671e9] h-[63px] rounded-[15px] px-6"
            >
              <span className="text-[18px] font-syne font-semibold">Subscribe</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;