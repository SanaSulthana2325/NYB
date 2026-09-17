// Introduction to DOM
// What is DOM?

// DOM = Document Object Model

// When a browser loads an HTML page, it converts the HTML document into a tree-like structure of objects.



// selecting DOM Elements

// Before modifying an element, we usually need to select it.

// There are several common methods.// DOM = Document Object Model

// When the browser loads HTML, it converts the HTML document into a tree-like structure.

// JavaScript can use the DOM to:

// Find HTML elements
// Change text
// Change styles
// Add/remove elements
// Respond to clicks
// Read form values
// Create content dynamically

// HTML creates the page, CSS styles it, and JavaScript makes it interactive.


// DOM Selection

// DOM selection means finding HTML elements using JavaScript.

// getElementById:
let heading = document.getElementById("title");
console.log(heading)

// example
let price = document.getElementById("price");

console.log(price);

// getElementByClassName: returns multiple elements
let messages = document.getElementsByClassName("message");

console.log(messages);

// querySelector(): selects the first matching element

let heading1 = document.querySelector(".heading1");
console.log(heading1)


function changeMessages() {

        let messages = document.getElementsByClassName("message");

        for (let i = 0; i < messages.length; i++) {
            messages[i].style.color = "blue";
        }
    }


// getElementByTagName():
// This selector finds elements based on their HTML tag name.

// For example:

// document.getElementsByTagName("p");

// Find all <p> elements.

let k = document.getElementsByTagName("p1");
console.log(k.length);

// example

function changeColor() {

    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {

        paragraphs[i].style.color = "red";

    }
}

// querySelectorAll(): selects all matching elements

let items = document.querySelectorAll(".item")
console.log(items);

// example
function changeItems() {

    let items = document.querySelectorAll(".item");

    items.forEach(function(item) {

        item.style.color = "green";

    });

}

// DOM Manipulation

// DOM manipulation means changing the HTML using JavaScript.

let title1 = document.getElementById("title1");
title1.textContent = "Good Evening";


//
let box = document.getElementById("box");
box.innerHTML = "<h2>New Content</h2>"

// css with js

 let heading2 = document.getElementById("heading2");

    heading2.style.fontSize = "40px";
    heading2.style.backgroundColor = "pink";
    heading2.style.padding = "20px";


//
let button = document.getElementById("darkBtn");

    button.onclick = function () {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    };

// creating elements dynamically

// create a paragraph

 container = document.getElementById("container");

    let paragraph = document.createElement("p");

    paragraph.textContent = "Welcome to Warangal";

    container.appendChild(paragraph);


// cart example
  let button1 = document.getElementById("addBtn1");
    let cart = document.getElementById("cart");

    button1.addEventListener("click", function () {

        let product = document.createElement("p");

        product.textContent = "Laptop - ₹50,000";

        cart.appendChild(product);
    });


// | Concept          | Code                     | Purpose               |
// | ---------------- | ------------------------ | --------------------- |
// | Select ID        | `getElementById()`       | Select one element    |
// | Select first     | `querySelector()`        | Select first match    |
// | Select all       | `querySelectorAll()`     | Select all matches    |
// | Read text        | `textContent`            | Get text              |
// | Change text      | `textContent =`          | Modify text           |
// | Read HTML        | `innerHTML`              | Get HTML              |
// | Change HTML      | `innerHTML =`            | Insert HTML           |
// | Read input       | `value`                  | Get input value       |
// | Change input     | `value =`                | Set input value       |
// | Read attribute   | `getAttribute()`         | Get attribute         |
// | Change attribute | `setAttribute()`         | Set attribute         |
// | Create           | `createElement()`        | Create HTML element   |
// | Add              | `appendChild()`          | Add child             |
// | Add              | `append()`               | Add content           |
// | Insert before    | `before()`               | Insert before element |
// | Remove           | `remove()`               | Delete element        |
// | Parent           | `parentElement`          | Move to parent        |
// | Children         | `children`               | Get child elements    |
// | First child      | `firstElementChild`      | Get first child       |
// | Last child       | `lastElementChild`       | Get last child        |
// | Next             | `nextElementSibling`     | Get next sibling      |
// | Previous         | `previousElementSibling` | Get previous sibling  |


//Event Listeners

// An event is something that happens in the browser.

// Examples:

// Click
// Mouse movement
// Keyboard press
// Form submission
// Input change


// button
    let button2 = document.getElementById("btn1");

    button2.addEventListener("click", function () {
        alert("Button clicked!");
    });

// Counter

    let count = 0;

    let countDisplay = document.getElementById("count");

    let increaseButton = document.getElementById("increase");
    let decreaseButton = document.getElementById("decrease");

    increaseButton.addEventListener("click", function () {
        count++;
        countDisplay.textContent = count;
    });

    decreaseButton.addEventListener("click", function () {
        count--;
        countDisplay.textContent = count;
    });

