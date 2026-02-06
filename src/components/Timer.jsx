import React from 'react'
import TimerDisplay from './TimerDisplay'
import Button from './Button'
import "./Timer.css"
const Timer = () => {


    const buttons = [
        { className: 'start', value: '시작' },
        { className: 'pause', value: '일시 정지' },
        { className: 'reset', value: '초기화' }
    ]
    return (
        <div className='timer-container'>
            <TimerDisplay />
            {buttons.map((button,i) => (

                <Button key={i} {...button}/>
            ))}
        </div>
    )
}

export default Timer