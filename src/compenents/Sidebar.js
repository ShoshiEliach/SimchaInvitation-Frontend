import React from 'react';
import './Sidebar.css';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = ({ handleOut }) => {
  return (
    <div className="sidebar" onBlur={handleOut}>
      <ul>
        <li className='expandable-item'>
          <Link to="/ViewProducts" state={{ eventType: 'Baby' }} className='main-link'>Baby</Link>
          <ul>
            <li><Link to="/ViewProducts" state={{ eventType: 'ShulemZucher' }} className='custom-link'>Shulem-Zucher</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'Vachtnacht' }} className='custom-link'>Vachtnacht</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'Bris' }} className='custom-link'>Bris</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'PidyonHaben' }} className='custom-link'>Pidyon Haben</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/ViewProducts" state={{ eventType: 'Upsherin' }} className='main-link'>Upsherin</Link>
        </li>
        <li className='expandable-item'>
          <Link to="/ViewProducts" state={{ eventType: 'BarMitzva' }} className='main-link'>Bar-Mitzva</Link>
          <ul>
            <li><Link to="/ViewProducts" state={{ eventType: 'BasMitzva' }} className='custom-link'>BasMitzva</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'Kidush' }} className='custom-link'>Kidush</Link></li>
          </ul>
        </li>
        <li className='expandable-item'>
          <Link to="/ViewProducts" state={{ eventType: 'Thenoim' }} className='main-link'>Thenoim</Link>
          <ul>
            <li><Link to="/ViewProducts" state={{ eventType: 'KallahsSide' }} className='custom-link'>Kallah's Side</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'ChussenSside' }} className='custom-link'>Chussen's Side</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'BothSides' }} className='custom-link'>Both Sides</Link></li>
          </ul>
        </li>
        <li className='expandable-item'>
          <Link to="/ViewProducts" state={{ eventType: 'Wedding' }} className='main-link'>Wedding</Link>
          <ul>
            <li><Link to="/ViewProducts" state={{ eventType: 'WeddingInvitation' }} className='custom-link'>Wedding invitation</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'SaveTheDate' }} className='custom-link'>Save the date</Link></li>
            <li><Link to="/ViewProducts" state={{ eventType: 'Bavarfen' }} className='custom-link'>Bavarfen</Link></li>
          </ul>
        </li>
        <li><Link to="/ViewProducts" state={{ eventType: 'ShevaBrachot' }} className='main-link'>Sheva-brachot</Link></li>
        <li className="highlight-text"><Link to="/ViewProducts" state={{ eventType: 'Poster' }} className='kind-link'>Poster</Link></li>
        <li className="highlight-text"><Link to="/ViewProducts" state={{ eventType: 'Video' }} className='kind-link'>Video</Link></li>
        <li className="highlight-text"><Link to="/ViewProducts" state={{ eventType: 'ShevaBrachot' }} className='kind-link'>Voice</Link></li>
      </ul>
      <Link to='/ViewProducts' className="arrow-btn"><p>All →</p></Link>
      <Outlet />
    </div>
  );
};

export default Sidebar;
