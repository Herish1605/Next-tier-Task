import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#07071c] pt-16 pb-8 px-4 md:px-10">
      <div className="container mx-auto">

        {/* Company Info (Full width) */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="relative">
              <img src="/images/img_subtract.png" alt="Logo background" className="w-[38px] h-[23px]" />
              <span className="absolute top-0.5 left-3.5 text-[10px] font-['Russo_One'] text-[#07071c] uppercase">M</span>
            </div>
            <span className="text-[20px] font-['Russo_One'] text-white uppercase ml-2">MakBig</span>
          </div>
          <p className="text-[18px] font-syne text-white/80 max-w-[299px]">
            Boost your freelance journey with MakBig's platform. Access top projects and clients seamlessly, collaborating with innovative businesses for limitless potential.
          </p>
        </div>

        {/* Footer Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Product Links */}
          <div>
            <h3 className="text-[20px] font-syne font-bold text-white mb-4">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/landing" className="text-[16px] font-syne text-white">Landing Page</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Popup Builder</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Content</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[20px] font-syne font-bold text-white mb-4">Quick link</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-[16px] font-syne text-white">Hire talent</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Find work</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Community</Link></li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-[20px] font-syne font-bold text-white mb-4">About</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-[16px] font-syne text-white">Academy</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Themes</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Support</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[20px] font-syne font-bold text-white mb-4">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-[16px] font-syne text-white">Careers</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">FAQs</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Privacy policy</Link></li>
              <li><Link to="/" className="text-[16px] font-syne text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/33 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link to="/" className="text-[16px] font-symbol text-white">Privacy Policy</Link>
            <Link to="/" className="text-[16px] font-symbol text-white">Terms of Use</Link>
            <Link to="/" className="text-[16px] font-symbol text-white">Sales and Refunds</Link>
            <Link to="/" className="text-[16px] font-symbol text-white">Legal</Link>
            <Link to="/" className="text-[16px] font-symbol text-white">Site Map</Link>
          </div>

          <div>
            <p className="text-[12px] font-syne text-white">© 2021 All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;