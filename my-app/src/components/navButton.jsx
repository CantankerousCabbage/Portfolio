import './globalNav.css';

const NavButton = ( {...props} ) => {
    const onClick = () => {

    }

    return (
        <div className='nav-Button right' onClick={() => onClick()}>
            {props.title}
        </div>
    );
}

export default NavButton