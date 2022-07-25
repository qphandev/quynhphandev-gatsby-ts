// import { useState, useEffect, useRef } from 'react';

// const MINUTE_INTERVAL = 60000;

// export const Timer = () => {

//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(0);
//     const [buttonsEnabled, setButtonsEnabled] = useState(false);

//     const feederOnPressed = 1;
//     const powerOn = 1;

//     const timeoutRef = useRef();

//     useEffect(() => {
//         if (feederOnPressed && !buttonsEnabled) {

//             timeoutRef.current = setTimeout(() => {
//                 if (minutes > 0) {
//                     setMinutes(prev => {
//                         return prev - 1
//                     })
//                 }
//                 else if (hours > 0) {
//                     setHours(prev => prev - 1);
//                     setMinutes(59);
//                 }
//             }, MINUTE_INTERVAL)
//         }

//         return () => clearTimeout(timeoutRef.current);
//     }, [feederOnPressed, minutes, buttonsEnabled])

//     // Enables buttons and resets timer
//     const onSetButtonClick = () => {
//         if (powerOn) {
//             setButtonsEnabled(true);
//             setHours(0);
//             setMinutes(0);
//         }
//     }

//     // Disables buttons, calculates and sends value in minutes
//     const onEnterButtonClick = () => {
//         const timerInputValue = (hours * 60) + minutes;
//         if (powerOn) {
//             setButtonsEnabled(false);
//         }
//     }

//     const onUpButtonClick = (event, setDigitalCounter) => {
//         const {element} = event.target.dataset;

//         if (powerOn && buttonsEnabled) {
//             if (element === "inc_hour")
//         }
//     }

//     return (
//         <div>Timer</div>
//     )
// }
