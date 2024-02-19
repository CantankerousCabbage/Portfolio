//Components
import ResumeButton from './resumeButton'
import { Link } from 'react-router-dom';

//Icons
import { IconContext } from 'react-icons';
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

//CSS
import '../App.css'



const Footer = () => {
    return (
        <div className='App-footer'>
            <div className='footer-item1'>
                <a href='https://www.linkedin.com/in/joseph-warren-34728b231/'>
                    <IconContext.Provider value={{className: 'link-icon'}}>
                        <FaLinkedin />
                    </IconContext.Provider>
                </a>
                

                <a href='https://github.com/CantankerousCabbage?tab=repositories'>
                    <IconContext.Provider value={{className: 'link-icon'}}>
                        <FaGithub />
                    </IconContext.Provider>
                </a>

                <a href='https://leetcode.com/CantankerousCabbage/'>
                    <IconContext.Provider value={{className: 'link-icon'}}>
                        <SiLeetcode />
                    </IconContext.Provider>
                </a>
            </div>
            

            <div className='footer-item2'>
                <ResumeButton />
            </div>
            
        </div>

    )
}

export default Footer;