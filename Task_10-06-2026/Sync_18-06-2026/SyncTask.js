//Implement common browser events such as click, change, submit, and input.

// click
let button = document.getElementById("btn")
button.addEventListener("click", function (){
    console.log("button clicked")
})

// input event: occurs whenever the user types something

let inputBox = document.getElementById("username")
inputBox.addEventListener("input",function (event){
    console.log(event.target.value)
})

//change event: occures ehen the value is changed and confirmed

let country = document.getElementById("country")
country.addEventListener("change", function(event){
    console.log("Selected Country:", event.target.value)
})


// submit event
let form = document.getElementById("myForm")
form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log("Form Submitted")
});

// Click
  document.getElementById("btn")
 .addEventListener("click", function () {

 console.log("Button clicked");

 });

 // Input
 document.getElementById("name")
 .addEventListener("input", function (event) {

 console.log(event.target.value);

 });

 // Change
  document.getElementById("course")
 .addEventListener("change", function (event) {

 console.log(event.target.value);

    });

 // Submit
    document.getElementById("form")
    .addEventListener("submit", function (event) {

    event.preventDefault();

 console.log("Form submitted");

  });


//Create practical examples of throttling and debouncing.
// these both are used to control how many times an event is executes

// debouncing
function debounce(func, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function searchData() {
    console.log("Searching Data...");
}

const inputBox1 = document.getElementById("search");

inputBox1.addEventListener(
    "input",
    debounce(searchData, 1000)
);

// throttling

function throttle(func, delay) {

    let lastCall = 0;

    return function () {

        let currentTime = new Date().getTime();

        if (currentTime - lastCall >= delay) {

            lastCall = currentTime;

            func();
        }
    };
}

function makePayment() {
    console.log("Payment Successful");
}

let button22 = document.getElementById("btn1");

button22.addEventListener(
    "click",
    throttle(makePayment, 2000)
);


//Develop programs using callback functions.

function displayMessage(){
    console.log("welcome  user")
}
setTimeout(displayMessage, 3000)

// callback with validation
function validateForm(callback) {
    let username = document.getElementById("username").value;
    if (username === " ") {
        console.log("username required")
    } else{
        callback();
    }
}
function success(){
    console.log("validation successful")
}
document.getElementById("check").addEventListener("click", function (){
    validateForm(success)
})

// callback with array
let numbers = [10,20,30,40]
numbers.forEach(function(value){
    console.log(value)
})

// callback with calculator
function calculator(a,b, operation){
    return operation(a,b)
}
function add(x, y){
    return x + y
}
function multiply(x,y){
    return x * y
}
console.log(calculator(5, 3, add))
console.log(calculator(5, 8, multiply))

//callback with API 
function fetchData(callback){
    console.log("loading Data....")
    setTimeout(function(){
        callback();
    }, 2000)

}
function showData(){
    console.log("Data Received")
}
fetchData(showData)

// callback with game logic

function startGame(callback){
    console.log("Game Started")
    callback();
}
function levelCompete(){
    console.log("Level Completed")
}
startGame(levelCompete)

// anonymous callback function: you can directly write callback function

setTimeout(function (){
    console.log("anonymous callback");
}, 2000)

//Arrow function callback
setTimeout(() =>{
    console.log("Arrow Callback")
},1000)


//Compare normal event handling with throttled and debounced events.

// normal event:
document.getElementById("search").addEventListener("input", function (e) {
    document.getElementById("output").innerText =
        "API Call: " + e.target.value;
});


// debouncing event
function debounce(func, delay) {
    let timer;

    return function (e) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(e);
        }, delay);
    };
}

function searchAPI(e) {
    document.getElementById("output").innerText =
        "API Call: " + e.target.value;
}

document.getElementById("search")
.addEventListener("input", debounce(searchAPI, 1000));


// throttling:
function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

function loadData() {
    document.getElementById("output").innerText =
        "Loading data at: " + new Date().toLocaleTimeString();
}

window.addEventListener("scroll", throttle(loadData, 2000));



//Document real-world use cases of callbacks, throttling, and debouncing.


//A callback function is a function passed into another function and executed later.

//Why Callbacks are Important in Real Applications

//Modern applications are mostly:

//* asynchronous (API calls, servers, timers)
//* event-driven (clicks, input, scroll)

//Callbacks help control what happens next after a task finishes.

//used in
//----> form validation
//----> payment process
//---->array methods
//---->Timers

// throttling is a technique that limit how often a function can run, even if an event keeps firing countinuously
// it ensures the function executes only onces in a fixed time interval

//why throttling is needed in real application
//1. Prevent Performance Problems 
//Some events fire extremely fast:

//* scroll
//* resize
//* mousemove
//* keydown
//If we run a function every time:

//* Browser becomes slow
//* UI lags
//* Memory usage increases

// 2. Reduce Unnecessary Function Calls 

//Many real apps perform heavy tasks like:

//* API calls
//* DOM updates
//* Calculations

//Without throttling:

//* Same function runs 100s of times per second

//With throttling:

//*Function runs only once in a fixed interval
//3 Prevent Duplicate Actions 

//Real-world cases:

//* Payment button clicks
//* Form submissions
//* Order placement

//Without throttling:

//* User clicks multiple times → multiple orders/payments

//With throttling:

//* Only one action is allowed per interval
//4 Control Continuous Events 🎮

//Some actions happen continuously:

//* Game controls
//* Mouse movement tracking
//* Live dashboards

//Without throttling:

//* Too many updates per second

//With throttling:

//* Controlled updates → stable behavior



// Debouncing:Debouncing is a technique that delays the execution of a function until the user stops triggering an event for a specific time.

//---> It ensures the function runs only once after the final action, not repeatedly

//Why Debouncing is Needed in Real Applications

//In real-world apps, some events fire very rapidly:

//* typing in search box
//* resizing window
//* scrolling
//* input validation

//If we run a function every time:

//* too many API calls
//* slow performance
//* unnecessary server load


//used in
//----> search bar
//----> Form validation
//---->Resize event
//---->filtering
//---->button clicks

