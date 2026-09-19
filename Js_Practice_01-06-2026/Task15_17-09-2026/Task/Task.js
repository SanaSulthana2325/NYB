// Create and modify HTML elements dynamically.


function addProduct() {
    let product = document.createElement("p");

    product.textContent = "Laptop - ₹50,000";

    document.getElementById("cart").appendChild(product);
}

// Build a dynamic list using DOM manipulation.


let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function() {

    let task = input.value;

    if (task !== "") {
        let li = document.createElement("li");

        li.textContent = task;

        list.appendChild(li);

        input.value = "";
    }
});


// Implement click, input, change, submit, mouse, and keyboard events.

document.getElementById("loginBtn").addEventListener("click", function() {
    console.log("Login button clicked!");
});


// Input Event

// The input event runs whenever the user changes the value of an input field.

let nameInput = document.getElementById("name");
let output = document.getElementById("output");

nameInput.addEventListener("input", function() {
    output.textContent = "Hello " + nameInput.value;
});


// Change Event

// The change event usually runs when the user changes a value and commits the change.

document.getElementById("country").addEventListener("change", function() {
    document.getElementById("result").textContent =
        "Selected: " + this.value;
});


// Submit Event

// The submit event occurs when a form is submitted.

document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;

    console.log("Welcome " + username);
});


// Mouse Events

// Mouse events happen when the user interacts with an element using the mouse.

// Common events:

// click
// dblclick
// mouseover
// mouseout
// mousedown
// mouseup
// mousemove

let product = document.getElementById("product");

product.addEventListener("mouseover", function() {
    product.textContent = "Laptop - ₹50,000";
});

product.addEventListener("mouseout", function() {
    product.textContent = "Laptop";
});


// Keyboard Events

// Keyboard events detect keyboard actions.

document.getElementById("search").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        console.log("Searching for: " + this.value);
    }

});

// Demonstrate event bubbling and capturing.

// Event Bubbling
// What is event bubbling?

// When an event occurs on a child element, the event can bubble upward from the child to its parent.

// Example:

// Child
//   ↓
// Parent
//   ↓
// Body

document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
    console.log("Button clicked");
});


// Event Capturing

// Capturing is the opposite direction.

// The event travels:

// Parent
//   ↓
// Child

document.getElementById("parent1").addEventListener("click", function() {
    console.log("Parent1");
}, true);

document.getElementById("child1").addEventListener("click", function() {
    console.log("Button");
});
// Implement event delegation.


// Event Delegation
// What is event delegation?

// Instead of adding an event listener to every child, we add one event listener to the parent.

// This works because of event bubbling.

document.getElementById("products1").addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        console.log(
            event.target.parentElement.firstChild.textContent.trim()
            + " added to cart"
        );

    }

});
// Create examples for throttling and debouncing.

// Throttling
// What is throttling?

// Throttling means:

// Execute a function at most once within a specified time interval.

// It is useful for events that fire very frequently, such as scroll and mousemove.

let count = 0;
let allowed = true;

window.addEventListener("scroll", function() {

    if (allowed) {

        count++;

        document.getElementById("count").textContent =
            "Scroll events handled: " + count;

        allowed = false;

        setTimeout(function() {
            allowed = true;
        }, 1000);
    }

});


// debouncing
// What is debouncing?

// Debouncing means:

// Execute the function only after the user stops performing an action for a certain amount of time.

let timer;

document.getElementById("search1").addEventListener("input", function() {

    clearTimeout(timer);

    timer = setTimeout(function() {

        console.log("Searching for:", document.getElementById("search1").value);

    }, 500);

});
// Store and retrieve objects using Local Storage.

// Store Objects Using Local Storage
// Important point

// localStorage stores data as strings.

// Therefore, to store an object:

// JSON.stringify()

// is used.

// To convert it back:

// JSON.parse()

function saveUser() {

    let user = {
        name: "Sana",
        age: 22,
        role: "Developer"
    };

    localStorage.setItem("user", JSON.stringify(user));

    console.log("User saved!");
}

function getUser() {

    let data = localStorage.getItem("user");

    let user = JSON.parse(data);

    document.getElementById("output").textContent =
        user.name + " - " + user.role;
}
// Practice Session Storage.

// Session Storage
// What is Session Storage?

// sessionStorage stores data only for the current browser tab/session.

function login1() {

    sessionStorage.setItem("username", "Sana");

    document.getElementById("result").textContent =
        "Logged in successfully";
}

function checkLogin() {

    let username = sessionStorage.getItem("username");

    if (username) {
        document.getElementById("result1").textContent =
            "Welcome " + username;
    } else {
        document.getElementById("result1").textContent =
            "Please login";
    }
}
// Implement data persistence using Local Storage.

// Local Storage Data Persistence
// What is persistence?

// Persistence means:

// Data remains available even after refreshing or reopening the browser.


let input1 = document.getElementById("task");
let button1 = document.getElementById("add");
let list1 = document.getElementById("list1");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {

    list1.innerHTML = "";

    tasks.forEach(function(task) {

        let li = document.createElement("li");

        li.textContent = task;

        list1.appendChild(li);
    });
}

button1.addEventListener("click", function() {

    if (input1.value !== "") {

        tasks.push(input1.value);

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

        input1.value = "";

        displayTasks();
    }
});

displayTasks();
