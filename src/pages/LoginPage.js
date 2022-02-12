import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='admin'>
      <label htmlFor="login">Login:
        <input type="text" id='login' />
      </label>
      <label htmlFor="password">Password:
        <input type="password" />
      </label>
    </div>
  );
}

export default LoginPage;