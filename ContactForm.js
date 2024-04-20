// ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ addContact, editContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    if (editing) {
      editContact({ id: editId, name, email });
      setEditing(false);
    } else {
      addContact({ id: Date.now(), name, email });
    }
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>{editing ? 'Edit Contact' : 'Add Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{editing ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  );
};

export default ContactForm;
