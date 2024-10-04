import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

export const Layout = ({ children }) => {
  const { auth, loading } = useAuth(); // Get loading state from auth context
  const navigate = useNavigate();

  // Redirect to login if no user is authenticated and not loading
  useEffect(() => {
    if (!loading && !auth?.user) {
      // This will only redirect when the user is not authenticated
      // and it is not on the login route
      if (window.location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [auth, loading, navigate]);

  // Show a loading indicator while loading
  if (loading) {
    return <div>Loading...</div>; // Replace this with a spinner or loader component if desired
  }

  return (
    <div>
      {auth?.user ? (
        <>
          <Navbar />
          <main>
            <Toaster />
            {children}
          </main>
          <Footer />
        </>
      ) : (
        <>
          <Toaster />
          {children} {/* Always render children, including login */}
        </>
      )}
    </div>
  );
};
