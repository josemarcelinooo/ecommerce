//Identify which components are neede to build the navigation
import { Navbar, Nav, Container } from 'react-bootstrap'

//implement Links in to navbar
import { Link } from 'react-router-dom';

//we will now describe how we want our Navbar to look.
function AppNavBar() {
  return(
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand> B156 Booking App </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">  
              Home          
            </Link> 
            <Link to="/register" className="nav-link">  
              Register          
            </Link>   
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link> 
            <Link to="/logout" className="nav-link">
              Logout
            </Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;