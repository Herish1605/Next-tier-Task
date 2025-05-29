import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  outlined = false,
  fullWidth = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-syne font-semibold transition-all duration-200 focus:outline-none rounded-full';
  
  const variants = {
    primary: outlined 
      ? 'border border-white text-white hover:bg-white/10' :'bg-gradient-to-r from-[#ad4aff] to-[#5480f7] text-white hover:shadow-lg',
    secondary: outlined 
      ? 'border border-gray-300 text-gray-700 hover:bg-gray-50' :'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-xl',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={buttonClasses} 
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  outlined: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;