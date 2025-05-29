import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className="py-8 px-4 md:px-10 flex items-center justify-between relative z-10">
      <div className="flex items-center">
        <div className="flex items-center mr-10">
          <div className="relative">
            <img src="/images/img_subtract.png" alt="Logo background" className="w-[53px] h-[32px]" />
            <span className="absolute top-1 left-5 text-[15px] font-['Russo_One'] text-[#07071c] uppercase">M</span>
          </div>
          <span className="text-[29px] font-['Russo_One'] text-white uppercase ml-2">MakBig</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-[22px] font-syne font-medium text-white">Products</Link>
          <Link to="/" className="text-[22px] font-syne font-medium text-white">Service</Link>
          <Link to="/" className="text-[22px] font-syne font-medium text-white">About</Link>
          <Link to="/" className="text-[22px] font-syne font-medium text-white">Contact</Link>
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-[22px] font-syne font-medium text-white">Log in</Link>
        <Button 
          variant="primary" 
          outlined={true}
          className="border border-white rounded-[29px] px-6 py-3"
        >
          <span className="text-[22px] font-syne font-medium">Register</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;