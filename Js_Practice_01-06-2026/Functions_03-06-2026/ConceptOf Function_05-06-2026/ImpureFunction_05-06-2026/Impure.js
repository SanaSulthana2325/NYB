// IMPURE FUNCTION: we cant able to guess the output 
// it can vary
//also has side effects
//may produce different outputs even when given the same input


//
let bonus = 1000
function calcualteSalary(salary){
    return salary + bonus
}
console.log(calcualteSalary(20000))

// external variable
let count = 0
function increment(){
    count++
}
increment()
increment()
 console.log(count)


 //
 let visitor = 0
 function visitWebsite(){
    visitor++
 }
 visitWebsite()
 visitWebsite()
 console.log(visitor)

 // 
 let likes = 0
 function addLike(){
    likes++
 }
 addLike()
 addLike()
 addLike()
 console.log(likes)

 //
 let lightOn = false
 function toggleLight(){
    lightOn = !lightOn
 }
 toggleLight()
 console.log(lightOn)

 //
 let views = 100
 function watchVideo(){
    views++
 }
 watchVideo()
 watchVideo()
 console.log(views)

 //
 function getCurrentTime(){
    return new Date().getSeconds()
 }
 console.log(getCurrentTime())


 // comparing pure and impure function

 
 // impure function

 let gstRate = 0.18

 function calculateGST(amount){
    return amount * gstRate;
 }
 
 console.log(calculateGST(1300))

 // pure
 function calculateGST(amount){
    return amount * 0.18
 }
 console.log(calculateGST(1300))


 // shopping cart
 //pure
 function calculateTotal(price1, price2){
    return price1 + price2;
 }
 console.log(calculateTotal(500, 1000))


 // impure 
 let cartTotal = 0
 function addToCart(price){
    cartTotal += price
 }
 addToCart(500)
 addToCart(1000)

 console.log(cartTotal)

 