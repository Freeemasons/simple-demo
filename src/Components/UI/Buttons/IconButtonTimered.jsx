import React, { useEffect, useState } from 'react';
import { IconButton } from "@mui/material"

//this is btn what disables for some time after click
//icon - is output icon
//timerSeconds - is time for disabling
//showSeconds - will be showen seconds instead of icon
//size - is size of btn
//props sre used for other btn settings (tkes from mui IconButton)
const IconButtonTimered = ({
    icon,
    timerSeconds = 5,
    showSeconds = true,
    onClick,
    size = "small",
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

    return (
        <IconButton {...props} onClick={handleClick} disabled={btnClicked} size={size}>
            {showSeconds && btnClicked ?
                ` ${timer}`
                :
                icon
            }
        </IconButton>
    )
}

export default IconButtonTimered;