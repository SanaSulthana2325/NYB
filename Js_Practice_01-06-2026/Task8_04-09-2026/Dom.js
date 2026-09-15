// DOM = Document Object Model

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