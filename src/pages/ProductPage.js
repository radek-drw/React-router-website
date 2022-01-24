import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = (props) => {
  // TO BE FIXED or will found another way to make it work
  // console.log(props);
  return (
    <>
      <h2>Strona produktu</h2>
      <Product />
      <Link to='/products'>Powrót do listy produktów</Link>
    </>
  );
}

export default ProductPage;