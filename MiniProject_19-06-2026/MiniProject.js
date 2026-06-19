//Develop a mini project that includes:
//DOM Manipulation:
//Using JavaScript to change, create, update, or remove HTML elements dynamically.


// Selecting Elements:
// document.getElementById("id")
// document.getElementByClassName("class")
//document.getElemenetByTagName("tag")
//document.querySelector("selector")
//document.querySelectorAll("selector")

//example
let heading = document.getElementById("title")
console.log(heading)

// changing content
//a. innerHTML
document.getElementById("title").innerHTML = "<i> welcome!</i>"

//b.innerText
//document.getElementById("tittle").innerText = "Welcome!";

// changing style
let title1 = document.getElementById("title1")
title1.style.color = "blue";
title1.style.fontsize = "30px"
title1.style.backgroundColor= "yellow"

//adding element

let newPara = document.createElement("p")
newPara.innerText = "this is a new paragraph"
document.body.appendChild(newPara)

// removing element
let element = document.getElementById("title2")
element.remove()

// document.getElementByClassName("class"):selects all elements with same class name
let elements22 = document.getElementsByClassName("msg")
console.log(elements22)

//document.getElemenetByTagName("tag"): selecting elements using HTML tag names
let heading23 = document.getElementsByTagName("h1")
console.log(heading23)

//document.querySelector("selector"): selects first matching element

let first = document.querySelector(".msg1")
console.log(first.innerText)

// querySelectorAll():selects all matching elements
let aLL = document.querySelectorAll(".msg2")
console.log(aLL)


//Event Handling:Responding to user actions on a web page using JavaScript.

//1. click event
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    document.getElementById("msg5").innerText = "Button Clicked!";
});


//2.mouse event
let text = document.getElementById("text");

text.addEventListener("mouseover", function() {
    text.style.color = "red";
});

//3.input event
let input = document.getElementById("inputBox");

input.addEventListener("input", function() {
    document.getElementById("output").innerText = input.value;
});


// scroll event
window.addEventListener("scroll", function() {
    console.log("Page is scrolling...");
});

//key events
//1.keydown event
document.addEventListener("keydown", function(event) {
    console.log("Key Down:", event.key);
});

//2. keyup event
document.addEventListener("keyup", function(event) {
    console.log("Key Up:", event.key);
});




//Event Delegation:
//it is technique where instead of adding event listeners to multiple child elements,we add one eventlistener to their parent element and handle events using event bubbling

// button deligation
document.getElementById("container").addEventListener("click", function(event){
    console.log("Clicked:", event.target.innerText);
});


//create dynamic elements

document.getElementById("addBtn").addEventListener("click", function(){
    let newButton = document.createElement("button")
    newButton.innerText = "new Button";
    document.getElementById("box").appendChild(newButton)
});
document.getElementById("box").addEventListener("click", function(event){
    console.log(event.target.innerText)
})


// to do application
document.getElementById("tasks").addEventListener("click", function(event){
    console.log("Task clicked:", event.target.innerText)
})




//Timer Functions:

//1.setTimeout():is used to execute a piece of code after a specified delay
//---> runs onces
//--->delayed execution
//---> used for one time tasks

// OTP

console.log("sending OTP....");
setTimeout(() => {
    console.log("OTP sent successfully")
}, 2000);


//notification

setTimeout(() =>{
    console.log("new Notification")
},4000)


//using name function

function greet(){
    console.log("welcome Sana")
}
setTimeout(greet,2000)


// passing parameters:
function greet(name){
    console.log("Hello "+ name);
}
setTimeout(greet, 2000, "sana")

//2.clearTimeout():to cancle setTimeout we use this

let timer = setTimeout(() => {
    console.log("this will not run");
},3000)

clearTimeout(timer);

