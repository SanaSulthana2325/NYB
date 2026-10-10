// Custom Hook:

import {useState}from "react";

function useLike(){
    const[likes,setLikes] = useState(0);

    function addLike(){
        setLikes(likes + 1);
    }
    return{likes,addLike};
}

function Post(){
    const{likes, addLike} = useLike();

    return(
        <>
        <h3> My Inta Post</h3>
        <p>Likes:{likes}</p>
        <button onClick={addLike} className="bg-pink-500 px-2 py-2">Like</button>
        </>
    );
}


//Creating Custom Hook

function useCounter(){
    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount((prev)=> prev + 1);
    };
    const decrement = () =>{
        setCount((prev)=> prev - 1);
    };
    return{count,increment,decrement};
}

function Cg(){
    const{count,increment,decrement} = useCounter();

    return(
        <>
        <h2>Counter:{count}</h2>

        <button onClick={increment} className="bg-green-600 px-2 py-2 mr-2"> Increase</button>

        <button onClick={decrement} className="bg-red-500 px-2 py-2"> Decrease</button>

        </>
    );
}

//Reuse Logic

function useToggle(){
    const[visible,setVisible] = useState(false);

    const toggle = () =>{
        setVisible((prev)=> !prev);
    };

    return{visible,toggle};
}


function Login() {
  const { visible, toggle } = useToggle();

  return (
    <>
      <h2>Login</h2>

      <input
        type={visible ? "text" : "password"}
        placeholder="Enter password"
      className="border border-green-700"/>

      <button onClick={toggle} className=" bg-purple-500 px-2 py-2">
        {visible ? "Hide" : "Show"} Password
      </button>
    </>
  );
}


function Register() {
  const { visible, toggle } = useToggle();

  return (
    <>
      <h2>Register</h2>

      <input
        type={visible ? "text" : "password"}
        placeholder="Create password"
      className="border border-green-700"/>

      <button onClick={toggle} className="bg-orange-600 px-2 py-2">
        {visible ? "Hide" : "Show"} Password
      </button>
    </>
  );
}

// with API

import { useEffect,  } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}


//App

function Ci() {
  const {
    data,
    loading,
    error
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Employee List</h2>

      {data.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}







export{Post,Cg,Login, Register,Ci};










// What are Custom Hooks?

// A Custom Hook is a JavaScript function that uses React Hooks, such as useState, useEffect, or other Hooks, to reuse logic across multiple components.

// Custom Hooks must start with the word use, followed by a descriptive name.

// Examples:

// useCounter()

// useForm()

// useFetch()

// useOnlineStatus()



// Creating Custom Hooks

// Creating a Custom Hook means extracting reusable logic into a separate function that follows React's Hook rules.



// Reusing Logic

// What does reusing logic mean?

// Reusing logic means writing a piece of functionality once and using it in multiple components instead of duplicating the same code.


// Custom Hook with API Calls

// What is it?

// A Custom Hook with API calls combines reusable React logic with a request to a server.





// Topic                          Meaning                            Real-time example

// What are Custom Hooks?     Functions that reuse React logic         Like button

// Creating Custom Hooks      Extracting logic into a function            useCounter()
//                                starting with use

// Reusing Logic            Using the same Hook in different components        Show/hide password

// Custom Hook with API Calls   Reusing data-fetching and request-state logic     useFetch() for users