import React from 'react';
import { useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import './AppHeaderBar.css';

function AppHeaderBar() {
  const dropdownItemsBaby = [
    { label: 'ShulemZucher', to: '/ViewProducts', state: { eventType: 'ShulemZucher' } },
    { label: 'Vachtnacht', to: '/ViewProducts', state: { eventType: 'Vachtnacht' } },
    { label: 'Bris', to: '/ViewProducts', state: { eventType: 'Bris' } },
    { label: 'PidyonHaben', to: '/ViewProducts', state: { eventType: 'PidyonHaben' } },
    { label: 'Kidush', to: '/ViewProducts', state: { eventType: 'Kidush' } },

  ];



  const dropdownItemsBarMitzva = [
    { label: 'Bas-Mitzva', to: '/ViewProducts', state: { eventType: 'Bar-Mitzva' } },
    { label: 'Kidush', to: '/ViewProducts', state: { eventType: 'Kidush' } },


  ];



  const dropdownItemsThenoim = [
    { label: 'Kallah-side', to: '/ViewProducts', state: { eventType: 'Kallah-side' } },
    { label: 'Chussen-side', to: '/ViewProducts', state: { eventType: 'Chussen-side' } },
    { label: 'Both sides', to: '/ViewProducts', state: { eventType: 'Both sides' } },

  ];


  const dropdownItemsWedding = [
    { label: 'Wedding Invitation', to: '/ViewProducts', state: { eventType: 'Wedding' } },
    { label: 'Save the date', to: '/ViewProducts', state: { eventType: 'Save the date' } },
    { label: 'Bavarfen', to: '/ViewProducts', state: { eventType: 'Bavarfen' } },


  ];



  return (
    <BootstrapNavbar expand="lg" bg="light" variant="light">
      <BootstrapNavbar.Toggle aria-controls="navbarNav" />
      <BootstrapNavbar.Collapse id="navbarNav">

        <Nav className="ml-auto" >

          <NavDropdown title="Baby" id="navbarDropdown" aligh="start" flip={false}>
            {dropdownItemsBaby.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item as={Link} to={item.to} state={item.state} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <Nav.Item>
            <Link className="nav-link" to="/ViewProducts" state={{ eventType: 'Upsherin' }}>Upsherin</Link>
          </Nav.Item>


          <NavDropdown title="Bar-Mitzva" id="navbarDropdown">
            {dropdownItemsBarMitzva.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item as={Link} to={item.to} state={item.state} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <NavDropdown title="Thenoim" id="navbarDropdown">
            {dropdownItemsThenoim.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item as={Link} to={item.to} state={item.state} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <NavDropdown title="Wedding" id="navbarDropdown">
            {dropdownItemsWedding.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item as={Link} to={item.to} state={item.state} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <Nav.Item>
            <Link className="nav-link" to="/ViewProducts" state={{ eventType: 'Sheva-brachot' }}>Sheva-brachot</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/LoginForm' className='profile-button'>
              <Button variant="link" className="nav-link">
                <PersonIcon />login/sighup
              </Button>
            </Link>
          </Nav.Item>



        </Nav>

        <Form className="form-inline my-2 my-lg-0">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-sm-2 custom-clear-color"
            aria-label="Search"
          />

        </Form>

      </BootstrapNavbar.Collapse>

    </BootstrapNavbar>
  );
}

export default AppHeaderBar;
