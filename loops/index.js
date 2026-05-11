//loops
//1. for loop(initialization, condition check, update)

let marks=[1,2,3,4]
console.log(marks[0])
console.log(marks[3])

for(let i=0;i<5;i++){
    console.log(i)
}

//inter link of loops,fuctions,switch

let grades = [8, 10, 7];
for(let i = 0; i < grades.length; i++){
    function grade(g) {
        switch(g){
            case 10:
            console.log("excelent")
        break;
             case 9:
             console.log("good")
        break;
            case 8:
            console.log("average")
        break;
            default:
            console.log("no value")
        break;


}
}
grade(grades[i]);
}

// example of function, switch, loops,array

let colors = ["red", "yellow", "green"];
for(let i = 0; i < colors.length; i++){
function signal(color) {
    switch(color){
        case "red":
            console.log("stop")
            break;
            case "yellow":
                console.log("wait")
                break;
                case "green":
                    console.log("go")
                    break;
                    default:
                        console.log("invalid color")
                        break;
    }
    }
    signal(colors[i]);
}
//exmple:2

let days = [3];
for(let i = 0; i < days.length; i++){
    function day(d){
switch(d){
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
    }

day(days[i]);
                    
} 


//2.while loop
let i=0
while(i<10){
    console.log(i)
    i+=1
}
// even numbers
let k=1 
let count=0
while(count<=20){
    if(k%2==0){
        console.log(k)
    
    }
    k+=1
    count++
}
// example

let m = 2;
let num = 1
while (num <=10) {
    console.log(num);
    num += 2;
}

//3. do while: if the condition is false also it will code one time olny.
 
do {
    console.log("hello")
} while (false);
//example for while loop 

while( false){
    console.log("hai")
}
//example

let index = 1;
do {
    console.log("hai");
    index++;
} while ( index <= 3);

// 4. for of( array) // value we will get

let arr =[1,2,3]
console.log(arr)
for(a of arr){
    console.log(a)
}
// example

let fruits =["apple","banana","mamgo"] 
for(let fruit of fruits){
    console.log(fruit);
}

// for in (object) // key we will get

let obj ={a:"hello",b:"hai"}
console.log(obj["a"])


for(i in obj){
    console.log(obj[i])
}
// example

let student = {
    name:" sana",
    age: 20,
    city:"waranal"
}
for(let key in student){
    console.log(key + ":" +student[key]);
}


    
//for in merge in array
 for(i in arr){
    console.log(i)
 }



 //

 let aa= {
    name: "sana",
    sunjects:["maths","science", "english"]
 }
 for (let key in aa){
    if(key === "subject"){
        for(let sub of aa[key]){
            console.log(sub);
        }
    } else{
           console.log(aa[key]);
    }
 }


