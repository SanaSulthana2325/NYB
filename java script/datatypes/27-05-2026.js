//2. non -primitive data type: multiple values in single memory location
// used to store and manage complex data.'
//1. object:stores data in key-values pairs.
// typeof operator: used to identify what type of value is stored in a variable

let student = {
    name:"tasan",
    age:18,
    course:"JavaScript"
} ;
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(typeof student)

//
let details = {
    phno:'5566778899',
    DOB:'6-9-2009',

};
console.log(details);
console.log(details.phno)
console.log(details.DOB)


//2. array:store multiple values in single variable
let fruits  =["apple",'mango','banana','orange',[2,3,4,5,6,7,8,[23,34,45,56,67,78,[777,888,999,555,444,[555,777,8888,[82990,8906,[3434343434]]]]]]]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits[2])
console.log(fruits[1])
console.log(fruits[4])
console.log(typeof fruits)


// ex
let colors = ['pink','blue','red','purple','black','white']

console.log(colors)
console.log(colors[3])
console.log(colors[5])
console.log(colors[0])
console.log(colors[2])
console.log(colors[1])
console.log(colors[6])
console.log(colors[4])
console.log(typeof colors)

//3. funtion Data type: functions perform tasks or calculations.

function greet() {
    console.log("welcome to beautiful world")

}
greet()
console.log(typeof greet)

//ex
function add(){
     let a=2
     let  b=9
    console.log(a+b)
}
add()

// calculation of salary based on number of working days
console.log(2000*20)
console.log(5000*30)
console.log(5000*50) 
function salary(name,days){
    var perday=2000
    console.log("monthly salary of ",name,"is",perday*days)
}

salary("sonu",30)
salary("vamshi",41)


// combination of 3 example
let employee = {
    name:"Ali",
    salary:20000
}
let course = ['html','css','js','python'];

function welcome(){
    return "welcome";
}
console.log(typeof employee);
console.log(typeof colors);
console.log(typeof welcome);

// some example of reference behaviour

let person1 = {
    name:"ali"
}
let preson2 = person1
preson2.name = "ahmed"
console.log(person1.name)
console.log(preson2.name)

// because both variables point to the object, changing one also changes the other.

let car1 = {
    brand:"Toyota"
}
let car2 = car1
car2.brand = "BMW"
console.log(car1.brand)
console.log(car2.brand)

// 4.ES6 concepts related to data types

//1.let keyword: used to declare variable with block scope
let name="mirza"
console.log(name)

//2.const keyword: used for variable whose values should not change
const country = "India"
console.log(country)

// 3.Template Literals:use backticks for strings
let name1 = "tasleem"
console.log(`welcome ${name1}`)

//4.Arrow Functions: shorter way to write function
const add1 = (a,b) =>{
    return a + b
}
console.log(add1(30, 90))

//5.Array Destructuring:extract values from arrays
let colors1 = ["red","blue","green"]
let [a,b] = colors1
console.log(a)
console.log(b)

//6. Object Destructuring: extract values from objects
let student1 = {
    name2:"sonu",
    age2:22
}
let{name2, age2} = student1
console.log(name2)
console.log(age2)

//7.spread operator(...):copies or combines arrays/objects

let arr1 = [1,2]
let arr2 = [...arr1, 3, 4]
console.log(arr2)

//8. typeof operator: checks the data types
let marks = 95
console.log(typeof marks)


// ES6 : introduced advance reference type like (maps,weakmaps,set, weakset)

//a.Map: map stores key value pairs
let studentMap = new Map()
studentMap.set("name","ravi")
studentMap.set("age",21)

console.log(studentMap.get("name"))
console.log(studentMap.get("age"))

//
var m={name:"sana",1:"date"}
console.log(m)
//
let l=new Map()
l.set("name",'sanasulthana')
l.set(l,'date')
console.log(l)


//b.set: stores unique values only
let numbers = new Set([1,2,3,4,5,6,7])
console.log(numbers)

//c. WeakMap:
let user = {
    name:"mazhar"
}
let weakMap = new WeakMap()
weakMap.set(user,"student")
console.log(weakMap.get(user))

//ex
let obj = {}
let wm = new WeakMap()
wm.set(obj, "hello")
console.log(wm.has(obj))

// weakSet():
let obj1 = {}
let obj2 = {}

let ws = new WeakSet() 

ws.add(obj1)
ws.add(obj2)
console.log(ws.has(obj1))

//5.Date: the Date object is used to work with date and time

let today = new Date()

console.log(today)
console.log(today.getFullYear())


//6.regular expression:are used for pattern matching and validation
let pattern = /hello/i
console.log(pattern.test("hello world"))
console.log(pattern.test("beautiful flowers"))

let pattern1 = /word/;
console.log(pattern1);


// comparison primitive and non-primitive data type

// array comparison 

let arr3 = [1,2,3,4,5,6,7]
let arr4 = arr3
arr4[0] = 100

console.log(arr3)
console.log(arr4)

//primitive data type:number,string,boolean

let A = 20
let B = A
console.log("before change:")
console.log("A =",A)
console.log("B =",B)

B = 50
console.log("after change:")
console.log("A =",A)
console.log("B =",B)
// because :
// B geta a copy of A
// changing B does not affect A 


// non-primitive data type:
let user3 = {name:"sulthana",age:22}
let user4 =user3
console.log("before change:")
console.log("user3 =",user3)
console.log("user4 =",user4)

user4.name = "minnu"
console.log("user3 =",user3)
console.log("user4 =",user4)

// because:
//user3 stores reference of user4
//boths points to same memory location
//change in one effects the other or both changes
