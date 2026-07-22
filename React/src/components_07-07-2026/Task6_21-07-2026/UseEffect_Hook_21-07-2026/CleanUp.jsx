import { useState, useEffect } from "react";

function CleanUp() {

  const [time, setTime] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(prev => prev + 1);

    },1000);

    return () => {

      clearInterval(timer);

    };

  }, []);

  return (
    <h2>{time}</h2>
  );
}

export default CleanUp;