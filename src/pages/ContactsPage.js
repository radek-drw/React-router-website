import React, { useState } from 'react';

import '../styles/ContactPage.css';

const ContactsPage = () => {

  // state = {
  //   value: ''
  // }

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // this.setState({
    //   value: ''
    // })
    setValue('')
  }

  const handleChange = e => {
    // this.setState({
    //   value: e.target.value
    // })
    setValue(e.target.value)
  }

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