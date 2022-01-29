import React, { useState } from 'react';

import '../styles/ContactPage.css';

const ContactsPage = () => {

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setValue('');
  }

  const handleChange = e => setValue(e.target.value);

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h3>Napisz do nas!!</h3>
        <textarea
          placeholder='Wpisz wiadomość...'
          value={value}
          onChange={handleChange}
        ></textarea>
        <button>Wyślij</button>
      </form>
    </div>
  );
}

export default ContactsPage;