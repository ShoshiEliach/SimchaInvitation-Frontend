import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './compenents/MainLayout';
import ViewProducts from './compenents/ViewProducts';
import Products from './compenents/Products';
import Search from './compenents/Search';
import Sidebar from './compenents/Sidebar';

function App() {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const handleOver = () => setVisibleSidebar(true);
  const handleOut = () => setVisibleSidebar(false);
  const handleClick = () => setVisibleSidebar(!visibleSidebar);

  const products = [
    { id: 'product1', name: 'מוצר 1', category: 'קטגוריה 1', price: '$12.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: 'product2', name: 'מוצר 2', category: 'קטגוריה 2', price: '$10.99', imageUrl: 'https://via.placeholder.com/150' },
    // שאר המוצרים...
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            handleOver={handleOver}
            handleClick={handleClick}
          />
        }
      >
        {/* דף הבית: "/" */}
        <Route
          index
          element={
            <>
              {visibleSidebar && <Sidebar handleOut={handleOut} />}

              <Search />
              <Products products={products} />
            </>
          }
        />

        {/* דף ViewProducts */}
        <Route path="ViewProducts" element={<ViewProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
