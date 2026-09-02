// ======================================================
// JAVASCRIPT EVENT LOOP - COMPLETE PROJECT
// ======================================================

// ------------------------------------------------------
// 1. SYNCHRONOUS CODE - CALL STACK
// ------------------------------------------------------

console.log("1. Program Started");


// ------------------------------------------------------
// 2. setTimeout() - WEB API → MACROTASK QUEUE
// ------------------------------------------------------

setTimeout(() => {
    console.log("6. setTimeout 1 executed");

    // Promise created inside setTimeout
    Promise.resolve().then(() => {
        console.log("7. Promise inside setTimeout executed");
    });

}, 0);


// ------------------------------------------------------
// 3. PROMISE - MICROTASK QUEUE
// ------------------------------------------------------

Promise.resolve().then(() => {
    console.log("4. Promise 1 executed");
});


// ------------------------------------------------------
// 4. ASYNC / AWAIT
// ------------------------------------------------------

async function processOrder() {

    console.log("2. Async function started");

    // await pauses this function
    // The remaining code will continue as a microtask
    await Promise.resolve();

    console.log("5. Code after await executed");
}

processOrder();


// ------------------------------------------------------
// 5. ANOTHER setTimeout() - MACROTASK QUEUE
// ------------------------------------------------------

setTimeout(() => {
    console.log("8. setTimeout 2 executed");
}, 0);


// ------------------------------------------------------
// 6. ANOTHER PROMISE - MICROTASK QUEUE
// ------------------------------------------------------

Promise.resolve().then(() => {
    console.log("9. Promise 2 executed");
});


// ------------------------------------------------------
// 7. SYNCHRONOUS CODE CONTINUES
// ------------------------------------------------------

console.log("3. Program Ended");