import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Cookies from 'js-cookie';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Clear authentication state
    setAuth({ user: null, token: "" });

    // Remove the cookie
    Cookies.remove('auth');

    // Clear localStorage (if used)
    localStorage.removeItem('auth');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <header>
      <nav className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Brand */}
          <Link to="/dashboard" className="text-2xl font-bold text-gray-900 dark:text-white">
            ECN Dashboard
          </Link>

          {/* Toggle for mobile view */}
          <button
            className="md:hidden text-gray-900 dark:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle icons */}
          </button>

          {/* Nav links */}
          <div className={`md:flex md:items-center space-x-6 ${isOpen ? 'hidden' : 'hidden'} md:block`}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold flex items-center'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center'
              }
              end // This makes sure that the NavLink is only active when the exact path matches
            >
              <FaHome className="mr-1" /> Home
            </NavLink>

            <NavLink
              to="/dashboard/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold flex items-center'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center'
              }
              end
            >
              <FaInfoCircle className="mr-1" /> About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold flex items-center'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center'
              }
              end
            >
              <FaEnvelope className="mr-1" /> Contact
            </NavLink>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 flex items-center"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700`}>
          <div className="container mx-auto px-4 py-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2 flex items-center'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200 flex items-center'
              }
              onClick={toggleMenu}
              end
            >
              <FaHome className="mr-1" /> Home
            </NavLink>

            <NavLink
              to="/dashboard/about"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2 flex items-center'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200 flex items-center'
              }
              onClick={toggleMenu}
              end
            >
              <FaInfoCircle className="mr-1" /> About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2 flex items-center'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200 flex items-center'
              }
              onClick={toggleMenu}
              end
            >
              <FaEnvelope className="mr-1" /> Contact
            </NavLink>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 block text-center mt-4 flex items-center justify-center"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
