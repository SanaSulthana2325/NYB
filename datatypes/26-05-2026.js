//DATA TYPES: define the type of data a variable can store in js
//2 types of data types:
//1) primitive : single value in single memory location
// there are 7 premitive data type:

//1. string: used to store text
let name = "sam"
let k  = 'hello'
let m = `hai world`
console.log(name)
console.log(k)
console.log(m)
console.log(typeof name)

// typeof operator: used to identify what type of value is stored in a variable

//2.number: used to store integers and decimal numbers
let age = 56
let marks = 90
console.log(age)
console.log(marks)
console.log(typeof marks)

//3.Boolean: stores true or false values
let passed = true
console.log(passed)
console.log(typeof passed)

//4.undefined:A variable declare but not assigned any value
let city
console.log(city)
console.log(typeof city)

//5.Null: Represents an empty value
let Data = null
console.log(Data)
console.log(typeof Data)

//6.BigInt: Used for very large numbers
let bigNumber = 88976544567890765423467887653578909765330n
console.log(bigNumber)
console.log(typeof bigNumber)

//7.Symbol: Used to create unique identifiers
let id = Symbol("id")
console.log(id)
console.log(typeof id)

// ex
let name1 = "sana sulthan"
let marks1 = 99
let passed1 = true
let city1
let Data1 = null
let bignumber = 56784567898765430n
let id1 = Symbol("id1")
console.log(typeof name1)
console.log(typeof marks1)
console.log(typeof passed1)
console.log(typeof city1)
console.log(typeof Data1)
console.log(typeof bignumber)
console.log(typeof id1)












//2. non -primitive: multiple values in single memory location
//1. object 
//2. array
//3. funtion
