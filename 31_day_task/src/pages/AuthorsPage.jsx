// src/pages/AuthorsPage.js
import React, { useState } from 'react';
import AuthorsList from '../components/AuthorsList';
import AuthorForm from '../components/AuthorForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const editAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => author.id === updatedAuthor.id ? updatedAuthor : author));
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Manage Authors</Typography>
      <AuthorForm addAuthor={addAuthor} />
      <AuthorsList authors={authors} editAuthor={editAuthor} deleteAuthor={deleteAuthor} />
    </Container>
  );
};

export default AuthorsPage;