// event delegation:Instead of adding an event listener to every <li>, we can add one event listener to the parent.

// This is called event delegation.
// example
    let students = document.getElementById("students");

    students.addEventListener("click", function (event) {

        if (event.target.tagName === "LI") {
            console.log(event.target.textContent);
        }

    });

//Form Handling

// Form handling means getting information entered by the user.

    let form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let username = document.getElementById("username").value;

        let password = document.getElementById("password").value;

        let message = document.getElementById("message");

        if (username === "" || password === "") {
            message.textContent = "Please fill all fields";
        } else {
            message.textContent = "Login successful!";
        }

    });


// What is event.preventDefault()?

// Normally when we submit a form, the browser may reload/navigate.

// event.preventDefault();

// means:

// "Browser, don't perform your default action. Let JavaScript handle it."

// This is very commonly used with forms.

// todo list

let taskInput = document.getElementById("taskInput");

let addTask = document.getElementById("addTask");

let taskList = document.getElementById("taskList");


addTask.addEventListener("click", function () {

    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";

});


// Normal Events

// A normal event happens when the user performs an action such as clicking a button, typing in an input, submitting a form, or moving the mouse.

// example
const loginBtn1 = document.getElementById("loginBtn1");
const message1 = document.getElementById("message1");

loginBtn1.addEventListener("click", function () {
    message1.textContent = "Login button clicked!";
});


// Event Bubbling

// Event bubbling means an event starts from the target element and then moves upward through its parent elements.

const product2 = document.getElementById("product2");
const buyBtn2 = document.getElementById("buyBtn2");

buyBtn2.addEventListener("click", function () {
    console.log("Button clicked");
});

product2.addEventListener("click", function () {
    console.log("Product card clicked");
});


// Event Capturing

// Event capturing is the opposite direction of bubbling.

// The event travels from the outer/parent element → target element.

const menu = document.getElementById("menu");
const item = document.getElementById("item");

menu.addEventListener("click", function () {
    console.log("Menu clicked - Capturing");
}, true);

item.addEventListener("click", function () {
    console.log("Button clicked");
});


// Throttling

// Throttling means:

// Execute a function at most once within a specified time interval.

// It is useful when an event fires very frequently.

// Examples:

// Scrolling
// Mouse movement
// Window resizing
// Dragging

let lastTime = 0;

window.addEventListener("scroll", function () {

    const currentTime = Date.now();

    if (currentTime - lastTime >= 1000) {
        document.getElementById("output").textContent =
            "Scroll detected at " + currentTime;

        lastTime = currentTime;
    }

});


// Debouncing

// Debouncing means:

// Wait until the user stops performing an action for a certain amount of time, then execute the function.

// It is especially useful for:

// Search boxes
// API requests
// Form validation
// Auto-save
// Input fields

const search = document.getElementById("search");
const result3 = document.getElementById("result3");

let timer;

search.addEventListener("input", function () {

    clearTimeout(timer);

    timer = setTimeout(function () {

        result3.textContent =
            "Searching for: " + search.value;

    }, 1000);

});


// BOM — Browser Object Model
// What is BOM?

// BOM stands for Browser Object Model.

// BOM allows JavaScript to interact with the browser window rather than directly with the HTML page.


// | Method             | Output appears                         |
// | ------------------ | -------------------------------------- |
// | `console.log()`    | Browser Developer Console              |
// | `alert()`          | Popup box                              |
// | `document.write()` | Directly on webpage                    |
// | `textContent`      | Inside an HTML element                 |
// | `innerHTML`        | Inside an HTML element, including HTML |



// Local Storage
// What is Local Storage?

// Local Storage allows us to store data in the browser.

// The important feature is:

// Data remains stored even after closing the browser or restarting the computer, until it is explicitly removed or the site's storage is cleared.


// example
function saveName() {

    let name = document.getElementById("name").value;

    localStorage.setItem("username", name);

    document.getElementById("output").textContent =
        "Name saved successfully!";
}

function showName() {

    let name = localStorage.getItem("username");

    document.getElementById("output").textContent =
        "Welcome, " + name;
}


// Session Storage
// What is Session Storage?

// Session Storage also stores data in the browser using key-value pairs.

// The major difference is:

// Session Storage data normally lasts only for the current browser tab/session.

// example

function saveDelivery() {

    let delivery =
        document.getElementById("delivery").value;

    sessionStorage.setItem("deliveryOption", delivery);

    document.getElementById("output").textContent =
        "Delivery option saved!";
}

function showDelivery() {

    let delivery =
        sessionStorage.getItem("deliveryOption");

    document.getElementById("output").textContent =
        "Selected: " + delivery;
}


// Output method

function showOrder() {

    let orderStatus = "Your order has been shipped.";

    console.log(orderStatus);

    console.log(orderStatus);

    document.getElementById("output").textContent = orderStatus;
}