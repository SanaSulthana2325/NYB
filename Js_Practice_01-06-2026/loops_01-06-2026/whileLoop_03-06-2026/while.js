//2. While loop: used to execute a block of code repeatedly as long as a condition remains true
// iteration: one execution or one repetition for a loop

let i = 1
while(i <=6){
    console.log(i)
    i++
}

// ATM pin attempts
let attemps = 1
while(attemps <=3){
    console.log("enter pin")
    attemps++
}

//
let j = 1
while(j <=5){
    console.log(j)
    j++
}

// countdown timer
let count = 10
while(count > 0){
    console.log(count)
    count--
}
console.log("time's  Up!")

//reading array element
let fruits = ["apple","mango","Banana"]
let h = 0
while(h < fruits.length){
    console.log(fruits[h])
    h++
}

//password retry
let attempts = 1
while(attempts <= 3){
    console.log("try password again")
    attempts++
}

//number printing 1-100
let r = 1
while(r <=100){
    console.log(r)
    r++
}

// multiplication table of 9

let num = 6
let g = 1
while(g <= 10){
    console.log(num +"x"+g+"="+(num * g))
    g++
}

// sum of numbers
let t = 1
let sum = 9
while( t <= 5){
    sum +=t
    t++
}
console.log("sum =",sum)

//reverse number
let num1 = 108967543
let reverse = 0
while(num1 > 0){
    let digit = num1 % 10
    reverse = reverse * 10 + digit
    num1 = Math.floor(num1/10)
}
console.log("Reversed Number =",reverse)

//guess the number
let secretNumber = 7
let Guess = 3
while (Guess !== secretNumber){
    console.log("wrong Guess")
    Guess = 7
}
console.log("correct Guess")

// use cases:
//login pattern
// ATM pin validation
// User input validation
// Menu-driven programs
