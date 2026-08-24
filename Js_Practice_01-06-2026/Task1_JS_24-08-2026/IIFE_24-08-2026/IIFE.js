// IIFE in JavaScript

// IIFE stands for Immediately Invoked Function Expression.

// It is a function that is:

// Created
// Immediately executed
// Simple definition

// An IIFE is a function that runs immediately after it is created.


//Basic Example
 (function(){
    console.log("Hello Universe!");
 })();


 // with arrow function

 (() =>{
    console.log("Welcome to World ");
 })();

 // with parameter

 (function(name){
    console.log("hello " + name);
 })("Luli");


 // with multiple parameters

 (function(a,b){
    console.log("Sum =", a+b);
 })(20,80)

 // returing a value

 const result = (function(){
    return 20 +40
 })();

 console.log(result);

 // applicaton

 (function (){
    console.log("Application Started");
    console.log("Loading Configure......");

    console.log("Application  ready!");

 })();


 // User Settings

 const setting= (function(){
    const theme = "dark";
    const language ="English";

    return{
        theme: theme,
        language: language
    };
 })();

 console.log(setting.theme);
 console.log(setting.language);


 // shopping cart

 const cart = (function(){
    let items = [];
    return{
        add: function(item){
            items.push(item);
        },

        show:function(){
            console.log(items);
        }
    };
 })();

 cart.add("Laptop");
 cart.add("mouse");

 cart.show();

// with setTimeout

(function(){
    console.log("starting timer....");

    setTimeout(function(){
        console.log("Timer Completed!");
    },2000)
})();


// | Normal Function              | IIFE                         |
// | ---------------------------- | ---------------------------- |
// | Defined first                | Defined as an expression     |
// | Called separately            | Called immediately           |
// | Can be called multiple times | Usually intended to run once |
// | `greet()`                    | `(function(){})()`           |
