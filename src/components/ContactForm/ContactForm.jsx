import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
  id: nanoid(),
};

let schema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </>
      </Form>
    </Formik>
  );
};

export default ContactForm;
