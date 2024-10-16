import React, { useState } from "react";
import axios from "axios";
import Loader from "../../../utils/Loader"; // Import your Loader component
import Swal from "sweetalert2"; // Import SweetAlert2

const AddBooks = () => {
    // State for form fields
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        category: ['Islamic', 'General', 'Quran', 'Hadith'], // Default category
        pdfLink: "",
    });

    // State for files
    const [coverImage, setCoverImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    // State for loading and progress
    const [loading, setLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Handle input change for text fields
    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    // Handle file input for cover image and PDF
    const handleFileChange = (e) => {
        if (e.target.name === "coverImage") {
            setCoverImage(e.target.files[0]);
        } else if (e.target.name === "pdfFile") {
            setPdfFile(e.target.files[0]);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        setUploadProgress(0); // Reset progress

        // Create FormData to send files and other data
        const formData = new FormData();
        formData.append("title", bookData.title);
        formData.append("author", bookData.author);
        formData.append("category", bookData.category);
        formData.append("pdfLink", bookData.pdfLink);
        formData.append("coverImage", coverImage);
        formData.append("pdfFile", pdfFile);

        try {
            // Post the form data to the backend with progress tracking
            await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/books/addbook`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    const percentage = Math.round((loaded * 100) / total);
                    setUploadProgress(percentage); // Update the progress state
                },
            });

            // Show success alert
            Swal.fire({
                title: 'Success!',
                text: 'Book added successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            });

            // Clear form after successful submission
            setBookData({
                title: "",
                author: "",
                category: "Islamic", // Reset to default category
                pdfLink: "",
            });
            setCoverImage(null);
            setPdfFile(null);
            setUploadProgress(0); // Reset progress after submission
        } catch (error) {
            console.error("Error adding the book:", error);
            // Show error alert
            Swal.fire({
                title: 'Error!',
                text: 'There was an error adding the book.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-8 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Add a New Book</h2>
            {loading && <Loader />} {/* Show loader when loading */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={bookData.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                    />
                </div>

                {/* Author */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Author</label>
                    <input
                        type="text"
                        name="author"
                        value={bookData.author}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                    />
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                    <select
                        name="category"
                        value={bookData.category}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                    >
                        <option value="Islamic">Islamic</option>
                        <option value="General">General</option>
                        <option value="Quran">Quran</option>
                        <option value="Hadith">Hadith</option>
                    </select>
                </div>

                {/* PDF Link */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">PDF Link (optional)</label>
                    <input
                        type="text"
                        name="pdfLink"
                        value={bookData.pdfLink}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                    />
                </div>

                {/* Cover Image */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cover Image</label>
                    <input
                        type="file"
                        name="coverImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-blue-500 dark:hover:file:bg-gray-500"
                    />
                </div>

                {/* PDF File */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">PDF File</label>
                    <input
                        type="file"
                        name="pdfFile"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                        className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-blue-500 dark:hover:file:bg-gray-500"
                    />
                </div>

                {/* Progress Bar */}
                {loading && (
                    <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${uploadProgress}%` }}
                            />
                        </div>
                        <div className="text-center text-sm text-gray-600 dark:text-gray-300 mt-1">{uploadProgress}%</div>
                    </div>
                )}

                {/* Submit Button */}
                {!loading && (
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400"
                        >
                            Add Book
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AddBooks;
