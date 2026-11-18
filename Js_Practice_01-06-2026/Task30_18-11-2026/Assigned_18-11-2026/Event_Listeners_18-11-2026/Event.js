// Implement event listeners and event handling.

// What is an event?
// An event is an action performed by a user or browser on a webpage.

// Real-time examples:
// - Clicking a button.
// - Typing in a textbox.
// - Moving the mouse over an image.
// - Submitting a form.
// - Pressing a keyboard key.
// What is event handling?

// Event handling means writing JavaScript code to perform an action when an event occurs.

// What is addEventListener()?

// It attaches an event handler to an HTML element.

let button = document.getElementById("myButton");

button.addEventListener("click", function() {

    document.getElementById("result").textContent =
        "Button Clicked Successfully!";

});

// input

let username = document.getElementById("username");

username.addEventListener("input", function() {

    document.getElementById("message").textContent =
        "Hello " + username.value;

});

// Understand event bubbling, capturing, and delegation.

// Event Bubbling
// Event bubbling means an event travels from the child element to its parent element.

let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function() {
    console.log("Parent clicked");
});

child.addEventListener("click", function() {
    console.log("Child clicked");
});


// Event Capturing
// Event capturing means an event travels from the parent element to the child element.

// Direction: Parent → Child.

parent.addEventListener("click", function() {
    console.log("Parent clicked");
}, true);

child.addEventListener("click", function() {
    console.log("Child clicked");
}, true);



// Event Delegation
// Event delegation means adding one event listener to a parent element to handle events from multiple child elements.

let list = document.getElementById("shoppingList");

list.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        event.target.parentElement.remove();

    }

});
// Create forms with input validation.

let form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();

    let result = document.getElementById("result");

    if (name === "") {
        result.textContent = "Please enter your name";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        result.textContent = "Please enter a valid email";
        return;
    }

    if (password.length < 6) {
        result.textContent = "Password must contain at least 6 characters";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        result.textContent = "Enter a valid 10-digit phone number";
        return;
    }

    result.textContent = "Registration Successful!";

    form.reset();

});


// Store and retrieve application data using Local Storage and Session Storage.


// What is Web Storage?
// Web Storage is a browser feature that allows JavaScript to store data in the user's browser.

// It helps websites remember information without storing it in a database.

// local storage:


// Store employee name

function saveName() {

    let name = document.getElementById("name").value;

    localStorage.setItem("employeeName", name);

    alert("Employee Name Saved!");

}

// Retrieve employee name

function showName() {

    let name = localStorage.getItem("employeeName");

    document.getElementById("output").textContent =
        "Employee Name: " + (name || "Not Found");

}


// session storage:

function saveUser() {

    let username = document.getElementById("username").value;

    sessionStorage.setItem("username", username);

    alert("Username Saved Successfully!");

}

function showUser() {

    let username = sessionStorage.getItem("username");

    document.getElementById("result").textContent =
        "Welcome " + (username || "Guest");

}



// Feature	Local Storage	Session Storage
// Lifetime	Until manually deleted	Until tab session ends
// Data storage	Browser	Particular tab
// Page refresh	Data remains	Data remains
// Browser restart	Data generally remains	Data is cleared when its tab session ends
// Storage capacity	Usually around 5 MB	Usually around 5 MB
// Sharing	Same origin across tabs	Separate per tab
// Use case	Remember preferences	Temporary form data