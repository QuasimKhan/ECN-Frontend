import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";

export function BreadcrumbsWithIcon({ items }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Split the current path into an array of segments
  const pathSegments = currentPath.split('/').filter(Boolean);

  // Create breadcrumb items dynamically based on the current path
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return {
      link: path,
      name: segment.toUpperCase().replace(/-/g, ' '), // Replace all hyphens with spaces for display
    };
  });

  return (
    <div className="w-full overflow-x-auto">
      <Breadcrumbs className="bg-gray-300 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-2 rounded-md inline-flex">
        <Link to="/" className="opacity-60 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 dark:text-gray-100 dark:hover:text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        {breadcrumbItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`${
              index !== breadcrumbItems.length - 1
                ? "opacity-60 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                : "dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
            } ml-2`}
          >
            {item.name}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
