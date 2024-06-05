import React, { useEffect, useState } from 'react';
import ButtonMain from './ButtonMain';

//this is btn what disables for some time after click
//in this btn is used castom component - ButtonMain
//================================
//...props are used for settings of ButtonMain. This settings watch in >>>>>>>ButtonMain component<<<<<<<
//================================
//onClick used for your function
//timeerSeconds is how many seconds will be button disabled
//timerTitle is title for disabled btn
//useSecondsInTitle is used for outputting seconds left or no


const ButtonMainTimered = ({
    onClick,
    timerSeconds = 5,
    timerTitle = "",
    useSecondsInTitle = true,
    ...props
}) => {
    const [btnClicked, setBtnClicked] = useState(false)
    const [timer, setTimer] = useState(0)

    const callTimerProcess = () => {
        setTimer(timerSeconds)
        let timerInterval = setInterval(() => setTimer(prev => prev - 1), 1000)
        setTimeout(() => {
            clearInterval(timerInterval)
            setTimer(0)
            setBtnClicked(false)
        }, timerSeconds * 1000)
    }

    useEffect(() => {
        if (btnClicked) {
            callTimerProcess()
        }
    }, [btnClicked])

    const handleClick = (e) => {
        onClick && onClick(e)
        setBtnClicked(true)
    }

    const timeredTitle = () => {
        if (btnClicked) {
            if (timerTitle) {
                if (useSecondsInTitle) {
                    return timerTitle + " " + timer
                } else return timerTitle
            } else{
                if (useSecondsInTitle) {
                    return props?.title + " " + timer
                } else return props?.title
            }
        } else return props?.title
    }

    return (
        <ButtonMain
            {...props}
            disabled={btnClicked}
            title={timeredTitle()}
            onClick={handleClick}
        />
    )
}

export default ButtonMainTimered;