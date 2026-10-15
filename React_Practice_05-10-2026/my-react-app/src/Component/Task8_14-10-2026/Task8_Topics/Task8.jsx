// rendering and re-rendering

import {useState} from "react";

function Fa(){
    const [count,setCount] = useState(0);
    console.log("Component rendered sam");
    return(
        <>
        <h2> Employee Dashboard</h2>
        <h3> Employee Count:{count}</h3>

        <button onClick={()=> setCount(count + 1)} className="bg-pink-600 px-2 py-2">Add Employee</button>
        </>
    )
}

// component re-render behavior


function EmployeeProfile() {
  console.log("EmployeeProfile rendered");

  return <h3>Employee: Rahul</h3>;
}

function Fb() {
  const [count, setCount] = useState(0);

  console.log("sana rendered");

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(c => c + 1)} className="bg-green-500 px-2 py-2">
        Increase
      </button>

      <EmployeeProfile />
    </div>
  );
}

// react.memo

import {memo} from "react"

const EmployeeProfile1 = memo(function EmployeeProfile(){
    console.log("EmployeeProfile Rendered");

    return(
        <>
        <h3> Employee: Minnu</h3>
        </>
    )
});

function Fc(){
    const[count,setCount] = useState(0);
    return(
        <>
        <h2> counter:{count}</h2>

        <button onClick={()=>setCount(c => c + 1)} className="bg-purple-500 px-2 py-2"> Increase</button>

        <EmployeeProfile1/>
        </>
    )
}

//useMemo
import {useMemo} from "react"

const employees = [
  { id: 101, name: "Mira", department: "IT" },
  { id: 102, name: "Minnu", department: "HR" },
  { id: 103, name: "Sara", department: "Finance" },
];

function Fd() {
  const [department, setDepartment] = useState("IT");
  const [count, setCount] = useState(0);

  const filteredEmployees = useMemo(() => {
    console.log("Filtering employees");

    return employees.filter(
      (employee) => employee.department === department
    );
  }, [department]);

  return (
    <>
      <h2>Employee List</h2>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-yellow-500 px-2 py-2"
      >
        Counter: {count}
      </button>

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      {filteredEmployees.map((employee) => (
        <p key={employee.id}>{employee.name}</p>
      ))}
    </>
  );
}


//useCallback

import {useCallback} from "react"

const Emp = memo(function Emp({name,onDelete}){
    console.log("Employee rendered:",name);

    return(
        <>
        {name}

        <button onClick={onDelete} className="bg-green-500 px-2 py-2">Delete</button>
        </>
    )
})

function Fe(){
    const [ count,setCount] = useState(0);

    const deleteEmployee = useCallback(()=>{
        console.log("Employee deleted");
    },[]);

    return(
        <>
        <button onClick={()=> setCount(c=> c + 1)} className="bg-blue-500 px-2 py-2">Counter:{count}</button>

        <Emp name="Ayesha" onDelete={deleteEmployee}/>
        </>
    );
}

// Referential equality
// Meaning: Referential equality checks whether two variables refer to the same object or function in memory.


const Emp1=memo(function Emp1({settings}){
    console.log("Employee rendered");

    return(
        <>
        <p>Theme:{settings.theme}</p>
        </>
    )
});

function Fg(){
    const[count,setCount]=useState(0);

    const settings = {theme:"Light"};

    return(
        <>
        <button onClick={()=>setCount(c=> c+1)} className="bg-orange-500 px-2 py-2">Counter:{count}</button>

        <Emp1 settings={settings}/>
        </>
    )
}

// Avoiding unnecessary re-renders
// Meaning: Preventing React components from doing repeated work when their data has not changed.

const ProductDetails = memo(function ProductDetauls({name}){
    console.log("Product details rendered");

    return(
        <>
        <h3>{name}</h3>
        <p>Price:₹999</p>
        </>
    )
})

function Fh(){

    const[cart,setCart] = useState(0);

    return(
        <>
        <h2>Cart Items:{cart}</h2>

        <button onClick={()=> setCart(c=>c+1)} className="bg-red-500 px-2 py-2"> Add to cart</button>

        <ProductDetails name="wireless headphones"/>
        </>
    )
}


// Lazy loading with React.lazy
// Meaning: React.lazy allows a component's code to be loaded when it is first needed, instead of including that component's code in the initial loading path.


import { lazy, Suspense } from "react";

const Reports = lazy(() =>
  Promise.resolve({
    default: function Reports() {
      return (
        <>
          <h2>Reports Dashboard</h2>
          <p>Monthly sales: ₹50000</p>
        </>
      );
    },
  })
);

function Fi() {
  const [showReports, setShowReports] = useState(false);

  return (
    <>
      <h1>Admin Dashboard</h1>

      <button onClick={() => setShowReports(true)} className="bg-green-600 px-2 py-2">
        Open Reports
      </button>

      {showReports && (
        <Suspense fallback={<p>Loading reports...</p>}>
          <Reports />
        </Suspense>
      )}
    </>
  );
}

//Suspense and fallback UI

const ProductDetails1 = lazy(()=>
Promise.resolve({
    default:function ProductDetails(){
        return(
            <>
            <h2>Smartphone</h2>
            <p>Price:₹15000</p>
            </>
        )
    }
}));

function Fj(){
    return(
        <>
        <h1> Online Store</h1>

        <Suspense fallback={<h3>Loading product...</h3>}>
        
        <ProductDetails1/>
        </Suspense>
        </>
    )
}


// Code splitting
// Meaning: Code splitting divides a large JavaScript application into smaller files, or chunks, that can be loaded when needed.



