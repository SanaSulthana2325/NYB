// API Calls

import { useEffect, useState } from "react";

function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);

    return (
        <div>
            <h1>Employee Management</h1>

            {employees.map(employee => (
                <div key={employee.id}>
                    <h3>{employee.name}</h3>
                    <p>{employee.email}</p>
                </div>
            ))}
        </div>
    );
}


// Fecth:

function Movies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
            .catch(error => {
                console.log("Error:", error);
            });

    }, []);

    return (
        <div>
            <h1>Movie List</h1>

            {movies.slice(0,8).map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.body}</p>
                </div>
            ))}
        </div>
    );
}


// Axios
import axios from "axios"

function Emp(){
    const[emp,setEmp]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
       .then(response => {
            setEmp(response.data);
        });
        
    },[]);

    return(
        <>
        <h2> Employess List</h2>
        {emp.map(emp =>(
            <p key={emp.id}>
                {emp.name}-{emp.role}
            </p>
        ))}
        </>
    );
}

//Get

function Book(){
    const[books,setBooks] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            setBooks(response.data)
        })
        .catch(error =>{
            console.log("Error:",error)
        })
    },[])
    return(
        <>
        <h1> Book Store</h1>

        {books.slice(0,6).map(book =>(
            <div key={book.id}>
                <h2>Book ID:{book.id}</h2>
                <h3>{book.title}</h3>
                <p>{book.body}</p>
                <hr/>
            </div>
        ))}
        </>
    );
}


//Post:

function AddEmp(){
    const[name,setName]=useState("");
    const[role,setRole]=useState("");

    const addEmp = ()=>{
        const Emp = {
            name:name,
            role:role
        };
        
        axios.post("https://jsonplaceholder.typicode.com/users", Emp)

        .then(response =>{
            console.log("Employee Added:", response.data);
        })
        .catch(error =>{
            console.log("Error:",error);
        });
    };
    return(
        <>
        <h1> Add Employee</h1>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}
        className="border border-pink-4px"/>

        <br/><br/>
        <input type="text" placeholder="enter role" value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border border-green 400"/>

        <br/>
        <br/>
        <button onClick={addEmp} className="bg-pink-500 px-2 py-2 "> Add Employee</button>
        </>
        
    )
}

//put

