// What is Debouncing?
// Debouncing means waiting until the user stops performing an action for a specified amount of time before executing a function.

// In simple words, if the user performs an action repeatedly, JavaScript waits until the user stops.

let search = document.getElementById("search");

let timer;

search.addEventListener("input",function(){
    clearTimeout(timer);

    timer = setTimeout(()=>{
        console.log("Searching:",search.value);
    },1000)
});


// What is Throttling?
// Throttling means allowing a function to execute only once within a specified time interval, even if the user performs the action repeatedly.

// In simple words, it limits how frequently a function can run.


let allowFunction = true;

window.addEventListener("scroll", function(){
    if(allowFunction){
        console.log("Scrolling event executed");

        allowFunction = false;

        setTimeout(()=>{
            allowFunction = true;
        },2000);
    }
});