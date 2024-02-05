//CSS
import './globalNav.css';

//React
import { Link, useNavigate } from "react-router-dom";

const HomeButton = () => {
    const navigate = useNavigate();
    
    return (
        <div className="home-Button left" onClick={() => navigate("/")}>
            Joseph Warren
        </div>
    )
};

export default HomeButton;