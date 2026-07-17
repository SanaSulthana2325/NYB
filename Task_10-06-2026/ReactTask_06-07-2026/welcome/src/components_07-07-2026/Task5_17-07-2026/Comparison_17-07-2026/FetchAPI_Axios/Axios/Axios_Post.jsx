import React from "react";
import axios from "axios";

function Axios_Post() {

  const handlePost = () => {

    axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "React",
        body: "Learning Axios"
      }
    )

    .then((response) => {
      console.log("Response Data:", response.data);
    })

    .catch((error) => {
      console.log("Error:", error.message);
    });

  };


  return (
    <div>

      <h2>Axios POST Example</h2>

      <button onClick={handlePost}>
        Send POST Request
      </button>

    </div>
  );
}


export default Axios_Post;