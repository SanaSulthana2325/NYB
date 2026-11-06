// What are Design Patterns in JavaScript?
// Design Patterns are reusable solutions to commonly occurring problems in software development.

// In simple words, when developers face the same type of problem in different projects, instead of writing everything from scratch, they follow a standard approach called a Design Pattern


// Why do we use Design Patterns?
// 1. Code reusability.
// 2. Easy maintenance.
// 3. Better code organization.
// 4. Reduces code duplication.
// 5. Makes applications easier to understand.
// 6. Helps developers build scalable applications.


// Singleton Pattern
// Definition: Singleton Pattern ensures that only one object is created throughout the application.

class Database{
    constructor(){
        if(Database.instance){
            return Database.instance;
        }

    this.connection = "Database Connected";

    Database.instance = this;
    }

    getConnection(){
        return this.connection;
    }
}

let db1 = new Database();
let db2 = new Database();


console.log(db1.getConnection());
console.log(db2.getConnection());

console.log(db1 === db2);


// Factory Pattern
// Definition: Factory Pattern is used to create different types of objects without directly creating them everywhere in the application.

function paymentFactory(type){
    if(type === "UPI"){
        return{
            pay:function(){
                console.log("Payment through UPI");
            }
        };
    }
    else if (type === "Card"){
        return{
            pay: function(){
                console.log("Payment through credit card");
            }
        };
    }

    else if(type === "COD"){
        return{
            pay:function(){
                console.log("Cash on Delivery Selected");
            }
        };
    }

    else{
        return null;
    }
}

let payment1 = paymentFactory("UPI");
let payment2 = paymentFactory("Card");
let payment3 = paymentFactory("COD");


payment1.pay();
payment2.pay();
payment3.pay();



// Constructor Pattern
// Definition: Constructor Pattern is used to create multiple objects with similar properties and methods.


function Student(name,rollNo,course){
    this.name = name;
    this.rollNo = rollNo;
    this.course = course;

    this.display = function(){
        console.log("Student Name: "+ this.name);
        console.log("Roll Number: "+ this.rollNo);
        console.log("Course: "+ this.course);

    };
}

let student1 = new Student("Dada",101,"React");
let student2 = new Student("Raga",102,"JavaScript");


student1.display();

console.log("-----------");

student2.display();



// Module Pattern
// Definition: Module Pattern is used to organize code into separate modules and protect private data from direct access.


let bankAccount = (function(){

    let balance = 5000;

    return{
        deposit:function(amount){
            balance = balance + amount;

            console.log("Deposited:"+ amount);
        },

        withdraw:function(amount){
            if(amount <=balance){
                balance = balance - amount;

                console.log("Withdrawn:"+ amount);
            }else{
                console.log("Insufficient Balance");
            }
        },

        checkBalance: function(){
            console.log("Current Balance:" + balance);
        }
    };
})();

bankAccount.checkBalance();
bankAccount.deposit(2000);
bankAccount.withdraw(1000);
bankAccount.checkBalance();

console.log(bankAccount.balance);


// Adapter Pattern
// Definition: Adapter Pattern allows two incompatible systems to work together by converting one interface into another.


class ExternalPayment {
    makePayment(data){
        console.log("Payment Successful:"+ data.paymentAmount);
    }
}
class PaymentAdapter{
    constructor(){
        this.payment = new ExternalPayment();
    }

    pay(data){
        let convertedData = {
            paymentAmount: data.amount
        };

        this.payment.makePayment(convertedData);
    }
}

let payment = new PaymentAdapter();
payment.pay({amount: 1000});


// Observer Pattern
// Definition: Observer Pattern allows one object to notify multiple objects whenever its state changes.


class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
    }

    uploadVideo(videoName){
        console.log("New Video Uploaded:"+ videoName);

        this.subscribers.forEach(function(user){
            user.notify(videoName);
        });
    }
}

class User{
    constructor(name){
        this.name = name;
    }

    notify(videoName){
        console.log( this.name + " received notification:"+ videoName);
    }
}

let channel = new YoutubeChannel();

let user1 = new User("AAA");
let user2 = new User("BBB");
let user3 = new User("CCC");
let user4 = new User("DDD");


channel.subscribe(user1);

channel.subscribe(user2);

channel.subscribe(user3);

channel.subscribe(user4);


channel.uploadVideo("sana is good girl");


// Strategy Pattern
// Definition: Strategy Pattern allows us to select different algorithms or methods at runtime without changing the main code.


// Normal Delivery

const normalDelivery = {

    calculate: function() {

        return 50;

    }

};

// Express Delivery

const expressDelivery = {

    calculate: function() {

        return 100;

    }

};

// Same Day Delivery

const sameDayDelivery = {

    calculate: function() {

        return 200;

    }

};

// Delivery Context

class Delivery {

    constructor(strategy) {

        this.strategy = strategy;

    }

    getCost() {

        return this.strategy.calculate();

    }

}

// Selecting delivery methods

let delivery1 = new Delivery(normalDelivery);

let delivery2 = new Delivery(expressDelivery);

let delivery3 = new Delivery(sameDayDelivery);

console.log("Normal Delivery: " + delivery1.getCost());

console.log("Express Delivery: " + delivery2.getCost());

console.log("Same Day Delivery: " + delivery3.getCost());


// Iterator Pattern
// Definition: Iterator Pattern is used to access elements one by one without knowing the internal structure of the collection.


let Pro = ["laptop","mobile","headphones","keyboard"];

let iterator = Pro[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



// Pattern	              Main Purpose	         Real-time Example
// Singleton	      One object only	           Database connection
// Factory	        Create different objects	   Payment methods
// Constructor	     Create similar objects	       Student records
// Module	       Protect private data	         Bank account
// Adapter	        Convert interfaces	           Payment API
// Observer	   Notify multiple objects	         YouTube subscribers
//  Strategy	  Select different algorithms	 Delivery methods
// Iterator	 Access elements one by one	         Product list


// What is Memory Management?
// Memory Management is the process of allocating, using, and releasing memory when a JavaScript application runs.

// In simple words, whenever we create variables, objects, arrays, or functions, JavaScript needs memory to store them.


// Memory Allocation

// JavaScript allocates memory when variables, objects, and functions are created.

// Memory Usage

// The application reads, updates, and uses the stored data.

// Memory Release

// The garbage collector reclaims memory that is no longer reachable.

//

let studentName = "saba";

let studentMarks = [85,78,90];

let studentDetails = {
    name:"Saba",
    age:22,
    course:"Javascript"
};

// memory Allocation and usage

let empName = "kara";

let empAge = 22;

let employee = {
    name:"kara",
    role:"developer",
    salary:25000
};

console.log(empName);
console.log(empAge);

console.log(employee.name);
console.log(employee.role);
console.log(employee.salary);


// What is Garbage Collection?
// Garbage Collection is the automatic process of identifying and removing memory that is no longer accessible or reachable by a JavaScript application.


let stu ={
    name:"tasan",
    age:23,
    course:"Javascript"
};

console.log(stu);

stu = null;
console.log(stu);


//
let employee1 = {
    name: "Rahul"
};

let employee2 = employee1;

console.log(employee1.name);
console.log(employee2.name);

// Removing first reference

employee1 = null;

console.log(employee2.name);

// Removing second reference

employee2 = null;


// What is a Memory Leak?
// A Memory Leak happens when an application keeps references to objects that it no longer needs.


let users = [];

function addUser() {

    users.push({

        name: "Sana",

        age: 22

    });

    console.log("User Added");

}

addUser();

addUser();

addUser();

console.log(users);