import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ imgSrc, title, price }) => {
  return (
    <div className="product">
      <Link to='ProductEditor' >
        <img src={imgSrc} alt={title} /></Link>
      <p className="price">{price}</p>

    </div>
  );
};

export default Product;
