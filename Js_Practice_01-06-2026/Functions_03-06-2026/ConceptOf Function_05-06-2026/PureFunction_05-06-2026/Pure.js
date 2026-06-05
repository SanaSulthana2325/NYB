// Pure function
//--> always returns same output for same input and not modify angthing outside the function

function add(a,b){
    return a+b
}
console.log(add(5, 6))
console.log(add(88,976))


// discount calculator
function calculateDiscount(price,discountPercent) {
    return price - (price * discountPercent / 100)
}console.log(calculateDiscount(1000,10))
console.log(calculateDiscount(2000,8))


// calculate age

function calculateAge(birthYear,currentYear){
    return currentYear - birthYear
}
console.log(calculateAge(1990,2026))
console.log(calculateAge(1989,2026))

// even and odd check
function isEven(num){
    return num % 2 === 0
}
console.log(isEven(4))


//
function isOdd(num){
    return num % 1 === 0
}
console.log(isOdd(7))


//
function square(num){
    return num * num
}
console.log(square(786))

// maximum of two
function findMax(a,b){
    return a > b ? a : b
}
console.log(findMax(20,90))


// reverse string
function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("sana sulthana"))
console.log(reverseString("Tasan"))

//check Palindrome: reads the same farword and backword

function isPalindrome(str){
    return str ===str.split('').reverse().join('')
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))

console.log(isPalindrome("mom"))
console.log(isPalindrome("dad"))

// count vowels
function countVowels(str){
    return str.match(/[aeiou]/gi)?.length || 0
}
console.log(countVowels("mazhar"))
console.log(countVowels("apple"))

//check positive or negative number
function checkNumber(num){
    return num >= 0 ? "positive" : "negative";
}
console.log(checkNumber(66))
console.log(checkNumber(-98))