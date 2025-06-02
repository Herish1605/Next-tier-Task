import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  title,
  description,
  icon,
  image,
  gradient = false,
  borderGradient = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = "rounded-[20px] overflow-hidden";
  
  const gradientClasses = gradient 
    ? "bg-gradient-to-br from-[#120e33] via-[#120e33] to-[#1f1f24]" 
    : "bg-[#120e33]";
  
  const borderClasses = borderGradient 
    ? "border-2 border-transparent bg-origin-border bg-clip-padding" 
    : "";

  const borderGradientStyle = borderGradient ? {
    backgroundImage: "linear-gradient(133deg, #c456ff 0%, #8892cb4c 50%, #c456ff 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    borderColor: "transparent"
  } : {};

  return (
    <div 
      className={`${baseClasses} ${gradientClasses} ${borderClasses} ${className}`}
      style={borderGradientStyle}
      {...props}
    >
      {children ? (
        // If children are passed, render them directly — allowing layout flexibility
        children
      ) : (
        // Fallback rendering if no custom children are passed
        <div className="p-6">
          {image && (
            <div className="w-full mb-4">
              <img src={image} alt={title} className="w-full h-auto" />
            </div>
          )}

          {icon && (
            <div className="mb-4">
              {icon}
            </div>
          )}

          {title && (
            <h3 className="text-xl font-syne font-semibold text-white mb-2">{title}</h3>
          )}

          {description && (
            <p className="text-white/80 font-syne">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  image: PropTypes.string,
  gradient: PropTypes.bool,
  borderGradient: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;