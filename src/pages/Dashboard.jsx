import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { FaQuran, FaBook, FaGlobe, FaUserPlus, FaImages } from "react-icons/fa"; // Importing icons

const Dashboard = () => {
  const { auth } = useAuth();
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${import.meta.env.VITE_APP_API}/api/v1/auth/user`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${auth.token}`,
  //           },
  //         }
  //       );
  //       setUser(res.data.user);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUser();
  // }, [auth.token]); // Adding dependency array to avoid infinite loop

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-12">
        Welcome to the ECN Dashboard{" "}
        {/* Display user name */}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Quran Section */}
        <Link
          to="/dashboard/upload/quran"
          className="flex flex-col items-center justify-center h-56 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <FaQuran className="text-green-600 dark:text-green-400 text-5xl mb-4" />{" "}
          {/* Icon */}
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            Quran
          </span>
        </Link>

        {/* Islamic Books Section */}
        <Link
          to="/dashboard/upload/islamicbooks"
          className="flex flex-col items-center justify-center h-56 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <FaBook className="text-blue-600 dark:text-blue-400 text-5xl mb-4" />{" "}
          {/* Icon */}
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            Islamic Books
          </span>
        </Link>

        {/* General Books Section */}
        <Link
          to="/dashboard/upload/generalbook"
          className="flex flex-col items-center justify-center h-56 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <FaGlobe className="text-purple-600 dark:text-purple-400 text-5xl mb-4" />{" "}
          {/* Icon */}
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            General Books
          </span>
        </Link>

        {/* Add new member */}
        <Link
          to="/dashboard/upload/ecnmember"
          className="flex flex-col items-center justify-center h-56 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <FaUserPlus className="text-teal-600 dark:text-teal-400 text-5xl mb-4" />{" "}
          {/* Updated Icon */}
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            Add ECN Member
          </span>
        </Link>


        {/* Add pyq */}
        <Link
          to="/dashboard/upload/pyq"
          className="flex flex-col items-center justify-center h-56 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <FaBook className="text-blue-600 dark:text-blue-400 text-5xl mb-4" />{" "}
          {/* Updated Icon */}
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            Add PYQs
          </span>
        </Link>


        {/* Add images */}
        <Link
          to="/dashboard/upload/images"
          className="flex flex-col items-center justify-center h-56 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <FaImages className="text-teal-600 dark:text-teal-400 text-5xl mb-4" />{" "}
          {/* Updated Icon */}
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            Add Images
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
