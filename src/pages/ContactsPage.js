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
        <h3>Send us message!</h3>
        <textarea
          placeholder='Start typing...'
          value={value}
          onChange={handleChange}
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ContactsPage;