//Create a Context for global application data.

//AppContext:

import {createContext} from"react";

const AppContext = createContext();


//AppProvider

import {useState} from "react";

function AppProvider({children}){
    const[username,setUsername]=useState("Saba");

    const[cartCount,setCartCount] = useState(0);

    return(
        <AppContext.Provider
        value={{username,cartCount,setUsername,setCartCount}}>
            {children}

        </AppContext.Provider>

    );
}


// Navbar1:
import {useContext} from"react";

function Navbar1(){
    const{username,cartCount} = useContext(AppContext);

    return(
        <>
        <h2>
            Hello,{username} | cart:{cartCount}
        </h2>
        </>
    );
}

//Profile1
function Profile1(){
    const {username} = useContext(AppContext);
    return(
        <h2> Welcome,{username}!</h2>
    )


}

//App

function Cp(){
    return(
        <>
        <AppProvider>
            <Navbar1/>
            <Profile1/>
        </AppProvider>
        </>
    )
}


// Share data between components using Context API.

// UserContext

const UserContext = createContext();

//Navbar2:



function Navbar2() {
  const username = useContext(UserContext);

  return <h2>Navbar: Hello, {username}</h2>;
}

//Profile2



function Profile2() {
  const username = useContext(UserContext);

  return <h2>Profile: Welcome, {username}!</h2>;
}


//App


function Cq() {
  const username = "Sana";

  return (
    <UserContext.Provider value={username}>
      <Navbar2 />
      <Profile2 />
    </UserContext.Provider>
  );
}


// Compare Context API with Props.
function Product2(props) {
  return <h2>Product: {props.name}</h2>;
}

function Cs() {
  return (
    <>
    <Product2 name="Laptop" />;
    </>
  )
}


// Context Api



const UserContext1 = createContext();

function Navbar3() {
  const username = useContext(UserContext1);

  return <h2>Navbar: Hello, {username}</h2>;
}

function Profile3() {
  const username = useContext(UserContext1);

  return <h2>Profile: Welcome, {username}!</h2>;
}

function Cr() {
  return (
    <UserContext1.Provider value="Sana">
      <Navbar3 />
      <Profile3 />
    </UserContext1.Provider>
  );
}


// Create at least one reusable Custom Hook.





// Custom Hook
function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return { count, increment, decrement, reset };
}

// Counter component
function Counter1() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button
        onClick={increment}
        className="bg-pink-500 px-2 py-2 mr-2"
      >
        Increase
      </button>

      <button
        onClick={decrement}
        className="bg-green-600 px-2 py-2 mr-2"
      >
        Decrease
      </button>

      <button
        onClick={reset}
        className="bg-purple-400 px-2 py-2"
      >
        Reset
      </button>
    </div>
  );
}

// App component
function Ct() {
  return (
    <div>
      <h1>My Custom Hook Example</h1>
      <Counter1 />
    </div>
  );
}



// Create a Custom Hook for API data fetching.



import { useEffect } from "react";

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
          throw new Error("Failed to fetch users");
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

//User


function Users() {
  const {
    data,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <h3>Loading users...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }

  return (
    <div>
      <h2>User Details</h2>

      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}


// App



function Cu() {
  return (
    <div>
      <h1>Custom Hook Example</h1>
      <Users />
    </div>
  );
}





export {Cp,Cq,Cs,Cr,Ct,Cu};






// Feature                    Props                        Context API

// Purpose         Pass data between components          Share data across a component tree

// Data flow          Parent to child                     Provider to consuming components

// Intermediate     May need to pass props along
// components                                             Don't need to pass Context data along

// Setup                     Pass props in JSX            Create Context and use a Provider

// Access             props.name or destructuring            useContext(MyContext)

// Best use          Data needed by nearby components          Data needed by many components

// Example               Passing a product name                Sharing logged-in user details

// Complexity              Simple to use                             Requires additional setup