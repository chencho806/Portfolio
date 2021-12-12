import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Nav, Navbar } from "react-bootstrap";

const Header = (props)  => {
    const handleClick = () => {
        window.open("https://github.com/chencho806")
    };
    return  (
        <Navbar id="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand href="home">
        Corey Alvarez
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="text-decoration-none" to="/projects">Projects</Link>
          <Link className="text-decoration-none" to="/resume">Resume</Link>
          <Link className="text-decoration-none" to="/" onClick={handleClick}>GitHub</Link>
          <Link className="text-decoration-none" to="/contact">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};
      
      
export default Header;
            
          

        
        

            

                
