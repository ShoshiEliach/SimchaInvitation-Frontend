import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom'; // הוספת useLocation
import AppHeaderBar from './AppHeaderBar';

export default function MainLayout({ handleOver, handleClick }) {
  const location = useLocation();

  return (
    <>
      <Header handleOver={handleOver} handleClick={handleClick} />

      {/* הצגת AppHeaderBar רק אם הנתיב אינו דף הבית */}
      {location.pathname !== '/' && <AppHeaderBar />}

      <Outlet /> {/* כאן יוחלף התוכן הדינמי לפי הנתיב */}
    </>
  );
}
