import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function MainLayout({ handleOver, handleClick }) {
  return (
    <>
      <Header handleOver={handleOver} handleClick={handleClick} />
      <Outlet /> {/* כאן יוחלף התוכן הדינמי לפי הנתיב */}
    </>
  );
}
