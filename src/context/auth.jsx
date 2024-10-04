import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

// Create the AuthContext with a default value
const AuthContext = createContext();

// AuthProvider component to wrap around the app
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ''
  });

  axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;

  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      setAuth({
        user: parsedAuth.user,
        token: parsedAuth.token
      });
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []); // Runs only once when the component mounts

  // Function to save auth data to both state and localStorage
  const saveAuthData = (data) => {
    localStorage.setItem('auth', JSON.stringify(data));
    setAuth({
      user: data.user,
      token: data.token
    });
  };

  // Function to clear auth data on logout
  const clearAuthData = () => {
    localStorage.removeItem('auth');
    setAuth({
      user: null,
      token: ''
    });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: saveAuthData, clearAuthData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
