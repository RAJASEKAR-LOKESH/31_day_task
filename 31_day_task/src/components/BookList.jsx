// src/components/BooksList.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BooksList = ({ books, editBook, deleteBook }) => {
  return (
    <List>
      {books.map(book => (
        <ListItem key={book.id}>
          <ListItemText primary={book.title} secondary={`Author: ${book.author}, ISBN: ${book.isbn}, Published: ${book.publicationDate}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => editBook(book)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteBook(book.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default BooksList;
