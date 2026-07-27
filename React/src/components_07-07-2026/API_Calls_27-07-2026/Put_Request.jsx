import React from "react";

function Put_Request() {

  const putPost = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1", {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: "Updated",
      }),

    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated Data:", data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <div>
      <h1>PUT Example</h1>

      <button
        onClick={putPost}
        className="bg-pink-300 border-2 px-4 py-2 rounded"
      >
        Put Post
      </button>
    </div>
  );
}

export default Put_Request;