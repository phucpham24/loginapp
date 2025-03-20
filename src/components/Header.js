import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/images/logo192.png'
import { useLocation, NavLink } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <Navbar expand="lg"  className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img src = {logoApp}
        width="30"
        height = " 30"
        className='d-inline-block align-top'
        alt="React Bootstrap logo"
        />
        <span>Login App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

              <NavLink to="/" className="active nav-link">Home</NavLink>
              <NavLink to="/users" className="active nav-link">Manage Users</NavLink>
          </Nav>
            <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;