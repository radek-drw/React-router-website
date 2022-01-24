import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='admin'>
      <label htmlFor="login">Podaj login:
        <input type="text" id='login' />
      </label>
      <label htmlFor="password">Podaj hasło:
        <input type="password" />
      </label>
    </div>
  );
}

export default LoginPage;