import { useEffect, useState } from 'react';
import React from 'react';
import { getNotice } from '../Api/notice.js';
import Noticecard from '../NoticeCard/Noticecard.jsx';
import FadeIn from '../FadeIn.jsx';
import { BreadcrumbsWithIcon } from '../Breadcrumbs/BreadCrumbs.jsx';
import { Spinner } from "@material-tailwind/react";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 25;

  useEffect(() => {
    getNotice()
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const breadcrumbItems = [
    { link: "/notices", name: "All - Notices" },
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const totalNotices = notices.length;
  const totalPages = Math.ceil(totalNotices / noticesPerPage);
  const startIndex = (currentPage - 1) * noticesPerPage;
  const selectedNotices = notices.slice(startIndex, startIndex + noticesPerPage);

  if (loading) {
    return (
      <div className="w-full md:w-3/4 flex flex-col justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg overflow-hidden">
        <header className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10 py-4">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">All Notices</h1>
          </FadeIn>
        </header>
        <main className="flex flex-col justify-center items-center p-4">
          <Spinner color="blue" className="w-12 h-12" />
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full md:w-3/4 flex flex-col justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg overflow-hidden">
        <header className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10 py-4">
          <FadeIn>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">All Notices</h1>
          </FadeIn>
        </header>
        <main className="flex flex-col justify-center items-center p-4">
          <p className="text-red-500 dark:text-red-400">Failed to load notices. Please try again later.</p>
        </main>
      </div>
    );
  }

  return (
    <div className='w-full mt-12'>
      <div className='mt-12 mx-9'>
      <BreadcrumbsWithIcon items={breadcrumbItems} />
      </div>
    <div className="w-full md:w-3/4 flex flex-col gap-4 justify-center items-center mx-auto h-screen bg-gray-100 dark:bg-gray-900 mt-10 rounded-lg overflow-hidden">
      <header className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10 py-4">
        <FadeIn>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 font-serif">All Notices</h1>
        </FadeIn>
      </header>
      <main className="flex flex-col gap-4 items-center overflow-auto p-4 max-h-[calc(100vh-80px)]" style={{
        scrollbarWidth: 'thin', /* Firefox */
        scrollbarColor: '#90A4AE #CFD8DC', /* Firefox */
      }}>
        {selectedNotices.map((e) => (
          <FadeIn key={e.id}>
            <Noticecard date={e.date} title={e.title} link={e.link} />
          </FadeIn>
        ))}
      </main>
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
    </div>
    </div>
  );
};

export default Notices;
