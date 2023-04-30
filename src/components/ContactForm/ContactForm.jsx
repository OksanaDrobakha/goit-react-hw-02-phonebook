import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
    id: nanoid(),
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  schema = object({
    name: string().required(),
    number: number().required().positive().integer(),
  });

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik
        validationSchema={this.schema}
        onReset={this.resetForm}
        addContact={this.addContact}
      >
        <Form className={css.Form}>
          <>
            <label>
              Name
              <Field
                type="text"
                name="name"
                onChange={this.onChangeInput}
                value={this.state.name}
              />
              <ErrorMessage name="name" component="div" />
            </label>
            <label>
              Number
              <Field
                type="tel"
                name="number"
                onChange={this.onChangeInput}
                value={this.state.number}
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
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
