// Limitation of managing

import{useState} from "react";

function EmployeeForm(){
    const[name,setname] = useState("");
    const[email,setEmail] = useState("");
    const[role,setRole] = useState("Developer");
    const[loading,setLoading] = useState(false);

    return(
        <>
        
        <input placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} className="border border-green-300"/> <br/> <br/>

        <input placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} className="border border-pink-500"/> <br/> <br/>

        <select value={role} onChange={(e) => setRole(e.target.value)}>

            <option> Developer</option>
            <option> Designer</option>

        </select> <br/> <br/>

        <button onClick={() => setLoading(!loading)} className="bg-blue-500 px-2 py-2">
            {loading ? "Loading..." : "Submit"}
        </button>
        </>
    );
}


//useReducer

import{useReducer} from "react";

function counterReducer(state,action){
    if(action.type === "increment"){
        return state + 1;

    }
    if(action.type === "decrement"){
        return state -1;
    }
    return state;
}

function Counter(){
    const[count,dispatch] = useReducer(counterReducer,0);

    return(
        <>
        <h2>Count: {count}</h2>

        <button onClick={() => dispatch({type:"increment"})} className="bg-pink-600 px-2 py-2 mr-2"> Increase</button>

        <button onClick={() => dispatch({type:"decrement"})} className="bg-green-500 px-2 py-2"> decrease</button>
        </>
    );
}


// Reducer functions and actions
// A reducer function decides how the state should change. An action describes what happened.


function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state + action.payload;

    case "subtract":
      return state - action.payload;

    case "reset":
      return 0;

    default:
      return state;
  }
}

function Ea(){
    const[count,dispatch] = useReducer(reducer,0);

    return(
        <>
        <h2>Count: {count}</h2>

        <button onClick={() => dispatch({type:"add",payload:5})} className="bg-pink-600 px-2 py-2 mr-2"> Add</button>

        <button onClick={() => dispatch({type:"subtract",payload:2})} className="bg-green-500 px-2 py-2 mr-2"> detect</button>

        <button onClick={() => dispatch({type:"reset"})} className="bg-orange-500 px-2 py-2"> reset</button>

        </>
    );
}

// Initial state and state transitions
// Initial state is the value from which the application begins. A state transition is the change from the current state to the next state.




const initialState = {
  quantity: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        quantity: state.quantity + 1
      };

    case "remove":
      return {
        ...state,
        quantity: Math.max(0, state.quantity - 1)
      };

    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h2>Cart Quantity: {state.quantity}</h2>

      <button onClick={() => dispatch({ type: "add" })} className="bg-purple-600 px-2 py-2 mr-2">
        Add Item
      </button>

      <button onClick={() => dispatch({ type: "remove" })} className="bg-orange-500 px-2 py-2">
        Remove Item
      </button>
    </div>
  );
}


// Dispatching actions
// dispatch() sends an action to the reducer. React then uses the reducer's returned value to update the state.



function stuReducer(state, action) {
  switch (action.type) {
    case "addMarks":
      return state + action.payload;

    case "reset":
      return 0;

    default:
      return state;
  }
}

function StudentMarks() {
  const [marks, dispatch] = useReducer(stuReducer, 50);

  return (
    <div>
      <h2>Marks: {marks}</h2>

      <button
        onClick={() =>
          dispatch({ type: "addMarks", payload: 10 })
        }className="bg-red-500 px-2 py-2 mr-2">
        Add 10 Marks
      </button>

      <button onClick={() => dispatch({ type: "reset" })} className="bg-yellow-500 px-2 py-2">
        Reset
      </button>
    </div>
  );
}


// Managing complex objects and arrays
// useReducer is helpful when you need to manage multiple properties or a collection of records.



const initialState1 = [
  { id: 1, name: "Ayesha" },
  { id: 2, name: "Fathima" }
];

function empReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    default:
      return state;
  }
}

function Employees() {
  const [employees, dispatch] = useReducer(
    empReducer,
    initialState1
  );

  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <p key={employee.id}>
          {employee.name}
          <button
            onClick={() =>
              dispatch({type: "delete",payload: employee.id})} className="bg-green-500 px-2 py-2 mr-2">
            Delete
          </button>
        </p>
      ))}

      <button
        onClick={() =>
          dispatch({type: "add",payload: { id: 3, name: "Tasleem" }})} className="bg-pink-500 px-2 py-2">
        Add Employee
      </button>
    </div>
  );
}

// combining useReducer and Context API


import {
  createContext,
  useContext,} from "react";

const ThemeContext = createContext(null);

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return state === "light" ? "dark" : "light";

    default:
      return state;
  }
}

function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button onClick={() => dispatch({ type: "toggle" })} className="bg-red-600 px-2 py-2 mr-2">
        Change Theme
      </button>
    </div>
  );
}

function Eb() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}


// Global state management patterns
// Global state is data shared by multiple components, such as a logged-in user, shopping cart, or application theme.



const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

function Product() {
  const { setCartCount } = useContext(CartContext);

  return (
    <button onClick={() => setCartCount((count) => count + 1)} className="bg-blue-400 px-2 py-2">
      Add Product
    </button>
  );
}

function CartSummary() {
  const { cartCount } = useContext(CartContext);

  return <h2>Cart Items: {cartCount}</h2>;
}

function Ec() {
  return (
    <CartProvider>
      <Product />
      <CartSummary />
    </CartProvider>
  );
}


// Avoiding unnecessary prop drilling
// Prop drilling happens when data is passed through multiple components just to reach a deeply nested component.
// For example, App → Dashboard → Profile → UserName. If only UserName needs the user data, passing it through every component can become inconvenient.


const UserContext = createContext(null);

function UserName() {
  const user = useContext(UserContext);

  return <h2>Welcome, {user.name}!</h2>;
}

function Profile() {
  return <UserName />;
}

function Dashboard() {
  return <Profile />;
}

function Ed() {
  const user = { name: "Aru" };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

// State immutability
// State immutability means not modifying the existing state directly. Instead, create a new object or array containing the updated values.



function UserProfile() {
  const [user, setUser] = useState({
    name: "Mira",
    age: 25
  });

  function updateName() {
    setUser((previousUser) => ({
      ...previousUser,
      name: "Minnu"
    }));
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={updateName} className="bg-pink-500 px-2 py-2">
        Update Name
      </button>
    </div>
  );
}


// Introduction to Redux Toolkit
// Redux Toolkit (RTK) is the recommended standard way to write Redux logic. It helps manage shared application state using a centralized store, actions, and reducers.












export{EmployeeForm, Counter,Ea,Cart, StudentMarks, Employees,Eb,Ec,Ed,UserProfile}












// Limitations of managing complex state with useState
// useState is useful for simple state, but when an application has many related state values



// Introduction to useReducer
// useReducer is a React Hook used to manage state through a reducer function. It is particularly useful when state changes depend on different actions.


// Syntax:
// const [state, dispatch] = useReducer(reducer, initialState);


// - state: The current state.
// - dispatch: Sends an action to the reducer.
// - reducer: Determines the next state.
// - initialState: The starting value.


// Combining useReducer with Context API
// Context API allows components to access shared data without passing props through every intermediate component. Combining it with useReducer gives you a way to share state and its update mechanism across a component tree.