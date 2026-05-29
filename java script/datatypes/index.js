var string="Hello hii"
var k='Hello'
var _m=`Hello`
var sanaSulthana=string
console.log(sanaSulthana)
console.log(k,typeof(k))
console.log("value of_m:", _m,typeof(_m))
console.log(string,typeof(string))

//typeof operator
//primitive
// number

var M=90
console.log(M)
console.log(typeof(M))
// boolean

var a=true
var b=false

console.log(a,typeof(a))
console.log(b)
// unfined
var Ab
console.log(Ab)
//null

var N=null
console.log(N)
// undefined

//var 


var s="string"
var n=1
var b=true
var u
var k=null
console.log(s ,typeof(s))
console.log(n,typeof(n))
console.log(b,typeof(b))
console.log(u,typeof(u))
console.log(k,typeof(k))

var b=10n
console.log(b,typeof(b))

// non-primitive data type

//objects

var obj={name:'sana',role:'software engineer',city:'wgl',number:'8888977775',female:'true',salary:'60000'}
console.log(obj)

//array

var arr=[1,2,3,4,"hello","hai",true,false,null,[34,67,8909,87,65]]
console.log(arr)

// functions

function Hello(){
    console.log("hai! how r u")
}
Hello()

console.log("hai")
//ex

console.log(2000*20)
console.log(2000*23)
console.log(2000*19)

function salary(name,days){
    var perday=2000
    console.log("monthly salary of ",name,"is",perday*days)
     return perday*days
}
salary("sana",24)
console.log(salary("tasan",18))


let today=new Date();
console.log(today);

let birthday = new Date("2001-12-25");
console.log("birthday:", birthday);

function getEmail(){
    let email = document.getElementById("email").value;
    console.log(email);
}


//maps

let l=new Map()
l.set("name",'sanasulthana')
l.set(l,'date')
console.log(l)

//sets



