// Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <footer className="flex justify-between w-full px-4 py-2 bg-gray-100 dark:bg-gray-900">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="text-blue-500 hover:underline disabled:text-gray-500"
      >
        Previous
      </button>
      <p className="text-gray-900 dark:text-gray-100">
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="text-blue-500 hover:underline disabled:text-gray-500"
      >
        Next
      </button>
    </footer>
  );
};

export default Pagination;
