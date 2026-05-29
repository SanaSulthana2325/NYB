console.log("hello this is js file")
//variables:used to store the data so that we can use that for future use
// by using variables we can store data types
 // data types has the value

 //2 types of data types:
//1) primitive : single value in single memory location
//2. non -primitive: multiple values in single memory location

//
//VAR declaration method: the var keyword is the old way of declaring variables in js.
var name="sonu"
console.log(name)
//usage: 
//1.used to declare variables
//2.value can be changed later
//3. Can be redeclared

//let declaration Method: the let keyword was introduced in ECMA script(ES6). it is the moder and recommended way to declare variables when values may change later.

let name1="sana"
console.log(name1)

//
let a=10
let b=30
let sum=a+b
console.log(sum)

//
let studentName="tasan"
let marks=99
console.log(studentName)
console.log(marks)
//
let user="tasleem"
console.log("welcome to the world "+ user)

//
let currentYear=2026
let age=23
let birthYear=currentYear-age
console.log(birthYear)

// even or odd
let number=8
if(number%2===0){
    console.log("even")
}else{
    console.log("odd")
}
// usage:
//1.value can be updated
//2.Cannot be redeclared in the same scope

// const Declaration Method:the const keyword is used to declare constant variables.once a value is assigned it cannot be changed later

//using const
const country="India"
console.log(country)

//
const user1="mazhar"

console.log(user1+ "is good dad")

// usage:
//1.used for fixed values
//2.value cannot be reassigned

// console and its uses:
//1.prints and debug values:
let name2 = "tasan"
let age1=21 
console.log("name2:",name2)
console.log("age1 is",age)

//2.console.error: shows error in red
console.error("something went wrong!")

//3.console.warn(): shows warning in yellow
console.warn("this feature deducted")

//4.console.table: display data in table format
let student=[
{name3:"anu", marks:87},
{name3:"Raj", marks:99}
]
console.table(student)

// 5. console.clear(): clear all console output


