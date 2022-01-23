import React from 'react';
import { Route, Routes } from 'react-router-dom';

import '../styles/Header.css';

import img1 from '../images/city1.jpg';
import img2 from '../images/city2.jpg';
import img3 from '../images/city3.jpg';
import img4 from '../images/city4.jpg';

const Header = () => {
  return (
    <Routes>
      <Route path='/' element={<img src={img1} alt='city1' />} />
      <Route path='/products' element={<img src={img2} alt='city2' />} />
      <Route path='/contacts' element={<img src={img3} alt='city3' />} />
      <Route path='/admin' element={<img src={img4} alt='city4' />} />
      <Route path='*' element={<img src={img4} alt='city4' />} />
    </Routes>
  );
}

export default Header;