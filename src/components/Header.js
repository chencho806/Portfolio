import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Nav, Navbar } from "react-bootstrap";
import { useState } from 'react';

const Header = (props)  => {
    const handleClick = () => {
        window.open("https://github.com/chencho806")
        
    };
    const [expanded, setExpanded] = useState(false);


    return  (
        <Navbar collapseOnSelect expanded={expanded} id="navbar"  expand="lg" bg="light">
      <Navbar.Brand href="/">
        Corey Alvarez
      </Navbar.Brand>
      <Navbar.Toggle collapseOnSelect aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="text-decoration-none" to="/projects" onClick={() => setExpanded(false)}>Projects</Link>
          <Link className="text-decoration-none" to="/resume" onClick={() => setExpanded(false)}>Resume</Link>
          <Link className="text-decoration-none" to="/"  onClick={handleClick}>GitHub</Link>
          <Link className="text-decoration-none" to="/contact" onClick={() => setExpanded(false)}>Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};
      
      
export default Header;
            
          

        
        

            

                
