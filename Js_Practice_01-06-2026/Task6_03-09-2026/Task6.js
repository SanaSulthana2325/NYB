// Fetch API in JavaScript

// The Fetch API is used in JavaScript to request data from a server/API and receive a response.

// In simple words:

// Fetch API = JavaScript's way of talking to a server.

// For example:

// Get products from an online store
// Get weather data

// example

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data =>{
    console.log(data);
})
.catch(error =>{
    console.log(error);
})

// Fetch Multiple Products

fetch("http://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(products => {
    console.log(products);
})
.catch(error =>{
    console.log("Error:",error);
});

// fetch and display products in webpage


fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        let output = "";

        users.forEach(user => {
            output += `
                <div>
                    <h3>${user.name}</h3>
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                </div>
            `;
        });

        document.getElementById("product").innerHTML = output;
    })
    .catch(error => {
        console.log("Something went wrong:", error);
    });

    //fetch a single post

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(post => {

        console.log("Post ID:", post.id);
        console.log("Title:", post.title);
        console.log("Content:", post.body);

    });

    // using async/await

    async function getUser(){
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        const user = await response.json();

        console.log(user);
    }
    getUser();

// 2. GET Request

// A GET request is used to retrieve/get data from a server.

// Real-world examples
// Get student details
// Get products
// Get employees

console.log("GET");
// example
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
    .then(data =>{
        console.log("Name:",data.name);
        console.log("Email:",data.email);
        console.log("Username:",data.username);

    })


// post request:
// A POST request is used to send/create new data on a server.

// Real-world examples

// Suppose you have a student registration form:

console.log("POST");
// cteate a student
const studentData = {
    name: "Tillu",
    age: 34,
    course: "React"
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(studentData)
})
.then(response => response.json())
.then(data => {
    console.log("Server response:", data);
})
.catch(error => {
    console.log("Request failed:", error.message);
});

// | GET                                           | POST                                 |
// | --------------------------------------------- | ------------------------------------ |
// | Used to get data                              | Used to send/create data             |
// | Usually doesn't modify server data            | Can create new server data           |
// | Data commonly appears in URL/query parameters | Data is usually sent in request body |
// | Example: Get products                         | Example: Add product                 |


// 200 → Success
// 201 → Created
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Server Error

// checking the response
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {

        console.log("Status:", response.status);
        console.log("OK:", response.ok);

        return response.json();
    })
    .then(data => {
        console.log("Name:", data.name);
    });


// What is a Promise?

// A Promise represents a value that will be available now, later, or never.

// This is important because API requests take time.


// example
const promise = new Promise((resolve,reject) =>{
    let paymentSuccessful = true;

    if (paymentSuccessful){
        resolve("Payment Successful");
    }
});
console.log(promise)


// login

const loginData = {
    username: "didi",
    password: "2323"
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(loginData)
})
.then(response => response.json())
.then(data => {
    console.log("Login response:", data);
})
.catch(error => {
    console.log("Login failed:", error.message);
});


//Async/Await

// async/await is another way of working with Promises.


async function getUser(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log(data);
}
getUser();


// Error Handing

async function getUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

getUser();


//     | Method   | Purpose               | Example           |
// | -------- | --------------------- | ----------------- |
// | `GET`    | Get data              | Get products      |
// | `POST`   | Create data           | Add a student     |
// | `PUT`    | Replace/update data   | Update student    |
// | `PATCH`  | Partially update data | Change only email |
// | `DELETE` | Delete data           | Delete product    |
