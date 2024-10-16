import AddBooks from '../components/Dashboard/Books/AddBooks';
import ViewBooks from '../components/Dashboard/Books/ViewBooks';
import { useState } from 'react';

const BookPage = () => {
  const [books, setBooks] = useState([]); // State for books
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const addBook = (newBook) => {
    // This function will be called when a new book is added
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <AddBooks onAddBook={addBook} setLoading={setLoading} setError={setError} />
      <ViewBooks 
        books={books} 
        setBooks={setBooks} 
        loading={loading} 
        setLoading={setLoading} 
        error={error} 
        setError={setError} 
      />
    </div>
  );
};

export default BookPage;
