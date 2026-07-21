import { useEffect } from "react";

function Timer1() {

  useEffect(() => {

    const timer = setInterval(() => {

      console.log("Running...");

    }, 1000);

    return () => {

      clearInterval(timer);

      console.log("Timer Cleared");

    };

  }, []);

  return (

    <h1>Timer Example</h1>

  );
}

export default Timer1;