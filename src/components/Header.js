import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props)  => {
    const handleClick = () => {
        window.open("https://github.com/chencho806")
    };
    return  (
        <header className="header">
            <Link className>
                <h1>Hola</h1>
            </Link>
            <nav>
                <Link className="links" to="/projects">Projects</Link>
                <Link className="links"  to="/" onClick={handleClick}>GitHub</Link>
                <Link className="links">Resume</Link>
                <Link className="links" to="/contact">Contact</Link>
        
            </nav>
        </header>

    );
};


export default Header;

            

                
