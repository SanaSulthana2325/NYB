//Identify which components re-render when state changes.

import{useState} from "react";

function EmployeeProfile(){
    console.log("EmployeeProfile rendered");

    return(
        <>
        <h3> Employee:Sara</h3>
        </>
    )
}

function NotificationPanel(){
    console.log("NotificationPanel rendered");

    return(
        <>
        <p> No new Notification on Mobile</p>
        </>
    )
}

function Fn(){
    const[count,setCount] = useState(0);
    console.log("App Rendered");

    return(
        <>
        <h2> Employee Dashboard</h2>
        <h3>Counter:{count}</h3>

        <button onClick={()=> setCount(c=>c+1)} className="bg-pink-500 px-2 py-2"> Increase Counter</button>

        <EmployeeProfile/>
        <NotificationPanel/>
        </>
    )
}

//Use React.memo where appropriate.

import {memo} from "react";

const EmployeeProfile1 = memo(function EmployeeProfile1({name}){
    console.log("EmployeeProfile sam rendered");

    return(
        <>
        <h3> Employee name:{name}</h3>
        </>
    )
});

function Fo(){
    const[count,setCount] = useState(0);

    return(
        <>
        <h2> Employee Dashboard</h2>

        <h3> Employee Count:{count}</h3>

        <button onClick={()=> setCount(c=>c+1)} className="bg-red-600 px-2 py-2"> Add Employee</button>

        <EmployeeProfile1 name="Fathima"/>
        </>
    )
}


// Practice useMemo for expensive calculations.

import {useMemo} from "react";

const emp = Array.from({length:10000},(_, i) =>({
    id: i + 1,
    name:`Employee ${i+1}`,
    department:i%2 === 0 ? "IT":"HR"
}));

function Fp(){
    const[department,setDepartment] = useState("IT");
    const[count,setCount] = useState(0);

    console.log("App Rendered");

    const filteredEmp = useMemo(()=>{
        console.log("Filtering employeess....");

        return emp.filter(emp =>{
            return emp.department === department;
        });
    },[department]);

    return(
        <>
        <h2> Employee Management</h2>

        <button onClick={()=> setCount(c=>c+1)} className="bg-green-500 px-2 py-2">Counter:{count}</button>

        <select value={department} onChange={e => setDepartment(e.target.value)}>
            <option value ="IT">IT</option>
            <option value="HR">HR</option>
        </select>

        <h3>{department} emp</h3>
        <p> total emp:{filteredEmp.length}</p>

        {filteredEmp.slice(0,5).map(emp=>{
            <p key={emp.id}>{emp.name}</p>
        })}
        </>
    );
}


//Practice useCallback when stable function references are useful.

import { useCallback } from "react";

const Emp2 = memo(function Emp2({ name, onDelete }) {
  console.log("Employee Ajju Rendered");

  return (
    <>
      <h3>{name}</h3>
      <button onClick={onDelete} className="bg-pink-600 px-2 py-2">Delete Employee</button>
    </>
  );
});

function Fq() {
  const [count, setCount] = useState(0);

  const deleteEmp2 = useCallback(() => {
    console.log("Employee  DDD deleted");
  }, []);

  return (
    <>
      <h2>Employee Dashboard</h2>
      <h3>Counter: {count}</h3>

      <button onClick={() => setCount((c) => c + 1)} className="bg-yellow-400 px-2 py-2">
        Increase Count
      </button>

      <Emp2 name="AAA" onDelete={deleteEmp2} />
    </>
  );
}


// Compare application behavior before and after optimization.


// before


function Employee2({ name }) {
  console.log("Employee rendered");

  return <h3>Employee: {name}</h3>;
}

function Fr() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <div>
      <h2>Employee Dashboard</h2>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-300 px-2 py-2">
        Increase Counter
      </button>

      <Employee2 name="Zobiya" />
    </div>
  );
}


//After


const Employee3 = memo(function Employee3({ name }) {
  console.log("Employee ggg rendered");

  return <h3>Employee: {name}</h3>;
});

function Fs() {
  const [count, setCount] = useState(0);

  console.log("App ff rendered");

  return (
    <div>
      <h2>Employee Dashboard</h2>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blue-700 px-2 py-2">
        Increase Counter
      </button>

      <Employee2 name="Zeba" />
    </div>
  );
}

//lazy loading

import { lazy, Suspense } from "react";

// Lazy-loaded page components
const Home = lazy(() =>
  Promise.resolve({
    default: () => <h2>Welcome to the Home Page</h2>,
  })
);

const Employees4 = lazy(() =>
  Promise.resolve({
    default: () => <h2>Employee Management Page</h2>,
  })
);

