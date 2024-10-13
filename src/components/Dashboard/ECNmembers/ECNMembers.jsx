import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import Swal from "sweetalert2"; // Import SweetAlert2
import { FaEdit, FaTrash } from "react-icons/fa"; // Import React Icons
import Loader from "../../../utils/Loader";

const ECNMembers = () => {
  const [members, setMembers] = useState([]); // State to store members data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate(); // useNavigate hook for redirection

  useEffect(() => {
    // Function to fetch data from the API
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API}/api/v1/ecnmembers` // API endpoint to fetch members
        );
        setMembers(response.data.data); // Update the state with fetched data
        setLoading(false); // Turn off loading state after data is fetched
      } catch (err) {
        setError("Failed to fetch members.");
        setLoading(false); // Turn off loading state even if there's an error
      }
    };

    fetchMembers(); // Call the function to fetch data on component mount
  }, []);

  const handleDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (!confirmed.isConfirmed) return;

    try {
      await axios.delete(`${import.meta.env.VITE_APP_API}/api/v1/ecnmembers/delete/${id}`);
      setMembers(members.filter((member) => member._id !== id)); // Remove deleted member from state
      Swal.fire('Deleted!', 'The member has been deleted.', 'success'); // Success message
    } catch (err) {
      Swal.fire('Error!', 'Failed to delete member.', 'error'); // Error message
      console.error("Failed to delete member:", err);
    }
  };

  const handleEdit = (id) => {
    // Redirect to the edit form route and pass the member ID
    navigate(`/dashboard/ecnmembers/edit/${id}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  if (loading) return <div><Loader /></div>; // Show a loading state
  if (error) return <div>{error}</div>; // Show error message if there is one

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mt-12 text-gray-900 dark:text-gray-100 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          ECN Members
        </h2>
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Total Members: {members.length}
        </h2>
      </div>
      <ul className="space-y-4">
        {members.length > 0 ? (
          members.map((member) => (
            <li key={member._id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Circular profile image */}
              <img 
                src={member.profileImage || "path/to/default/image.jpg"} 
                alt={`${member.name}'s profile`} 
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" 
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {member.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">Father’s Name: {member.fatherName}</p>
                <p className="text-gray-700 dark:text-gray-300">Date of Birth: {formatDate(member.dob)}</p>
                <p className="text-gray-700 dark:text-gray-300">Role: {member.role}</p>
                <p className="text-gray-700 dark:text-gray-300">Address: {member.address}</p>
                <p className="text-gray-700 dark:text-gray-300">Phone: {member.phone}</p>
                <p className="text-gray-700 dark:text-gray-300">Email: {member.email || "N/A"}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Joining Date: {formatDate(member.joiningDate)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-0">
                <button
                  onClick={() => handleEdit(member._id)}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-300">No members found.</p>
        )}
      </ul>
    </div>
  );
};

export default ECNMembers;
