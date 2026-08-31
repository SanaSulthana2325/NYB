// Inheritance means one class can reuse the properties and methods of another class.

// In simple words:

// A child class can get the features of a parent class and can also have its own features.

// example

class Animal{
    eat(){
        console.log("Animal is eating");
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is Braking");
    }
}

const dog1 = new Dog();

dog1.eat();
dog1.bark();


// employee to manager

class emp{
    constructor(name,Id,age,salary){
        this.name = name;
        this.Id = Id;
        this.age = age;
        this.salary = salary;
    }
    displayEmp(){
        console.log("Name:", this.name);
        console.log("Id:", this.Id);
        console.log("Age:", this.age);
        console.log("Salary:", this.salary);


    }
}

class Manager extends emp{
    constructor(name,Id,age,salary,teamSize){
        super(name,Id,age,salary);
        this.teamSize = teamSize;
    }
    managerTeam(){
        console.log("managing", this.teamSize,"employees")
    }
}
const manager1 = new Manager("Tasan",101,34,60000,10);

manager1.displayEmp();
manager1.managerTeam();



// | Keyword          | Meaning                      |
// | ---------------- | ---------------------------- |
// | `extends`        | Creates inheritance          |
// | `super()`        | Calls parent constructor     |
// | `super.method()` | Calls parent method          |
// | `this`           | Refers to the current object |
