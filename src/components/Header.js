import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/images/logo192.png'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Header() {
  const {logout} = useContext(UserContext)

  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate("/");
    toast.success("logout success!")
  }
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

                <NavLink to="/login" className="dropdown-item">Login</NavLink>

              <NavDropdown.Item onClick={()=> handleLogout()}>
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