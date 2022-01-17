import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = (props) => {
    return (
        <Container style={{maxWidth: '900px'}}>
        
            <div className="mt-5">
                <img src="/me2.jpg" className="img rounded-circle" alt="me" width="300"/>
            </div>   
                
            <div className="mt-5" id="paragraphs">
                <h2>Hello!</h2>
                <p>My name is Corey Alvarez and I'm a full-stack engineer based in Austin, Tx. I'm a musician, certified motorcycle mechanic, and sci-fi enthusiast. I'm a creative thinker with a team oriented mindset and management skills, seeking to begin my journey as a software developer.</p>
            </div>

            <div className="mt-5">
                <p>I've recently attended General Assembly's Software Engineering Immersive Program and received a certificate of completion on December 6th, 2021. My primary programming language is Javascript, but I've gained some skill in Python as well. I'm most familiar with MERN stack, but I'm currently sharpening my skills in other frameworks and libraries.</p>
            </div>
                
            <div className="container mt-5">
                <div className="row">
                    <h2>Skills</h2>
                    <div className="col-sm" >
                        <ul className="p-0 list-unstyled">
                            <li className="text-decoration-underline">LANGUAGES</li>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                    
                    </div>
                    <div className="col-sm">
                        <ul className="p-0 list-unstyled">
                            <li className="text-decoration-underline">FRAMEWORKS/LIBRARIES</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>Django</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="p-0 list-unstyled">
                            <li className="text-decoration-underline">OTHER TECHNOLOGIES</li>
                            <li>PostgresSQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        
        </Container>
       
       );
   };
   
   
   export default Home

        




                    
                    
                        

                

                

        
        
                        
                        


                    
        



