// src/components/AuthorsList.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AuthorsList = ({ authors, editAuthor, deleteAuthor }) => {
  return (
    <List>
      {authors.map(author => (
        <ListItem key={author.id}>
          <ListItemText primary={author.name} secondary={`${author.birthDate} - ${author.biography}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => editAuthor(author)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteAuthor(author.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default AuthorsList;
