// src/components/BookForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

const BookFormSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  isbn: Yup.string().required('Required'),
  publicationDate: Yup.date().required('Required'),
});

const BookForm = ({ addBook }) => {
  return (
    <Formik
      initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
      validationSchema={BookFormSchema}
      onSubmit={(values, { resetForm }) => {
        addBook({ ...values, id: uuidv4() });
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="title" as={TextField} label="Title" variant="outlined" fullWidth margin="normal"
            error={touched.title && !!errors.title} helperText={touched.title && errors.title} />
          <Field name="author" as={TextField} label="Author" variant="outlined" fullWidth margin="normal"
            error={touched.author && !!errors.author} helperText={touched.author && errors.author} />
          <Field name="isbn" as={TextField} label="ISBN" variant="outlined" fullWidth margin="normal"
            error={touched.isbn && !!errors.isbn} helperText={touched.isbn && errors.isbn} />
          <Field name="publicationDate" as={TextField} type="date" label="Publication Date" InputLabelProps={{ shrink: true }} variant="outlined" fullWidth margin="normal"
            error={touched.publicationDate && !!errors.publicationDate} helperText={touched.publicationDate && errors.publicationDate} />
          <Button type="submit" variant="contained" color="primary">Add Book</Button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
