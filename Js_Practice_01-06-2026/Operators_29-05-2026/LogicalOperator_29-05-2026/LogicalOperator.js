//Logical operator:used to combine two or more condition in js
// they return: true and false
//
// include:
//a.logical AND(&&): returns true only when botn conditions are true

// ex of AND

console.log((2<4) &&(8>4))
let age = 20
let hasID = true

if (age >= 18 && hasID) {
    console.log("can enter club")

} else{
    console.log("denied")
}

//
console.log((8<10) && (90>20))

//b. OR operator(||): returns true atleast one condition is true

console.log((6<2)||(5>3))
//
let a = false
let b = true
if (a || b) {
    console.log("you can take rest")
} else {
    console.log("go to work")
}
//OR
console.log((2<4) ||(2>4))

//c. NOT Operator(!): true become false and false becomes true
let c = true
if (!c){
    console.log("please get in")
} else {
    console.log("welcome")
}

//
let c1 = false
if (!c1){
    console.log("please get in")
} else {
    console.log("welcome")
}


//NOT
console.log(!(2<4))

console.log(!(4>6))
console.log(!(80>30))


// ex
let age2 = 22
let Y= true

console.log(age2 >= 18 && Y)
console.log(age2 < 18 || Y)
console.log(Y)
