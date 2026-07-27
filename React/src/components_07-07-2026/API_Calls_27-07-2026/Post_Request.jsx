import React from "react";

function Post_Request() {
  // Function to send POST request
  const createPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: "Sana",
        body: "Learning About Nature",
        userId: 101,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Post Created Successfully!");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Fetch POST API Example</h1>

      <button onClick={createPost}
        className="bg-pink-300 border border-2px">
    
      Create Post</button>
    </div>
  );
}

export default Post_Request;