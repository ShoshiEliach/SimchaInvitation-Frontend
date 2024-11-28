import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Header = ({ handleOver, handleClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname == '/';
  return (
    <div className={isHomePage ? 'home-header' : 'website-header'}>

      <h1>Simcha Invitation</h1>
      <div className="menuIconDiv">
        <img className="menuIconImg" src="/align-left.svg" alt="example" onMouseOver={handleOver} onClick={handleClick}></img>

      </div>
      <div className='button-profile'>
        <Link to='/LoginForm' className='link-profile'>
          <Button variant="link" style={{ textDecoration: 'none', color: '#C0C0C0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, padding: 0 }}>
            <PersonIcon style={{ color: '#C0C0C0', width: '40%', height: '40%', margin: 0 }} />
            <div className='link-text'>
              <span style={{ color: '#C0C0C0', fontSize: '1em', margin: 0, lineHeight: '1' }}>Log in </span>
              <Link to='/Register' className='link-profile'><span style={{ color: '#49326b', fontSize: '1em', margin: 0, lineHeight: '1' }}>Sign up</span></Link>

            </div>
          </Button>
        </Link>
      </div>

    </div >
  );
};

export default Header;
