// Object Methods in JavaScript

// In JavaScript, object methods are functions that are stored as properties of an object.

// basic example

const stu = {
    name:"Sara",
    age:43,

    introduce: function(){
        console.log("My name is " + this.name);
    }
};

stu.introduce();

// Why this.name?

// this refers to the current object.

// Bank account
const account ={
    accountHolder:"TATA",
    balance:10000,

    deposit(amount){
        this.balance += amount;
        console.log("Deposited:", amount);
        console.log("New Balance:", this.balance);
    }
};

account.deposit(5000)


//shopping cart

const cart = {
    items:[],

    addItem(item){
        this.items.push(item);
        console.log(item + " added to cart");
    },

    showCart(){
        console.log("Cart:", this.items);
    }
};

cart.addItem("laptop");
cart.addItem("Mouse");
cart.showCart();

// User Object

const user = {
    firstName: "sana",
    lastName:" Sulthana",

    getFullName(){
        return this.firstName + " "+ this.lastName;
    }
};

console.log(user.getFullName());


// method with parameters

const calculator = {
    add(a,b){
        return a + b;
    },

    subtract(a,b){
        return a - b;
    }
};

console.log(calculator.add(10,10));
console.log(calculator.subtract(10,7));

// employees

const emp = {
name1: "Tasan",
salary: 50000,

getAnnualSalary(){
    return this.salary * 12;
}
};

console.log(emp.getAnnualSalary());

//Method that change object data

const user1 = {
    name2:"Ajmeri",
    age:34,

    increaseAge(){
        this.age++;
    }
};

console.log(user1.age);
user1.increaseAge();
console.log(user1.age);
console.log(user1.age);

// Conditional Logic

const student ={
    name4:"Mira",
    marks:85,

    getResult(){
        if(this.marks >= 40){
            return"Pass";
        }else{
            return "Fail";
        }
    }
};

console.log(student.getResult());

//login system
const user5 ={
    username:"sana1234",
    password:"7896",

login(inputPassword){
    if(inputPassword === this.password){
        return "Login successful";
    }
    return "Invalid password";
}
};

console.log(user5.login("7896"));
console.log(user5.login("88888"));


// Object method
//       ↓
// Function inside an object
//       ↓
// user.greet()

// Built-in Object method
//       ↓
// JavaScript's Object utility
//       ↓
// Object.keys(user)
// Object.values(user)
// Object.entries(user)
// Object.assign()