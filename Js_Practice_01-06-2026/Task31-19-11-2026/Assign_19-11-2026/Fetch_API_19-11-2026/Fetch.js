// What is Fetch API?
// The Fetch API is a built-in JavaScript feature used to send HTTP requests and receive data from a server.

// It returns a Promise.

// GET

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data =>{
    console.log(data);
})
.catch(error =>{
    console.log("Error:",error);
});


// with single employee

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log("Employee Name:", data.name);
        console.log("Email:", data.email);
    })
    .catch(error => console.log(error));

// post:

fetch("https://jsonplaceholder.typicode.com/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "SABA",
        email: "saba@gmail.com",
        username: "saba123434"
    })

})
.then(response => response.json())
.then(data => {
    console.log("Employee Added Successfully");
    console.log(data);
})
.catch(error => {
    console.log("Error:", error);
});

// put():


fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "PUT",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Afreen",
        email: "afreen@gmail.com",
        username: "Afreen2026"
    })

})
.then(response => response.json())
.then(data => {
    console.log("Employee Updated");
    console.log(data);
})
.catch(error => console.log(error));


//patch:

fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "PATCH",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        email: "newemail@gmail.com"
    })

})
.then(response => response.json())
.then(data => {
    console.log("Email Updated Successfully");
    console.log(data);
})
.catch(error => console.log(error));


// delete

fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "DELETE"

})
.then(response => {
    if (!response.ok) {
        throw new Error("Unable to delete employee");
    }

    console.log("Employee Deleted Successfully");
})
.catch(error => {
    console.log("Error:", error.message);
});


// handling API response and errors

// //fetch("https://jsonplaceholder.typicode.com/users/9999")

//     .then(response => {

//         if (!response.ok) {
//             throw new Error("HTTP Error: " + response.status);
//         }

//         return response.json();

//     })

//     .then(data => {
//         console.log(data);
//     })

//     .catch(error => {
//         console.log("Error:", error.message);
//     });

// handling async/await:


async function getUsers() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        let data = await response.json();

        console.log("Users:", data);

    } catch (error) {

        console.log("Something went wrong:", error.message);

    }

}

getUsers();


//Loading, Success and Failure 


async function getEmployees() {

    let message = document.getElementById("message");
    let employeeList = document.getElementById("employeeList");

    // Clear old data
    employeeList.innerHTML = "";

    // LOADING STATE
    message.innerText = "Loading employees...";

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Unable to fetch employees");
        }

        let data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("Invalid employee data");
        }

        // SUCCESS STATE
        message.innerText = "Employees loaded successfully!";

        data.forEach(employee => {

            let li = document.createElement("li");

            li.innerText =
                employee.name + " - " + employee.email;

            employeeList.appendChild(li);

        });

    } catch (error) {

        // FAILURE STATE
        message.innerText = "Failed: " + error.message;

    }

}


// Create a reusable API function


const BASE_URL = "https://jsonplaceholder.typicode.com";

async function apiRequest(endpoint, method = "GET", data = null) {

    try {

        const response = await fetch(BASE_URL + endpoint, {

            method: method,

            headers: {
                "Content-Type": "application/json"
            },

            body: data ? JSON.stringify(data) : null

        });

        if (!response.ok) {
            throw new Error("API request failed");
        }

        if (response.status === 204) {
            return null;
        }

        return await response.json();

    }
    catch (error) {

        console.log("Error:", error.message);

    }
}

//Get
apiRequest("/users", "GET")
    .then(data => console.log(data));

//post

apiRequest("/users", "POST", {
    name: "Sana",
    email: "sana@gmail.com"
})
.then(data => console.log(data));


//put
apiRequest("/users/1", "PUT", {
    name: "Updated Sana",
    email: "updated@gmail.com"
})
.then(data => console.log(data));

//patch
apiRequest("/users/1", "PATCH", {
    email: "new@gmail.com"
})
.then(data => console.log(data));

//delete
apiRequest("/users/1", "DELETE")
    .then(data => console.log(data));