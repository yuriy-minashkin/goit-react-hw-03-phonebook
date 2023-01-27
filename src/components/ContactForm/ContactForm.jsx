import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  nameInputId = nanoid();
  phoneNumberInputID = nanoid();

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit({id: nanoid(), ...this.state});
    this.reset();
  };

  reset = () => {
    this.setState({name: '', number: '',});
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
            onChange={this.handleChange}
          />
        </label>

        <label className={css.label} htmlFor={this.phoneNumberInputID}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.phoneNumberInputID}
            onChange={this.handleChange}
          />
        </label>

        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};