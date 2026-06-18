// Throttling Event: allow an event to run only onces after a fixed time interval,even if the event happens many times

function throttle(func, delay) {

    let lastCall = 0;

    return function(event) {

        let now = Date.now();

        if(now - lastCall >= delay){

            lastCall = now;

            func(event);
        }
    };
}


// 1. Scroll Event

function handleScroll() {
    console.log("Scroll event executed");
}

window.addEventListener(
    "scroll",
    throttle(handleScroll, 1000)
);


// 2. Mouse Move Event

function trackMouse(event) {

    console.log(
        "Mouse Position:",
        event.clientX,
        event.clientY
    );
}

document.addEventListener(
    "mousemove",
    throttle(trackMouse, 500)
);


// 3. Button Click Event

function payment() {
    console.log("Payment Processing.....");
}

document
    .getElementById("btn")
    .addEventListener(
        "click",
        throttle(payment, 3000)
);


// 4. Resize Event

function resizeWindow() {
    console.log("Window resized");
}

window.addEventListener(
    "resize",
    throttle(resizeWindow, 1000)
);



