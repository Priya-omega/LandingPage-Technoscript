import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 5, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">

            <div className="text">
                <p> Next Batch Starts On : 5<sup>th</sup> Dec, 2023</p>
                <h1> Register Now </h1>
            </div>
            <div className="countdown-container">
                <div className="countdown-values">
                    <div className="countdown-value">
                        <p className="big-text">{days}</p>
                        <p className="big-text"> :</p>

                    </div>
                    <div className="countdown-value">
                        <p className="big-text">{hours}</p>
                        <p className="big-text"> :</p>

                    </div>
                    <div className="countdown-value">
                        <p className="big-text">{minutes}</p>
                        <p className="big-text"> :</p>

                    </div>
                    <div className="countdown-value">
                        <p className="big-text">{seconds}</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Timer;