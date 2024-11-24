import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // יש לוודא שיבוא נכון
import './ViewProducts.css';
import Products from './Products';
import ProductSelector from './ProductSelector';
import TabFilter from './tabFilter';
import AppHeaderBar from './AppHeaderBar';

const ViewProducts = () => {
  const location = useLocation();
  const [eventType, setEventType] = useState('');
  console.log(location.state);
  useEffect(() => {
    // אם יש state שמגיע, אנחנו מעדכנים את ה-state של eventType
    if (location.state && location.state.eventType) {
      setEventType(location.state.eventType);
      console.log(eventType);
    } else {
      setEventType(' '); // אם אין eventType ב-state, נוודא שלא יהיה ריק
    }
  }, [location.state]); // עדכון אם ה-state משתנה

  const [selectedGroup1, setSelectedGroup1] = useState('');
  const [selectedGroup2, setSelectedGroup2] = useState('');

  const handleGroup1Change = (event) => {
    setSelectedGroup1(event.target.value);
  };

  const handleGroup2Change = (event) => {
    setSelectedGroup2(event.target.value);
  };

  const products = [
    { id: 'product1', name: 'מוצר 1', category: 'voice', price: '$12.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'product2', name: 'מוצר 2', category: 'video', price: '$10.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'product3', name: 'מוצר 3', category: 'invitation', price: '$10.55', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'product4', name: 'מוצר 4', category: 'poster', price: '$11.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'product5', name: 'מוצר 5', category: 'kiduush', price: '$12.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'product6', name: 'מוצר 6', category: 'barmitava', price: '$10.55', imageUrl: 'https://via.placeholder.com/150' },
  ];

  // סינון המוצרים לפי הקטגוריות שנבחרו בשתי הקבוצות
  const filteredProducts = products.filter(product =>
    (!selectedGroup1 || product.category === selectedGroup1) &&
    (!selectedGroup2 || product.category === selectedGroup2)
  );

  return (
    <>
      <TabFilter></TabFilter>
      <h1>{eventType} Invitation: </h1> {/* הצגת eventType */}
      <ProductSelector eventType={eventType} />


      {/* <Products products={filteredProducts} /> */}
    </>
  );
};

export default ViewProducts;
