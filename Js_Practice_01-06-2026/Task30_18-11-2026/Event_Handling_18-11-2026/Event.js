// What is Event Handling?
// An event is an action performed by a user or browser on a webpage.

// Event handling means responding to those actions using JavaScript.


// Event	Meaning	                        Real-time example
// click	User clicks an element	        Login button
// dblclick	User double-clicks	            Open an item
// mouseover	Mouse moves over an element	 Highlight a button
// mouseout	Mouse leaves an element	         Remove highlighting
// keydown	Keyboard key is pressed	        Search box
// keyup	Keyboard key is released	    Live typing
// input	Input value changes          	Enter username
// change	Input selection/value changes	Select department
// submit	Form is submitted	            Registration form


// Button click event:

let button = document.getElementById("btn");

button.addEventListener("click",function(){
    document.getElementById("message").textContent = "Button Clicked Sucessfully!";
});

// mouse Events

let heading = document.getElementById("heading");
heading.addEventListener("mouseover", function(){
    heading.style.color = "blue";
});

heading.addEventListener("mouseout", function(){
    heading.style.color = "red";
});

// input events:

let input = document.getElementById("username");
input.addEventListener("input", function(){
    document.getElementById("output").textContent = "Hello " + input.value;
});

// Event Bubbling
// Event bubbling means an event starts from the element that was clicked and travels upward to its parent elements.
//Direction: Child → Parent → Grandparent

document.getElementById("parent")
.addEventListener("click", function() {

    console.log("Parent Clicked");

});

document.getElementById("child")
.addEventListener("click", function() {

    console.log("Child Clicked");

});


// Event Capturing
// Event capturing is the opposite of bubbling.

// The event starts from the outermost parent and travels downward to the target element.

// Direction: Grandparent → Parent → Child

document.getElementById("parent1")
.addEventListener("click", function() {

    console.log("Parent Clicked");

}, true);


document.getElementById("child1")
.addEventListener("click", function() {

    console.log("Child Clicked");

}, true);


// What is Event Delegation?
// Event delegation means adding a single event listener to a parent element instead of adding separate event listeners to every child element.

// It works because of event bubbling.

let studentList =
document.getElementById("studentList");

studentList.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        event.target.parentElement.remove();

    }

});


// What is Form Handling?
// Form handling means collecting user information from HTML forms and processing it using JavaScript.


// What is Form Validation?
// Form validation means checking whether the user entered correct information before submitting the form.


let form = document.getElementById("employeeForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let message1 = document.getElementById("message1");

    if (name === "") {

        message1.textContent = "Please enter your name";
        message1.style.color = "red";

    }

    else if (!email.includes("@") || !email.includes(".")) {

        message1.textContent = "Please enter a valid email";
        message1.style.color = "red";

    }

    else if (password.length < 6) {

        message1.textContent = "Password must be at least 6 characters";
        message1.style.color = "red";

    }

    else {

        message1.textContent = "Registration Successful!";
        message1.style.color = "green";

    }

});




// What is an event?	An action performed by the user or browser.
// What is event handling?	Responding to events using JavaScript.
// What is addEventListener()?	Attaches an event listener to an element.
// What is event bubbling?	Event travels from child to parent.
// What is event capturing?	Event travels from parent to child.
// What is event delegation?	Handling child events through a parent listener.
// What is event.target?	Identifies the element that triggered the event.
// What is preventDefault()?	Prevents the browser's default action.
// What is form validation?	Checking user input before processing it.
// Why do we use submit events?	To handle form submission.

// What is Local Storage?
// Local Storage is a browser storage feature that allows us to store data in the user's browser.

// The stored data remains available even after:
// - Refreshing the webpage.
// - Closing the browser.
// - Restarting the computer.


// Method	                     Purpose
// localStorage.setItem()	Stores data
// localStorage.getItem()	Retrieves data
// localStorage.removeItem()	Removes specific data
// localStorage.clear()	Removes all local storage data
// localStorage.length	Returns number of stored items

function saveName() {

    let name = document.getElementById("username").value;

    localStorage.setItem("username", name);

    console.log("Name Saved Successfully!");

}

function showName() {

    let name = localStorage.getItem("username");

    document.getElementById("output").textContent =
        "Welcome " + name;

}


// What is Session Storage?
// Session Storage is also used to store data in the browser.

// But the main difference is that Session Storage keeps data only for the current browser tab's session.

// When the tab is closed, its session storage data is cleared



// Method	Purpose
// sessionStorage.setItem()	Stores data
// sessionStorage.getItem()	Retrieves data
// sessionStorage.removeItem()	Removes specific data
// sessionStorage.clear()	Removes all session data

function saveSession() {

    let name =
    document.getElementById("username").value;

    sessionStorage.setItem("username", name);

    alert("Session Data Saved!");

}

function getSession() {

    let name =
    sessionStorage.getItem("username");

    document.getElementById("output").textContent =
        "Welcome " + name;

}


// Local Storage	Session Storage
// Stores data for longer periods	Stores data for a tab session
// Data remains after browser restart	Data is cleared when the tab session ends
// Shared across same-origin tabs	Separate for each tab
// Usually used for preferences	Usually used for temporary information
// Around 5 MB commonly	Around 5 MB commonly