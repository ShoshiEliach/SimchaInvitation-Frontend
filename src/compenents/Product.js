import React from 'react';
import './Product.css';

const Product = ({ imgSrc, title, price }) => { 
  return (
    <div className="product">
      <img src={imgSrc} alt={title} />
      <p className="price">{price}</p>
    </div>
  );
};

export default Product;
