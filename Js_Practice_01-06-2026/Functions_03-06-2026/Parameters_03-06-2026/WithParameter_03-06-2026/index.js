// Functions: function is block of reusable code that performs a specific task

//
function Greet(){
    console.log("hello, Welcome!")

}
Greet()
Greet()

// with parameter: a function that takes input values so it can work dynamically

// syntax
//function functionName(parameter1,parameter2){
// }//

function greet1(name){
    console.log("hello "+ name)
}
greet1("ajay")
greet1("vijay")

//calculator(addition)
function add(a,b){
    console.log("sum =", a+b)
}
add(78,34)
add(56,88)


//ATM withdrawal
function withdraw(balance, amount){
    if(amount <= balance){
        console.log("Withdraw Successful")
        console.log("Remaining:", balance - amount)
    } else {
        console.log("Insufficient Balance")
    }
}
withdraw(5000, 2000)
withdraw(7000,5000)
withdraw(8000,9000)


// shopping bill calculation
function total(price,quantity){
    console.log("Total Bill =",price * quantity)
}
total(90,9)
total(110.8)

//students marks results
function result(name, marks){
     if(marks >= 35){
        console.log(name+" passed")

     }  else{
        console.log(name +" Failed")
     }
    
}
result("sana", 90)
result("nashu", 33)

// square roots
function square(num){
    console.log(num * num)
}
square(4)
square(90)

