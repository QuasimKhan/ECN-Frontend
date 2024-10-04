import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  

  
  return (
    
     
      <div className=" mt-12 flex flex-col  text-gray-900 dark:text-white  p-6 transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-4 text-center">Book Categories</h1>
        <div className="space-y-4">
          <Link
            to="/books/quran"
            className="block p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <h2 className="text-xl font-semibold">Quran</h2>
          </Link>
          <Link
            to="/books/hadees"
            className="block p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <h2 className="text-xl font-semibold">Hadees</h2>
          </Link>
          <Link
            to="/books/islamic-books"
            className="block p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <h2 className="text-xl font-semibold">Islamic Books</h2>
          </Link>
          <Link
            to="/books/general-books"
            className="block p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <h2 className="text-xl font-semibold">General Books</h2>
          </Link>
        </div>
      </div>
 
  );
};

export default Books;
