import 'bootstrap/dist/css/bootstrap.min.css';

import {  Card, Button, Container, Row } from 'react-bootstrap';

const Projects = (props) => {
    return (
        
        <Container className="grid" >
            <Row lg={4} className='justify-content-center'>
            <Card style={{ width: '18rem', height: '24rem'}} className="box shadow-5" >
                <Container className="img-container">
                <Card.Img variant="top" src="/BoozeHound.jpg" className="image"/>
                </ Container>

                <Card.Body>

                    <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>

                        <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '24rem' }} className="box">
                <Container className="img-container">
                <Card.Img variant="top" src="/me.jpeg" className="image"/>
                </Container>
                    
                <Card.Body>

                    <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>

                        <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '24rem' }} className="box">
                <Container className="img-container">
                <Card.Img variant="top" src="/me.jpeg" className="image"/>
                </Container>

                <Card.Body>

                    <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        
                        
                        </Card.Text>

                        <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '24rem' }} className="box">
                <Container className="img-container">
                <Card.Img variant="top" src="/me.jpeg" className="image"/>
                </Container>

                <Card.Body>

                    <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>

                        <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Row>
        </Container>
        
        
        
    );
};

export default Projects








