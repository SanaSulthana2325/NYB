// Web API means an API provided by the browser that allows JavaScript to interact with browser features such as the DOM, timers, storage, location, network, and more.

// Simple definition

// Web APIs are browser-provided features that JavaScript can use to perform tasks outside the core JavaScript language.

// For example:

// setTimeout() → delay something
// setInterval() → repeat something
// fetch() → get data from a server
// localStorage → store data in the browser
// navigator.geolocation → get user's location
// document → work with HTML
// alert() → show a browser message


//1. setTimeOut : execute after some time

console.log("starting....")

setTimeout(()=>{
    console.log("Welcome to our website")

},3000)
console.log("Loading....")

//2. setInterval(): Repeat an action

let count =1;

const timer = setInterval(() =>{
    console.log(count);
    count++;

    if(count > 5){
        clearInterval(timer);
    }

},2000)

// fetch : get data from server through HTTP methods

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
    });



// localStorage: store data in the browser

localStorage.setItem("username", "Tasan");

const username = localStorage.getItem("username");
console.log(username)

// alert

alert("welcome to our website")

// prompt(): get input from user

const name = prompt ("Enter your name:");

console.log(name);


// webstorage API Shopping Cart:


const cart = ["Laptop", "Mouse", "Keyboard"];

localStorage.setItem("cart", JSON.stringify(cart));

const savedCart = JSON.parse(
    localStorage.getItem("cart")
);

console.log(savedCart);



// | Web API          | Purpose                   | Real-time example        |
// | ---------------- | ------------------------- | ------------------------ |
// | `setTimeout()`   | Run after a delay         | Show message after 3 sec |
// | `setInterval()`  | Repeat execution          | Digital clock            |
// | `fetch()`        | Get/send server data      | Load products            |
// | `localStorage`   | Permanent browser storage | Remember theme           |
// | `sessionStorage` | Temporary storage         | Exam session             |
// | `document`       | Manipulate HTML           | Change webpage           |
// | `alert()`        | Show popup                | Warning                  |
// | `confirm()`      | Get confirmation          | Delete account           |
// | `prompt()`       | Get user input            | Ask for name             |
// | `geolocation`    | Get location              | Maps/cab apps            |
// | `Notification`   | Browser notifications     | New message              |
// | `URL`            | Work with URLs            | Read query parameters    |
// | `Canvas`         | Draw graphics             | Games/charts             |
