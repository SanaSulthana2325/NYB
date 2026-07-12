import { useState } from "react";

function Get_Async() {

  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await response.json();

    setPosts(data);

  };

  return (

    <div>

      <button onClick={loadPosts}>
        Load Posts
      </button>

      {posts.slice(0,5).map((post)=>(

        <h3 key={post.id}>
          {post.title}
        </h3>

      ))}

    </div>

  );

}

export default Get_Async;






















// What is Asynchronous Programming?

// Asynchronous Programming means a task runs in the background without blocking the rest of the application.

// When your React app calls an API, it doesn't know how long the server will take to respond. Instead of freezing the UI, JavaScript continues running while waiting for the API response.



// Promise

// A Promise represents the result of an asynchronous operation.

// A Promise has 3 states: