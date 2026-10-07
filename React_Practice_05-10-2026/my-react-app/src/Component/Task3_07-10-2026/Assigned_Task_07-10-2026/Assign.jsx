// Handle click, change, submit, and keyboard events.

import {useState} from "react"

function Bi() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Click event
  function handleClick() {
    setMessage("Button clicked!");
  }

  // Change event
  function handleChange(event) {
    setName(event.target.value);
  }

  // Submit event
  function handleSubmit(event) {
    event.preventDefault();

    console.log(`Form submitted for ${name}`);
  }

  // Keyboard event
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setMessage(`Enter pressed for ${name}` );
    }
  }

  return (
    <>
      <h1>Event Handling Example</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
         className="bg-yellow-300 border border-red-600"/>

        <br /><br />

        <button type="submit" className="bg-blue-400 px-2 py-2">
          Submit
        </button>

      </form>

      <br />

      <button onClick={handleClick} className="bg-green-300 px-2 py-2">
        Click Me
      </button>

      <p>{message}</p>
    </>
  );
}


// Create controlled form components.


function Bj() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Age:", age);
  }

  return (
    <>
      <h1>Employee Registration</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
         className="border border-red-800"/>

        <br /><br />

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        className="border border-green-800"/>

        <br /><br />

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
         className="border border-pink-700"/>

        <br /><br />

        {/* Age */}
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        className="border border-green-800"/>

        <br /><br />

        <button type="submit" className="bg-blue-600 px-2 py-2">
          Register
        </button>

      </form>
    </>
  );
}


// Render arrays using map().

function Bk(){
    const emp =["AAA","BBB","CCC","DDD","EEE"];
    return(
        <>
        <h1> employee List</h1>
        {emp.map((employee)=>(
            <h3>{employee}</h3>

        ))}
        </>
    );
}


// with keys


function Bl() {

  const products = [
    {
      id: 101,
      name: "T-Shirt",
      price: 500
    },
    {
      id: 102,
      name: "Jeans",
      price: 1200
    },
    {
      id: 103,
      name: "Shoes",
      price: 2000
    }
  ];

  return (
    <>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>

          <h2>{product.name}</h2>

          <p>₹{product.price}</p>

        </div>
      ))}
    </>
  );
}


//Implement conditional UI rendering.

function Bm(){
    const[isLoggedIn,setIsLoggedIn]=useState(false);

    if(isLoggedIn){
        return(
            <>
            <h1> Welcome to dashBoard</h1>

            <button onClick={()=>setIsLoggedIn(false)} className="bg-red-600 px-2 py-2">Logout</button>
            </>
        )
    }else{
        return(
            <>
            <h1> Please Login</h1>
            <button onClick={()=> setIsLoggedIn(true)} className="bg-orange-500">Login</button>
            </>
        );
    }
}

//useEffect

import { useEffect } from "react";

function Bn() {

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Searching for:", search);
  }, [search]);

  return (
    <div>
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>You searched: {search}</h2>
    </div>
  );
}

// Combine UseState and useEffect

function Count() {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log("Cart updated:", cartCount);
  }, [cartCount]);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Items in Cart: {cartCount}</h2>

      <button onClick={() => setCartCount(cartCount + 1)} className="bg-red-500 px-2 py-2">
        Add Product
      </button>

      <button onClick={() => setCartCount(cartCount - 1)} className="bg-green-600 px-2 py-2">
        Remove Product
      </button>
    </div>
  );
}

// useEffect with dependency

function Bo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1. No dependency array
  // Runs after EVERY render
  useEffect(() => {
    console.log("1. No dependency array → Effect executed");
  });

  // 2. Empty dependency array
  // Runs once when component mounts
  useEffect(() => {
    console.log("2. Empty [] → Component mounted");
  }, []);

  // 3. [count]
  // Runs when count changes
  useEffect(() => {
    console.log("3. [count] → Count changed:", count);
  }, [count]);

  // 4. [name]
  // Runs when name changes
  useEffect(() => {
    console.log("4.  Name changed:", name);
  }, [name]);

  // 5. [count, name]
  // Runs when count OR name changes
  useEffect(() => {
    console.log(
      "5.  Count or name changed"
    );
  }, [count, name]);

  return (
    <div>
      <h1>useEffect Practice</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)} className="bg-purple-400 px-2 py-2">
        Increase Count
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
       className="border border-yellow-600"/>

      <h2>Name: {name}</h2>
    </div>
  );
}


export  {Bi, Bj, Bk,Bl,Bm,Bn,Count,Bo};