// var:
//old way of declaring variables
// can br redeclared
// can be reassigned
// function-scoped


//1.redeclare
var name = "sulthana"
var name = "john"
console.log(name)

//attendance sheet
var currentUser = "Guest"
currentUser = "sana"
console.log(currentUser)




// let
//Introduced in ES6
// cannot be redeclared in the same scope
// can be reassigned
// Block scope

// reassignment
let age = 50
age = 32
console.log(age)

//
//let age = 50
//let age = 32

// back account balance

let balance = 1000
balance = balance + 500
console.log(balance)



//3.CONST
//cannot be redeclare
// cannot be reassigned
// block-scoped
// value remains constant


const pi = 4.56
console.log(pi)

//reassignment error
//const pi = 3.14
//pin= 456.89

//
const companyName = "google"
console.log(companyName)

// var vs let
 if(true){
    var x = 10
    let y = 20
 }
 console.log(x)
 //console.log(y) it shows reference error

 // because var ignore block boundaries

if (true){
    var classTeacher = "Ravi"
    let classMonitor = "Raju"
}
console.log(classTeacher)
//console.log(classMonitor) // shows reference error

//example with loop
for(var i =1; i <=3; i++){
    setTimeout(() =>{
        console.log(i)
    },2000)
}
// here var share ame variable 

//
for(let i =1; i <=3; i++){
    setTimeout(() =>{
        console.log(i)
    },2000)
}
// here each iteration gets its own copy of i

//                         var               let                 const
// declare                  yes              yes                  yes
//Redeclare                 yes              no                  no
// assign                   yes              yes                 yes
//Reassigned                yes              yes                 no
//scope                     function         block              block
//initilization              yes             yes                 no
//reinitialization           yes              no                  no
// hoisting                  yes             yes                yes
                       // o/p:undefined      reference error    rf


const country = "India"
let score = 50
var level = 1

score = 75
level = 2

console.log(country)
console.log(score)
console.log(level)


// comparing with block scope

// for var
if (true) {
    var city = "hyderabad"
}
console.log(city)

//let
//if (true) {
  //  let city = "hyderabad"
//}
//console.log(city)

// const

//if (true) {
  //  const city = "hyderabad"
//}
//console.log(city)

var passed = true
//const passed = false
let marks = "hai"
console.log(marks)

// Hoisting: moving declaration to the top of their scope before  execution
// means: Imagine a classroom attendance sheet.

//Before the teacher starts the class, the school already knows the names of all students.

//Similarly, before JavaScript executes your code, it first scans and registers variables and functions.

//This process is called hoisting.

// javascript works with two phases
//1. memory phase

// javascript allocates memory

//2. execution phase

// hosting with var
console.log(a)
var a = 10 // shows error or undefined

//hoisting with let
//console.log(age1)
//let age1 = 25 // shows reference error

//because let is hoisted but it stays inside (temporal dead Zone) until initialization


// hoisting with const
 //console.log(g)
 //const g = 5.789// shows reference error

// function hoisting
greet()

function greet(){
    console.log("Hello")
}


// calling manager
function callManager(){
    console.log("calling manager....")
}
callManager()


// ex
console.log(o)
var o = 100
console.log(o)


//
hello()
function hello(){
    console.log("welcome")
}


// var--> hoised with undefined
// let & const--> hoisted but in TDZ
// function declaration--> completely hoisted
//function exoression(var)--> undefined --> shows typr error
// function repression (let)-->TDZ-->reference error
//Arrow function (var)--> undefined--> type error
//Arrow function (let)--> TDZ--> reference error

//
//console.log(d)
//let d = 10
//const z = 20

//
// initialization(it will display)
 const place ="warangal" 
 console.log(place)

// reinitailizaton (it will not display shows type error)
//const from ="hyd"
//from = "BLR"
//console.log(from)

//assignment 
// reassignment: challenging the value of existing variable

let name1 ="tasan"
name1 = "sana"
console.log(name1)

// var with assignment and reassignment
var city6="hyd"
console.log(city)

// 
var city6="hyd"
city6="Bangalore"
console.log(city6)

// assignment and reassignment is allowed var


//let
// assignment
let score1=90
console.log(score1)
// reassignment
let score2 = 90
score2 = 34
console.log(score2)

//assignment and reassignment is allowed let

// const
//assignment- allowed
const f=5.98
console.log(f)
//reassignment: mot allowed showes typr error

//const y =5.98
//y=890.98
//console.log(y)

// Npattern
let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {

        if (j === 0 || j === n - 1 || i === j) {
            row += "$";
        } else {
            row += " ";
        }
    }

    console.log(row);
}

//
let m = 7;

for (let i = 0; i < m; i++) {
    let row = "";

    for (let j = 0; j < m; j++) {

        if (j === 0 || j === m - 1 || i === j) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}