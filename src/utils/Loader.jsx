// src/components/Loader.jsx
import React from 'react';

const Loader = ({ size = 12, color = "text-blue-600" , message}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div
        className={`w-${size} h-${size} border-4 border-dashed rounded-full animate-spin ${color} border-t-transparent`}
        role="status"
        aria-label="Loading"
      >

        {message && <span className="sr-only">{message}</span>}

      </div>
    </div>
  );
};

export default Loader;
