
import React, { useState } from 'react';

import Header from './compenents/Header';
import Sidebar from './compenents/Sidebar';
import Product from './compenents/Product';
import './App.css';
import Products from './compenents/Products';
import Search from './compenents/Search';
import ViewProducts from './compenents/ViewProducts';
import LoginForm from './compenents/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './compenents/MainLayout';
import { HeaderProvider } from './compenents/HeaderContext';

function App() {
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  const handleOver = () => {
    setVisibleSidebar(true);
  };

  const handleOut = () => {
    setVisibleSidebar(false);
  };

  const handleClick = () => {
    setVisibleSidebar(!visibleSidebar);
  };
  return (
    <>
      <Header handleOver={handleOver} handleClick={handleClick} />
      {visibleSidebar && <Sidebar handleOver={handleOver} handleOut={handleOut} />}
        <Routes>
          <Route path='/' element=
          { <MainLayout handleOver={handleOver} 
            handleOut={handleOut} 
            handleClick={handleClick} 
            visibleSidebar={visibleSidebar} />
         }/>
          
          <Route path="/ViewProducts" element={<ViewProducts/>}/>
        </Routes>
        </>
  );
};

export default App;
