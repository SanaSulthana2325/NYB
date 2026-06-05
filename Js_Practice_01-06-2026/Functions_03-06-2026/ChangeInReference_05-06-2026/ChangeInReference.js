//change in this reference
//this methods are used to control the value of THIS inside a function

//1.call()
// syntax[functionName.call(object,arg1,arg2)]

//-->calls the function immediately
//-->Arguments are passed one by one


const student = {
    name: "Sana"
}
function greet(city){
    console.log("Hello " + this.name + " from " + city)
}
greet.call(student, "Hyderabad")

// addition
const number = {
    num1: 10,
    num2: 40

}
function add(){
    console.log(this.num1 + this.num2)
}
add.call(number)

// square of a number
const number1 = {
    value: 80
}
function square(){
    console.log(this.value * this .value)
}
square.call(number1)

// finding maximum num

const data = {
    a: 200,
    b: 60
}
function findMax(){
    console.log(Math.max(this.a, this.b))
}
findMax.call(data)


//ex multiplication table
const table = {
    number: 9
}
function printTable(){
    for (let i = 1; i <= 10; i++){
        console.log(this.number * i)
    }
}

printTable.call(table)

//triangle
const shape = {
    rows: 6
}
function triangle(){
    for(let i = 1; i<= this.rows; i++){
        let row = "";
    for(let j = 1; j <= i; j++){
        row += j;
    }
    console.log(row)
}
}
triangle.call(shape)

// S pattern
const  letter = {
    symbol: "*"
}
function prints(){
    console.log(this.symbol.repeat(5));
    console.log(this.symbol);
    console.log(this.symbol);
    console.log(this.symbol.repeat(5))
    console.log("    " + this.symbol);
    console.log("    " + this.symbol);
    console.log(this.symbol.repeat(5))
}
prints.call(letter)

//2.apply()
// syntax:
//functionName.apply(object, [arg1, arg2])

//--> calls the function immediately
//-->arguments are passed as an array

const student1 = {
    name: "piyush"
};
function greet(city, country){
    console.log( 
        "Hello " + 
        this.name + 
        " from " + 
        city + 
        " , " + 
        country
    );
}
greet.apply(student1, ["hyderabad", "India"]);

// finding maximum num

const data1 = {
    a: 200,
    b: 60
}
function findMax(){
    console.log(Math.max(this.a, this.b))
}
findMax.apply(data1)

//pattern
const pattern = {
    rows: 6
}
function printPattern(){
    for (let i = 1; i <= this.rows; i++){
        console.log(i)
    }
}
printPattern.apply(pattern)


//3. bind()
// syntax: const newFunction = functionName.bind(object)

//
//--->does not call function Immediately
//--->Returns a new function
//---> you can call it later

const student2 ={
    name: "tasan"
}
function greet(){
    console.log("hello " + this.name)
}
const greetStudent2 = greet.bind(student2)
greetStudent2()

//pattern
const pattern1 = {
    rows:10
}
function stars(){
    for (let i = 1; i <= this.rows; i++){
        console.log("*   ".repeat(i))
    }
}
const show = stars.bind(pattern1)
show()

// pyramid
const pyramid = {
    rows:6
}
function printPyramid(){
    for(let i = 1;i <= this.rows; i++){
        console.log(String(i).repeat(i))
    }
}
const show1 = printPyramid.bind(pyramid)
show1()

// 
const pyramid2 = {
    rows:10
}
function printPyramid1(){
    for(let i = 1;i <= this.rows; i++){
        console.log(" ".repeat(this.rows - i) + "*".repeat(i));
    }
}
const show2 = printPyramid1.bind(pyramid2)
show2()
