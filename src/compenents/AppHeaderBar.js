import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppHeaderBar.css';

function AppHeaderBar() {
  const dropdownItemsBaby = [
    { label: 'ShulemZucher', href: '#' },
    { label: 'Vachtnacht', href: '#' },
    { label: 'Bris', href: '#' },
    { label: 'PidyonHaben', href: '#' },
    { label: 'Kidush', href: '#' },

  ];



  const dropdownItemsBarMitzva = [
    { label: 'Bas-Mitzva', href: '#' },
    { label: 'Kidush', href: '#' },


  ];



  const dropdownItemsThenoim = [
    { label: 'Kallah-side', href: '#' },
    { label: 'Chussen-side', href: '#' },
    { label: 'Both sides', href: '#' },

  ];


  const dropdownItemsWedding = [
    { label: 'Wedding Invitation', href: '#' },
    { label: 'Save the date', href: '#' },
    { label: 'Bavarfen', href: '#' },


  ];



  return (
    <BootstrapNavbar expand="lg" bg="light" variant="light">
      <BootstrapNavbar.Brand href="#">Navbar</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbarNav" />
      <BootstrapNavbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <NavDropdown title="Baby" id="navbarDropdown">
            {dropdownItemsBaby.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item href={item.href} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <Nav.Item>
            <Link className="nav-link" to="/link">Upsherin</Link>
          </Nav.Item>


          <NavDropdown title="Bar-Mitzva" id="navbarDropdown">
            {dropdownItemsBarMitzva.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item href={item.href} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <NavDropdown title="Thenoim" id="navbarDropdown">
            {dropdownItemsThenoim.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item href={item.href} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <NavDropdown title="Wedding" id="navbarDropdown">
            {dropdownItemsWedding.map((item, index) => (
              <React.Fragment key={index}>
                <NavDropdown.Item href={item.href} className='dropdown-item'>
                  {item.label}
                </NavDropdown.Item>
                {index < dropdownItemsBaby.length - 1 && <NavDropdown.Divider />}
              </React.Fragment>
            ))}
          </NavDropdown>

          <Nav.Item>
            <Link className="nav-link disabled" to="#">Sheva-Brachot</Link>
          </Nav.Item>
        </Nav>
        <Form className="form-inline my-2 my-lg-0">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-sm-2"
            aria-label="Search"
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default AppHeaderBar;
