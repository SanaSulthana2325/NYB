// Event Handing

function Ab(){
    function handleClick(){
        console.log("Tasan Add Product");
    }
    return(
        <>
        <h1> Shopping website</h1>

        <button onDoubleClick={handleClick} className="bg-pink-500 px-2 py-2"> Add to cart</button>
        </>
    );
}


//Forms

function Login(){
    function handleSubmit(event){
        event.preventDefault();
        console.log("Login Submitted");
    }

    return(
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Enter name" className="border-border-red-3  bg-yellow-300"/>  <br/><br/>

            <input type="password" placeholder="password"  className="bg-green-300"/><br/><br/>

            <input type="number"  placeholder="enter your age" className="bg-purple-300"/><br/><br/>

            <button type="submit" className="bg-blue-500 px-2 py-2"> Login</button>
        </form>
    )
}


// Controlled Component

import{useState} from "react";

function Register(){
    const[name,setName] = useState("");

    return(
        <>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)} 
        className="bg-orange-300  border border-red-900"/>

        <h2> Hello {name}</h2>
        </>
    );
}


// Input Handling

function Bb(){
    const[email,setEmail]=useState("");
    return(
        <>
        <input type="email" placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)}
        className="bg-yellow-400  border border-pink-700"/>

        <p>Email:{email}</p>
        </>
    )
}


// Dynamic Form



function Hobbies() {
    const [hobbies, setHobbies] = useState([""]);

    function addHobbies() {
        setHobbies([...hobbies, ""]);
    }

    function handleHobbyChange(index, value) {
        const updatedHobbies = [...hobbies];
        updatedHobbies[index] = value;
        setHobbies(updatedHobbies);
    }

    return (
        <>
            <h2>Hobbies</h2>

            {hobbies.map((hobby, index) => (
                <input
                    key={index}
                    value={hobby}
                    placeholder={`Hobby ${index + 1}`}
                    onChange={(e) =>
                        handleHobbyChange(index, e.target.value)
                    }
                    className="border border-red-900 m-2 p-2"
                />
            ))}

            <br />

            <button
                onClick={addHobbies}
                className="bg-green-500 px-2 py-2"
            >
                Add Hobbies
            </button>
        </>
    );
}

//List Rendering

function Fruits(){
    const Fruits=["Apple","Banana","Mango","Grapes"];

    return(
        <>
        {Fruits.map((Fruit, index)=>(
            <p key={index}>{Fruit}</p>
        ))}
        </>
    )
}


// Map

function Chips(){
    const Chips=["Bingo","Lays","Kurkure","Jumgle","Wheels"];

    return(
        <>
        <h1> Chips</h1>
        {Chips.map((Chip,index)=>(
            <div key= {index}>{Chip}</div>
        ))}
        </>
    );
}


// Keys

// When we use map() in React, we should give each element a unique key.

const Products = [
    {id:1, name:"T-Shirt"},
    {id:2, name:"Jeans"},
    {id:3, name:"Shoes"},

];

function Bc(){
    return(
        <>
        {Products.map((Product)=>(
            <p key={Product.id}>

            {Product.name}
            </p>
        ))}
        </>
    );
}


// Conditional Rendering


function Bd(){
    const isAvailable = false;

    return(
        <>
        <h2> Iphone</h2>
        {isAvailable ? (
            <button>Add to cart</button>
        ):(
            <p> out of stock</p>
        )}
        </>
    );
}


//useEffect

import {useEffect} from "react";

function Pro(){
    useEffect(()=>{
        console.log("Fetching products........");
    },[]);

    return(
        <h1> Products</h1>
    );

}


// Dependency Array


function Be(){
    useEffect(()=>{
        console.log("Effect")
    });
}


// empty dependency: "Run this when the component loads."

function Bf(){
    useEffect(()=>{
        console.log("Effect Executed")
    },[])
}


// dependency:Now the effect runs when user changes.

