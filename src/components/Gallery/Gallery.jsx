import React, { useEffect, useState } from "react";
import FadeIn from "../FadeIn";
import Pagination from "../Pagination/Pagination";
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress
import { BreadcrumbsWithIcon } from '../Breadcrumbs/BreadCrumbs.jsx';

export function GalleryWithTab() {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(parseInt(page, 10) || 1);
  const imagesPerPage = 30;
  const [data, setData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(""); // Default active dropdown
  const [loadingImages, setLoadingImages] = useState({}); // Track loading state of each image
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch data on component mount
    fetch("/json/galleryData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setData(data);
          setActiveDropdown(data[0].value); // Set the first dropdown item as active
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Update currentPage when page param changes
    setCurrentPage(parseInt(page, 10) || 1);
  }, [page]);

  useEffect(() => {
    // Reset to page 1 when activeDropdown changes
    setCurrentPage(1);
  }, [activeDropdown]);

  const breadcrumbItems = [
    { link: "/gallery", name: "Gallery" },
    { link: `/gallery/${currentPage}`, name: `${currentPage}` },
  ];

  const handleImageLoad = (value, index) => {
    setLoadingImages((prev) => ({
      ...prev,
      [`${value}-${index}`]: false, // Hide spinner when image is loaded
    }));
  };

  const handleImageError = (value, index) => {
    setLoadingImages((prev) => ({
      ...prev,
      [`${value}-${index}`]: false, // Hide spinner if there is an error loading the image
    }));
  };

  const handleImageLoadStart = (value, index) => {
    setLoadingImages((prev) => ({
      ...prev,
      [`${value}-${index}`]: true, // Show spinner when image starts loading
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full border-b border-gray-300 pb-4">
        <CircularProgress /> {/* Full page spinner */}
      </div>
    );
  }

  // Filter data based on the active dropdown or include all if activeDropdown is empty
  const filteredData = data
    .filter(({ value }) => value === activeDropdown || activeDropdown === "")
    .flatMap(({ images }) => images);

  // Calculate total images and pages
  const totalImages = filteredData.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  // Paginate data based on activeDropdown and currentPage
  const paginatedData = data.map(({ label, value, images }) => ({
    label,
    value,
    images: images.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage),
  }));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='w-full mt-12'>
      <div className="border-b border-gray-300 pb-4">
        <div className='mt-12 mx-9'>
          <BreadcrumbsWithIcon items={breadcrumbItems} />
        </div>

        <div className="mt-6 mb-4 flex justify-center font-serif relative">
          <div className="relative inline-block text-left w-full max-w-xs md:max-w-sm">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
              id="menu-button"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {data.find(item => item.value === activeDropdown)?.label || "Select Category"}
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="origin-top-right absolute top-full mt-2 w-full max-w-xs md:max-w-sm rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1" role="none">
                  <button
                    className="text-gray-700 dark:text-gray-100 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    role="menuitem"
                    onClick={() => { setActiveDropdown(""); setIsDropdownOpen(false); }}
                  >
                    All Categories
                  </button>
                  {data.map(({ label, value }) => (
                    <button
                      key={value}
                      className="text-gray-700 dark:text-gray-100 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                      role="menuitem"
                      onClick={() => {
                        setActiveDropdown(value);
                        setIsDropdownOpen(false);
                        setCurrentPage(1); // Reset to first page when category changes
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          {paginatedData
            .filter(({ value }) => value === activeDropdown || activeDropdown === "")
            .map(({ value, images }) => (
              <FadeIn key={value} show={activeDropdown === value || activeDropdown === ""}>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {images?.map(({ imageLink }, index) => (
                    <div key={index} className="relative h-60 w-full">
                      {loadingImages[`${value}-${index}`] !== false && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <CircularProgress /> {/* Individual image spinner */}
                        </div>
                      )}
                      <img
                        className={`h-60 w-full max-w-full rounded-lg object-cover object-center transition-opacity ${
                          loadingImages[`${value}-${index}`] ? "opacity-0" : "opacity-100"
                        }`}
                        src={imageLink}
                        alt={`image-${index}`}
                        onLoad={() => handleImageLoad(value, index)}
                        onError={() => handleImageError(value, index)}
                        onLoadStart={() => handleImageLoadStart(value, index)}
                      />
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
