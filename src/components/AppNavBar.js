import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

function AppNavBar() {
  const { user } = useContext(UserContext); 

  return(
    <Navbar fixed='top' bg="light" expand="lg">
      <Container id="navbarContent">
        <Navbar.Brand className={user.isAdmin ? "text-warning" : "text-dark"}> Pandora's Box </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link text-dark">  
              Home          
            </Link> 
            {
              user.isAdmin ?
                <Link to="/products" className="nav-link text-dark">
                  All Products
                </Link>  
              :
                <Link to="/products" className="nav-link text-dark">
                  Products
                </Link>  
            }
            {
              user.id !== null ?
                user.isAdmin ?
                <>
                <Link to="/add/products" className="nav-link text-dark">
                  Add Product
                </Link>  
                <Link to="/logout" className="nav-link text-dark">
                  Logout
                </Link>  
                </>
                :
                <Link to="/logout" className="nav-link text-dark">
                  Logout
                </Link>  
              :
                <>
                  <Link to="/register" className="nav-link text-dark">  
                    Register          
                  </Link>   
                  <Link to="/login" className="nav-link text-dark">
                    Login
                  </Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;