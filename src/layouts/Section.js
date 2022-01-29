import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import ContactsPage from '../pages/ContactsPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';

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