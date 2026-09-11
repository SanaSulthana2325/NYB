//API: An API allows one application to communicate with another application.


// What is the Fetch API?

// The Fetch API is JavaScript's built-in way of making HTTP requests.

// The basic syntax is:

// fetch(url)

// For example:

// fetch("https://example.com/users");

// fetch() returns a Promise.

// example getting user info
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(user => {
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Phone:", user.phone);

})
.catch(error =>{
    console.log("Error:", error);
});

//Get Request: give me some data

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(products =>{
    products.slice(0,5).forEach(product =>{
        console.log("Product:", product.name);
        console.log("Price:",product.price);
    });
})
.catch (error =>{
    console.log("Error:",error);
})

// example
fetch("https://jsonplaceholder.typicode.com/users/5")
    .then(response => response.json())
    .then(user => {

        console.log("User ID:", user.id);
        console.log("Name:", user.name);
        console.log("Email:", user.email);

    });
// post: 

const newUser = {
    name:"Tasan",
    email:"tasan23@gmail.com",
    password:"232323"
};
fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
 headers:{
       "Content-Type": "application/json"
    },
     body: JSON.stringify(newUser)
})
.then(response => response.json())
.then(data =>{
    console.log("User Created!");
    console.log(data);
})
.catch(error =>{
    console.log("Error:",error);
});

// Login Example

const loginData = {
    username: "Mira",
    password: "563445"
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
    console.log("Login failed:", error);
});
// PUT:

const updatedUser = {

    name: "Tasan",
    email: "tasan23@gmail.com",
    age: 23,
    city: "Warangal"

};

fetch("https://jsonplaceholder.typicode.com/users/1", {

    method: "PUT",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(updatedUser)

})
.then(response => response.json())
.then(data => {

    console.log("Profile updated");
    console.log(data);

});

//Patch: change only one thing

fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:"PATCH",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email:"sana45@gmail.com"
    })
})
.then(response => response.json())
.then(data =>{
    console.log("Email Updated");
    console.log(data);
});

// delete request 

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"Delete"
})
.then(response =>{
    if(response.ok){
        console.log("product deleted successfully");
    }
})
.catch(error =>{
    console.log("Delete failed:",error);
});

// loading handling

console.log("Loading videos...");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(videos => {

        console.log("Videos loaded!");
        console.log(videos);

    })
    .catch(error => {

        console.log("Unable to load videos");

    });




// | Concept            | Real-life meaning            | JavaScript                             |
// | ------------------ | ---------------------------- | -------------------------------------- |
// | **Fetch API**      | Contact the server           | `fetch()`                              |
// | **GET**            | Give me data                 | `method: "GET"`                        |
// | **POST**           | Create something             | `method: "POST"`                       |
// | **PUT**            | Replace/update resource      | `method: "PUT"`                        |
// | **PATCH**          | Change part of resource      | `method: "PATCH"`                      |
// | **DELETE**         | Remove something             | `method: "DELETE"`                     |
// | **Request**        | What client sends            | URL + method + headers + body          |
// | **Response**       | What server returns          | Response object                        |
// | **Headers**        | Extra information            | `headers: {...}`                       |
// | **JSON**           | Data format                  | `JSON.stringify()` / `response.json()` |
// | **Loading**        | Tell user request is running | `"Loading..."`                         |
// | **Error handling** | Handle failures              | `try/catch` or `.catch()`              |
