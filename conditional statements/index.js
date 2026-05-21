// conditional statements
//1.if condition
//example

function checkElgibility(){
if(age>18){
    console.log("Eligible for vote")
}
}
let age=20
checkElgibility(age)
// truthly values
if(true){
    console.log("Truthly value")
}

if(1){
    console.log("Truthly value")
}
if("hello"){
    console.log("Truthly value")
}// [] this symbol is for array
if([]){
    console.log("Truthly value")
}
if({}){
    console.log("Truthly value")
}//the {} for object


// falsy values
if(0){
    console.log("Truthly value")
}
if(false){
    console.log("Truthly value")
}
if(""){
    console.log("Truthly value")
} // undefined,bigInt, "" ,considered as falsy value

// 2. if else

    if(true){
        console.log("True")
    }
else{
    console.log("False")
}
console.log("hai")
//example
let age1 = 20
if (age >= 18) {
    console.log("Adult")
}
else {
    console.log("Minor")
}
// 3. if else if
//70-80  79
//80-90
//90-100
let marks = 95
if (marks>80){
    console.log("A grade")
}
else if(marks>70){
    console.log("B grade")
}
else if(marks>60){
    console.log("C grade")
}

let k = 10
if(k>0 && k%2==0){
    console.log("Positive number & Even")
}
// undefined
var x = null
console.log(x)
//ex of if-else-if
let a = 95
let b = 90
let c = 60
if((a<c) && (a<c)){
    console.log("a is smallest")
}
else if((b<c) && (b<a)){
    console.log("b is smallest")
}
else{
    console.log("c is smallest")
}
//NaN (Not a Number)

//4. switch
function grades(g){
switch(grade){
    case 10:
        console.log("excelent")
        break;
        case 9:
            console.log("good")
            break;
            case 8:
                console.log("average")
                default:
                    console.log("no value")
                    break;


}
}
var grade = 10
grades(grade)
//example

let day = 4
switch(day){
    case 1:
        console.log("monday")
        break;
        case 2:
            console.log("tuesday")
            break;
            case 3:
                console.log("wednesday")
                break;
                case 4:
                    console.log("thursday")
                    break;
                    default:
                        console.log("no day")
                        break;

                    
} 
//ternary in if-else condition

let results = (marks >= 20) ? "pass" : "fail";
if (marks >= 60) {
    result = "pass";
} else {
    result="fail";
}
console.log(result);

//nested ternary
