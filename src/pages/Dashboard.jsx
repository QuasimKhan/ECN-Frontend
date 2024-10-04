import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';

const Dashboard = () => {
  const { auth, setAuth } = useAuth();
  const [user, setUser] = useState(null); // State to store user data

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/auth/user`, {
//           headers: {
//             Authorization: `Bearer ${auth.token}`
//           }
//         });
//         setUser(res.data.user);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchUser();
//   }, [])

useEffect(() => {

    const fetchUser = async () => {
      await axios.get(`${import.meta.env.VITE_APP_API}/api/v1/auth/user`)
      .then(res => {
        setUser(res.data.user)
      })
      .catch(err => {
        console.log(err)
      })

    }

    fetchUser()
})

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Welcome{user ? `, ${auth.user.name}` : ''} to the ECN Dashboard {/* Display user name */}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link 
          to="/dashboard/quran"
          className="flex items-center justify-center h-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
        >
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Quran
          </span>
        </Link>

        <Link 
          to="/dashboard/islamicbooks"
          className="flex items-center justify-center h-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
        >
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Islamic Book
          </span>
        </Link>

        <Link 
          to="/dashboard/generalbook"
          className="flex items-center justify-center h-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
        >
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            General Book
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
