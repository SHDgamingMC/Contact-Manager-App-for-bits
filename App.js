// App.js
import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setContacts(savedContacts);
  }, []);

  const saveContactsToLocalStorage = (updatedContacts) => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const editContact = (editedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
      <ContactForm addContact={addContact} editContact={editContact} />
    </div>
  );
};

export default App;
