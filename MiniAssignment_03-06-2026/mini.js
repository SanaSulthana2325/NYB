// MINI ASSIGNMENT:
// loops:it is used to repeat a block of code for a multiple until a condition is met
//initialization(i):runs only onces at the beginning
//condition:if true:loop runs
//          if false:loop stops
// update: i++ increase i by 1

//1. for loop: used when u know how many the loop should run


for (let i =1; i <= 6; i++){
    console.log("hello")

}

//
for(let i = 1; i <= 5; i++){
    console.log(i)
}

//2. While loop: used to execute a block of code repeatedly as long as a condition remains true
// iteration: one execution or one repetition for a loop

let i = 1
while(i <=6){
    console.log(i)
    i++
}

// ATM pin attempts
let attemps = 1
while(attemps <=3){
    console.log("enter pin")
    attemps++
}

//3. do while:executes the code atleast once even if the condition is false

let Y =1
do{
    console.log(Y)
    Y++
}while(Y <=8)

//

let choice = 0
do{
    console.log("welcome to world")
}
while( choice !== 0)

// 4.for-in loop:iterate over keys properties and object
//mainly used with:
// objects
// arrays

//
let student ={
    name:"sana",
    age:23,
    course:"html"
}
for (let key in student){
    console.log(key,":",student[key])
}

// count object properties
let employee ={
    name:"vijay",
    age:66,
    city:"warangal"
}

//5. for of loop:used to iterate over the vaules of iterablr objects such as:
//array
// string
// maps
// sets
//  it directly gives value of each element

//for array
let colors = ["green","blue","red","orange","yellow"]
for(let color of colors){
    console.log(color)
}

// string 
let name ="sulthana"
for (let letter of name){
    console.log(letter)
}

//6. infinite loop: a loop that never stops executing because its condition is always remains true

let E = 1
while(E < 50){
    console.log(E)
    E++
}

let input;

do{
    input = "admin";
} while (input !== "admin");
console.log(input)

// BREAK STATEMENT
console.log("Break Example");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}


// CONTINUE STATEMENT:
console.log("Continue Example");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

//FUNCTIONS:
// Functions: function is block of reusable code that performs a specific task

//
function Greet(){
    console.log("hello, Welcome!")

}
Greet()
Greet()

// 1.with parameter: a function that takes input values so it can work dynamically

// syntax
//function functionName(parameter1,parameter2){
// }//

function greet1(name){
    console.log("hello "+ name)
}
greet1("ajay")
greet1("vijay")

//2.Without -parameter: a function that does not take any input. it works with fixed values
//syntax
// function functionName(){
// }//
//
function greet(){
    console.log("Hello Student!")
}
greet()

//display todays offer
function offer(){
    console.log("50% discount on all courses")
}
offer()

//3. Default parameter: is a parameter that has a default value assigned to it

//
function greet1(name="guest"){
    console.log("hello "+ name)
}
greet1()  // no argument is passed
greet("Anil")  // argument is passed


//employee salary
function employee1(name, salary = 20000){
    console.log(name + " salary:" + salary)
}
employee1("Rehman")
employee1("Goni",30000)

//4. Rest Parameter:  allow function to accept any number of arhument and store them in a real array

//
function showNumber(...number){
    console.log(number)
}
showNumber(20,56,47,84,97,90)

// Pros of rest parameter
// Real array
// Works with array method
// Easier to read
// works with arrow function

// calculate average
function average(...marks){
    let total = 0
    for(let mark of marks){
        total += mark
    }
    console.log(total / marks.length)
}
average(80,90,67,54,32,23,21)

//Arguments:they are the actual values that are pass to a function when u call it
//2. multiple argument
function details(name, age, place){


console.log(name, age,place)
}
details("sam", 44, "warangal")

// argument object: it is a special object available inside every regular function
//it contain all the values(arguments)passed tonthat function when it is called

//
function showArguments(){
    console.log(arguments)
}
showArguments("sana", 23, "HTML")

//why we use argument object: it allows a function to accept any number of arguments without defining parameters


// attendance system
function attendance(){
    console.log("students present:", arguments.length)
}
attendance("aaa","bbb", "ccc","dddd","rrr")
