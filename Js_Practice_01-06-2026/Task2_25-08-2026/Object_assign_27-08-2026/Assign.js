// Object.assign() in JavaScript : 

// Object.assign() is a JavaScript method used to copy properties from one or more objects into another object.

// It is especially useful when you want to merge objects or add properties from one object to another.


// Object.assign() copies properties from one or more source objects into a target object.

// Object.assign(target, source1, source2, ...);

// target → The object that receives the properties.
// source1, source2 → Objects whose properties you want to copy.
// It returns the target object

// example

const stu = {
    name:"Raju",
    age:34
}

const details = {
    couse:"Javascript",
    city:"HYD"
};

Object.assign(stu, details);
console.log(stu);

// with Source and target

const target = {
    name:"Ravu"

};
const source = {
    age:21
};
Object.assign(target,source);

console.log(target)

// merging  two object

const personalDetails  = {
    name:"SASA",
    age:45
};
const ddd={
    job:"Developer",
    experience:2
};

const employee = Object.assign(
    {},
    personalDetails,
    ddd
);

console.log(employee);

// with thtree onjects

const obj1 = {
    color:"Red",
    size:"small"
};

const obj2 = {
    color:"Blue"
};

const obj3 = {
    color:"Green"
};

const result = Object.assign({},obj1,obj2,obj3)

console.log(result);

// with function:
 const user = {
    name:"Ajju"
 };
 const methods = {
    greet(){
        console.log("Hello " + this.name);
    }
 };

 Object.assign(user,methods);
 user.greet();