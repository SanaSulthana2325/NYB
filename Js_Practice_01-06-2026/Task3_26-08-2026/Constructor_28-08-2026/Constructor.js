// . What is constructor()?

// The constructor() is a special method inside a class.

// It runs automatically when we create an object using new.
//Constructor = sets the initial values of an object.

// example

class tt{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const yy = new tt("Tillu", 45);

console.log(yy.name);
console.log(yy.age);


//employee example
class Employee {
    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }
}

const emp1 = new Employee("Sana", 101, "HR");
const emp2 = new Employee("Ravi", 102, "IT");

console.log(emp1);
console.log(emp2);

