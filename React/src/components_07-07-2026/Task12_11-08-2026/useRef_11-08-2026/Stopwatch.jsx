import React, { useRef, useState } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      <button onClick={start}
      className='bg-pink-400'>Start</button>
      <br/>
      <button onClick={stop}
      className='bg-green-600'>Stop</button>
    </div>
  );
}

export default Stopwatch;