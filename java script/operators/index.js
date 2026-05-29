//operators
//1. arthematic(+,-,*,/,%,++,--)

var a=10
var b= 3
console.log(a/b)
console.log(a%b)

// increment++
console.log(a)
console.log(++a)
console.log(a++)
console.log(a)

//decrement--
console.log(a)
console.log(--a)
console.log(a--)
console.log(a)

//exponent
 var A=3
 var B=4
 console.log(A**B)

 //2.assignment operators

 var A=4
 var B=2
 B/=A
 B**=A
B+=A
 console.log(B)
// example

let num = 10;
num += 5;
console.log(num)
num -+ 6;
console.log(num)
num *= 2;
console.log(num)
num /= 8;
console.log(num)
num %= 3;
console.log(num)
num **= 9;
console.log(num)

//3 comparision operators
//(>,<,>=,<=) includes

var a = 10
var b = 8
var c = 10
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==c)
console.log(a===b)
console.log(a!==b)
console.log(a!==c)

//4 logical operators
//AND(&&),OR(||),NOT(!)


// ex of AND

console.log((2<4) &&(8>4))
//OR
console.log((2<4) ||(2>4))
//NOT
console.log(!(2<4))

//5 ternary operator
// syntax:- ?:

let salary=5000
salary>10000?console.log('apply for the credit card') : console.log('you are not elegible')
// ex
var age=4
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result)

// 6 string operators

var first = "sana"
var last = "sulthana"
console.log(first+" "+last)
// template literal
console.log(`my name is ${first} ${last} and i am working as ase at nyb`)

//7 bitwise operator

00001111
    8421
//0-> 0000
//1-> 0001
//2-> 0010S
//3-> 0011

//1&2
//0001
//0010
//0000
console.log(1 & 2)
console.log(1|2)
console.log(1^2)
console.log()