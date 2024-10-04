import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Cookies from 'js-cookie';

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
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fa-2x`}></i>
          </button>

          {/* Nav links */}
          <div className={`md:flex md:items-center space-x-6 ${isOpen ? 'hidden' : 'hidden'} md:block`}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              }
              end // This makes sure that the NavLink is only active when the exact path matches
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              }
              end // Add 'end' to ensure exact matching
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
              }
              end // Add 'end' to ensure exact matching
            >
              Contact
            </NavLink>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              Logout
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
                  ? 'block text-blue-600 font-semibold py-2'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200'
              }
              onClick={toggleMenu}
              end // Add 'end' for exact matching
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard/about"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200'
              }
              onClick={toggleMenu}
              end // Add 'end' for exact matching
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold py-2'
                  : 'block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors duration-200'
              }
              onClick={toggleMenu}
              end // Add 'end' for exact matching
            >
              Contact
            </NavLink>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 block text-center mt-4"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
