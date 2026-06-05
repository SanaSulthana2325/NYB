// This Keyword: it refers to the object that is currently executing the function

//
const student = {
    name:"Moni",
    showName: function(){
        console.log(this.name)
    }
}
student.showName()

// employee details

const employee = {
    name:"Rahul",
    Salary:50000,

    displayInfo: function(){
        console.log(this.name)
        console.log(this.Salary)
    }
}
employee.displayInfo()

// this inside an object method
 const student4 = {
    name:"Tasleem",

    showName(){
        console.log(this.name)
    }
 };
 student4.showName();


// this with multiple objects
const student1 = {
    name: "Ali",
    show: function(){
        console.log(this.name)
    }
};
const student2 = {
    name:"Sara",
    show:function(){
        console.log(this.name);
    }
};
const student3 = {
    name:"sulthana",
    show:function(){
        console.log(this.name)
    }
};
student1.show()
student2.show()
student3.show()
student1.show()

// phone object
function Mobile(brand, price){
    this.brand = brand;
    this.price = price;

}
const phone = new Mobile("samsung", 25000)

console.log(phone.brand)
console.log(phone.price)

// this inside Arrow function
const person ={
    name: "Minishir",

    show: function() {
        const arrow = () => {
            console.log(this.name);
        }
        arrow();
    }
};
person.show()

// Arrow function do not create their own this
//they inherit it from the surronding function

// this in a constructor function
function Employee(name, salary){
    this.name = name;
    this.salary = salary
}
const emp1 = new Employee("misba", 60000)
console.log(emp1.name)
console.log(emp1.salary)


//this inside a Nested Regular Function
const Person = {
    name: "Usha",
    show() {
        function inner(){
            console.log(this);
        }
        inner();
    }
};
Person.show();


// bank account object
const account = {
    balance: 20000,
    showBalance(){
        console.log(this.balance)
    }
};
account.showBalance();

// regular function with parameter
function add(a, b){
    console.log(a + b)
}
add(20,45)


// regular function inside an object
const person1 = {
    name: "Lulu",
    show(){
        function inner(){
            console.log(this)
        }
        inner()
    }
}
person1.show()

// because inner() is a regular function
// it does not automatically inherit the objects this

// student Result calculator
const student5 = {
    name: "GGG",
    marks: 90,

    result(){
        if(this.marks >= 35){
            console.log(this.name + " passed")
        }
    }
}
student5.result()

// arrow function will not have their own this
// they inherit this from their surrounding (parent) scope
