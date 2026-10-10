// components:

function Welcome(){
    return(
        <>
        <h2>Welcome to React!</h2>
        </>
    );
}

// JSX

// Meaning: JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript

function Product(){
    const name ="Laptop";
    const price = 50000;

    return(
        <>
        <h2>{name} - ₹{price}</h2>
        </>
    );
}


// Props

// Meaning: Props are used to pass data from a parent component to a child component.

function Pro(props){
    return(
        <>
        <h2>{props.name}</h2>
        </>
    )
}

function Cj(){
    return(
        <>
        <Pro name= "Mobile"/>
        </>
    )
}

// State

// Meaning: State is data that a component remembers and can update over time. When state changes, React can re-render the component.

import { useState } from "react";

function Cart() {
  const [items, setItems] = useState(0);

  return (
    <div>
      <h2>Cart Items: {items}</h2>
      <button onClick={() => setItems(items + 1)}
        className="bg-green-400 px-2 py-2">
        Add Item
      </button>
    </div>
  );
}

// useState:

function Counter(){
    const [count,setCount]= useState(0)
    return(
        <>
        <button onClick={()=> setCount(c => c + 1)} className="bg-yellow-600 px-2 py-2"> Count:{count}</button>
        </>
    );
}


// useEffect

// Meaning: useEffect is a React Hook used to synchronize a component with external systems, such as APIs, timers, or event subscriptions.

import { useEffect } from "react";

function Ck(){
    useEffect(()=>{
        document.titlw ="my Tasan App"
    },[]);
    return(
        <>
        <h2> Shopping App</h2>
        </>
    )
}


// Event Handling

// Meaning: Event handling allows React to respond to user actions, such as clicks, typing, or form submission.

function Cl(){
    function sayHello(){
        console.log("Hello Sana!");
    }
    return(
        <button onClick={sayHello} className="bg-pink-300 px-2 py-2"> Click me</button>
    )
}


// Forms

// Meaning: Forms collect user input, such as names, email addresses, passwords, or feedback.


function Login1(){
    const [name, setName]= useState("");

    return(
        <>
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(`Welcome,${name}`);
        }}>
            <input value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="enter name" className="border border-green-600"/>

            <button type="submit" className="bg-blue-500 px-2 py-2">Login</button>
        </form>
        </>
    );
}



// List Rendering

// Meaning: List rendering displays multiple items using JavaScript's map() method.


function Cm(){
    const fruits=["Apple","Mango","Banana","Grapes","Cherry"]
    return(
        <>
        <ul>
            {fruits.map((fruit)=>(
                <li key={fruit}> {fruit}</li>
            ))}
        </ul>
        </>
    );
}


// API Calls

// Meaning: API calls allow a React application to request data from a server.


function Cn(){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new error("Request failed");
            }
            return response.json();
        })
        .then((data)=> setUsers(data))
        .catch((error)=> console.log(error));
    },[]);
    return(
        <>
        <h2> Users</h2>
        {users.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
        </>
    );
}


// Conditional Rendering

// Meaning: Conditional rendering displays different content depending on a condition.

function Co(){
    const isLoggedIn = true;

    return(
        <>
        {isLoggedIn
        ?<h2> Welcome Back!</h2>
    :<h2> Please Login</h2>}
        </>
    )
}

export{Welcome,Product, Cj, Cart, Counter, Ck,Cl,Login1,Cm,Cn,Co}










// Components

// Meaning: Components are reusable building blocks of a React application. A component can represent a Navbar, button, form, or complete page.


// useState

// Meaning: useState is a React Hook that lets a functional component store and update state.

// Syntax:

// const [value, setValue] = useState(initialValue);




// useEffect(() => {}) — runs after every relevant render.

// useEffect(() => {}, []) — runs after the initial mount.

// useEffect(() => {}, [value]) — runs after mounting and when value changes



// Remember: fetch() sends the request, response.json() parses the response, and setUsers(data) updates React state. Production applications should also handle loading and error states in the UI.




// Topic                   Main purpose                           Important syntax

// Components         Reuse UI building blocks                      function App()

// JSX              Write UI using HTML-like syntax                   {variable}

// Props               Pass data to child components                 props.name

// State              Store changing component data                   Component state

// useState                  Create and update state                     useState(0)

// useEffect             Synchronize with external systems              useEffect()

// Event Handling             Respond to user actions                     onClick

// Forms                        Collect user input                  onChange, onSubmit

// List Rendering             Display collections                      map() and key

// API Calls                  Retrieve server data                         fetch()

// Conditional Rendering          Show UI based on conditions           if, &&, ?: