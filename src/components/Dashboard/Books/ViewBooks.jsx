import React, { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import Swal from "sweetalert2"; // For SweetAlert2 confirmation dialog
import { FaTrash } from "react-icons/fa"; // Importing icons for delete
import Loader from "../../../utils/Loader"; // Assuming you have a Loader component

const ViewBooks = ({ books, setBooks }) => { // Destructuring props
  const [loading, setLoading] = React.useState(true); // State for loading indicator
  const [error, setError] = React.useState(null); // State for error handling
  const [noBooksFound, setNoBooksFound] = React.useState(false); // State for no books found

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setNoBooksFound(false); // Reset no books found state
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API}/api/v1/books/all` // API endpoint to fetch books
        );
        if (response.data.data.length === 0) {
          setNoBooksFound(true); // Set no books found state if the response is empty
        } else {
          setBooks(response.data.data); // Set books state with fetched data
        }
      } catch (err) {
        setError("Failed to fetch books. Please try again later."); // More user-friendly error message
        console.error("Failed to fetch books:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks(); // Fetch books on component mount
  }, [setBooks]); // Dependency on setBooks

  const handleDelete = async (id) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmed.isConfirmed) return;

    try {
      await axios.delete(`${import.meta.env.VITE_APP_API}/api/v1/books/delete/${id}`);
      setBooks(books.filter((book) => book._id !== id)); // Update books state
      Swal.fire("Deleted!", "The book has been deleted.", "success"); // Success message
    } catch (err) {
      Swal.fire("Error!", "Failed to delete book. Please try again.", "error"); // More user-friendly error message
      console.error("Failed to delete book:", err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  if (loading) return <Loader message="Loading books..." />; // Show a loading spinner
  if (error) return <div className="text-red-600">{error}</div>; // Show error message if there's one
  if (noBooksFound) return <div className="text-gray-700 dark:text-gray-300">No books found.</div>; // Show no books message

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mt-12 text-gray-900 dark:text-gray-100 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Uploaded Books
        </h2>
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Total Books: {books.length}
        </h2>
      </div>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book._id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Book cover image */}
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-24 h-32 object-cover rounded-md border-2 border-blue-500" 
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {book.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Author: {book.author}</p>
              <p className="text-gray-700 dark:text-gray-300">Category: {book.category}</p>
              <p className="text-gray-700 dark:text-gray-300">Uploaded on: {formatDate(book.createdAt)}</p>
              {/* Download or view PDF */}
              {book.pdfFile ? (
                <a
                  href={book.pdfFile}
                  className="text-blue-500 mt-2 underline"
                  download
                >
                  Download PDF
                </a>
              ) : (
                <a
                  href={book.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 underline"
                >
                  View PDF
                </a>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-0">
              <button
                onClick={() => handleDelete(book._id)}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                aria-label={`Delete ${book.title}`} // Accessibility enhancement
              >
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes for validation
ViewBooks.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default ViewBooks;
