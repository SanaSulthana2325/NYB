// What is extends?

// extends is used to create a child class from a parent class.

// In simple words:

// extends means "this class wants to inherit features from another class."

// Syntax
// class Child extends Parent {
//     // child properties and methods
// }

// basic example
class animal{
    eat(){
        console.log("Animal is eating");
    }
}

class Dog extends animal{
    bark(){
        console.log("Dog is barking");
    }
}

const dog1 = new Dog();

dog1.eat();
dog1.bark();



//2. SUPER():

// super is used inside a child class to access the parent class.

// There are two common uses:

// super()

// Calls the parent constructor.

// super.method()

// Calls a method from the parent class.

// example:
class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("ID:", this.id);
        console.log("Salary:", this.salary);
    }
}

class Manager extends Employee {
    constructor(name, id, salary, teamSize) {
        super(name, id, salary);

        this.teamSize = teamSize;
    }

    displayTeam() {
        console.log("Team Size:", this.teamSize);
    }
}

const manager1 = new Manager("Sana", 101, 60000, 10);

manager1.displayDetails();
manager1.displayTeam();


// student
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log("My name is", this.name);
        console.log("My age is", this.age);


    }
}

class student extends person{
    constructor(name,age, course){
        super(name,age);

        this.course = course;

    }
    study(){
        console.log(this.name, "is studying", this.course);
    }
}
const stu1 = new student("Nashu", 34, "React");

stu1.introduce();
stu1.study();



// extends= inherit
// super() = call parent constructor
// super.method() = call parent method



// | Keyword          | Purpose                             |
// | ---------------- | ----------------------------------- |
// | `extends`        | Creates inheritance between classes |
// | `super()`        | Calls the parent constructor        |
// | `super.method()` | Calls a parent method               |







