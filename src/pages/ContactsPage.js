import React, { Component } from 'react';
import '../styles/ContactPage.css';

class ContactsPage extends Component {

  state = {
    value: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      value: ''
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas!!</h3>
          <textarea
            placeholder='Wpisz wiadomość...'
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default ContactsPage;