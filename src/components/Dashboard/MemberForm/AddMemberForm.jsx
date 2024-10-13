import React, { useState, useRef } from "react";
import axios from "axios";
import { FaAsterisk } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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
    role: "ECN Member", // Set default role to "ECN Member"
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
  
    // If profileImage is null, use a default image URL
    if (!formData.profileImage) {
      formDataToSubmit.append("profileImageUrl", "https://cdn-icons-png.flaticon.com/512/149/149071.png");
    } else {
      formDataToSubmit.append("profileImage", formData.profileImage);
    }
  
    // Append all other fields to FormData
    for (const key in formData) {
      if (key !== "profileImage") {
        formDataToSubmit.append(key, formData[key]);
      }
    }
  
    setLoading(true);
  
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
  
      Swal.fire({
        icon: "success",
        title: "Member Added!",
        text: "The member was added successfully.",
      });
  
      setFormData({
        name: "",
        fatherName: "",
        dob: "",
        address: "",
        phone: "",
        email: "",
        joiningDate: "",
        status: "Active",
        role: "ECN Member",
        profileImage: null,
      });
  
      fileInputRef.current.value = "";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.message || "There was an error submitting the form.",
      });
    } finally {
      setLoading(false);
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
              name="profileImage"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              ref={fileInputRef}
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
            Status <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Role */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Role <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            required
          >
            <option value="ECN Member">ECN Member</option>
            <option value="Member of Majils-e-Shura">Member of Majils-e-Shura</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
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
