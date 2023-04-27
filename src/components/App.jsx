import React from 'react';
import ContactForm from './ContactForm/ContactForm';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>;
  }
}
