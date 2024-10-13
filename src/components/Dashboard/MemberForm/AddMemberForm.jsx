import React, { useState, useRef } from "react";
import axios from "axios";
import { FaAsterisk } from "react-icons/fa"; // Import required icon
import Swal from "sweetalert2"; // Import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // Optional: SweetAlert2 default styling
import Loader from "../../../utils/Loader"; // Import your loader component

const AddMemberForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    joiningDate: "",
    status: "Active",
    role: "member",
    profileImage: null,
  });

  const [loading, setLoading] = useState(false); // Loading state
  const fileInputRef = useRef(null); // Ref for file input

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();

    // Append all fields to FormData
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    // Add default image from public directory if no profile image is uploaded
    if (!formData.profileImage) {
      formDataToSubmit.append("profileImage", "default-profile.png");
    }

    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API}/api/v1/ecnmembers/addmember`,
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Member Added!",
        text: "The member was added successfully.",
      });

      // Reset the form after successful submission
      setFormData({
        name: "",
        fatherName: "",
        dob: "",
        address: "",
        phone: "",
        email: "",
        joiningDate: "",
        status: "Active",
        role: "member",
        profileImage: null,
      });

      // Reset file input
      fileInputRef.current.value = ""; // Clear file input
    } catch (error) {
      // Show error alert with specific message if available
      const errorMessage = error.response?.data?.message || "There was an error submitting the form. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: errorMessage,
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const createImagePreview = () => {
    if (formData.profileImage) {
      return URL.createObjectURL(formData.profileImage);
    }
    return "/ProfileImg/dummyProfile.png"; // Default image path in the public directory
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Add New Member
      </h2>

      {loading && <Loader />} {/* Show loader when loading is true */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Image Upload */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={createImagePreview()}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
            />
            <input
              type="file"
              name="profileImage" // Change to match the formData key
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              ref={fileInputRef} // Set ref for file input
            />
          </div>
          <div className="flex-grow">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name <span className="text-red-500"><FaAsterisk /></span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
              placeholder="Enter member's name"
              required
            />
          </div>
        </div>

        {/* Father's Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Father's Name <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            placeholder="Enter father's name"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Date of Birth <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Address <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            placeholder="Enter address"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            placeholder="Enter phone number"
            pattern="[0-9]{10}"
            required
          />
        </div>

        {/* Email (optional) */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            placeholder="Enter email"
          />
        </div>

        {/* Joining Date */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Joining Date <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            required
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Role */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
          >
            <option value="ECN Member">ECN Member</option>
            <option value="Member of Majils-e-Shura">Member of Majils-e-Shura</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition-all"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Add Member"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMemberForm;
