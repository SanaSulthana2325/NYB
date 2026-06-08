//Array:
// collection of data (collection of homogeneous and heterogeneous)
//it is data structure used to store multiple values in a single variable
// to represent an array we use []
// we can store["hello",990,boolean, null, undefined,{objects},bignitand array with mutiple array]

//
let students = ["Sana", "Ali","Tasan"]
console.log(students[2])
console.log(students[0])
console.log(students[1])
console.log(students[3])

//
let cart = ["mobile","laptop","headphones","ipad"]
console.log(cart)

// marks of students
let marks = ["78",90,56,89,88,99]
console.log(marks[3])
console.log(marks)

// boolean
let results = [true,false,false,true,true]
console.log(results)
console.log(results[2])

//undefined: a variable declare but not assigned value is undefined
let data = [undefined]
console.log(data)
console.log(data[0])

// Null 
let data1 = [null]
console.log(data1)
console.log(data1[0])

// object: it store data in key values
let students1 = [
    {
        name: "Tasleem",
        age: 26
    }
]
console.log(students1[0])
console.log(students1[0].name)

// function data type
let actions = [
    function (){
        return "Hello Wrold"
    }
]
console.log(actions[0]())

// bigInt
let number = [
    24237678647829478734789n,
    546364823748923678429847234892374234897230n
];
console.log(number);
console.log(number[1])


// mixed array
let Data = [
    "Jasmine",
    28,
    true,
    null,
    undefined
]
console.log(Data)

//
let mixedArray = [
    "Nia",
    65,
    false,
    null,
    undefined,
    {city: "warangal"},
    [100,89,76,54,90,99],
    function() {
        return "Hello"
    }

]
console.log(mixedArray)

// Multidimentional array:is an array that contains other arrays as its elemets

let data2 = [[10,40],[56,90]]
console.log(data2)

// 2D Array (Matrix)
let Number = [
    [34,56,78],
    [45,78,90],
    [67,89,10]
]
console.log(Number)
console.log(Number[0][2])
console.log([2][3])

// students marks
let Marks = [
    ["Ali", 99],
    ["John", 89],
    ["Rahul", 73]
]
console.log(Marks[0])
console.log(Marks[0][1])

//cube
let cube = [
    [
        [4,8],
        [9,78]
    ],
    [
        [56,89],
        [45,88]

    ]
]
console.log(cube[1][0][1])

//adding elements to an array

let colors = ["red","blue","pink"]
console.log(colors)

// at the beginning
let color = ["Yellow","red","blue","pink"]
console.log(color)
//at the end
let Colors = ["Yellow","red","blue","pink","Green"]
console.log(Colors)
// at any position
let Colors1 = ["Yellow","red","blue","black","pink","Green"]
console.log(Colors1)


// Access array elements using indexes
// array indexing starts from 0 not 1
//
let fruits = ["apple","mango","Banana","Grapes"]
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits)
// accessing last elemnt
console.log(fruits[3])

// accessing object inside an array
let student = [
    {name: "ayesha", age:34},
    {name: "Ali", age:23}
]
console.log(student[0].name)
console.log(student[1].age)

// Methods of an array
// push(): add elements at the End

let Fruit = ["Apple","Mango"]
Fruit.push("Banana")
console.log(Fruit)

// pop()- remove element from the end
let Fruit1 = ["apple","mango","banana"]
Fruit1.pop()
console.log(Fruit1)

// unshift()- add element at the beginning
let Color = ["green","yellow"]
Color.unshift("pink")
console.log(Color)


//shift()-Remove element from the beginning
let Color1 = ["pink","green","yellow"]
Color1.shift()
console.log(Color1)

// Splice()-add element at any position
let name = ["Sana","Tasan"]
name.splice(1,0, "Mango")
console.log(name)
//

let name1 = ["Sana","Tasan"]
name1.splice("Mango",1)
console.log(name1)

//splice()- Remove element
let name2 = ["Sana","Tasan","Nashu"]
name2.splice(1, 1)
console.log(name2)

// remove multiple elements
let num = [10,20,30,40,50,60]
num.splice(1,2)
console.log(num)


//splice()-Replace element
let name3 = ["Sana","Tasan","Nashu"]
name3.splice(1,1,"Tasleem")
console.log(name3)

//accessing element from an array: means retrieving a value stired in an array
// we use the index number to access element
// array atart indexing from 0


// length of an array: the length of an array is the total number of element(values) present in the array
// count total elements

let fruits1 = ["apple","mango","Banana"]
console.log(fruits1.length)