const Reports = lazy(() =>
  Promise.resolve({
    default: () => <h2>Reports Page</h2>,
  })
);

const Settings = lazy(() =>
  Promise.resolve({
    default: () => <h2>Settings Page</h2>,
  })
);

export default function Ft() {
  const [page, setPage] = useState("Home");

  const pages = {
    Home,
    Employees4,
    Reports,
    Settings,
  };

  const SelectedPage = pages[page];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Dashboard</h1>

      <button
        onClick={() => setPage("Home")}
        className="bg-red-400 px-2 py-2 mr-2"
      >
        Home
      </button>{" "}

      <button
        onClick={() => setPage("Employees4")}
        className="bg-red-400 px-2 py-2 mr-2"
      >
        Employees
      </button>{" "}

      <button
        onClick={() => setPage("Reports")}
        className="bg-red-400 px-2 py-2 mr-2"
      >
        Reports
      </button>{" "}

      <button
        onClick={() => setPage("Settings")}
        className="bg-red-400 px-2 py-2 mr-2"
      >
        Settings
      </button>

      <hr />

      <Suspense fallback={<h3>Loading page...</h3>}>
        <SelectedPage />
      </Suspense>
    </div>
  );
}

// Avoid unnecessary optimization where it adds complexity without benefit.


const Counter = memo(function Counter({ count, onIncrease }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrease} className="bg-pink-500 px-2 py-2 ">Increase</button>
    </div>
  );
});

function Fu() {
  const [count, setCount] = useState(0);

  const value = useMemo(() => count + 1, [count]);

  const handleIncrease = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Next count: {value}</p>
      <Counter count={count} onIncrease={handleIncrease} />
    </div>
  );
}




export{Fn,Fo,Fp,Fq,Fr,Fs,Ft,Fu};

















// Identify Which Components Re-render When State Changes in React
// 1. What does it mean?
// When a state value changes in React, React re-renders the component that owns that state. Depending on the component tree, its child components may also re-render.

// Use React.memo Where Appropriate in React
// 1. What is React.memo?
// React.memo is a React performance optimization that can prevent a child component from re-rendering when its props have not changed.


// Without React.memo	                                 With React.memo

// Child may re-render when its parent re-renders.  	Child can skip re-rendering when props are unchanged.

// Simpler, with no memoization overhead.	            Adds a prop comparison.

// Suitable as the default approach.	                 Useful when measurements or component behavior justify it.

// What is useMemo?
// useMemo is a React Hook that caches the result of a calculation between renders. React recalculates the value when one of its dependencies changes.


// When should you use useMemo?
// - Filtering or sorting thousands of records.
// - Performing expensive mathematical calculations.
// - Processing large datasets.
// - Creating stable object or array references for memoized child components.


// What is useCallback?
// useCallback is a React Hook that caches a function reference between renders until its dependencies change.



// When should you use useCallback?
// - When passing callbacks to components wrapped in React.memo.
// - When a function is a dependency of another Hook, such as useEffect.
// - When a stable function reference avoids meaningful repeated work.
// Avoid using it for every function automatically. Without a reason to preserve the reference, ordinary functions are often simpler.
// Remember the difference:
// - React.memo can prevent unnecessary component re-renders.
// - useMemo caches a calculated value.
// - useCallback caches a function reference.



// Behavior	      Before optimization	          After optimization
// Counter update	    Counter increases	          Counter increases
// Parent component	Re-renders	                  Re-renders
// Employee component	Re-renders unnecessarily	 Skips re-render when props are unchanged
// Unnecessary work	      More	                   Less
// Performance in      	May be slower	          Can be more efficient
// a large dashboard
// Code complexity	             Simpler	         Slightly more complex




// inspect Component Rendering Using React Developer Tools
// React Developer Tools is a browser extension that helps you inspect React components, view their props and state, and identify unnecessary re-renders.
// For your Employee Dashboard project, you can use it to check whether components such as App, Employees, and Reports re-render when you click buttons.



// What should you look for?
// What you observe	                                 What it means

// A component renders after a state change	        It may be an expected render

// A child renders when its props haven't changed	    Consider whether React.memo would help

// A component takes a long time to render	            Investigate expensive calculations or large lists

// Many components render after one small action	   Check state placement and component structure


// When should you optimize?
// Optimization is useful when:
// - A large list causes slow rendering.
// - An expensive calculation repeats unnecessarily.
// - A memoized child re-renders because a callback reference keeps changing.
// - Profiling reveals a measurable performance bottleneck.



// Optimization may be unnecessary when:
// - A component is small and already fast.
// - A calculation is simple, such as adding two numbers.
// - A function is not causing unnecessary work.
// - Extra hooks make the code harder to understand without measurable gains.