// cancle order
let order = setTimeout(() =>{
    console.log("order confirmed")
},5000)
 clearTimeout(order);
 console.log("order cancelled");


 //multiple setTimeout()

 setTimeout(() =>{
    console.log("1 second");
 }, 1000);

 setTimeout(() =>{
    console.log("2 second");
 }, 2000);

 setTimeout(() =>{
    console.log("3 second");
 }, 3000);

 //3.setInterval()
//--->runs repeatedly
//---> repeated execution
//--->used for continuous task


let myTimer = setInterval(()=>{
    console.log("runs again and again")
},1000)

// to stop it

setTimeout(()=>{
    clearInterval(myTimer)
    console.log("stopped")
},5000)


//4.clearInterval(): stops repeating task


// countdown Timer
let count = 6
let timer2 = setInterval(()=>{
    
    count--;
    console.log(count);
    if(count === 0){
        clearInterval(timer2)
        console.log("time Up")
    }
},1000)

// stop clock

let clock = setInterval(()=>{
    let time = new Date();
    console.log(time.toLocaleTimeString())

},1000)
setTimeout(() => {
    clearInterval(clock)
    console.log("clocked stopped")
}, 2000);





// call back function: it is function that is passed as an argument to another function and is executed later after a task is completed

// example
function greet1(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayBye(){
    console.log("Good Bye!")
}
greet1("Sana", sayBye)

//callback with array method
let number=[1,2,3,4,5,6,7,8]
number.forEach(function(num){
    console.log(num * 2)
});

//callback wth setTimeout()

function displayMessage(){
    console.log("Welcome after 3 seconds")
}
setTimeout(displayMessage,3000)

//callback with API stimulator
function fetchData(callback){
    console.log("Fetching data....");

    setTimeout(() =>{
        callback()
    }, 2000);
}
function showData(){
    console.log("Data  received")
}
fetchData(showData)

//callback for calculator

function calculate(a, b, operation){
    return operation(a, b)
}
function add(x, y){
    return x + y;
}
console.log(calculate(100, 270, add));

// Data filtering

let products = [100,200,300,400,500,600]
let filtered = products.filter(function(price){
    return price > 200
})
console.log(filtered)

// games using callback

function startGame(callback){
    console.log("Game Started")
    setTimeout(() =>{
        
        callback();
    }, 4000);
}

function gameOver() {
    console.log("Game Over")
}
startGame(gameOver)



//Promises:
//A Promise in JavaScript is an object that represents the future result of an asynchronous operation.

// it is divided into 2 state like a pyramid
//1. pending : still working,result not ready
//2.resolve : for success and // it is used for .then(): waits until the promise is resolved and receives the results from the previous promise
//3.reject : for failure // it is use .catch(): if promise rejected or an error is occurs the control goes to  .catch()

// OTP verification
let verifyOTP = new Promise((resolve,reject) =>{
    let OTP = 8787;
    setTimeout(() =>{
        if (OTP === 8787){
            resolve("OTP Verified")
        }else{
            reject("Invalid OTP")
        }
    }, 2500)

})

verifyOTP
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

//cab booking app

let bookCab = new Promise((resolve,reject) =>{
    let driverAvailable = true;
    setTimeout(() =>{
        if (driverAvailable){
            resolve("Cab Arriving in 5 minutes")
        }else{
            reject("No Drivers Available")
        }
    }, 2500)

})

bookCab
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})


//email sending system
let sendEmail = new Promise((resolve,reject) =>{
    let serverconnected = false;
    setTimeout(() =>{
        if (serverconnected){
            resolve("Email sent successfully")
        }else{
            reject("Email sending failed")
        }
    }, 1500)

})

sendEmail
.then((responses) =>{
    console.log(responses)
})
.catch((err) =>{
    console.log(err)
})


//student course enrollment

let enrollCourse = new Promise((resolve,reject) =>{
    let seatsLeft = 5;
    setTimeout(() =>{
        if (seatsLeft){
            resolve("Enrollment successful")
        }else{
            reject("Course full")
        }
    }, 1500)

})

enrollCourse
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})