function UpdateEmployee() {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const updateEmployee = () => {

        const employee = {
            name: name,
            role: role
        };

        axios.put(
            "https://jsonplaceholder.typicode.com/users/1",
            employee
        )
        .then(response => {
            console.log("Employee Updated:", response.data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
    };

    return (
        <>
            <h1>Update Employee</h1>

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
             className="border border-pink-400"/>

            <br /><br />

            <input
                type="text"
                placeholder="Enter new role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            className="border border-green-500"/>

            <br /><br />

            <button onClick={updateEmployee} className="bg-yellow-600 px-2 py-2">
                Update Employee
            </button>
        </>
    );
}

//patch

function UpdateProduct(){
    const updatePrice =() =>{
        const updatedData = {
            price:55000
        };

        axios.patch(
            "https://jsonplaceholder.typicode.com/posts/5", updatedData)
            .then(response =>{
                console.log("Product Updated:",response.data);
            })
            .catch(error =>{
                console.log("Error:", error);
            });
    };

    return(
        <>
        <h1> Product Manager</h1>
        <button onClick={updatePrice} className="bg-purple-500 px-2 py-2"> Update Price</button>
        </>
    );
}

//Delete:


function DeleteProduct() {

    const deleteProduct = () => {

        axios.delete(
            "https://jsonplaceholder.typicode.com/posts/5"
        )
        .then(response => {
            console.log("Product Deleted:", response.data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
    };

    return (
        <div>
            <h1>Product Management</h1>

            <button onClick={deleteProduct} className="bg-orange-500 px-2 py-2">
                Delete Product
            </button>
        </div>
    );
}


// Async/Await:


function Products() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );

            setProducts(response.data);

        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>

            {products.slice(0, 5).map(product => (
                <div key={product.id}>
                    <h3>{product.id}. {product.title}</h3>
                    <p>{product.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

// Loading State:



function Emp1() {

    const [emp1, setEmp1] = useState([]);
    const [loading, setLoading] = useState(true);

    const getEmp1 = async () => {

        setLoading(true);

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();

            setEmp1(data);

        } catch (error) {
            console.log("Error:", error);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getEmp1();
    }, []);

    if (loading) {
        return <h2>Loading employees...</h2>;
    }

    return (
        <div>
            <h2>Employees</h2>

            {emp1.map(employee => (
                <p key={employee.id}>
                    {employee.name}
                </p>
            ))}
        </div>
    );
}

// Error,empty, search and filetring

function Employees1() {

    // Stores employee data
    const [employees1, setEmployees1] = useState([]);

    // Stores search text
    const [search, setSearch] = useState("");

    // Loading state
    const [loading, setLoading] = useState(true);

    // Error state
    const [error, setError] = useState("");

    // Get employees from API
    const getEmployees1 = async () => {

        setLoading(true);
        setError("");

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            // Check whether API response is successful
            if (!response.ok) {
                throw new Error("Failed to fetch employees");
            }

            // Convert response into JSON
            const data = await response.json();

            // Store API data
            setEmployees1(data);

        } catch (error) {

            // Store error message
            setError(error.message);

        } finally {

            // Stop loading
            setLoading(false);
        }
    };

    // Call API when component loads
    useEffect(() => {
        getEmployees1();
    }, []);


    // Search employees by name
    const filteredEmployees1 = employees1.filter(employee =>
        employee.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    // Loading State
    if (loading) {
        return <h2>Loading employees...</h2>;
    }


    // Error State
    if (error) {
        return (
            <div>
                <h2>Error</h2>
                <p>{error}</p>

                <button onClick={getEmployees}>
                    Try Again
                </button>
            </div>
        );
    }


    return (
        <div>

            <h1>Employee Management</h1>

            {/* Search */}
            <input
                type="text"
                placeholder="Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            className="border border-pink-400"/>

            <br />
            <br />

            {/* Empty State */}
            {filteredEmployees1.length === 0 ? (

                <h3>
                    No employees found.
                </h3>

            ) : (

                /* Dynamic Rendering */
                filteredEmployees1.map(employee => (

                    <div key={employee.id}>

                        <h3>{employee.name}</h3>

                        <p>Email: {employee.email}</p>

                        <p>
                            Company: {employee.company.name}
                        </p>

                        <hr />

                    </div>
                ))
            )}

        </div>
    );
}








export { Employees , Movies, Emp,Book,AddEmp,UpdateEmployee, UpdateProduct, DeleteProduct,Products,Emp1, Employees1};













// What is an API call?

// An API call is a request from your React application to a backend/server to get or send data.



// React App
//    ↓
// API Request
//    ↓
// Backend / Server
//    ↓
// Database
//    ↓
// Employee Data
//    ↓
// React App




// Fetch API
// What is Fetch API?

// fetch() is a built-in JavaScript function used to make HTTP requests.

// You don't need to install anything.


// Axios
// What is Axios?

// Axios is another library used to communicate with APIs.

// Unlike Fetch, Axios is not built into JavaScript, so we install it.

// npm install axios

// Then:

// import axios from "axios";



// GET Request
// What is GET?

// GET is used to retrieve/read data from the server.



// POST Request
// What is POST?

// POST is used when we want to send new data to the server and create a new record.


// PUT Request
// What is PUT?

// PUT is used to update an existing resource, generally by sending the complete updated representation.


// PATCH Request
// What is PATCH?

// PATCH is also used to update data, but it is generally used when we want to change only particular fields.



// DELETE Request
// What is DELETE?

// DELETE is used to remove a record from the server/database.



// Async/Await
// What problem does async/await solve?

// API calls take time.

// Suppose React sends:

// GET /employees

// The server may take 1 second to respond.

// React should not freeze while waiting.

// This is called asynchronous operation.

// async and await make asynchronous code easier to read.




// API        → Communication between frontend and backend
// Fetch      → Built-in way to call an API
// Axios      → Library for calling APIs
// GET        → Get data
// POST       → Create data
// PUT        → Update data
// PATCH      → Partially update data
// DELETE     → Delete data
// Async/Await → Handle operations that take time
// Loading    → Request is in progress
// Error      → Request failed
// Empty      → Request succeeded but no data exists
// Response   → Handle what server sends back
// Dynamic    → Generate UI from data
// Search     → Find matching data
// Filter     → Show data based on a condition