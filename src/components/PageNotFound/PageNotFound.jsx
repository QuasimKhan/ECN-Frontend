import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-1/2 mt-12  text-gray-900 dark:text-gray-100 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-lg md:text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
