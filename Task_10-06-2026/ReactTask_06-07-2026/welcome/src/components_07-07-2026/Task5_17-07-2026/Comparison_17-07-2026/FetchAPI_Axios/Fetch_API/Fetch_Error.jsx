import React, { useEffect } from "react";

function Fetch_Error() {

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();

      })

      .then((data) => {
        console.log("Data received:", data);
      })

      .catch((error) => {
        console.log("Error:", error.message);
      });

  }, []);


  return (
    <div>
      <h2>Fetch API Error Handling Example</h2>
      <p>Check Console for Output</p>
    </div>
  );
}

export default Fetch_Error;