// Dashboard Component
function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <p>Welcome to the Admin Dashboard!</p>
    </>
  );
}

// Employees Component
function Employees() {
  return (
    <>
      <h2>Employees</h2>
      <p>Employee 1: Mira</p>
      <p>Employee 2: Sara</p>
    </>
  );
}

// Reports Component
function Reports1() {
  return (
    <>
      <h2>Reports</h2>
      <p>Monthly Sales: ₹50,000</p>
    </>
  );
}

// Main Component
function Fk() {
  const [page, setPage] = useState("dashboard");

  const Page = {
    dashboard: Dashboard,
    employees: Employees,
    reports1: Reports1,
  }[page];

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <button onClick={() => setPage("dashboard")}>
        Dashboard
      </button>{" "}

      <button onClick={() => setPage("employees")}>
        Employees
      </button>{" "}

      <button onClick={() => setPage("reports1")}>
        Reports
      </button>

      <hr />

      <Page />
    </div>
  );
}

// Large-list rendering challenges
// Meaning: Rendering thousands of elements at once can make an application slower, increase memory use, and make scrolling less responsive.


const emp2 =Array.from(
    {length:10000},
    (_,i)=>({
        id:i + 1,
        name:`employee ${i + 1}`
    })
);
function Fl(){
    return(
        <>
        <h2> Employee Directory</h2>
        {emp2.map(emp2 =>(
            <p key={emp2.id}>{emp2.name}</p>
        ))}
        </>
    );
}

// with pagination



const employees2 = Array.from(
  { length: 10000 },
  (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`
  })
);

function Fm() {
  const [page, setPage] = useState(0);
  const pageSize = 20;

  const visibleEmployees2 = employees2.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <div>
      <h2>Employee Directory</h2>

      {visibleEmployees2.map(employee2 => (
        <p key={employee2.id}>{employee2.name}</p>
      ))}

      <button
        disabled={page === 0}
        onClick={() => setPage(p => p - 1)}
       className="bg-pink-300 px-2 py-2">
        Previous
      </button>

      <span> Page {page + 1} of 500 </span>

      <button
        disabled={page === 499}
        onClick={() => setPage(p => p + 1)}
       className="bg-red-400 px-2 py-2">
        Next
      </button>
    </div>
  );
}


// Performance profiling with React Developer Tools
// Meaning: Profiling helps you identify which components render, how long they take, and where unnecessary work may occur.


// Common React performance mistakes
// These are mistakes developers often make when building real applications.

// Using useState for values that don't need to trigger rendering

// Creating new objects on every render

// Using array indexes as keys for changing lists

// Performing expensive calculations on every render

// Loading every feature immediately

// Rendering thousands of list items at once

// Using useCallback and useMemo everywhere


export{Fa,Fb,Fc,Fd,Fe,Fg,Fh,Fi,Fj,Fk,Fl,Fm}


















// React rendering and re-rendering
// Meaning: Rendering is when React calls a component to determine what should appear on the screen. A re-render happens when React needs to run the component again, commonly because its state or props changed.


// Understanding component re-render behavior
// Meaning: When a parent component re-renders, its child components may also re-render, even when their displayed information has not changed.


// React.memo
// Meaning: React.memo can skip re-rendering a component when its props are unchanged, using a shallow comparison by default.


// useMemo
// Meaning: useMemo caches the result of a calculation between renders until its dependencies change.


// useCallback
// Meaning: useCallback caches a function reference between renders until its dependencies change.


// Difference between useMemo and useCallback:

// Hook	       What it caches	    Example
// useMemo	      A calculated value	Filtered employees
// useCallback	 A function reference	Delete employee handler


// Common ways to avoid unnecessary renders:
// - Use React.memo for suitable components.
// - Use useMemo for expensive calculations.
// - Use useCallback when stable function references help.
// - Keep state close to the components that need it.
// - Avoid creating unnecessary objects and arrays in render.
// - Use stable, unique keys when rendering lists.


// Suspense and fallback UI
// Meaning: Suspense displays fallback content while a supported child operation, such as loading a lazy component, is pending.


// Difference between lazy loading and code splitting: Code splitting creates separate chunks; lazy loading determines when a particular component or chunk is requested.


// How to use the Profiler
// 1. Install React Developer Tools in your browser.
// 2. Open your React application and open browser Developer Tools.
// 3. Select the Profiler tab.
// 4. Click Start profiling, or the record button.
// 5. Perform the action that causes slowness, such as typing into the employee search field.
// 6. Stop recording.
// 7. Inspect the commits and component flamegraph.
// 8. Identify expensive renders and test an optimization.





// Concept	                   Main purpose	                     Real-world use

// Rendering and    	       Update the UI when necessary	       Dashboard counters
// re-rendering

// Component re-render  	Understand which components run again	 Parent-child components
//  behavior

// React.memo	            Skip renders with unchanged props	        Product cards

// useMemo	                   Cache calculated values	                Filtering employee records

// useCallback	               Cache function references	       Event handlers passed to children

// Referential equality	Understand object/function identity	        Stable configuration props

// Avoid unnecessary 	          Reduce repeated work	                      Shopping cart
// re-renders

// React.lazy	                Load components on demand	                  Reports page

// Suspense	               Show fallback UI while waiting	          Loading indicators

// Code splitting	           Divide application code into chunks	      Multi-page dashboards

// Large-list rendering	Reduce the cost of displaying many records	    Employee directories

// React Developer 	          Identify performance bottlenecks	         Slow search or filtering
// Tools Profiler

// Common performance     	Avoid unnecessary work and incorrect list behavior	  Production applications
//  mistakes