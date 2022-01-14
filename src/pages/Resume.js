import { BsDownload } from 'react-icons/bs'

const Resume = (props) => {
    return (
        <body>
            <div className="mb-5">
                <div>
                <a href="https://github.com/chencho806/resume/raw/main/Resume.pdf" className="link-dark">
                <h4 className="mt-5"><BsDownload /></h4>
                </a>
                </div>

                
                <img src="./Resume.png" alt="" className="shadow p-3 mb-5 bg-white rounded img-fluid max-width: 100% height: auto" />
            </div>
        </body>
    );
};

export default Resume
        
            




        


