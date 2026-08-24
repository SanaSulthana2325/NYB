// First-Class Functions in JavaScript

// First-Class Functions means that in JavaScript, functions are treated like any other value.

// That means a function can be:

// Stored in a variable
// Stored in an array
// Stored in an object
// Passed as an argument to another function
// Returned from another function
// Simple definition

// A function is first-class when it can be treated like a normal value.


// stored in variable

const greet = function(){
    console.log("Hello Nana!");
};
greet();

// arraow function stored in variable

const add = (a,b) =>{
    return a + b;
};

console.log(add(80,10));

// Function passed as  an Argument

function greet1(){
    console.group("Hello!");
}

function executeFunction(callback){
    callback();
}

executeFunction(greet1);

// Important

// greet means:

// Pass the function.

// greet() means:

// Execute the function now.


//Button click
function login(){
    console.log("userLogged In");
}
function handleClick(callback){
    console.log("ButtonClicked!");

    callback();
}

handleClick(login)

//2. stored in Array:
 const members = [
    function(){
        console.log("Add member");
    },
    function(){
        console.log("subtract member");
    },

    function(){
        console.log("Multiply member");
    }

 ];

 members[0]();
 members[1]();

 members[2]();


 // payment methods

 const paymentMethods = [
    function(){
        console.log("payment using credit card")
    },

    function(){
        console.log("payment using UPI");
    },
    function(){
        console.log("payment using Cash on delivery")
    }
 ] ;

 paymentMethods[0]();
 paymentMethods[1]();

 paymentMethods[2]();



 //stored in an object

 const user = {
    name:"Aly",

    greet: function(){
        
        console.log("Hello " + this.name);
    }
 };

 user.greet();


 let user1 = {
    name:"LULU",

    login:function(){
        console.log(this.name + " logged in");
    },

    logout: function(){
        console.log(this.name+ " logged out");
    }
 };

 user1.login();
 user1.logout()



 //3. function return from another function
 function createGreeting(){
    return function(){
        console.log("Hello! World")
    };
 }

 const greet2 = createGreeting()
 greet2()

 // discount function

 function createDiscount(discount){
    return function(price3){
        return price3 - (price3 * discount/100)
    }
 }

 const tenPercentDiscount = createDiscount(10);

 const twentyPercentDiscount = createDiscount(20);

 console.log(tenPercentDiscount(1000));

 console.log(twentyPercentDiscount(1000));

 // passed through map

 const num = [1,2,3,4,5,6];

 function triple(num){
    return num * 3
 }

 const result = num.map(triple);
 console.log(result)


 // Notification example
  const noti = {
    email:function(){
        console.log("Notification Sent through Email")
    },

    sms:function(){
        console.log("Notification sent through SMS")
    },

    WhatApp: function(){
        console.log("Notification sent through whatsApp")
    }
  };

  noti.email();
  noti.sms();
  noti.WhatApp()



//   | First-Class Function                    | Higher-Order Function                        |
// | --------------------------------------- | -------------------------------------------- |
// | Describes how functions are treated     | Describes what a function does               |
// | Functions can be stored/passed/returned | Function accepts or returns another function |
// | It is a language feature/concept        | It is a function behavior                    |
// | Example: storing function in variable   | Example: `map()`, `filter()`                 |
