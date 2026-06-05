// IIFE:(immediately Invoked Function Expression)
//it is function that is created and executed immediately after it is defined
// syntax
(function (){
    console.log("I am sana sulthana")
}) ();

// why do we use IIFE?
//1. To execute cide Immediately
// 2. To create a private Scope
// 3. To avoid polluting the global namespace
// 4. To protect variable from being accessed outside

//welcome mesaage
(function () {
    console.log("welcome to Amazon")
}) ();


//user login check
(function(){
    let loggedIn = true

    if(loggedIn){
        console.log("user dashboard opened")
    }
})();


// protecting variables
// withoutIIFE
let count = 100
console.log(count);

//with IIFE
(function (){
    let count = 100;
    console.log(count);
}) ();


// with parameters
(function (name){
    console.log("Hello "+ name)
})("universe")


//returning values
let results = (function(){
    return 10 +59
})()
console.log(results)

// counter application
let counter = (function(){
    let count =0
    return {
        increment: function(){
            count++
            console.log(count)
        }
    };
})();
counter.increment();
counter.increment();
counter.increment();

//employee salary calculate
let salary = (function(){
    let basic = 24000
    let bonus = 5000

    return basic + bonus;
})();

console.log(salary);


//student result processing

(function(){
    let marks = [69,90,62,89,56,88];
    let total = marks.reduce((a,b) => a + b, 0)
    console.log("Total Marks:", total)
}) ();

//check even or Odd
(function(num){
    if (num % 2 === 0){
        console.log(num +" is even")
    } else{
        console.log(num + " is odd")
    }
})(9);

//combined IIFE
(function(length, width, num){
    let area = length * width
    console.log("Area =", area)

    console.log(num % 2===0 ? "even" : "odd")

    let factorial = 1;
    for(let i =1; i <=num; i++){
        factorial *=i
    }
    console.log("Factorial =", factorial)
})( 10,5,5);


//
