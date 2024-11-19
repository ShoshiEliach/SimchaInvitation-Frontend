import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Products from './Products';
import Search from './Search';
import ViewProducts from './ViewProducts';

export default function MainLayout({ handleOver, handleOut, handleClick, visibleSidebar }) {
  return (
    <div>
      <Header handleOver={handleOver} handleClick={handleClick} />
      {visibleSidebar && <Sidebar handleOver={handleOver} handleOut={handleOut} />}
      <div>
      <Outlet /> 
    <Search />
         <Products />
        
      </div>
      </div>
  );
};