// 4.for-in loop:iterate over keys properties and object
//mainly used with:
// objects
// arrays

//
let student ={
    name:"sana",
    age:23,
    course:"html"
}
for (let key in student){
    console.log(key,":",student[key])
}

// count object properties
let employee ={
    name:"vijay",
    age:66,
    city:"warangal"
}
let count = 0
for(let key in employee){
    count++
}
console.log("properties:", count)

// print only keys
let person ={
    name:"minnu",
    age:25,
    country:"India"
}
for (let key in person){
    console.log(key)
}

// calculate total marks
let marks = {
    maths:90,
    science:78,
    English:99
}
let total=0
for(let subject in marks){
    total += marks[subject]
}
console.log("total:", total)

// array
let colors = ["red","green","blue","pink","yellow"]
for(let index in colors){
    console.log(index)

console.log(colors[index])
}


// use cases:
// object data(user profile, employee records)
// API responses
// Property inspection

