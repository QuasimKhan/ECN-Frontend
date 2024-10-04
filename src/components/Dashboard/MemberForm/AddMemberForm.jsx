import React, { useState } from "react";
import axios from "axios";
import { FaAsterisk } from "react-icons/fa"; // Import required icon
import Swal from "sweetalert2"; // Import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // Optional: SweetAlert2 default styling

const AddMemberForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    employmentType: "",
    address: "",
    phone: "",
    email: "",
    joiningDate: "",
    status: "Active",
    role: "member",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API}/api/v1/ecnmembers/addmember`,
        formData
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
        employmentType: "",
        address: "",
        phone: "",
        email: "",
        joiningDate: "",
        status: "Active",
        role: "member",
      });
    } catch (error) {
      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting the form. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Add New Member
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
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

        {/* Employment Type */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Employment Type <span className="text-red-500"><FaAsterisk /></span>
          </label>
          <select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            className="block w-full p-3 border rounded-md border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all"
            required
          >
            <option value="">Select Employment Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
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
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMemberForm;
