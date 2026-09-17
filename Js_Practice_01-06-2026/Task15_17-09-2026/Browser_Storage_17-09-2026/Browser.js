// Browser Storage allows a website to store data inside the user's browser.

// The two main types you'll learn are:

// Local Storage
// Session Storage

// Local Storage
// What is Local Storage?

// Local Storage allows us to store data in the browser that generally remains available even after:

// Page refresh
// Closing the tab
// Closing the browser

// The data remains until the website/application removes it or the browser's stored data is cleared.

// Basic syntax
// localStorage.setItem("key", "value");

const input = document.getElementById("nameInput");
const button = document.getElementById("saveBtn");
const msg = document.getElementById("msg");

button.addEventListener("click",function(){
    
    localStorage.setItem("username",input.value);
    localStorage.getItem("username")
    msg.textContent = "username saved!!";
});

// example
localStorage.setItem("city1","warangal");
localStorage.removeItem("city")
console.log(localStorage.getItem("city1"));

// example

localStorage.setItem("username1", "tata");

localStorage.removeItem("username1");

console.log(localStorage.getItem("username1"));

// example
const age = localStorage.getItem("age");
console.log(age);
console.log(typeof age);


// JSON.stringify()

// JSON.stringify() converts a JavaScript value, commonly an object or array, into a JSON string.

const user1 = {
    name: "sara",
    age:22,
    city:"hanamkonda"
};

const result = JSON.stringify(user1);
console.log(result);
console.log(typeof result)

const userString = JSON.stringify(user1);

localStorage.setItem("user1",userString);


// JSON.parse():

const data = '{"name":"Tasan"}';
console.log(data);


const user2 = JSON.parse(data);
console.log(user2.name)


// example
const user = {
    name: "Sana",
    age: 22,
    role: "Developer"
};

// Store object
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser);
console.log(storedUser.name);
console.log(storedUser.role);

// Session Storage

// Now let's understand Session Storage.

// Syntax is almost identical:

// sessionStorage.setItem("key", "value");



const nameInput = document.getElementById("name");
        const result1 = document.getElementById("result");

        // Store data
        document.getElementById("saveBtn").addEventListener("click", function() {

            sessionStorage.setItem("username", nameInput.value);

            result.textContent = "Name saved successfully";

        });


        // Get data
        document.getElementById("getBtn").addEventListener("click", function() {

            const username = sessionStorage.getItem("username");

            result.textContent = "Welcome " + username;

        });


        // Remove data
        document.getElementById("removeBtn").addEventListener("click", function() {

            sessionStorage.removeItem("username");

            result.textContent = "Name removed";

        });