// FUNCTION EXPRESSION: it is function that is stored inside a variable

//
const greet = function(){
    console.log("hello, world!")
}
greet()

// diff blw function declaration and expression

// function declaration can be called before it is created
// function expression cannot be called before creation

// login system
const login = function(){
    console.log("User logged in successfully")
}
login()

// function expression with parameters
const welcomeUser = function(name){
    console.log("welcome "+ name)
}
welcomeUser("Sana")

// with retuen value
const add = function(a, b){
    return a+b
}
console.log(add(39, 98))

// smart study reminder
const studyReminder = function(subject){
    console.log("time to study "+ subject)
}
studyReminder("JAVASCRIPT")

// password strength checker
const checkPassword = function(password){
    if(password.length >=9){
        console.log("strong password")
    } else{
        console.log("Weak password")
    }
}
checkPassword("my password")

// calculate online shopping discount
const calculateDiscount = function(price){
    return price * 0.9
}
console.log(calculateDiscount(2000))

// weather alert
const weatherAlert = function(temp){
    if(temp > 35){
        console.log("hot weather Alert")
    }else {
        console.log("weather Normal")
    }
}
weatherAlert(42)
weatherAlert(23)

// stores multiple functions
const  operation = {
    add:function(a,b){
        return a+b
    },
    multiply: function(a,b){
        return a * b
    }
}
console.log(operation.add(5, 3))
console.log(operation.multiply(5, 4))

// TYPES OF FUNCTION EXPRESSION:
//1.ANONYMOUS:a function without a name
const rait = function(){
    console.log("hello universe")
} 
rait()

//
const welcome = function(){
    console.log("welcome to our website")
}
welcome()


//2.NAMED: a function with a name assigned to a variable

const thod = function sayhello(){
    console.log("this is my house")
}
thod()

//
const login1 = function employeeLogin(){
    console.log("Employee Logged In")
}
login1()

//3.ARROW:short syntax introduced in ES6
const greet1 = () =>{
    console.log("visit warangal onces")
}
greet1()

//
const notification =() => {
    console.log("you have a new message")
}
notification();