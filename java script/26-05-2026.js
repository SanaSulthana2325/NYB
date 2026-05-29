// task:1 practice form validation using js
function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (name === "") {
        alert("Name cannot be empty");
        console.error("Validation failed: name missing")
        return false;
    }

    if(email ==="" || ! 
     email.includes("@")){
        alert("Enter valid email");
        console.warn("Invalid email format")
        return false;
    }

    if(password.length < 6){
        alert("password must contain atleast 6 characters")
        return false;
    }
    console.log("Form Submitted Successfully!",{name,email});
    alert("Registration successfull!");
    return true;
}

// ex
function validateForm(){
    let phonenumber = document.getElementById("phonenumber").value;
    let age  = document.getElementById("age").value;
    if(phonenumber.length < 10){
        alert("phone number maust contain atleat 10 numbers");
        return false;
    }
    if (age ===""|| isNaN(age) || Number(age) < 18){
        alert("age must be greater than 18")
        console.error("validation failed: age incorrect")
        return false;
    
    }
    console.log("form reset",{phonenumber,age});
    alert("form reset");
    return true;
    console.log("form submitted",{phonenumber,age});
    alert("form submitted successfully")
    return true;
}


// task-2 Implement input field validations:
// inputfield validation is used to check whether te user entered correct data in a form before submitting it.
// it improves user experience and prevents invalid data.

// Types Of Validations:
//1.Required field validation
//2.Minimum amd maximum length Validation
//3.Email format validation
//4. password validation
//5.Number-only validation

// creating sample programms using diff variables types
// using var:
var studentName = "sana"
var age = 21
console.log("student Name:", studentName )
console.log("age:", age)

// Using let:
let city = "hyd"
city = "wgl"
console.log("city:", city)

// using const:
const country = "India"
console.log("country:", country)

// diff b/w var,let,const
var a = 10
let b = 90
const c = 70
a=100
b=200
//c=300 const cannot br changed

console.log(a)
console.log(b)
console.log(c)


// ex
var course = "javaScript"
let duration = "3 months"
const institution = "code academy"

console .log("course:", course)
console .log("duration:", duration)
console .log("institution:", institution)

//task-4 understand variable scope and usage
// variable scope means where a variable can be assessed in a program

//1.Global scope: A variable is delared outside all functions and block is called global variable

let name1 ="sana"
function showName(){
    console.log(name1)
}
showName()
console.log(name1)

//2.function scope: Variable declare using var inside a function can only be used inside that function

function studentDetails(){
    var age = 23
    console.log(age)
}
studentDetails()
//console.log(age1)

//3.block scope
{
var x = 10
let y = 5
const z = 40

console.log(x)
console.log(y)
console.log(z)
}
console.log(x)
//console.log(y)
//console.log(z)

// var works outside the block and let and const works inside the block

//task-5 understand js storage patterns
// js storage patterns are used to store data temporarily or permanently in the browser
//main storage patterns in js are:

//1.variable storage: variables store data temporarily while the program runs
let username = "sana"
console.log(username)

//2. Local storage: stores data permanently in the browser until manually removed

// store date
let data = localStorage.getItem("name","tasan")
console.log(data)
localStorage.removeItem("name")
localStorage.clear()

//3.session storage: stores data only until browser tab is closed
let city1 = sessionStorage.getItem("city1", "hyd")
console.log(city1)

//4.cookies: stores small amount data in browser

document.cookie = "username=Sana"
console.log(document.cookie)

