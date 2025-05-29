import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  className = '',
  required = false,
  disabled = false,
  icon,
  ...props
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id || name}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none
          ${icon ? 'pl-10' : 'pl-4'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        `}
        {...props}
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

export default InputField;