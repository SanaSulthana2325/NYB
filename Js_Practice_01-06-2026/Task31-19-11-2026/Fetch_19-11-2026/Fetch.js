// What is Fetch API?
// The Fetch API is a modern JavaScript feature used to send HTTP requests and receive responses from servers.

// In simple words:

// Fetch API helps JavaScript communicate with a backend server to get or send data.

fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())

    .then(data => {
        console.log(data);
    })

    .catch(error => {
        console.log("Error:", error);
    });


//     Code	Meaning
// fetch(url)	Sends a request to the API.
// response	Receives the server response.
// response.json()	Converts response data into JavaScript objects.
// .then(data)	Handles the received data.
// .catch(error)	Handles network errors.


// What is XMLHttpRequest?
// XMLHttpRequest (XHR) is an older JavaScript technique used to send HTTP requests to a server without reloading the webpage.

// It was commonly used before the Fetch API became available.



// Fetch API	       XMLHttpRequest
// Modern approach	Older approach
// Uses Promises	Uses events and callbacks
// Supports async/await	Does not directly return a Promise
// Cleaner syntax	More code required
// Easier to read	Comparatively complex


// What is REST API?
// REST stands for Representational State Transfer.

// A REST API is a way for applications to communicate with a server using standard HTTP methods.


// GET: retrieve data


fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())

    .then(data => {
        console.log("Employee Details:");
        console.log(data);
    })

    .catch(error => {
        console.log(error);
    });

//POST: create new data

fetch("https://jsonplaceholder.typicode.com/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        name: "Rahul",
        email: "rahul@gmail.com",
        department: "HR"

    })

})

.then(response => response.json())

.then(data => {
    console.log("Employee Added Successfully");
    console.log(data);
})

.catch(error => {
    console.log(error);
});

//PUT: Update entire data

fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "PUT",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        name: "Sam",
        email: "rahulnew@gmail.com",
        department: "Finance"

    })

})

.then(response => response.json())

.then(data => {
    console.log("Employee Updated Successfully");
    console.log(data);
})

.catch(error => {
    console.log(error);
});

// Patch: update specific data

fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "PATCH",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        department: "Finance"

    })



})

.then(response => response.json())

.then(data => {
    console.log("Department Updated Successfully");
    console.log(data);
})

.catch(error => {
    console.log(error);
});


// delete: delete data


fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "DELETE"

})

.then(response => {

    if (response.ok) {
        console.log("Employee Deleted Successfully");
    }

})

.catch(error => {
    console.log(error);
});


// API Headers
// Headers provide additional information about an HTTP request or response.

fetch("https://jsonplaceholder.typicode.com/users", {

    method: "GET",

    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

})

.then(response => response.json())

.then(data => {
    console.log(data);
});



// Header	            Purpose
// Content-Type	      Describes the format of the request body
// Accept	           Specifies the response format expected
// Authorization	Sends authentication credentials
// Cache-Control	Provides caching instructions


// Request Body
// Request Body is the actual data we send to the server.


fetch("https://jsonplaceholder.typicode.com/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        name: "Sana",
        email: "sana@gmail.com",
        city: "Hyderabad"

    })

})

.then(response => response.json())

.then(data => {
    console.log(data);
});




// API Parameters
// Parameters are additional values included in the URL or request to specify what information we need.

// Path Parameters
// Path parameters identify a particular resource.

// Query Parameters
// Query parameters are used to filter, search or sort data.



// What is Error Handling?
// Error handling means identifying and managing errors that occur while executing a program.

// What is try...catch?
// JavaScript provides try...catch to handle errors.
// - try contains the code that might produce an error.
// - catch handles the error if one occurs.




try {

    let result = 10 / 0;

    console.log(result);

    let name = undefined;

    console.log(name.toUpperCase());

}
catch(error) {

    console.log("Something went wrong!");

    console.log(error.message);

}


// with API

async function getEmployees() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch employee details");
        }

        let data = await response.json();

        console.log("Employee Details:");
        console.log(data);

    }

    catch(error) {

        console.log("Error:", error.message);

    }

}

getEmployees();



// try/catch/finally

try {

    console.log("Payment Processing");

    throw new Error("Payment Failed");

}

catch(error) {

    console.log(error.message);

}

finally {

    console.log("Payment Process Completed");

}