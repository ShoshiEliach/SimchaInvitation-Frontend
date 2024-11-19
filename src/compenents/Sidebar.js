import React from 'react';
import './Sidebar.css';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = ({ handleOver, handleOut }) => {
  return (
    <div className="sidebar" onMouseOver={handleOver} onBlur={handleOut}>
      <ul>
        <li className='expandable-item'>Baby
          <ul>Shulem-Zucher</ul>
          <ul>Vachtnacht</ul>
          <ul>Kidush</ul>
          <ul>Bris</ul>
          <ul>Pidyon Haben</ul>
        </li>
        <li>
        Upsherin
        </li>
        <li>
          <Link to="/ViewProducts" replace> Bar-Mitzva</Link>
         </li>
        <li className='expandable-item'>Thenoim
          <ul>Kallah's Side</ul>
          <ul>Chussen's Side</ul>
          <ul>Both Sides</ul>
        </li>
        <li className='expandable-item'>Wedding
          <ul>Invitation</ul>
          <ul>Save the date</ul>
          <ul>Bavarfen</ul>
        </li>
        <li>Sheva-brachot</li>
        <li className="highlight-text">Poster</li>
        <li className="highlight-text">Video</li>
        <li className="highlight-text">Voice</li>
      </ul>
      <a href="#" className="arrow-btn">→</a>
      <Outlet/>
    </div>
  );
};

export default Sidebar;
