// src/components/AuthorForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

const AuthorFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  birthDate: Yup.date().required('Required'),
  biography: Yup.string().required('Required'),
});

const AuthorForm = ({ addAuthor }) => {
  return (
    <Formik
      initialValues={{ name: '', birthDate: '', biography: '' }}
      validationSchema={AuthorFormSchema}
      onSubmit={(values, { resetForm }) => {
        addAuthor({ ...values, id: uuidv4() });
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" as={TextField} label="Name" variant="outlined" fullWidth margin="normal"
            error={touched.name && !!errors.name} helperText={touched.name && errors.name} />
          <Field name="birthDate" as={TextField} type="date" label="Birth Date" InputLabelProps={{ shrink: true }} variant="outlined" fullWidth margin="normal"
            error={touched.birthDate && !!errors.birthDate} helperText={touched.birthDate && errors.birthDate} />
          <Field name="biography" as={TextField} label="Biography" variant="outlined" fullWidth margin="normal"
            multiline rows={4} error={touched.biography && !!errors.biography} helperText={touched.biography && errors.biography} />
          <Button type="submit" variant="contained" color="primary">Add Author</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
