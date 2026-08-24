// Higher-Order Function (HOF)

// A Higher-Order Function is a function that does at least one of these things:

// Takes another function as an argument, or
// Returns another function.


// Simple definition

// A function that works with another function is called a Higher-Order Function.

// Higher-Order Function
//         ↓
// accepts a function
//         ↓
// Callback Function


// example

function process(callback){   //Hoc
    callback();
}
function greet(){    // Callback function
    console.log("Hello!");
}

process(greet);

// example2

function calculate(a, b, operation){
    return operation(a, b);
}

function add(x, y){
    return x + y;
}

console.log(calculate(20,60,add));

// with Arrow function

function calculate(a, b, operation){
    return operation(a,b);
}

const result = calculate(50,30, (x, y) => x * y);

console.log(result);

//forEach

const names = ["Minnu","Lulu","Lusi","Rahul"]

names.forEach(function(name){
    console.log("hello " + name);
});

// map()

const prices = [200,300,400,500,600];

const updatedPrices = prices.map(function(price){
    return price + 60;
});

console.log(updatedPrices)

//filter

let prices1 = [200,700, 400, 900, 300, 500];

const expensiveProducts2 = prices1.filter(function(price){
    return price > 400;
});

console.log(expensiveProducts2);

//reduce

const prices2 = [100,800,300,200]

const total = prices2.reduce(function(sum,price2){
    return sum + price2
}, 0);

console.log(total);

//

function createGreeting(message){
    return function(name){
        console.log(message + ", " + name);
    };
}

const greet1 = createGreeting("Welcome");

greet1("Sana");
greet1("Rahul");

// real example of food

function processOrder(order, callback){
    console.log("Processing order for " + order);

    setTimeout(function(){
        console.log("Order is Ready!");
        callback();
    }, 1000);
}

function deliverOrder(){
    console.log("Delivered person assigned.");
}

processOrder("Pizza", deliverOrder);


//Login System

function login(username, callback){
    console.log("checking username....");

    setTimeout(function(){
        console.log("Login Successful");

        callback(username);
    }, 2000)
}

function showDashboard(username){
    console.log("welcome to dashboard, " + username)
}

login("mira", showDashboard);


//
const num = [1,2,3,4,5,6,7,8,9];

console.log(num.map(n => n * 2));
console.log(num.filter(n => n > 2));
console.log(num.reduce((sum,n) => sum + n, 0));
console.log(num.find(n => n >2));
console.log(num.some(n => n > 5));
console.log(num.every(n => n > 0));
console.log(num.sort((a,b) => b-a));






