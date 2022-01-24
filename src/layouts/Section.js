import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ContactsPage from '../pages/ContactsPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';

const Section = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductListPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/contacts' element={<ContactsPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ErrorPage />} />
    </Routes>
  );
}

export default Section;