import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHourglassHalf, faStopwatch, faPersonRunning, faPlus  } from "@fortawesome/free-solid-svg-icons";
import './alarm.css';

function Alarm() {
    const [time, setTime] = useState(new Date());
    const [alarmTime, setAlarmTime] = useState("");
    const [isAlarmRinging, setIsAlarmRinging] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    useEffect(() => {
        if (alarmTime) {
            const current = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"});
            if (current === alarmTime) {
                setIsAlarmRinging(true);
                playSound();
                alert("Alarm ringing");
            }
        }
    }, [time, alarmTime]);
     
    const playSound = () => {
        const audio = new Audio ("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
        audio.play();
    };

    const handleSetAlarm = (e) => {
        setAlarmTime(e.target.value);
        setIsAlarmRinging(false);
    };
    return (
       <div>


        <div style={{ display: 'none'}}>
            <label>Set Alarm: </label>
            <input type="time" onChange={handleSetAlarm} value={alarmTime} />

            
        <button>
            Set Alarm
        </button>
        {isAlarmRinging && (
            <h3>⏰ Alarm Ringing!</h3>
        )}
        </div>

        <div className="add-alarm">
            <button className="add-alarm-btn">
                <FontAwesomeIcon icon={faPlus} size="lg"/>
            </button>
        </div>

       </div>
    );
}

export default Alarm;