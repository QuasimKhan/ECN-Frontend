import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../FadeIn';


export default function Footer() {


  return (
    <footer className={`w-full py-6 px-4  mt-12 border-t border-gray-300 pt-4`}>
        <FadeIn>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} <Link to="/" className={`hover:text-gray-400 `}>
                ECN
              </Link>. All rights reserved.</p>
          <p className="mt-2">Designed by Quasim Khan.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className={`hover:text-gray-400 `}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`hover:text-gray-400 `}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className={`hover:text-gray-400 `}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`hover:text-gray-400 `}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </FadeIn>
    </footer>
  );
}
