// Prototype chain is the process JavaScript uses to search for a property or method when it cannot find it in the current object.

// Think of it like asking for a pen.

// You
//  ↓
// Friend
//  ↓
// Teacher
//  ↓
// Principal
//  ↓
// Nobody

// You ask yourself first:

// "Do I have a pen?"

// If NO → ask your friend.

// If your friend doesn't have it → ask the teacher.

// If the teacher doesn't have it → ask the principal.

// This is similar to the prototype chain.

// example


let person ={
    name:"RRR"
};
console.log(person.name);
console.log(person.age);

// example
const animal = {
    eat:function(){
        console.log("Animal is eating");
    }
};

const cat = Object.create(animal)

cat.cute = function(){
    console.log("cat is cute");
};

cat.cute()
cat.eat();

// example of employees

const employee = {
    work: function(){
        console.log("Employee are working good")
    },
    login: function(){
        console.log("Employee are logged in through their name")

    }
};

const manager = Object.create(employee);

manager.conductMeeting = function(){
    console.log("Manager is conducting meeting");
};

manager.work();
manager.login();
manager.conductMeeting()

// three-level prototype Chain

const grandParent = {
    house: "Big House"
};

const parent = Object.create(grandParent);

parent.car="BMW";
const child = Object.create(parent);
child.fan = "lg fans";

console.log(child.fan);
console.log(child.car);
console.log(child.house);

// Mobile

const device = {
    powerOn: function(){
        console.log("Device is on");
    }
};

const phone = Object.create(device);

phone.call = function(){
    console.log("Making a phone call");
};

const smartPhone = Object.create(phone);

smartPhone.internet = function(){
    console.log("Using internet");
};

smartPhone.internet();
smartPhone.call();
smartPhone.powerOn();


// multiple method

function Stu1(name){
    this.name = name;
}
Stu1.prototype.study = function(){
    console.log(this.name+ " is Studying");
};

Stu1.prototype.play = function(){
    console.log(this.name+ " is Playing");
};

const stu = new Stu1("Tasan");

stu.study();
stu.play();
stu.toString();
