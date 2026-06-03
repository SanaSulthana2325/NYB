//conditional statemnet: b using conditions we execute code
// which include:
//a) if conditiona: it executes a block of code if condition is true.

let age = 20

if (age >= 18) {
    console.log("you are eligible to vote")
      
}

// ATM Withdrawal
let balance = 5000
let withdrawAmount = 2000

if (withdrawAmount <= balance){
    console.log("withdrawal Successful")
}

// website login:
let login = true
if(login){
    console.log("welcome to website")
}

// student pass check
let marks = 60
if (marks >=35){
    console.log("student passed")
}

//
let orderanount = 1200
if (orderanount >=1000){
    console.log("eligible for free delivery")
}

//
let battery = 10
if(battery < 20){
    console.log("plz charge your phone")
}

//
let feepaid = true
if (feepaid ){
    console.log("you can attened the exam")
}

//
let trainticket = true
if(trainticket){
    console.log("ticket confirmed")
}

//truthy values:any value that is not falsy is considered as truthly
//which includes
// true
// 1(nonzero number)
// -5(negative numbers too)
// "hello"
// "0" (string with number)
// array[]
// object{}
// function() {}

// string
let username = "sulthana"
if(username){
    console.log("user found")
}

//array
let number = []
if(number){
    console.log("array exist")
}

//number
let amount = 100
if (amount){
    console.log("amount exist")
}

//true
if(true){
    console.log("executed")
}

// object
if({}){
    console.log("truthly")
}
//ex
let user = {}
if(user){
    console.log("user object exist")
}



//falsy values:it is value that js automatically treats as false
// false
// number zero
// negetive zero(-0)
// bigInt(0n)
// empty string("")
// null(empty value)
// undefined(variable not set)
// NaN(not a number)
// if we put any of these in if(),it acts as false


//
let name = ""
if (name){
    console.log("name is available")
}else{
    console.log("name is empty")
}

//
let amount1 = 0
if (amount1) {
    console.log("amount exist")
}else{
    console.log("no amount")
}

//
let user1 = null

if (user1){
    console.log("user found")
}else{
    console.log("no user found")
}

//false
let login1 = false
if (login1){
    console.log("welcome")
}else{
    console.log("please login")
}

//negative
let num = -0
if(num){
    console.log("truthy")
}else{
    console.log("falsy")
}
//
let x=null
console.log(x)

//undefined(variable exist but no value has been assigned)

let d
console.log(d)

//NaN: occurs when mathematical operations fails
let result = Number("hello")
console.log(result)