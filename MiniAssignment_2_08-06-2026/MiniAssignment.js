//Array:
// collection of data (collection of homogeneous and heterogeneous)
//it is data structure used to store multiple values in a single variable
// to represent an array we use []
// we can store["hello",990,boolean, null, undefined,{objects},bignitand array with mutiple array]

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

// bigInt
let number = [
    24237678647829478734789n,
    546364823748923678429847234892374234897230n
];
console.log(number);
console.log(number[1])


// Multidimentional array:is an array that contains other arrays as its elemets
// students marks
let Marks = [
    ["Ali", 99],
    ["John", 89],
    ["Rahul", 73]
]
console.log(Marks[0])
console.log(Marks[0][1])

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

//Index of an Element

//1.indexOf(): return the first occurance of an element
let arr = [111,222,333,444,222,888,222]
console.log(arr.indexOf(333))
console.log(arr.indexOf(222))
console.log(arr.indexOf(666))

// latIndexOf(): Returns the last occurence of an element
let num1 = [10,20,30,40,50,60,20,30,89,76,20]
console.log(num1.lastIndexOf(20))

// includes(): checks whether an element exists in the array
let arr8 = ["A","B","C"]
console.log(arr8.includes("B"))


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

//loop through arrays:
//1. for loop:it use the array index to access the element

let fruit5 = ["apple","mango","Banana"]
for(let i = 0; i<fruit5.length; i++){
    console.log(fruit5[i])
}
//advantages
// 1.Access to index(i)
// 2. can use break
// 3.can use continue
// 4.full control over loop//


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
// advantages of for-of loop
//1. simple syntax
// 2.direct access to values
// 3. supports break and continue//

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

//advantages of forEach()
//1.very readable
// 2. provides value and index
// 3.common in modern javascript//

