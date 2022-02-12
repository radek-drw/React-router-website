import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = (props) => {
  // TO BE FIXED or will found another way to make it work
  // console.log(props);
  return (
    <>
      <h2>Product description</h2>
      <Product />
      <Link to='/products'>Back to products list</Link>
    </>
  );
}

export default ProductPage;