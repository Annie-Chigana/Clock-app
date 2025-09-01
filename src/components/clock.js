import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHourglassHalf, faStopwatch, faPersonRunning   } from "@fortawesome/free-solid-svg-icons";
import './clock.css';

function Clock() {
    const navigate = useNavigate();
    const [ time, setTime ] = useState(new Date());

    useEffect(() => {
        //Update the time every second
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        //cleanup when component unmounts
        return () => clearInterval(interval);
    }, []);

    //Format the time [HH:MM:SS]
    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };

    const handleSettings = () => {
        navigate('/settings');
    }

     const handleAlarm = () => {
        navigate('/alarm');
    }

    return (
        <div>
            <div className="time-stamp"><strong>{formatTime(time)}</strong></div>
            
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
            
        </div>
        
    );
}

export default Clock;