// Closures in JavaScript

// A closure is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.


// Outer Function
//       ↓
// Creates variable
//       ↓
// Returns Inner Function
//       ↓
// Outer function finishes
//       ↓
// Inner function still remembers
// the outer variable


// example
function outer(){
    let message = "How Are YOU";

    function inner(){
        console.log(message)
    }
    return inner;
}

const myFunction = outer();
myFunction();


// Counter:
function createCounter(){
    let count = 0;

    return function (){
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();

counter();


//Shopping Cart

function createCart(){
    let cart = [];

    return{
        addItem: function(item){
            cart.push(item);
            console.log(item + " added");
        },

        showCart: function (){
            console.log("Cart:", cart)
        }
    };
}

const myCart = createCart();

myCart.addItem("Laptop");
myCart.addItem("Mouse");
myCart.showCart();

// login session

function createUserSession(username){
    return function(){
        console.log("welcome back, " + username);
    };
}

const userSession = createUserSession("Tasan");

userSession();


// multiplication

function createMultiplier(number){
    return function (value){
        return value * number;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(4);

console.log(double(5));
console.log(triple(8));

// setTimeOut

function startTimer(name){
    setTimeout(function(){
        console.log(name + " timer finished");
    }, 2000);
}

startTimer("Jasmine")


// with private variable

function createPassword(){
    let password = "abcd1234";

    return function(){
        console.log(password);
    };
}

const showPassword1 = createPassword();

showPassword1()


// var with loop

for (let i=1;i<=3; i++){
    setTimeout(function (){
        console.log(i);
    },1000)
}



// Why Do We Need Closures?

// Closures are useful when we want a function to remember some data.

// For example:

// Counters
// Private variables
// User settings
// Data persistence
// Function factories
// Event handlers
// API configuration
// React callbacks