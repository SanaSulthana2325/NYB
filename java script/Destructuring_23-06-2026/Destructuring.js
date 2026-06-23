//Destructuring:


//array destructuring
// example
let a=[1,2,3,4,5,6]

console.log(a[0])
console.log(a[1])
console.log(a[3])
// but in destructuring
let[A,B,C,D,E,F]=a
console.log(A,B,C,D,E,F)

//
let b=["sana",7,8,9]
console.log(b[0])
let[A1,B1,C1,D1]=b
console.log(A1,B1,C1,D1)


// object destructuring
let obj={name:"Tasan", location:"hyd"}
console.log(obj.name)
console.log(obj.name)

var H=obj.name
console.log(H)

// how to destructure nested object and nested arrays task




//Iterators:

// for in returns keys  and // for of returns values
for(i in a){
    console.log(i)
}


// current value and done state
let num=[1,2,3,4]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

//let num = [1,2,3,4,5]
console.log(num)

//Generators

function hai(){
    console.log("hello")
    return"done"
    console.log("bye") // after return the js thinks the code is completed
}
console.log(hai())

//
function hai1(){
    return"done"
    console.log("hello")
    console.log("bye")
}
console.log(hai1())

// if i want to return 3 in one

function hai2(){
    
    console.log("hello")
    console.log("bye")
    return"done"
}
console.log(hai2())

// generator function

function* hai3(){
    
    yield"sana";
    yield "hello";
    yield "done"
}


let n = hai3()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())