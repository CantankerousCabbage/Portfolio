
import { IconContext } from 'react-icons';
import { RiArrowDownSLine } from "react-icons/ri";

import './globalNav.css'

const NavDropDown = ( { ...props } ) => {
    return(
        <div className='nav-Button right'>
            {props.title} 
            <IconContext.Provider value={{className: 'down-arrow'}}>
                <RiArrowDownSLine />
            </IconContext.Provider>
        </div>
    )
}

export default NavDropDown;

