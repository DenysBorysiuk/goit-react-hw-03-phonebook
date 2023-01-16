import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // console.log('did mount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('did updade');
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contacts.find(
        option => option.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChangeFilter={this.handleChange} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
