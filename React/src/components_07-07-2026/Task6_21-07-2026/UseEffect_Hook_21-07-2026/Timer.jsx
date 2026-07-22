import { useState, useEffect } from "react";

function Timer() {

  const [time, setTime] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setTime((prev) => prev + 1);

    }, 1000);

    return () => {

      clearInterval(timer);

    };

  }, []);

  return (

    <h2>Seconds : {time}</h2>

  );

}

export default Timer;