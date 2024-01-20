import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { editOrder } from '../redux/pizzaSlice';
// import "./Timer.css";
const Timer = (order) => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check Timer running or not
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  return (
    <div className="Timer-container">
      <p className="Timer-time">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;