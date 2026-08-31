// A class in JavaScript is a blueprint/template used to create multiple objects with the same structure and behavior.

// Think of it like this:

// Class = Blueprint
// Object = Real thing created from that blueprint

// For example, an Employee class can be used to create many employee objects.

// Basic Syntax
// class ClassName {
//     constructor(parameters) {
//         // properties
//     }

//     methodName() {
//         // behavior
//     }
// }



// student example

class stu {
    constructor(name,age,course){
        this.name = name;
        this.age = age;
        this.course = course;
    }


introduce(){
    console.log( `my name is ${this.name}, i am ${this.age} years old, and I study ${this.course}`);

}
}

const stu1 = new stu("AAA", 34,"Computer Science");
const stu2 = new stu("BBB", 24,"Mechanical");

stu1.introduce();
stu2.introduce();

// example
class CC1{
    constructor(name,age){
        this.name= name;
        this.age = age;
    }
}
const BB = new CC1("GIGI", 37);

console.log(BB)

console.log(BB.name);
console.log(BB.age);

// Multiple Objects

class GG{
    constructor(name,age,course){
        this.name=name;
         this.age = age;
         this.course = course;
    }
}

const kk1 = new GG("teja", 34,"JavaScript");
const kk2 = new GG("sonu", 54,"React");
const kk3 = new GG("minnu", 27,"CSS");

console.log(kk1);
console.log(kk2);
console.log(kk3);

//  adding a Method

class emp{
    constructor(name, age){
    this.name = name;
    this.age = age
    }
    introduce(){
        console.log(`My name is ${this.name}`);
    }
}

const emp1 = new emp("Mira",29);
emp1.introduce();




// CLASS
//   ↓
// Blueprint
//   ↓
// constructor()
//   ↓
// Properties
//   ↓
// new
//   ↓
// OBJECT
//   ↓
// Methods


// | Term            | Simple meaning                    |
// | --------------- | --------------------------------- |
// | `class`         | Blueprint                         |
// | `constructor()` | Initializes object data           |
// | `this`          | Current object                    |
// | `new`           | Creates an object                 |
// | Object          | Actual thing created from class   |
// | Method          | Function inside a class           |
// | `extends`       | Inherit from another class        |
// | `super()`       | Call the parent class constructor |
