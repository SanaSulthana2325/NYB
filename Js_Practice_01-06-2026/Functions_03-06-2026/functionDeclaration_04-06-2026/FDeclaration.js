// FUNCTION DECLARATION: it is a way to create a function using the function keyword. it defines a reusable block of code that can be called whenever needed

// syntax
function functionName(){

}

//
function greet(){
    console.log("hello,welcome")
}
greet()


// ATM check:
function checkBalance(){
    console.log("your account balance is ₹10000")
}
checkBalance()

//employee attendance
function markAttendance(){
    console.log("Attendance marked successfully")
}
markAttendance()

// we can reuse code

function welcomeMessage(){
    console.log("welcome to the world")
}
welcomeMessage()
welcomeMessage()

//perform calculations

function calculateTotal(){
    let total = 100 + 900
    console.log(total)
}
calculateTotal()

// 
function loginSuccess(){
    console.log("login Successful")
}
loginSuccess()

// function declaration with parameters
function greetUser(name){
    console.log("hello "+ name)
}
greetUser("Afsa")

//with return value
function add(a,b){
    return a+b
}
let result = add(10,89)
console.log(result)

// execution flow
function first(){
    console.log("step-1")
}
function second(){
    console.log("step-2")
}
first()
second()

// key points
//* Uses the function keyword.
//* Can be called multiple times.
//* Helps avoid code repetition.
//* Can accept parameters.
//* Can return values.
//* Supports hoisting.
//* Commonly used in websites, banking apps, shopping apps, attendance systems, and calculators.//