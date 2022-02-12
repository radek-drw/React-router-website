import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListPage.css';

const products = ['car', 'bike', 'motorcycle'];

const ProductListPage = () => {

  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`} >{product}</Link>
    </li>
  ))

  return (
    <>
      <h2>Products list</h2>
      <div className="products">
        <ul>
          {list}
        </ul>
      </div>
    </>
  );
}

export default ProductListPage;