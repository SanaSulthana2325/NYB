import { useState } from "react";

function Get() {
  const [result, setResult] = useState([]);

  // Example 1
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setResult(data);
  };

  // Example 2
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setResult(data);
  };

  // Example 3
  const getComments = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>GET Method Practice</h1>

      <button onClick={getUsers}>Get Users</button>

      <button onClick={getPosts}>Get Posts</button>

      <button onClick={getComments}>Get Comments</button>

      <hr />

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default Get;