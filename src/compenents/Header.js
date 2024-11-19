import React from 'react';
import './Header.css';

const Header = ({handleOver,handleClick}) => {
  return (
    <div className="header">

      <h1>Simcha Invitation</h1>
      <div className="menuIconDiv">
        <img className="menuIconImg" src="/align-center (1).png" alt="example"  onMouseOver={handleOver}  onClick={handleClick}></img>
        

      </div>
    </div>
  );
};

export default Header;
