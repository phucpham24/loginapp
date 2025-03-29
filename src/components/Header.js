import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/images/logo192.png'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Logout } from '../services/UserService';

function Header() {
  const {logout, user} = useContext(UserContext)

  const navigate = useNavigate();

  const handleLogout = async()=>{

    let res = await Logout(localStorage.getItem("token"));
    if (res && res.statusCode === 200)
    {
      logout();
    navigate("/");
    toast.success("logout success!")
    console.log("document.cookie (non-HttpOnly cookies):", document.cookie);
    // Optional: log all cookies (note: will not show HttpOnly cookies)
      console.log("document.cookie (non-HttpOnly cookies):", document.cookie);
    }
    else {
    toast.error("Logout fail");
                  return;
    }
      

    
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
          {(user && user.auth || window.location.pathname ==='/') &&
          <>
          <Nav className="me-auto">

              <NavLink to="/" className="active nav-link">Home</NavLink>
              {user && user.auth && <NavLink to="/users" className="active nav-link">Manage Users</NavLink>}
          </Nav>
            <Nav>
            {user && user.email && <span className='nav-link'> 
               Welcome <strong>{user.email}</strong> <strong>{user.role}</strong>
              </span>}  
            <NavDropdown title="Setting" id="basic-nav-dropdown">
                {user && user.auth ===true
                  ?  <NavDropdown.Item onClick={()=> handleLogout()}>Logout </NavDropdown.Item>
                :<NavLink to="/login" className="dropdown-item">Login</NavLink>
                }
            </NavDropdown>
          </Nav>
          </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;