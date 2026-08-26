//Constructor:

// A constructor function is a normal JavaScript function that we use with new to create multiple similar objects.

// example

function student(name,age){
    this.name = name;
    this.age = age;
}
const stu1 = new student("AAA", 34);
const stu2 = new student("BBB", 24);

console.log(stu1);
console.log(stu2);

// employee

function employee(name, ID, department){
    this.name = name;
    this.ID = ID;
    this.department = department;
}
const emp1 = new employee("YYY", 101, "HR");
const emp2 = new employee("UUU", 102, "IT");
const emp3 = new employee("GVGV", 103, "Finance");

console.log(emp1);
console.log(emp2);
console.log(emp3);

// bank account:

function bankHolder(accountHolder,balance){
    this.accountHolder = accountHolder;
    this.balance = balance;

}

const account1 = new bankHolder("TATA", 900000);
const account2 = new bankHolder("UIE", 300000);
const account3 = new bankHolder("Mira", 20000);

console.log(account1);
console.log(account2);
console.log(account3);

// with methods

function AA(name,age){
    this.name = name;
    this.age = age;

    this.introduce = function(){
        console.log(
            "My name is " + this.name + " and I am " + this.age + " years old."
        );
    };
}

const BB1 = new AA("sonu",23);
const BB2 = new AA("sony",56);

BB1.introduce();
BB2.introduce();


// constructor and prototype

function gg(city,state){
    this.city = city;
    this.state = state;
}
gg.prototype.places = function(){
    console.log(this.city + " I wanted to go");
}

const gg1 = new gg("warangal","Telangana");
const gg2 = new gg("Hyd","Telangana");

gg1.places();
gg2.places();
