import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

const list = [
  { name: 'start', path: '/' },
  { name: 'produkty', path: '/products' },
  { name: 'kontakty', path: '/contacts' },
  { name: 'panel admina', path: '/admin' }
]

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ))

  return (
    <nav className='main_nav'>
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;