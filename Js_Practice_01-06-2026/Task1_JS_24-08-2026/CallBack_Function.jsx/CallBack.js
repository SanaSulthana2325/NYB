function greet(name){
    console.log("Hello " + name)
}

function processUser(callback){
    callback("Nashu")
}

processUser(greet);


// Button click

function login(){
    console.log("User Logged In");
}

const button = document.getElementById("loginBtn");

button.addEventListener("click", login);

// with setTimeout

setTimeout(function(){
    console.log("2 seconds completed")
},5000)
// setTimeout() receives the function and executes it later.


// example of foof delivery

function orderFood(callback){
    console.log("Food ordered...");

    setTimeout(()=>{
        console.log("Food is Ready!!");
        callback();
    }, 2000)
}

function deliverFood(){
    console.log("Food Delivered!!");
}

orderFood(deliverFood);



// With Array

let students = ["AAA","BBB","CCC"];

students.forEach(function(student){
    console.log(student);

});

//forEach() is a JavaScript array method used to go through each item in an array and perform an action.

let fruits = ["Apple", "Mango","Banana","Orange"];

fruits.forEach(function(fruit){
    console.log(fruit);
});

// with map()

const prices = [100,200,300,400];

const newPrices = prices.map(function(price){
    return price + 10;
});

console.log(newPrices)

//
let marks = [20,70,50,60,40];
let newMarks = marks.map(function(mark){
    return mark + 20;
});
console.log(newMarks)

// wit filter
const prices1 = [200,700,300,600,900];
const expensive = prices1.filter(function(price1){
    return price1 > 500;
});
console.log(expensive);

//

const marks1 = [20,30,60,70 ,90,89,32,10,35];
const expensive1 = marks1.filter(function(mark1){
    return mark1 > 35;
})

console.log(expensive1)


// Payment

function makePayment(callback){
    console.log("         Processing Payment ");
    
    setTimeout(()=>{
        console.log("            Payment successful!");
        callback();
    },2000);
}

function placeholder(){
    console.log("          Order Placed successfully!")
}

makePayment(placeholder)

// with Arrow function
function processUser(callback){
    callback("Tasan");
}

processUser((name) =>{
    console.log("Welcome " + name);
});





// | Normal Function           | Callback Function                                |
// | ------------------------- | ------------------------------------------------ |
// | Can be called directly    | Passed to another function                       |
// | `greet()`                 | `process(greet)`                                 |
// | We decide when to call it | Another function decides when to call it         |
// | Used for general tasks    | Often used for events, async tasks, arrays, etc. |


// The main difference is:

// forEach() → performs an action on each item.
// map() → creates and returns a new array.

// Easy way to remember

// Function passed to another function = Callback function.

//           callback
//              ↓
// function A(callback) {
//     callback();
// }
//        ↑
//        |
//     function B

// A(B)

// So, B is the callback function because B is passed to A and A decides when to execute it.