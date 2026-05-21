//functions
//like
function add(a,b){
    console.log(a+b)
    return 'hai'
}
 console.log(add(4,6))
 //

 function add(c,d){
    return "result"
 }
 let result= add(7+5)
 console.log(result)
 // functions are divided into two types 
 //1. function declaration
 //ex
 function sayHi(){
    console.log("hii")
 }
 sayHi()
 //
 function sayhai(){
    console.log("hai")
 }
 sayhai()


 //1. no parameter, no return
 function sayHello(){
    console.log("Hello!")
 }
 sayHello()

 //2. with parameters
 function greetUser(name, age){
    console.log(`hii ${name} ,you are ${age} years old`)
 }
greetUser("sana", 22)

//3. with return value
//function add(a,b){
    //return a + b
//}
//let sum = add(5, 3)
//console.log(sum)

//4. with defalut parameters
function multiply(a,b = 8){
    return a * b
}
console.log(multiply(5))
console.log(multiply(5,6))


 //2. function expression (include name,anonymous and arroe function)
 //ex
 // function name
 function hello(a=10,b=20){
    console.log(a,b)
 }
 hello(1,undefined)
 // varying parameter
 // like
 function varying(a=10,b,c,d,...f){
    console.log(a,b,c,d)
    console.log(arguments) // arguments
    console.log(f)//rest paramenter
 }
 varying(undefined,2,3,4,5,6,7,8,9)
 //rest parameter and arguments object

 //types of function expresion

 //i. named function expression:
 const sumFunc= function sum(p,q){
   return p + q
 }
 console.log(sumFunc(8,35))

 //ii. anonymous function expression:(function with no name)

 const namedSum= function(c,d){
   return c + d
 }
 console.log(namedSum(7,9))

 //iii.arrow function expression:(ES6)(=>)
const arroSum = (s,t) => {
   return s + t
}
let myResult = arroSum(90,76)
console.log(myResult)
console.log(myResult * 2)
console.log(myResult % 100)



 // Comparing VAR , LET , and const with

 // 1. Redeclaration(it works only for var, not for let and const)
 //ex
 var a = 1
 var a = 2
 console.log(a)

 // 2. reassignment(works for VAR and LET but does not work for const)
 var x = 1
 x = 10
 console.log(x)
 //
 let y = 1
 y = 30
 console.log(y)

 // 3. initialization(works for var ,let but not const but if we assign a value it works)
 var p
 console.log(p)
 //
 let q
 console.log(q)
 //
 const r = 6
 console.log(r)

 //4.hoisting
 var a;
 console.log(a);
 a = 7;
 // 5.scope
 var d=10
 //let d=20
 function hai(a,b){
   const m=100
   console.log(m)
   console.log(a,b,d)
   //blocks (which will be in{})
   {
   var k=101
   let z=99
   const o=78
   console.log(o)//blocked scope
   console.log(z),//blocked scope 
   console.log(k)
   console.log(m)
   }
   console.log(k)
   //console.log(z)
   //console.log(o)
 }
hai(1,2)
// example
//scope:the area where the variable is accessible
//1.function scope
function test(){
   var x=10;
   console.log(x);
}
test();
//var ignores block buy not function

//2.block scope:
if(true){
   let y=20
   const s=90
   var g=40
}
console.log(g)
//console.log(s)
//console.log(y)

//3. global scope:
let name = "sana"
function greet(){
   console.log(name)
}
greet()
console.log(name)

//var at global attaches to window where let and const dont

//4. lexical scope

function outer(){
   let secret = "I am outer"

   function inner(){
      console.log(secret)
   }
   inner()

}
outer()

// where the inner function remembers its outer scope even after outer function finishes

//5.Module scopes: prevents variable conflicts in large projects

//let data= "secret"
//console.log(data)

// 3.resursive fuction

let sum =0
let one = function rec(a){
   if(a==0){
      return sum
   }
   sum += a
   return rec(a-1)
}
console.log(one(10))
// example
function sumToN(n){
   // i. base when to stop
   if(n==0){
      return 0
   }
   //ii. recursive case: n = sum of n-1
   return n + sumToN(n - 1)
}
console.log(sumToN(20))

// example-2
let two = function rec(a){
   if(a === 0) return 0
   return a + rec(a - 1)
}
console.log(two(25))


//4. currying function

function add(a){
   
     return function(b){
      console.log("second function",b)

     }

}
var M = add(10)
console.log(M(20))
// 
function add(a){
   return function(b){
      return function(c){
         return a + b + c
      }
   }
}
console.log(add(29)(38)(59))
// IIFE

//main concept of function:
//i first class function
//ii.pure function
//iii impure function
//iv. high order function

// this keyword
console.log(this)

let obj= {
   name:"sana sulthana",
   hello(){
      console.log(this.name)
   }
}
console.log(obj[name])
//
var myName = "sana"
console.log(myName)
console.log(window.myName)
//
console.log(window.innerHeight)

// static 
let NAME = 'sana sulthana'
let city = "hyderabad"
console.log(NAME)
console.log(city)

// dynamic (text+ Variableand use backticks)

let user = "sana"
let age = "48"
console .log("My name is"+user+" and i am "+age+" years old")

//apply this in arrow function
//i. normal 
function hello(){
   console.log("hello sana sulthana")
}
hello()

// arrow function
const hello1 = () => {
   console.log("hello arrow function")

}
hello1()
//
const addarro = (a,b) => a+b
console.log(addarro(67,45))
//
let ar = () => {
   console.log("ar() => this =", this)

}
ar()

let objarro = {
   Name:"sana sulthana",
   HELLO: () => {
      console.log("HELLO arrow => this", this)
   },
   Hello: () => {
      console.log("Hello normal => this", this)
   }

}
objarro.HELLO()
objarro.Hello()
