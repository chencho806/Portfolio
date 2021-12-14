import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import {  Card, Container, Row } from 'react-bootstrap';

const Projects = (props) => {
   
    
    return (
        <body>
            
            <Container className="grid mb-5" >
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
                            <Link className="site-links" to={{ pathname: "https://boozehound.netlify.app/" }} target="_blank">View Site</Link>
                            <Link className="git-links" to={{ pathname: "https://github.com/chencho806/cocktail-recipe-finder" }} target="_blank">GitHub</Link>
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
                            <Link className="site-links" to={{ pathname: "https://rattlesnakemilkadmin.netlify.app/" }} target="_blank">View Site</Link>
                            <Link className="git-links" to={{ pathname: "https://github.com/chencho806/rat-milk-frontend" }} target="_blank">GitHub</Link>
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
                            <Link className="site-links" to={{ pathname: "https://radiant-chamber-29667.herokuapp.com/" }}target="_blank">View Site</Link>
                            <Link className="git-links" to={{ pathname: "https://github.com/chencho806/raam" }} target="_blank">GitHub</Link>
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
                            <Link className="site-links" to={{ pathname: "https://protected-eyrie-89367.herokuapp.com/home" }} target="_blank">View Site</Link>
                            <Link className="git-links" to={{ pathname: "https://github.com/chencho806/method-leather-express-app" }} target="_blank">GitHub</Link>
                    </Card.Body>
                </Card>
                </Row>
            </Container>
        </body>
        

        
        
        
    );
};

export default Projects







                
                    



                    











