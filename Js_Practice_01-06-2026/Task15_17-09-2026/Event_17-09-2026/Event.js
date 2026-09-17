// Event Listeners

// An event listener waits for a particular event
// and runs a function when that event occurs.

// Syntax:
// element.addEventListener("event", function() {
//     // code
// });


// -------------------------------------
// 1. Basic Event Listener
// -------------------------------------

const button = document.getElementById("btn");

button.addEventListener("click", function() {
    console.log("Button Clicked!!");
});


// -------------------------------------
// 2. Like Button - Double Click
// -------------------------------------

const likeBtn = document.getElementById("likeBtn");

likeBtn.addEventListener("dblclick", function() {
    likeBtn.textContent = "liked";
    console.log("liked button");
});


// -------------------------------------
// 3. Login Button
// -------------------------------------

const loginBtn = document.getElementById("loginBtn");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", function() {
    msg.textContent = "Login successful";
});


// -------------------------------------
// 4. Event Object
// -------------------------------------

// event.type

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(event) {
    console.log(event.type);
});


// -------------------------------------
// 5. event.target
// -------------------------------------

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(event) {
    console.log(event.target);
});


// -------------------------------------
// 6. Keyboard Event
// -------------------------------------

const input = document.getElementById("name");

input.addEventListener("keydown", function(event) {
    console.log(event.key);
});


// -------------------------------------
// 7. Keyboard Example
// -------------------------------------

const task = document.getElementById("task");

task.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        console.log("Task Submitted");
    }

});


// -------------------------------------
// 8. event.preventDefault()
// -------------------------------------

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form submitted without page reload");

});


// -------------------------------------
// 9. Event Bubbling
// -------------------------------------

const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", function() {
    console.log("Button Clicked");
});

parent.addEventListener("click", function() {
    console.log("Parent Clicked");
});


// -------------------------------------
// 10. Event Capturing
// -------------------------------------

const parent1 = document.getElementById("parent1");
const child1 = document.getElementById("child1");

parent1.addEventListener("click", function() {
    console.log("parent1");
}, true);

child1.addEventListener("click", function() {
    console.log("child1");
});

// | Feature   | Capturing       | Bubbling        |
// | --------- | --------------- | --------------- |
// | Direction | Parent → Child  | Child → Parent  |
// | Phase     | First           | Later           |
// | Default?  | No              | Yes             |
// | Example   | `capture: true` | Normal listener |


// Event Delegation

// Event delegation is a very useful technique where we put one event listener on a parent instead of adding separate listeners to every child.

const products = document.getElementById("products");
products.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        console.log("Selected:", event.target.textContent);    }
})

// Event Binding

// Event binding means connecting an event with a function.


//
function sayHello(){
    console.log("Hello!!!");
}

// addEventListener():

const button1 = document.getElementById("btn5")

button1.addEventListener("click",function(){
    console.log("First");
});

button1.addEventListener("click",function(){
    console.log("second")
});

// Throttling means:

// Execute the function at most once during a specified time interval.

// window scroll
console.log("scrolling")
window.addEventListener("scroll",function(){
    console.log("scrolling");
})

// | Throttling                 | Debouncing                |
// | -------------------------- | ------------------------- |
// | Runs at regular intervals  | Runs after activity stops |
// | Limits execution frequency | Delays execution          |
// | Good for scrolling         | Good for searching        |
// | Good for mouse movement    | Good for typing           |
// | Good for resize events     | Good for autocomplete     |


// Real-Time Use of Throttling

// Throttling is useful for:

// Scroll animations
// Mouse movement
// Browser resizing
// Dragging
// Tracking page position
// Performance-heavy calculations


// Debouncing means:

// Wait until the event stops happening for a specified amount of time, then execute the function.

//search

const searchInput = document.getElementById("search");

let timer;

searchInput.addEventListener("input", function() {

    clearTimeout(timer);

    timer = setTimeout(function() {

        console.log("Searching for:", searchInput.value);

    }, 500);

});