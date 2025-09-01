import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { faGear, faStopwatch, faPersonRunning, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = () => {

    const navigate = useNavigate();

    const handleSettings = () => {
        navigate('/settings');
    }

     const handleAlarm = () => {
        navigate('/alarm');
    }

    return (
          <div className="nav-section">
                    <button className="hour-glass" onClick={handleAlarm}> 
                         <FontAwesomeIcon icon={faHourglassHalf} size="lg" />
                    </button>
                   
                   <button className="stopwatch" onClick={handleSettings}>
                        <FontAwesomeIcon icon={faStopwatch } size="lg" /> 
                    </button>
        
                    <button className="running-man" onClick={handleSettings}>
                        <FontAwesomeIcon icon={faPersonRunning  } size="lg" /> 
                    </button>
        
                   <button className="main-settings" onClick={handleSettings}>
                        <FontAwesomeIcon icon={faGear} size="lg" /> 
                    </button>
                    </div>
    );
};

export default NavBar;