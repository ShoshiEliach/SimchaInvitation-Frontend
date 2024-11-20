import React from 'react';
import Product from './Product';
import './Products.css';

const Products = ({ products = [] }) => { // אם products הוא undefined, נעשה לו ברירת מחדל כ[].
  return (
    <div className="page-wrapper">

    <div className="products-container">
      {products.length === 0 ? (
        <p>אין מוצרים להצגה.</p> // אם אין מוצרים, נציג הודעה מתאימה.
      ) : (
        products.map(product => (
          <Product
            key={product.id}
            imgSrc={product.imageUrl}
            title={product.name}
            price={product.price}
          />
        ))
      )}
    </div>
    </div>

  );
};

export default Products;
