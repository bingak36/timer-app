import React, { useState, useEffect, useRef } from 'react';
import TimerDisplay from './TimerDisplay';
import Button from './Button';
import "./Timer.css";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const buttons = [
        { className: 'start', value: '시작', onClick: handleStart },
        { className: 'pause', value: '일시 정지', onClick: handlePause },
        { className: 'reset', value: '초기화', onClick: handleReset }
    ];

    return (
        <div className='timer-container'>
            <TimerDisplay time={formatTime(time)} />
            <div className="button-group">
                {buttons.map((button, i) => (
                    <Button key={i} {...button} />
                ))}
            </div>
        </div>
    );
};

export default Timer;