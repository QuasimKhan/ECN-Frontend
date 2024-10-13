import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Loader from '../../utils/Loader';

const ProtectedRoute = ({ children }) => {
  const { auth, loading } = useAuth();

  // Show a loading indicator while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader" /> {/* Replace with a Tailwind spinner, if desired */}
        <Loader />
      </div>
    );
  }

  // Redirect to the login page if not authenticated
  if (!auth?.user || !auth?.token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the requested component (children)
  return children;
};

export default ProtectedRoute;
