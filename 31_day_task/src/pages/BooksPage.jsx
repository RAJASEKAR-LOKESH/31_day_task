// src/pages/BooksPage.js
import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BooksList from '../components/BookList';
import BookForm from '../components/BookForm';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <Container>      
      <Typography variant="h4" gutterBottom>Manage Books</Typography>
      <BookForm addBook={addBook} />
      <BooksList books={books} editBook={editBook} deleteBook={deleteBook} />
    </Container>
  );
};

export default BooksPage;
