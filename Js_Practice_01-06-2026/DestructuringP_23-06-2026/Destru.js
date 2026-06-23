//Destructuring:is a JavaScript feature that lets you unpack values from arrays or properties from objects into separate variables.
//--->it makes code cleaner
//--->shorter
//--->easier to read
//--->easier to work with APIs, functions, arrays and objects

//1. array Destructuring:extracts values based on position/index

let fruits = ["Apple", "banana", "Mango"]
let[a,b,c] = fruits;
console.log(a)
console.log(b)
console.log(c)

// students marks
let marks = [56,78,90]
let [maths, science, english] =marks

console.log("Maths:", maths);
console.log("Science:", science);
console.log("English:", english);

//skipping values
let colors = ["red","green","blue","black"]
let[first, ,third]= colors

console.log(first)
console.log(third)


// default values
let numbers = [10]
let [d, e = 20] = numbers

console.log(d)
console.log(e)

// swaping variables
// without destructuring
let p=10
let q=20

let temp = p
p = q
q = temp

console.log(p, q)

//with destrcturing
let k = 10;
let  l= 20;
[k, l] = [l, k];

console.log(k, l)

// rest operator in array destructuring

let num = [1,2,3,4,5,6];
let [a1,b1,...rest] = num;

console.log(a1)
console.log(b1)
console.log(rest)

// nested array destructing
 let num2 = [1, 2, [3, 4]];
 let [a3, b3, [c3, d3]] = num2;

 console.log(a3);
 console.log(b3);
 console.log(c3);
 console.log(d3);
 
 

// object destructuring: extracts values using property name

// example
let student = {
    name:"Sana",
    age:22,
    course:"JavaScript"
};
let {name, age, course} = student;

console.log(name)
console.log(age)
console.log(course)


// renaming varibles
let emp = {
    empName:"Rahul",
    salary: 60000
}
let{empName:name1, salary: pay} = emp

console.log(name1)
console.log(pay)

// default values in object destructuring
let user = {
    username:"admin"
};
let{username, role="User"} = user

console.log(username)
console.log(role)

//Nested object Destructuring:
let stu = {
    name:"Nashu",
    marks1:{
        maths1: 88,
        english1: 99

    }
};
let{
    marks1:{maths1,english1}
} = stu;

console.log(maths1)
console.log(english1)

// 
let product = {
    prodcutId: 101,
    ProductName:"laptop",
    ProductPrice: 80000,
    ProductRating:4.2

}
let {prodcutId, ProductName, ProductPrice, ProductRating} = product;

console.log(ProductPrice)

console.log(product)
console.log(product.ProductName);
console.log(product.ProductRating);

//API response
let apiResponse = {
    status: 200,
    data:{
        username1:"tasleem",
        email:"tas@gmail.com"
    }
};
let{
    data:{username1, email} }= apiResponse;
    console.log(username1)
    console.log(email)

// destructuring in function

function display([a2, b2]){
    console.log(a2)
    console.log(b2)
}

display([100, 200])

// combining arrays and objects destructuring
let users = [
    {
        name11:"Ali",
        age1:34

    },
    {
        name11:"Rahul",
        age1:45
    }
];

let [{name11,age1}] = users

console.log(name11)
console.log(age1)

// returning multiple values:
function calculation(u, v){
    return[u + v, u - v];
}
let [sum, subtract] = calculation(90, 67)
console.log(sum)
console.log(subtract)

// difference between array and object destructuring

 //| Feature        | Array Destructuring | Object Destructuring |
//| -------------- | ------------------- | -------------------- |
//| Based on       | Position/Index      | Property Name        |
//| Order matters? | Yes                 | No                   |
//| Symbols used   | `[]`                | `{}`                 |
//| Works with     | Arrays              | Objects              |

//Iterators:
// it is an object that allows you to access elements one by one instead of accessing all data at onces

// current value--->current element
// state done---->true/false

// example
let arr=["apple","mango","banana","grapes"]
let iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// arrays
let num4 = [1,2,3]
let iterator1=num4[Symbol.iterator]();
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())

// string
let str = "hello";
let D = str[Symbol.iterator]()
console.log(D.next())
console.log(D.next())
console.log(D.next())
console.log(D.next())
console.log(D.next())
console.log(D.next())

// maps
let map = new Map([
    ["name", "RRR"],
    ["course", "javascript"]
]);
let U = map[Symbol.iterator]()
console.log(U.next())

// sets
let set = new Set([10,20,30]);
let Y = set[Symbol.iterator]();
console.log(Y.next())
console.log(Y.next())
console.log(Y.next())


// with for of loop
let arr1 = [100, 200, 300]
for(let value of arr1){
    console.log(value)
}



//Generators:
//A generator is a special type of function that can:

//pause execution,
//return values one by one,
//and continue later from where it stopped.

//Generators are used to create iterators easily.

// example
function* posts(){
    yield "post1";
    yield "post2";
    yield "post3";
}
let P = posts();
console.log(P.next())
function* number(){
    yield 1;
    yield 2;
    yield 3;

}
let gen = number();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// yield pause the function

function* demo(){
    console.log("start");
    yield 1;
    console.log("middle");
    yield 2;
    console.log("end")
    yield 3;
}
let obj = demo();
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())


// generator with loops
function* evenNumber(){
    for(let i = 2; i <= 20; i += 2){
        yield i;
    }
}
let num5 = evenNumber()
console.log(num5.next())
console.log(num5.next().value)
console.log(num5.next().value)
console.log(num5.next().value)
console.log(num5.next().value)
console.log(num5.next().value)
console.log(num5.next().value)
console.log(num5.next().value)
console.log(num5.next().value)

// calculating 
function* calculator(){
    let num7 = yield "Enter Number";
    yield num7 * 4;
}
let calc = calculator();
console.log(calc.next());
console.log(calc.next(10));
