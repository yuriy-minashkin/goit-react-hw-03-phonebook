import React, { Component } from 'react'
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageData = JSON.parse(localStorage.getItem("contacts"));
    if (localStorageData) {
      this.setState({contacts: localStorageData})
    };
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      return localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    };
  };

  updateFilterInput = (event) => {
    this.setState({ filter: event.target.value })
  };
  
  onFilter = () => {
    const { filter, contacts } = this.state;
    return filter.length > 0 ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ) : contacts;
  }

  addNewContact = newContactObj => {
    const newName = newContactObj.name;

    this.state.contacts.some(
      contact => contact.name.toLowerCase() === newName.toLowerCase()
    )
      ? alert(`${newName} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContactObj].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
  };

  removeContact = (id) => (
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  )

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          filterInput={this.updateFilterInput}/>
        <ContactList
          contacts={this.onFilter()}
          contactDelHandler={this.removeContact} />
      </div>
    );
  };
};
