// 1.array creation
let cart = ["mobile","laptop","headphones","ipad"]
console.log(cart)
//
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




//2.Multidimensional Arrays:

// students marks
let Marks = [
    ["Ali", 99],
    ["John", 89],
    ["Rahul", 73]
]
console.log(Marks[0])
console.log(Marks[0][1])


//3.Adding and Removing Elements
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

//4.Accessing Array Elements:
let fruits = ["apple","mango","Banana","Grapes"]
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits)
// accessing last elemnt
console.log(fruits[3])


//5.Array Length
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


//6.includes(), indexOf(), lastIndexOf()
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

//7.Combining Arrays
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


//8.Looping Through Arrays:

//1. for loop:it use the array index to access the element

let fruit5 = ["apple","mango","Banana"]
for(let i = 0; i<fruit5.length; i++){
    console.log(fruit5[i])
}

//2.for-of loop: for..of directly gives the array values
let fruit6 = ["pineapple","grapes","banana"]
for(let fruit6 of fruits){
    console.log(fruit6)

}

//3. forEach():executes a function for every element in the array (u want clean and readable code for every element)

let chips = ["salt","cheese","masala"]
chips.forEach(function(chip){
    console.log(chip)
})

//9.some(), every():


// somme()
let num = [10,20,30,40,50,60,70]
let result99 = num.some(num => num > 50)
console.log(result99)


// every
//if one number fails
let num2 = [12,45, -7,34,23]
let result2 = num2.every(num2 => num2 > 0)
console.log(result2)


//10.join(), sort():
//Sort(): arrange array elements in order

//
let alp = ["aaa","bbb","ccc"]
alp.sort()
console.log(alp)

// reverse order
let alp2 = ["aaa","bbb","ccc","ddd"]
alp2.sort().reverse()
console.log(alp2)

//sort numbers ascending
let num7 = [4,6,7,8,5,2,1,9,0,]
num7.sort((a,b) => a -b)
console.log(num7)

//sort numbers decending
let num8 = [4,6,7,8,5,2,1,9,0]
num8.sort((a,b) => b - a)
console.log(num8)

//11.Flattening Arrays:

let arr66 = [1,[2,3,4],[5,6,7,]]
let result7 = arr66.flat()
console.log(result7)

//12.Removing Duplicates:
//Removing Duplicates: means keeping only unique values in the array
let arr33 = [1,2,3,4,4,5,6,6,6]
console.log(arr33)
//using set:
let arr4 = [1,2,3,4,4,5,6,6,6]
let uniqueArr = [...new Set(arr4)]
console.log(uniqueArr)


//13.map(), filter(), reduce():

// using filter()
let arr5 = [1,2,2,2,2,3,3,3,4,4,4,5,5,5,5,6,6,6,7,7,7]
let uniqueArr1 = arr5.filter(
    (item, index) => arr5.indexOf(item) === index
)
console.log(uniqueArr1)

//reduce
//students attendance
let stu = ["ayesha","arisha","Sana","ayesha","Tasleem","ayesha"]

console.log(stu.indexOf("ayesha"))
console.log(stu.lastIndexOf("ayesha"))

//map(): transform data
let numbers = [1,2,3,4,5,6]
let double = numbers.map(numbers => numbers * 4)
console.log(double)

// example
let salary = [20000, 30000,50000]
let updatedSalary = salary.map(
    salary => salary + 6000
)
console.log(updatedSalary)


//14forEach():
// usig forEach()
let arr6 = [1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,6,7,7,7,9,9,9]
let result9 = []
arr6.forEach(item => {
    if(!result9.includes(item)){
        result9.push(item)
    }
})
console.log(result9)





