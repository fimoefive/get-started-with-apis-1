import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav, Navbar,
  NavbarToggler,
  NavItem
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/jokes">JOKES</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/lyrics">LYRICS</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/weather">Weather</Link>
      </NavItem>
    </>
  );

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to="/">Main</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {authenticated()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

// NavBar.propTypes = {
//   user: PropTypes.any
// };

export default NavBar;
