import { Link } from 'react-router-dom'
import { BsGithub} from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'


const Footer = (props) => {
    return (
        <footer class="text-center text-white" id="footer">
             <div class="container p-4 pb-0">
                <section className="mb-2">
                    <Link className="btn btn-floating m-1" id="icons" to={{ pathname: "https://github.com/chencho806" }} target="_blank"><BsGithub size="50px"/></Link>
                    <Link className="btn btn-floating m-1" id="icons" to={{ pathname: "https://www.linkedin.com/in/corey-alvarez-276678214/" }} target="_blank"><AiFillLinkedin size="50px"/></Link>
                </section>
             </div>
            <div className="text-center p-3 text-dark">
                © 2022 Copyright Corey Alvarez 
            </div>
        </footer>
    );
};


export default Footer;

                    
                    


                 


  
    
      
        

      

      
      
    
  
  

 
  