import React from 'react';
import Product from './Product';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <Product imgSrc="https://via.placeholder.com/150"  price="$12.99" />
      <Product imgSrc="https://via.placeholder.com/150"  price="$10.99" />
      <Product imgSrc="https://via.placeholder.com/150"  price="$10.55" />
      <Product imgSrc="https://via.placeholder.com/150"  price="$10.55" />
      <Product imgSrc="https://via.placeholder.com/150"  price="$11.99" />
      <Product imgSrc="https://via.placeholder.com/150"  price="$12.99" />
    </div>
  );
};

export default Products;
