import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

function AppNavBar() {
  const { user } = useContext(UserContext); 

  return(
    <Navbar bg="secondary" expand="lg">
      <Container id="navbarContent">
        <Navbar.Brand> Pandora's Box </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">  
              Home          
            </Link> 
            {
              user.id !== null ?
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>  
              :
                <>
                  <Link to="/register" className="nav-link">  
                    Register          
                  </Link>   
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </>
            }
            <Link to="/products" className="nav-link">
              Products
            </Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;