// access the last element
let fruits2 = ["apple","mango","banana"]
console.log(fruits2[fruits2.length - 1])
console.log(fruits2[fruits2.length - 3])
console.log(fruits2[fruits2.length - 5])


// check if an array is empty
let cart1 = []
console.log(cart1.length)

// add elements check length
let color2 = ["green","blue"]
color2.push("pink")
console.log(color2.length)

//remove element and check length
let color3 = ["green","blue","pink"]
color3.pop()
console.log(color3.length)

//Index of an Element

//1.indexOf(): return the first occurance of an element
let arr = [111,222,333,444,222,888,222]
console.log(arr.indexOf(333))
console.log(arr.indexOf(222))
console.log(arr.indexOf(666))

// latIndexOf(): Returns the last occurence of an element
let num1 = [10,20,30,40,50,60,20,30,89,76,20]
console.log(num1.lastIndexOf(20))

//compare the IndexOf() and LastIndexOf()

let num2 = [100,200,300,400,500,600,100,200,200,200,200,300,300]
console.log(num2.indexOf(200))// first from 200
console.log(num2.lastIndexOf(200))//last from 200

// includes(): checks whether an element exists in the array
let arr8 = ["A","B","C"]
console.log(arr8.includes("B"))


//students attendance
let stu = ["ayesha","arisha","Sana","ayesha","Tasleem","ayesha"]

console.log(stu.indexOf("ayesha"))
console.log(stu.lastIndexOf("ayesha"))
console.log(stu.includes("ayesha"))

// making array emply by using different approaches
// using length=0

let veg = ["carrot","beetroot","cabbage"]
veg.length = 0
console.log(veg)

// using splice()
let veg1 = ["carrot","beetroot","cabbage"]
veg1.splice(0, veg1.length)
console.log(veg1)

//assignment anew empty
let veg2 = ["carrot","beetroot","cabbage"]
veg2 = []
console.log(veg2)

// using a while loop and pop()
let veg3 = ["carrot","beetroot","cabbage"]
while(veg3.length > 0){
    veg3.pop()
}
console.log(veg3)

//using loop and shift()
let veg4 = ["carrot","beetroot","cabbage"]
while(veg4.length > 0){
    veg4.shift()
}
console.log(veg4)

//combining multiple array
// using concat and spread operator(...)

//concat(): this method joins two or more arrays and return a new array

let color4 = ["pink","red","blank"];
let fruits3 = ["apple","mango","pineapple"]

let result = color4.concat(fruits3)
console.log(result)

// combine 3 arrays
let arr1 = [1,2]
let arr2 =[3,4]
let arr3 = [5,6]
let result1 = arr1.concat(arr2, arr3)
console.log(result1)

//example
let classA = ["ayesha", "Ali"]
let classB = ["Sonu", "Sana"]
let stu1 = classA.concat(classB)
console.log(stu1)


// using spread operator:expand array elements and is commonly used to merge array

let fur = ["apple","mango"]
let  veg9 = ["carrot","potato","tomato"]
let results2 = [...fruits, ...veg9]
console.log(results2)

//2.combine three array
let arr5 = [11, 22]
let arr6 = [33, 44]
let arr7 = [55, 66]
let result3 = [...arr5, ...arr6, ...arr7]
console.log(result3)

//add extra values while combining
let nam = ["Ali","Jasmine"]
let age =[33, 45]
let result4 = [...nam,"fathima", ...age]
console.log(result4)

//loop through arrays:
//1. for loop:it use the array index to access the element

let fruit5 = ["apple","mango","Banana"]
for(let i = 0; i<fruit5.length; i++){
    console.log(fruit5[i])
}

// ex
let stu2 = ["rakhi","afsa","yyy"]
for(let i = 0; i < stu2.length; i++){
    console.log(stu2[i])

}


//2.for-of loop: for..of directly gives the array values
let fruit6 = ["pineapple","grapes","banana"]
for(let fruit6 of fruits){
    console.log(fruit6)

}

//
let products = ["Mobile", "Laptop", "headphones"]
for(let product of products){
    console.log(product)
}

//3. forEach():executes a function for every element in the array (u want clean and readable code for every element)

let chips = ["salt","cheese","masala"]
chips.forEach(function(chip){
    console.log(chip)
})

// forEach using arrow function
let chips1 = ["salt1","cheese1","masala1"]
chips1.forEach(chip =>{
    console.log(chip)
})

//ex
let marks2 = [78,55,34,23]
marks2.forEach(mark =>{
    console.log(mark)
})


// accessing index with forEach
let nam1 = ["afreen","nashu","sameer"]
nam1.forEach((nam,index) =>{
    console.log(index,nam)
})