function Bg(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Count Change:",count);
    },[count]);

    return(
        <>
        <h2> Count:{count}</h2>
        <button onClick={()=> setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Increase
            </button>
             </>
    )
}


// component lifecycle


function Bh() {
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>useEffect Example</h1>

            <button
                onClick={() => setShow(!show)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                {show ? "Unmount Component" : "Mount Component"}
            </button>

            {show && <Child />}
        </>
    );
}

function Child() {
    useEffect(() => {
        console.log("Component mounted");

        return () => {
            console.log("Component unmounted");
        };
    }, []);

    return (
        <div className="bg-green-300 p-4 mt-4">
            <h2>Hello! I am the Child Component</h2>
            <p>Check the browser console.</p>
        </div>
    );
}



export{Ab, Login,Register, Bb, Hobbies,Fruits,Chips,Bc,Bd,Pro,Be,Bf,Bg,Bh};












// What is an Event?

// An event is an action performed by the user or browser.

// Examples:

// Clicking a button
// Typing in an input
// Submitting a form
// Moving the mouse
// Selecting an option


// Form Handling

// Forms are used when we need information from users.

// Real-world examples:

// Login
// Registration
// Search
// Checkout
// Contact form
// Feedback form


// Why event.preventDefault()?

// Normally, submitting an HTML form causes the browser to reload the page.

// React applications generally don't want that.

// So:

// event.preventDefault();

// means:

// Stop the browser's default form submission behavior.



// Controlled Components

// This is one of the most important React concepts.

// A controlled component means:

// React state controls the value of the input.



// Input Handling

// Input handling means reading and updating what the user types.


// Dynamic Forms

// A dynamic form means the form can change based on user actions.

// For example, an employee registration form where the user can add multiple skills.




// What is List Rendering in React?

// List rendering means displaying multiple items from an array on the screen.

// In React, we usually use the JavaScript map() method to render a list.


// map()

// map() is commonly used in React to render arrays.



// Conditional Rendering

// Conditional rendering means:

// Display something depending on a condition.



// useEffect

// Now we come to one of the most important React hooks.

// useEffect is used when we want to perform a side effect.

// A side effect is something that happens outside normal rendering.

// Examples:

// Fetch API data
// Set a timer
// Update document title
// Add/remove event listeners


// useEffect(() => {

//   // side effect

// }, []);



// Dependency Array

// The dependency array tells React:

// When should this effect run again?



// useEffect(() => {
//   console.log("Effect executed");
// }, []);



// Component Lifecycle Concept

// This is easier to understand if you think about a real person.

// A React component has three major stages:

// Mounting
//    ↓
// Updating
//    ↓
// Unmounting


// Mounting

// Mounting means:

// Component is created and displayed on the screen.


// Updating

// Updating happens when state or props change.


// Unmounting

// Unmounting means:

// Component is removed from the screen.




// | Topic                     | Meaning                            | Real-Time Example            |
// | ------------------------- | ---------------------------------- | ---------------------------- |
// | **Event Handling**        | Respond to user actions            | Click Add to Cart            |
// | **Form Handling**         | Manage form submission             | Login/Register               |
// | **Controlled Component**  | State controls input               | Username field               |
// | **Input Handling**        | Read user input                    | Search box                   |
// | **Dynamic Forms**         | Add/remove form fields dynamically | Add multiple skills          |
// | **List Rendering**        | Display multiple items             | Product list                 |
// | **`map()`**               | Loop through an array to create UI | Display products             |
// | **Keys**                  | Uniquely identify list items       | `product.id`                 |
// | **Conditional Rendering** | Show UI based on condition         | In Stock/Out of Stock        |
// | **`useEffect`**           | Perform side effects               | Fetch API                    |
// | **Dependency Array**      | Controls when effect runs          | `[count]`                    |
// | **Component Lifecycle**   | Mount → Update → Unmount           | Product page opening/closing |
