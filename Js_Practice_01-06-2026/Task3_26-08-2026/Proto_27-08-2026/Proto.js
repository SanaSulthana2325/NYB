// proto__ is a way to access or change the prototype of an object.

// example:
const stu = {
    name:"sana"
};
console.log(stu._proto_);

// employees example
 const emp = {
    name:"Ravi"
 };

 const emp1={
    name:"Priya"
 };

 console.log(emp.toString());
 console.log(emp1.toString());

 // example

 const person = {
    greet: function() {
        console.log("Hello!");
    }
};

const stu1 = {
    name: "Tasan"
};

stu1.__proto__ = person;

stu1.greet();


// employee method
const employeeMethods = {
    work: function () {
        console.log(this.name + " is working");
    }
};

const employee1 = {
    name: "Ravi"
};

const employee2 = {
    name: "Priya"
};

employee1.__proto__ = employeeMethods;
employee2.__proto__ = employeeMethods;

employee1.work();
employee2.work();






// What is __proto__?

// __proto__ is an accessor that allows us to access an object's prototype.

// 2. What is a prototype?

// A prototype is an object from which another object can inherit properties and methods.

// 3. What is the prototype chain?

// The prototype chain is the chain of objects JavaScript searches when a property or method isn't found directly on an object.

// 4. Difference between __proto__ and prototype?

// __proto__ is related to an object's prototype, while prototype is a property of constructor functions used when creating objects through new.