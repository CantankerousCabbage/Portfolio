import './globalNav.css';

//React

import { Link, useNavigate } from "react-router-dom";

const NavButton = ( { destination, title } ) => {
    const navigate = useNavigate();

    const onClick = () => {
        
    }

    return (
        <div className='nav-Button right' onClick={() =>navigate(destination)}>
            {title}
        </div>
    );
}

export default NavButton