import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Nav, Navbar } from "react-bootstrap";
import { useState } from 'react';

const Header = (props)  => {
    
    const [expanded, setExpanded] = useState(false);

    return  (
        <Navbar  className="shadow-sm p-3 mb-5 bg-white rounded" expanded={expanded} id="navbar" expand="sm" bg="white" sticky="top">
      <Navbar.Brand className="brand">
        <Link className="text-decoration-none" id="name" to="/" onClick={() => setExpanded(false)}>COREY ALVAREZ</Link>
      </Navbar.Brand>
      <Navbar.Toggle  className="burger" aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} size="sm"/>
      <Navbar.Collapse  id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="text-decoration-none" id="nav-links" to="/projects" onClick={() => setExpanded(false)}>Projects</Link>
          <Link className="text-decoration-none" id="nav-links" to="/resume" onClick={() => setExpanded(false)}>Resume</Link>
          <Link className="text-decoration-none" id="nav-links" to="/contact" onClick={() => setExpanded(false)}>Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};
      
      
export default Header;
            
          

        
        

            

                
