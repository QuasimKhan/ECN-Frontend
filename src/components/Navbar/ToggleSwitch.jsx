import React from 'react';

const ToggleSwitch = ({ darkMode, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`relative flex items-center cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} w-14 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out`}
    >
      <div
        className={`absolute left-1 top-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${darkMode ? 'transform translate-x-6' : ''} w-6 h-6`}
      />
      <span className={`text-xs font-medium ${darkMode ? 'text-white' : 'text-gray-800'} absolute left-1/2 transform -translate-x-1/2`}>
        {/* {darkMode ? 'Night' : 'Day'} */}
      </span>
    </div>
  );
};

export default ToggleSwitch;
