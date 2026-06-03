//Arguments:they are the actual values that are pass to a function when u call it

//
function withdraw(amount){
    console.log("you withdrew ₹" + amount)
}
withdraw(1000)


//food delivery
function orderFood(item){
    console.log("Order placed for " + item)
}
orderFood("Pizza")
orderFood("Burger")

//
function square(num){
    console.log(num * num)
}
square(8)
square(90)


// we can pass objects and arrays

function showStudent(student){
    console.log(student.name)
}
showStudent({name:"sana",age:"22"})

//types of arguments
//1. single argument
function greet(name){
    console.log(name)
}
greet("tasleem")


//2. multiple argument
function details(name, age, place){


console.log(name, age,place)
}
details("sam", 44, "warangal")



//3.no argument
function greet(){
    console.log("hello world")
}
greet()

//
function makeTea(type){
    console.log(type + " tea Ready")
}
makeTea("masala")
makeTea("ginger")
makeTea("green")