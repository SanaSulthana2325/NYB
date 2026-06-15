// objects:

//ex
const mobile = {
    brand: "Samsung",
    model: "S24",
    Price: 70000
}
console.log(mobile.brand)
console.log(mobile.price)

//looping through an object
const person = {
    name:"john",
    age:25,
    city:"Delhi"
}
for(let key in person){
    console.log(key,":",person[key])
}

//create a object using different approaches

//1. object literals: we use{}
const stu = {
    name: "Nashu",
    age:23,
    course: "HTML"
}
console.log(stu)

//2.new object

const stu1 = new Object()
stu1.name = "Ali";
stu1.age = 22;
stu1.course = "Python"
console.log(stu1)


//3. constructoer function: useful while creating multiple objects with structure
function stu23(name,age,place){
    this.name = name
    this.age = age;
    this.place = place;
}
let stu24 = new stu23("Lulu",23,"Warangal")
console.log(stu24)

//4. using ES6 Class
class Student{
    constructor(Name, Class, Section){
        this.Name = Name;
        this.Class = Class;
        this.Section = Section;

    }
}
let student1 = new Student("Nasreen" , 6, "A");
console.log(student1);

// 5. using object.create():creates an object from another object
const Stuprototype ={
    greet(){
        console.log("Hello!!!!")
    }
}
const Stu1 = Object.create(Stuprototype)
Stu1.name = "Anil"
Stu1.age = 25
console.log(Stu1)
Stu1.greet()

//Access, Update ,Add ,Delete object properties

//1. access properties: means reading/getting a value from an object

let emp ={
    id: 101,
    name:"sana",
    role:"developer",
    salary: 50000
}
console.log(emp.name)
console.log(emp.salary)

// use with [ ] brackets

//2. update properties:changing an existing value
let emp1 ={
    id: 101,
    name:"sana",
    role:"developer",
    salary: 59000
}
console.log(emp1.salary)

// example
let emp5 ={
    id: 101,
    name:"sana",
    role:"Senior developer",
    salary: 60000
}
console.log(emp5.role)

//3 Add new properties: creating a new property that didnt exist before

emp.department = "IT"
console.log(emp)


//4. delete properties: removing a property completely
delete emp.salary;
console.log(emp)

// example
const product = {
    name: "laptop",
    price: 60000,
    oldprice:70000
}
delete product.oldprice;
console.log(product)

// complete example
const worker = {
    name: "Raju",
    age: 34
}
console.log(worker)
console.log(worker.name)// access
worker.age = 37  // update
worker.salary = "21000"  //add
delete worker.age  // delete

console.log(worker)

//example
// e-cart
const cartItem = {
    product: "laptop",
    quantity: 1
}
cartItem. quantity = 2 // increase quantity
cartItem.Price = 60000

console.log(cartItem)


//Create objects containing method and practice onject manipulation

//object  containing method:it is simply a function inside an object
const stu34 = {
    name: "EEE",
    greet: function(){
        console.log("Hello, Welcome!")
    }
};
stu34.greet()

//example
const account = {
    accountHolder: "Munni",
    balance: 5000,
    checkBalance: function(){
        console.log("Balance: ₹" + this.balance)
    }
}

account .checkBalance()


// practice object manipulation

//1. access property
const emp9 = {
    name: "Tasan",
    salary: 60000
}
console.log(emp9.name)

// update property
emp9.salary = 80000
console.log(emp9.salary)

//add  property
emp9.department = "IT"
console.log(emp9)

//delete property
delete emp9.department
console.log(emp9)


// example
//mobile phone
const mobile1 = {
    brand:"samgang",
    model:"S24",
    displayInfo: function(){
        console.log(this.brand + " "+ this.model)
    }
}
mobile1.displayInfo()

// update
mobile1.model = "S26"
mobile1.displayInfo()

// add
mobile1.price = 50000
console.log(mobile1)

// delete
delete mobile1.price
mobile1.displayInfo()
