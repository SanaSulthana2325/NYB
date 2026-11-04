// What is a Static Method?
// A Static Method is a method that belongs to the class itself rather than individual objects.

class Employee {
    constructor(name,department){
        this.name = name;
        this.department = department;
    }

    static companyInfo(){
        console.log("Welcome to saas Company");
        console.log("total Employees: 100")
    }

    displayDetails(){
        console.log("Name:",this.name);
        console.log("Department:",this.department);
    }
}

Employee.companyInfo();

let employee1 = new Employee("Sana","HR");

employee1.displayDetails();



// Normal Method	                             Static Method
// Belongs to the class prototype	             Belongs to the class itself
// Called using an object	                      Called using class name
// Example: employee1.displayDetails()	           Example: Employee.companyInfo()
// Can access instance properties through this  	Does not have an instance as this

//
class Calculator{
    static add(a,b){
        return a + b;
    }

    static multiply(a,b){
        return a* b;
    }
}

console.log(Calculator.add(10,20));

console.log(Calculator.multiply(5,4));


// Where are static methods used?
// - Utility functions.
// - Mathematical calculations.
// - Application-wide helper methods.
// - Data formatting.
// - Validation methods.


// What is a Getter?
// A Getter is a special method used to retrieve or read a property value from an object.

class Emp1{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

    get employeeSalary(){
        return this.salary;
    }
}

let employee11 = new Emp1("raga",45000);

console.log("Employee Name:", employee11.name);

console.log("Employee Salary:", employee11.employeeSalary);


//

class pro{
    constructor(name,price){
        this.name = name;
        this.price=price;
    }

    get finalPrice(){
        return this.price + (this.price * 18/100);
    }
}
// create product

let pro1 = new pro("Mobile",50000);

console.log("Product Name:",pro1.name);
console.log("Original Price:", pro1.price);
console.log("Final Price:", pro1.finalPrice);



// What is a Setter?
// A Setter is a special method used to update or modify a property value in an object.


class Emp3{
    constructor (name,salary){
        this.name = name;
        this.salary = salary
    }

    get salary(){
        return this._salary;
    }

    //setter

    set salary(newSalary){
        if (newSalary > 0){
            this._salary = newSalary;
            console.log("Salary updated Successfully");
        }else{
            console.log("Invalid salary");
        }
    }
}

// create object

let emp4 = new Emp3("Fathima",34000);

console.log("Old Salary:",emp4.salary);

emp4.salary = 46000;
console.log("New Salary:", emp4.salary);

emp4.salary = -5000



// Getter (get)	                   Setter (set)
// Used to retrieve a value	    Used to update a value
// Reads a property	               Assigns a property
// Returns a value	                  Does not need to return a value
// Accessed without parentheses	   Used with assignment
// Example: employee.salary	      Example: employee.salary = 40000


//
class stu {
    constructor(name){
        this._name = name;
    }

    get stuName(){
        return this._name;
    }

    // setter

    set stuName(newName){
        this._name = newName;
    }
}

let stu1 = new stu("Dada");

console.log(stu1.stuName);

stu1.stuName = "hajira";

console.log(stu1.stuName);





// Getter = Get or Read the value.

// Setter = Set or Update the value.