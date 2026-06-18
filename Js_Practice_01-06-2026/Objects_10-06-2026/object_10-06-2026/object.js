//Objects:it stores data in key values - pairs
//instead of position like array we use
//names
// key will be of strings
// values can be of any datatype
// key and value will be separated by :
// each key value pair will be separated by ","
// {}
//we use objects to store related data

let student = {
    name: "Sana",
    age : 23,
    marks: 99
}
console.log(student)

//object properties
//Data: these store values
//like (name,age,marks)


//Method (function inside object):objects can also contain function

let stu = {
    name:"tasan",
    age: 23,
    marks: 85,
    study: function() {
        console.log("Student is studing");

    }
};
stu.study();

//
let bankAccount = {
    accountHolder: "Ravi",
    balance: 5000,
    deposite: function(amount){
        this.balance += amount;
        console.log("Deposited:", amount)
    },
    withdraw: function(amount){
        this.balance -= amount;
        console.log("withdrawn:", amount)
    }
}
bankAccount.deposite(2000)
console.log(bankAccount.balance)
