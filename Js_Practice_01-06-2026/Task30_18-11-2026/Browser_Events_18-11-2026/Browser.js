// What are Cookies?
// Cookies are small pieces of data stored by websites in the browser.

// Websites use cookies to remember certain information about users and their interactions.


// Cookie Type	Meaning
// Session Cookie	Usually expires when the browser session ends
// Persistent Cookie	Remains until its expiration time
// Secure Cookie	Sent only over HTTPS connections
// HttpOnly Cookie	Cannot be accessed through JavaScript
// SameSite Cookie	Controls when cookies are sent with cross-site requests

// How to Create a Cookie
// JavaScript provides document.cookie to read and write cookies that are accessible to JavaScript.


// What are Browser Events?
// Browser events are actions or occurrences related to the browser window, webpage, document, or user interaction.

// JavaScript can listen for these events and perform specific actions.

// Event	Meaning	Real-time usage
// load	Page and dependent resources finish loading	Display welcome message
// DOMContentLoaded	HTML document is parsed	Initialize JavaScript
// resize	Browser window size changes	Responsive layouts
// scroll	User scrolls the page	Back-to-top button
// online	Browser gains network connectivity	Online notification
// offline	Browser loses network connectivity	Offline notification
// beforeunload	User is about to leave the page	Warn about unsaved changes
// visibilitychange	Tab becomes visible or hidden	Pause videos or animations




// Save username
function saveName() {

    let name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("username", name);

    showName();

}

// Display username
function showName() {

    let name = localStorage.getItem("username");

    document.getElementById("welcome").textContent =
        "Welcome " + (name || "User");

}

// Dark mode toggle
function darkMode() {

    if (document.body.style.backgroundColor === "black") {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

    }

    else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

    }

}

// Check internet status
function updateStatus() {

    let status = document.getElementById("status");

    status.textContent = navigator.onLine ?
        "You are Online" : "You are Offline";

}

// Browser events
window.addEventListener("online", updateStatus);

window.addEventListener("offline", updateStatus);

// Page loading event
document.addEventListener("DOMContentLoaded", function() {

    showName();

    updateStatus();

});
