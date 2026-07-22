import {useState} from 'react'

function Get_Example_2() {
    const[posts, setPosts]= useState([]);
    const getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    };
  return (
    <>
    <h2>Fetch data on button click</h2>
    <button onClick = {getPosts}> Load Posts</button>
    {posts.slice(0,5).map((post) =>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            </div>

    ))}

    </>
  )
}

export default Get_Example_2