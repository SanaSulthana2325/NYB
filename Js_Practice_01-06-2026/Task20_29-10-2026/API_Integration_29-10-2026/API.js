// REST API concepts
// REST stands for Representational State Transfer. A REST API is a common way for an application to communicate with a server using HTTP requests and resource URLs.

// HTTP methods
// HTTP methods tell the server what action you want to perform on a resource.

// Method	    Purpose	          Real-time employee example
// GET     	Read data	      Display all employees
// POST	  Create data	       Add a new employee
// PUT	      Replace a resource	Replace an employee record
// PATCH	  Partially update data	  Change an employee's department
// DELETE	  Delete data	          Remove an employee 


// GET — Retrieve data
// GET is used to retrieve information from a server.

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users =>{
    console.log(users);
    console.log("Total users:",users.length);
})
.catch(error => {
    console.log("Error:",error.message);
});


// POST — Create data
// POST is commonly used to create a new resource.

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body:JSON.stringify({
        name:"Ansa",
        email:"ansa@gmail.com"
    })
})
.then(response => response.json())
.then(data=>{
    console.log("Employee created:",data);
})
.catch(error =>{
    console.log("Error:",error.message);
});


// PUT — Replace an entire resource
// PUT is commonly used to replace an existing resource with the data you send.

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:"sara konnane",
        username:"sara",
        email:"sara12@gmail.com"
    })
})

.then(response => response.json())
.then(data =>{
    console.log("Employee replaced:",data);
})
.catch(error =>{
    console.log("Error:",error.message);
});


// PATCH — Update selected fields
// PATCH is used to update only part of an existing resource.

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PATCH",
    headers:{
        "content-type": "application/json"
    },
    body:JSON.stringify({
        email:"newsamEmail23@gmail.com"
    })
})

.then(response => response.json())
.then(data =>{
    console.log("Updated employee:",data);
})
.catch(error =>{
    console.log("Error:",error.message);
})

// DELETE — Remove data
// DELETE requests that the server remove a resource.

fetch("https://jsonplaceholder.typicode.com/users/1",{
    methos:"DELETE"
})
.then(response =>{
    if(!response.ok){
        throw new Error("Failed to delete employee");
    }
    console.log("Employee deleted successfully!!");
})
.catch(error => {
    console.log("Error:",error.message); 

});


// Fetch API
// The Fetch API is a built-in JavaScript API used to make HTTP requests and handle responses.

async function getProducts() {
    try {
        const response = await fetch(
            "https://dummyjson.com/products/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const product = await response.json();

        console.log("Product:", product.title);
        console.log("Price:", product.price);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getProducts();

// Request headers
// Headers provide additional information about a request, such as the data format or authentication credentials.

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
})
.then(response => {
    console.log("HTTP status:", response.status);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
})
.then(data => {
    console.log("Users:", data);
})
.catch(error => {
    console.log("Request failed:", error.message);
});


// Request body
// The request body contains data you send to the server, typically with methods such as POST, PUT, or PATCH.

const employee = {
    name:"ahmed",
    department:"HR",
    salary:30000
};

fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{
        "content-type": "Application/json"
    },
    body:JSON.stringify(employee)
})
.then(response => response.json())
.then(data=>{
    console.log("Employee name:",data.name);
    console.log("Employee ID:",data.id);
})
.catch(error => console.log(error.message))

// JSON response
// JSON stands for JavaScript Object Notation. It is a common text format used by APIs to send structured data.

const employeeJSON = `{
"id":101,
"name":"LULU",
"department":"IT"
}`;

const employee1 = JSON.parse(employeeJSON);
console.log(employee1.name);
console.log(employee1.department)


// JSON.stringify() converts a JavaScript value into a JSON string.

// JSON.parse() converts valid JSON text into a JavaScript value.


// API errors
// An API request can fail for several reasons.
// - Network failure: The server cannot be reached.
// - HTTP error: The server returns 404 Not Found or 500 Internal Server Error.
// - Invalid JSON: The response body cannot be parsed.
// - Application error: The server rejects the submitted data.

async function getEmployee1(){
    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/9"
        );

        if(!response.ok){
            throw new Error(
                `HTTP error:${response.status}`
            );
        }
        const employee2 = await response.json();
        console.log(employee2);
    }catch(error){
        console.log("Failed to load employee:",error.message);
    }
}
getEmployee1()


//
// async function getEmployee() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/invalid-endpoint"
//         );

//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Failed to load data:", error.message);
//     }
// }

// getEmployee();



// Loading state
// A loading state tells users that data is currently being fetched.

async function loadEmployees(){
    console.log("Lodaing Employees...");

    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if(!response.ok){
            throw new error("failed to load employee");
        }
        const employee3 = await response.json();
        console.log("Employee loaded:",employee3.length);
    }catch(error){
        console.log("Error:",error.message);
    }
}
loadEmployees();


// Error state
// An error state tells users that something went wrong and the requested data could not be loaded.

async function loadEmployee(){
    try{
        //const response = await fetch("https://jsonplaceholder.typicode.com.invalid-endpoint");

        if(!response.ok){
            throw new Error("unable to liad employee data");

        }
        const employee4 = await response.json();
        console.log(employee4);
    }catch(error){
        console.log("Error state:",error.message);
    }
}
loadEmployee()


// Empty state
// An empty state appears when an API request succeeds but there is no data to display.

async function loadEmployees1() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to load employees");
        }

        const employees = await response.json();

        if (employees.length === 0) {
            console.log("No employees found.");
        } else {
            console.log("Employees found:", employees.length);
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadEmployees1();




// Topic	                 Remember
// REST API	          Communication between applications using resources and HTTP
// GET	                  Retrieve data
// POST	                Create data
// PUT	                   Replace a resource
// PATCH	           Update selected fields
// DELETE	                  Request resource deletion
// fetch()	                Send HTTP requests
// Headers	                Describe request information and authentication
// Request body         	Data sent to the server
// JSON response	        Data received and parsed from the server
// API errors	             Handle network failures and unsuccessful HTTP responses
// Loading state	       Show that a request is in progress
// Error state	             Show that a request failed
// Empty state	            Show that no records were returned