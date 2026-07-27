import React from "react";

function Delete_Request() {

  const deletePost = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1", {

      method: "DELETE",

    })

      .then((response) => {

        if (response.ok) {
          console.log("Post Deleted Successfully");
        }

      })

      .catch((error) => console.log(error));

  };

  return (

    <div>

      <h1>DELETE Example</h1>

      <button onClick={deletePost}
        className="bg-pink-300 border border-2px">
      
        Delete Post
      </button>

    </div>

  );
}

export default Delete_Request;