import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <div 
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-[20px] font-syne font-semibold text-white">{item.title}</h3>
            <div className="transform transition-transform duration-200">
              <img 
                src="/images/img_vector_blue_gray_800.svg" 
                alt="Toggle" 
                className={`w-[11px] h-[22px] transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : ''}`}
              />
            </div>
          </div>
          
          {activeIndex === index && (
            <div className="py-2 text-white/80 font-syne text-[16px]">
              {item.content}
            </div>
          )}
          
          <div className="h-[1px] w-full bg-[#282d45] mt-2"></div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Accordion;