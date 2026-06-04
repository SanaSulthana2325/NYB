// Default parameter: is a parameter that has a default value assigned to it

// practice with null and undefined values
function greet1(name="guest"){
    console.log("hello "+ name)
}
greet1()  // no argument is passed
greet("Anil")  // argument is passed


//user registration
function registerUser(username = "New User"){
    console.log("Welcome "+ username)
}
registerUser()
registerUser("Aly")

// shopping cart
function addtocart(product, quantity = 1){
    console.log(product +" quantity:" + quantity)
}
addtocart("laptop")
addtocart("mobile",3)

//employee salary
function employee(name, salary = 20000){
    console.log(name + " salary:" + salary)
}
employee("Rehman")
employee("Goni",30000)


//avoid undefined values

function greet(name = "sana"){
    console.log(name)
}
greet()

//exponents

function power(number, exponent = 2){
    console.log(number ** exponent)
}
power(5)
power(125)
power(5, 55)

// create reusable utilityfunction

function calculatetax(amount, taxRate = 10){
    console.log("Tax=", amount * taxRate/ 100)
}

calculatetax(100000)
calculatetax(4999000)
calculatetax(1000, 18)



