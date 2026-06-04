// scope:where can i access this variable?
//1. global scope:A variable declare outside all functions and blocks

let name = "sulthana"
function greet(){
    console.log(name)
}
greet()
console.log(name)

//ex
const companyName = "ABC Technologies"
function employeePortal(){
    console.log(companyName)
}
employeePortal()

//2. functional scope:varaible declare inside a function can only be used inside that function
function student(){
    let marks = 95
    console.log(marks)

}
student()
//console.log(marks) // ER because the console id accessible inside the function

// ex
function login(){
    let password ="234567"
    console.log(password)
}
login()

//3.Block scope: declare with let and const inside{} are only aviable inside that block
 //--> var cannot be declare in block scope
 if(true){
    let city = "Hyderabad"
    console.log(city)
 }
 
 //ex
 if(true){
    const otp = 456788
    console.log(otp)
 }
 //console.log(otp) refernce error

 // var and block scope

 if(true){
    var age = 25
 }
 console.log(age)


 // global + function scope
 let country = "India"
 function displayCountry(){
    console.log(country)
 }
 displayCountry()

 // function can access global variable


 //Block inside function

 function go(){
    if(true){
        let score = 100
        console.log(score)
    }
    //console.log(score) // shows reference error// because functional scope does not break block scope
 }
 go()

 // function with var
 function demo(){
    if(true){
        var score = 1111
    }
    console.log(score)
 }
 demo()

 // because var ignors block scopes but accept functional scope

 // 
 let a = 20
 function test(){
    console.log(a)
 } 
 test()

 //
 function test(){
    let b = 90

 }
 test()
 //console.log(b) // reference error
 // cannot access them outside

 //
 if(true){
    const c = 40
 }
 //console.log(c) // RE
 // const is blocked scope cannot access outside the block

 if(true){
    var d = 400
 }
 console.log(d)

 //
 let name1 = "global"
 function gat(){
    let name1 = "local"
    console.log(name1)
 }
 gat()
 console.log(name1)


 // 4. lexical scope(nested scope): an inner function can access variable from its outer function
 
 function outer(){
    let name = "Ellu"
    function inner(){
        console.log(name)
    }
    inner()
 }
 outer()
 // where inner function can access outer variable


 // ex
 function company(){
    let companyName = "SANA ltd"
    function employee(){
        console.log(companyName)
    }
    employee()
 }

 // scope chain
 let country1 = "India"
 function state(){
    let stateName = "Andhra Pradesh"
    function city(){
        console.log(country1)
        console.log(stateName)
    }
    city()
 }
 state()

 // Module scope: exist Inside the module file only

 //
 const pi = 6.90
 function add(a,b){
    return a + b
 }
 console.log(pi)

//
 const password = "567890"
 const username = "Sana"

 console.log(username)
 console.log(password)

 