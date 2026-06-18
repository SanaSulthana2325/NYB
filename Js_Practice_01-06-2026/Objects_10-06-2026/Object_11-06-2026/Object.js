//for...in Loop
// key---> property name ofthe object
// object--->the object you want to loop through


// example
let student34 = {
    name: "sdss",
    age: 43,
    course:"BBA"
} 
for(let key in student34){
    console.log(key)
    console.log(student34[key])// accessing values
    console.log(key +" : "+ student34[key])

}

// employees details
let employee = {
    id: 101,
    name: "Rahul",
    department: "HR",
    salary: 50000
};

for (let key in employee) {
    console.log(key + " => " + employee[key]);
}


//Date Object:the date object in js used to work with
//1. currentdate
// 2.current time
// 3.day
// 4.month
// 5.year
// 6.hours,minutes,seconds
// 7.time calculation
let d = new Date()
console.log(d)

//
let specificDate = new Date("2029-12-25")
console.log(specificDate)

//
let customDate = new Date(2026,4,7)
console.log(customDate)

//
let today = new Date()
console.log(today)

//
let day = today.getDate()
console.log(day)

//
let month = today.getMonth()+1
console.log(month)

//
let year = today.getFullYear()
console.log(year)

//
console.log(`${day}-${month}-${year}`)

//Template Strings:used with the help of // ` `${varaible name}
//
var k=10
var i=20
console.log("the value of a is:",k,"the value of b is:",i,"and their sum is:",k+i)

console.log(`the value of a is ${k} the value of b is ${i} and their sum is ${k+i}`)

//ex
let name = "sana"
let age = 22
let msg = `hii,i am ${name} and I am ${age} years old.`
console.log(msg)

// ex
let product = "laptop"
let cost = 50000
console.log(`the ${product} cost is ${cost} rupees.`)


//Math Object
//methods of math like

var ab=10
var bc=10.7

console.log(Math.floor(bc))// rounds downward
console.log(Math.ceil(bc))//rounds upward
console.log(Math.sqrt(9))
console.log(Math.pow(2,3))
console.log(Math.floor(Math.random() *10000))

// ex
let price = 99.567
console.log(Math.round(price))

//
let scores = [56,78,90,33,21]
console.log(Math.max(...scores))
console.log(Math.min(...scores))

//
let randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum)

//
let difference = -15
console.log(Math.abs(difference))//  absolute value

//String Object: used to store and manipulate text

let r ="hello"
console.log(r.length)

// toUpperCase
let name1 = "sana "
console.log(name1.toUpperCase())

// toLowerCase
let name2 = "sana sulthana"
console.log(name2.toLowerCase())

//
let firstname = "sana"
let place = "warangal"
let sentence = ` i am ${firstname.toUpperCase()} from ${place.toUpperCase()}.`
console.log(sentence)

let sentence1 = ` i am ${firstname.toLowerCase()} from ${place.toLowerCase()}.`
console.log(sentence1)

// camelCase(way to write  variables names with multiple words)

let firstName = "sana"
let lastName = "sulthana"
let userAge = 45
let fullNameCamel = firstName  + lastName.charAt(0).toUpperCase() + lastName.slice(1)
console.log(fullNameCamel)
