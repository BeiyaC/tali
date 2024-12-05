import logo from "../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <header className="App-header">
            <button onClick={goHome} className="homeButton">
                <FontAwesomeIcon icon={faHome}/>
                Home
            </button>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Welcome to TALI game
            </p>
        </header>
    )
}
export default Header
