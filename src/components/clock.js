import React, { useState, useEffect } from 'react';

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
            <h1>React Clock App</h1>
            <div>{formatTime(time)}</div>
        </div>
    );
}

export default Clock;