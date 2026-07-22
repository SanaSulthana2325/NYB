import { useEffect, useState } from "react";

function Failure() {

  const [error, setError] = useState("");

  useEffect(() => {

    const loadUsers = async () => {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/invalid"
        );

        if (!response.ok) {

          throw new Error("Data Not Found");

        }

        await response.json();

      }

      catch(error){

        setError(error.message);

      }

    };

    loadUsers();

  }, []);

  return (

    <>

      {error && <h2>{error}</h2>}

    </>

  );

}

export default Failure;