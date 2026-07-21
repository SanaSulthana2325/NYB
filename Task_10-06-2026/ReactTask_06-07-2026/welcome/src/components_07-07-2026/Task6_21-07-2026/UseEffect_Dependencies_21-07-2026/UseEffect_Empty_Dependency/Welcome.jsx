import { useEffect } from "react";

function Welcome() {

  useEffect(() => {

    console.log("Welcome User!");

  }, []);

  return (

    <h1>React useEffect</h1>

  );
}

export default Welcome;