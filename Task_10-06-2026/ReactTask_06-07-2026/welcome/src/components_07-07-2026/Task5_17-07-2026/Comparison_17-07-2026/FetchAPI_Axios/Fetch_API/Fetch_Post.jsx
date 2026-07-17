import React from "react";

function Fetch_Post() {

  const handlePost = () => {

    fetch("https://jsonplaceholder.typicode.com/posts", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title: "React",
        body: "Learning Fetch API"
      })

    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Data Posted Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>
      <h2>Fetch POST Example</h2>

      <button onClick={handlePost}>
        POST Data
      </button>
    </div>
  );
}

export default Fetch_Post;