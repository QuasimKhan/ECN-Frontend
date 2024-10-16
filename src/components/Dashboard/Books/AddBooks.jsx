import React, { useState } from "react";
import axios from "axios";
import Loader from "../../../utils/Loader"; // Import your Loader component
import Swal from "sweetalert2"; // Import SweetAlert2

const AddBooks = ({ onAddBook, setLoading, setError }) => {
    // State for form fields
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        category: "Islamic", // Default category
        pdfLink: "",
    });

    // State for files
    const [coverImage, setCoverImage] = useState(null);
    const [coverImagePreview, setCoverImagePreview] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    // State for loading and progress
    const [uploadProgress, setUploadProgress] = useState(0);

    // Handle input change for text fields
    const handleChange = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    // Handle file input for cover image and PDF
    const handleFileChange = (e) => {
        if (e.target.name === "coverImage") {
            const file = e.target.files[0];
            setCoverImage(file);
            setCoverImagePreview(URL.createObjectURL(file)); // Create preview URL
        } else if (e.target.name === "pdfFile") {
            setPdfFile(e.target.files[0]);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        setUploadProgress(0); // Reset upload progress

        const formData = new FormData();
        formData.append("title", bookData.title);
        formData.append("author", bookData.author);
        formData.append("category", bookData.category);
        formData.append("pdfLink", bookData.pdfLink);
        formData.append("coverImage", coverImage);
        formData.append("pdfFile", pdfFile);

        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API}/api/v1/books/addbook`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    const percentage = Math.round((loaded * 100) / total);
                    setUploadProgress(percentage);
                },
            });

            Swal.fire({
                title: 'Success!',
                text: 'Book added successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            });

            onAddBook(response.data); // Assuming the API response contains the new book data

            // Reset form fields
            setBookData({
                title: "",
                author: "",
                category: "Islamic",
                pdfLink: "",
            });
            setCoverImage(null);
            setCoverImagePreview(null);
            setPdfFile(null);
            setUploadProgress(0);
        } catch (error) {
            console.error("Error adding the book:", error);
            setError(error); // Set error state for the parent component
            Swal.fire({
                title: 'Error!',
                text: 'There was an error adding the book.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        } finally {
            setLoading(false); // Reset loading state
            // Optionally reset upload progress here if needed
        }

        // Reset form fields
        e.target.reset();
    };

    return (
        <div className="relative max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-8 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Add a New Book</h2>
            
            {uploadProgress > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent z-50">
                    <Loader />
                </div>
            )}

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

                {/* Cover Image Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cover Image</label>
                    <input
                        type="file"
                        name="coverImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                    {coverImagePreview && (
                        <div className="mt-2">
                            <img src={coverImagePreview} alt="Cover Preview" className="h-32 object-cover rounded-md" />
                        </div>
                    )}
                </div>

                {/* PDF File Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">PDF File</label>
                    <input
                        type="file"
                        name="pdfFile"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                        className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    />
                </div>

                {/* Progress Bar */}
                {uploadProgress > 0 && (
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                                    Uploading...
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-teal-600">
                                    {uploadProgress}%
                                </span>
                            </div>
                        </div>
                        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-gray-200 rounded">
                            <div
                                style={{ width: `${uploadProgress}%` }}
                                className="flex flex-col text-center text-white bg-teal-600 shadow-none transition-all duration-500 ease-in-out"
                            ></div>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-2 rounded hover:bg-indigo-700 transition duration-200"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBooks;
