// else-if-else : used when multiple conditions need to be checked

let marks = 75
if (marks >= 90) {
    console.log("Grade A")
} else if(marks >= 70) {
    console.log("grade B")
}else if(marks >= 50){
    console.log("grade C")
}else{
    console.log("fail")
}

//employee performance rating

let rating = 4
if (rating === 5) {
    console.log("excellent")
}else if(rating === 4){
    console.log("very good")
}else if(rating === 3){
    console.log("good")
}else if(rating === 2){
    console.log("need improvement")
}else {
    console.log("poor performnace")
}


//
let speed =95
if(speed >=100){
    console.log("ulta speed")
} else if(speed >=50){
    console.log("average")

}else if(speed >=30){
    console.log("slow")
}

//weather Alert system

let temperature = 20
if(temperature >=45){
    console.log("heat warning")
}else if(temperature >=35){
    console.log("hot weather")
}else if(temperature >= 25){
    console.log("pleasant weather")
}else{
    console.log("cold weather")
}













//Nested if: if statement inside another if statement

let age = 25
let license = true

if(age >=18){
    if (license) {
        console.log("you can drive")
    }else{
        console.log("get a license first")
    }
}
