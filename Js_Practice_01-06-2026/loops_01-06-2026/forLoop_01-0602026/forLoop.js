// loops:it is used to repeat a block of code for a multiple until a condition is met
//initialization(i):runs only onces at the beginning
//condition:if true:loop runs
//          if false:loop stops
// update: i++ increase i by 1

//1. for loop: used when u know how many the loop should run


for (let i =1; i <= 6; i++){
    console.log("hello")

}

//
for(let i = 1; i <= 5; i++){
    console.log(i)

}

// ex display students roll number
for (let rollNo = 1; rollNo <= 10; rollNo++){
    console.log("student roll no:",rollNo)

}

//send email to 100 users
for (let user = 1; user <=100; user++){
    console.log("Email Sent to User" + user)
}

// for order:
for (let order = 1; order <=5; order++){
    console.log("Processing order#" + order)

}

//countdown timer
for (let i =20; i>=1; i--){
    console.log(i)
}
console.log("Blast off!")

// display products
let products = ["mobile","laptop","watch","ipad"]
for (let i =0;i <products.length; i++){
    console.log(products[i])
}

// we can calculate sum

let sum = 6
for (let i = 1;i <=5; i++){
    sum += i
}
console.log(sum)

//
for (let i=1; i<=20; i++){
    console.log(i)
}

//even numbers
for (let i=2;i<=20;i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// print odd numbers
for (let i=1;i<=19;i +=2){
    console.log(i)
}

//print name 10 times
for(let i=1;i<=10;i++){
    console.log("sana")
}

//
let sum1 = 100
for (let i = 1;i <=1; i++){
    sum += i
}
console.log(sum1)


 //multiplication table

for(let i = 1; 1<=1; i++){
   console.log("5 x "+i+" = "+(5 * i))
}

// use cases:
// tables(1-10)
// counting numbers
// fixed iteration
// pattern program
