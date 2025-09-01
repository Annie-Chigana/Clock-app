import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHourglassHalf, faStopwatch, faPersonRunning   } from "@fortawesome/free-solid-svg-icons";
import './clock.css';

function Clock() {
    
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

 
    return (
        <div>
            <div className="time-stamp"><strong>{formatTime(time)}</strong></div>
          
            
        </div>
        
    );
}

export default Clock;