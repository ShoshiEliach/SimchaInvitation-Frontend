import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = ({ handleOver, handleClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname == '/';
  return (
    <div className={isHomePage ? 'home-header' : 'website-header'}>

      <h1>Simcha Invitation</h1>
      <div className="menuIconDiv">
        <img className="menuIconImg" src="/align-center (1).png" alt="example" onMouseOver={handleOver} onClick={handleClick}></img>


      </div>
    </div>
  );
};

export default Header;
