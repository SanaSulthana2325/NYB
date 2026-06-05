// First Class Function: function thet can be used just like any other value (number,string,object,etc)
// includes:
//-->1.be assigned to a variable
//-->2.passed as an argument
//-->3.return from another function
//-->4.stored in array or objects


// 1. assign a funtion to a variable
function greet(){
    return "hello"
}
let sayHello = greet
console.log(sayHello())

//
function sendNumber(){
    return "number sent"

}
let notification = sendNumber
console.log(notification())

//2.pass a function as an argument
 function greet(name){
    return "Hello "+ name
 }
 function processUser(callback){
    console.log(callback("World"))
}
processUser(greet)

// 
function OrderPlaced(){
    return "Oder Confirmed"
}
function processOrder(callback){
    console.log(callback())
}
processOrder(OrderPlaced)

//3.Return a function from another function
function outer(){
    return function(){
        return "sana sulthana"
    }
}
let result = outer()
console.log(result())


//ex
function createGreeting(role){
    return function(){
        return"welcome" + role
    }
}
let AGreeting = createGreeting(" new HR")
console.log(AGreeting())

// 4. stores functions in an array
function add(a,b){
    return a +b
}
function multiply(a,b){
    return a * b
}
let opeartion = [add, multiply]

console.log(opeartion[1](5,3))

//stores functions in an object

let calculator = {
    add: function(a,b){
        return a+b
    },
    substract: function(a,b){
        return a - b
    }

}
console.log(calculator.add(10, 789))
console.log(calculator.substract(78,9087))


//combined example(Pass + Return)
function add(a, b){
    return a + b;
}
function getOperation(){
    return add;
}
let operation = getOperation();
console.log(operation(5,10));
console.log(operation(99,76))


// closure:remembers the variables from the place where it was created

//
function outer(){
    let message = "Tasan"
    function inner(){
        console.log(message)
    }
    return inner;
}
let result1 = outer()
result1()

//How It Works

//1. outer() executes.
//2. message is created.
//3. inner() is returned.
//4. Even after outer() finishes, inner() remembers message.

//This remembering behavior is called a Closure.


//example like button
function creatLikeButton(){
    let like = 0;
    return function(){
        like++;
        console.log("likes:", like);
    }
}
let like = creatLikeButton()
like()
like()
like()
like()


// without closure
let count = 0
function increment(){
    count++
    return count
}
console.log(count)

// here count is global can be modified by anyone

// with closure
function counter(){
    let count = 0;
    return function(){
        return ++count;
    };
}
let increment1 = counter();
console.log(increment1())
console.log(increment1())

// count is private


// Timers
function setReminder(message){
    setTimeout(function(){
        console.log(message)
    },2000)
}
setReminder("Attend the birthday party")


// event handlers
function createButton(){
    let clicks = 0
    return function(){
        clicks++;
        console.log("button clicked:", clicks)
    }
}
let buttonClicked = createButton();
buttonClicked();
buttonClicked()
buttonClicked()

