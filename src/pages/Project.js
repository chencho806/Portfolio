import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import {  Card, Container, Row } from 'react-bootstrap';

const Projects = (props) => {
    return (
        
        <Container className="grid" >
            <Row lg={4} className='justify-content-center'>
            <Card style={{ width: '18rem', height: '28rem'}} className="box" >
                <Container className="img-container">
                <Card.Img variant="top" src="/BoozeHound2.jpg" className="image"/>
                </ Container>
                <Card.Body>
                    <Card.Title>BoozeHound</Card.Title>
                        <Card.Text>
                        Random Cocktail Generator
                        </Card.Text>
                        <Link className="site-links" to="https://boozehound.netlify.app/">View Site</Link>
                        <Link className="git-links" to="https://github.com/chencho806/cocktail-recipe-finder">GitHub</Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '28rem' }} className="box">
                <Container className="img-container" >
                <Card.Img variant="top" src="/RatMilk.jpg" className="image"/>
                </Container>
                <Card.Body>
                    <Card.Title>Rattlesnake Milk Website</Card.Title>
                        <Card.Text>
                        Band Website
                        </Card.Text>
                        <Link className="site-links" to="https://rattlesnakemilkadmin.netlify.app/">View Site</Link>
                        <Link className="git-links" to="https://github.com/chencho806/rat-milk-frontend">GitHub</Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '28rem' }} className="box">
                <Container className="img-container">
                <Card.Img variant="top" src="/RAAM.jpg" className="image"/>
                </Container>
                <Card.Body>
                    <Card.Title>RAAM</Card.Title>
                        <Card.Text className="">
                        Food Pantry App 
                        </Card.Text>
                        <Link className="site-links" to="https://radiant-chamber-29667.herokuapp.com/">View Site</Link>
                        <Link className="git-links" to="https://github.com/chencho806/raam">GitHub</Link>
                </Card.Body>
            </Card>
                        
            <Card style={{ width: '18rem', height: '28rem' }} className="box">
                <Container className="img-container">
                <Card.Img variant="top" src="MethodLeather.jpg" className="image"/>
                </Container>
                <Card.Body>
                    <Card.Title>Method Leather</Card.Title>
                        <Card.Text>
                        Website for Method Leather
                        </Card.Text>
                        <Link className="site-links" to="https://protected-eyrie-89367.herokuapp.com/home">View Site</Link>
                        <Link className="git-links" to="https://github.com/chencho806/method-leather-express-app">GitHub</Link>
                </Card.Body>
            </Card>
            </Row>
        </Container>

        
        
        
    );
};

export default Projects







                
                    



                    











