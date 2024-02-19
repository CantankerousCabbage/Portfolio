//Components
import ResumeButton from './resumeButton'

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
                <IconContext.Provider value={{className: 'linkedin'}}>
                    <FaLinkedin />
                </IconContext.Provider>

                <IconContext.Provider value={{className: 'github'}}>
                    <FaGithub />
                </IconContext.Provider>

                <IconContext.Provider value={{className: 'leetCode'}}>
                    <SiLeetcode />
                </IconContext.Provider>
            </div>
            

            <div className='footer-item2'>
                <ResumeButton />
            </div>
            
        </div>

    )
}

export default Footer;