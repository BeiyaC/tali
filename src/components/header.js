import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/title.png';

const Header = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <header className="App-header">
            <button onClick={goHome} className="homeButton">
                <FontAwesomeIcon icon={faHome} size="xl" color="#ccb89f"/>
            </button>
            <img src={logo} className="App-logo" alt="logo"/>

        </header>
    )
}
export default Header;