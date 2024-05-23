import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(null);
  //    const intervalId=useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  const [timeNow, setNow] = useState(null);
  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    setIntervalId(
      setInterval(() => {
        setTime(Date.now());
      }, 100)
    );
  };
  const handleStop = () => {
    clearInterval(intervalId);
  };
  const handleReset = () => {
    setTime(Date.now());
    setNow(Date.now());
  };
  let timePassed = (time - timeNow) / 1000;
  return (
    <div>
      <h1>STOP WATCH</h1>
      <h2>Time: {timePassed}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
