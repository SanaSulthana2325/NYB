//Promise Methods://A Promise in JavaScript is an object that represents the future result of an asynchronous operation.

//1. promise.all():
//Runs multiple promises in parallel and waits for all to complete.

//Resolves when all promises succeed.
//Rejects immediately if any one fails.

const p1 = Promise.resolve(" Burger ready");
const p2 = Promise.resolve(" Pizza ready");
const p3 = Promise.resolve(" Biryani ready");

Promise.all([p1, p2, p3])
  .then(result => console.log(result))
  .catch(err => console.log(err));


// sing setTimeout:
const p12 = new Promise(res => setTimeout(() => res("A done"), 1000));
const p22 = new Promise(res => setTimeout(() => res("B done"), 2000));
const p32 = new Promise(res => setTimeout(() => res("C done"), 1500));

Promise.all([p1, p2, p3])
  .then(result => console.log(result));





// promise.allSettled():
//Waits for all promises to finish, regardless of success or failure.

//Returns status of each promise.

//all success
const p15 = Promise.resolve("A done");
const p25 = Promise.resolve("B done");
const p35 = Promise.resolve("C done");

Promise.allSettled([p1, p2, p3])
  .then(result => console.log(result));


//API
const user = Promise.resolve("User loaded");
const notifications = Promise.reject("Notifications failed");
const messages = Promise.resolve("Messages loaded");

Promise.allSettled([user, notifications, messages])
  .then(result => {
    result.forEach(item => {
      console.log(item.status, item.value || item.reason);
    });
  });



//Promise.race():Returns the result of the first promise to settle (resolve or reject).

// instant response system
const fastAPI = new Promise(res =>
  setTimeout(() => res("API 1 response"), 1500)
);

const backupAPI = new Promise(res =>
  setTimeout(() => res("API 2 response"), 1000)
);

Promise.race([fastAPI, backupAPI])
  .then(res => console.log(res));


//promise.any():
//Returns the first fulfilled (successful) promise.

//Ignores rejections unless all fail.

// example API data
const api1 = new Promise((_, reject) =>
  setTimeout(() => reject("API1 down ❌"), 1000)
);

const api2 = new Promise(resolve =>
  setTimeout(() => resolve("API2 data "), 2000)
);

const api3 = new Promise(resolve =>
  setTimeout(() => resolve("API3 data "), 1500)
);

Promise.any([api1, api2, api3])
  .then(res => console.log("RESULT:", res))
  .catch(err => console.log("ERROR:", err));

// example
const p1r = new Promise((_, reject) =>
  setTimeout(() => reject(" Server A failed"), 500)
);

const p2r = new Promise((_, reject) =>
  setTimeout(() => reject(" Server B failed"), 1000)
);

const p3r = new Promise(resolve =>
  setTimeout(() => resolve(" Server C success"), 1500)
);

Promise.any([p1r, p2r, p3r])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// e-commerec 
const amazon = new Promise((_, reject) =>
  setTimeout(() => reject("Amazon out of stock "), 1200)
);

const flipkart = new Promise(resolve =>
  setTimeout(() => resolve("Flipkart ₹5000 "), 2000)
);

const meesho = new Promise(resolve =>
  setTimeout(() => resolve("Meesho ₹4800 (best deal) "), 1500)
);

Promise.any([amazon, flipkart, meesho])
  .then(res => console.log("BEST AVAILABLE:", res));

// login system
const googleLogin = new Promise((_, reject) =>
  setTimeout(() => reject("Google login failed "), 1000)
);

const facebookLogin = new Promise(resolve =>
  setTimeout(() => resolve("Facebook login success "), 2000)
);

const emailLogin = new Promise(resolve =>
  setTimeout(() => resolve("Email login success "), 1500)
);

Promise.any([googleLogin, facebookLogin, emailLogin])
  .then(res => console.log("LOGIN SUCCESS:", res));



// promise.resolve()
//Creates a resolved promise immediately.

const p = Promise.resolve(" Burger is ready");

p.then(result => console.log(result));



// promise.reject()
//Creates a rejected promise immediately.
const pi = Promise.reject(" Order failed");

pi.catch(err => console.log(err));

// promise.finally()
Promise.resolve(" Burger ready")
  .then(res => console.log("SUCCESS:", res))
  .catch(err => console.log("ERROR:", err))
  .finally(() => console.log(" Cleaning done"));

// loading system:
const loading = true;

Promise.resolve(" Data loaded")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log(" Stop loading spinner");
  });



// it is divided into 2 state like a pyramid
//1. pending : still working,result not ready
//2.resolve : for success and // it is used for .then(): waits until the promise is resolved and receives the results from the previous promise
//3.reject : for failure // it is use .catch(): if promise rejected or an error is occurs the control goes to  .catch()



//Async/Await:
//async and await are modern JavaScript features used to handle asynchronous operations in a cleaner and easier way.

// async: it is used before a function and it makes the function always return a promise



// await: used inside async function and it waits until the promise is completed

// example
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(" Data received");
    }, 2000);
  });
}

async function showData() {
  const result = await getData();
  console.log(result);
}

showData();

// multiple await
function step1() {
  return new Promise(res => setTimeout(() => res("Step 1 done"), 1000));
}

function step2() {
  return new Promise(res => setTimeout(() => res("Step 2 done"), 1000));
}

function step3() {
  return new Promise(res => setTimeout(() => res("Step 3 done"), 1000));
}

async function process() {
  const a = await step1();
  console.log(a);

  const b = await step2();
  console.log(b);

  const c = await step3();
  console.log(c);
}

process();

// e-commerce order
function placeOrder() {
  return new Promise(resolve => {
    setTimeout(() => resolve(" Order placed"), 1000);
  });
}

function payment() {
  return new Promise(resolve => {
    setTimeout(() => resolve(" Payment successful"), 1000);
  });
}

function delivery() {
  return new Promise(resolve => {
    setTimeout(() => resolve(" Delivered"), 1000);
  });
}

async function orderFlow() {
  const order = await placeOrder();
  console.log(order);

  const pay = await payment();
  console.log(pay);

  const ship = await delivery();
  console.log(ship);
}

orderFlow();

// delay hepler
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log("Start");

  await delay(2000);
  console.log("After 2 seconds");

  await delay(1000);
  console.log("After 1 more second");
}

demo();


//Destructuring:Destructuring means extracting values from arrays or objects into variables in a simple way.


// Array destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a, b, c);

// skip values
const colors = ["red", "green", "blue"];

const [first, , third] = colors;

console.log(first);
console.log(third);

// default values
const nums = [1];

const [a1, b1 = 100] = nums;

console.log(a1);
console.log(b1);

// object destructuring
const user2 = {
  name: "Sana",
  age: 22
};

const { name, age } = user2;

console.log(name, age);

// rename values
const user3 = {
  name: "Sana",
  age: 22
};

const { name: userName, age: userAge } = user3;

console.log(userName);
console.log(userAge);

// nested destructuring:

const user5 = {
  name: "Sana",
  address: {
    city: "Hyderabad",
    pin: 500001
  }
};

const {
  address: { city, pin }
} = user5;

console.log(city);
console.log(pin);

// function destructuring
function showUser({ name, age }) {
  console.log(name);
  console.log(age);
}

const user7 = { name: "Sana", age: 22 };

showUser(user7);


//Iterators:An iterator is an object that gives values one by one using .next().


function createIterator(arr) {
  let index = 0;

  return {
    next: function () {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const it = createIterator([10, 20, 30]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


//  Generators
//Generator = special function that creates iterator automatically

//Uses function*
// Uses yield instead of return

// example
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// real life counter
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}

const c1 = counter();

console.log(c1.next().value);
console.log(c1.next().value);
console.log(c1.next().value);

// infinite generator
function* infiniteNumbers() {
  let i = 1;

  while (true) {
    yield i;
    i++;
  }
}

const gen1 = infiniteNumbers();

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);

//example
function* steps() {
  yield "Step 1: Start";
  yield "Step 2: Processing";
  yield "Step 3: Finish";
}

const process1 = steps();

console.log(process1.next().value);
console.log(process1.next().value);
console.log(process1.next().value);

//Modules:
//Modules are a way to split code into separate files and reuse them wherever needed.

//Instead of writing everything in one file, we break code into small reusable parts.


// default export: in whole file we can export only one code
// onli 1 export can be done
// we can import with any name
//no need to use {} at the time of input

// named export:


// import:


//Local Storage and Session Storage:
//Both are used to store data in the browser (not in server).
//They are part of Web Storage API.

// local storage:
localStorage.setItem("name1", "SAM");

console.log(localStorage.getItem("name1"));

// dark mode
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
console.log("Theme:", theme);


// session storage
//Stores data only for current tab session
// Data survives refresh
// Deleted when tab is closed

sessionStorage.setItem("user", "Tasan");

console.log(sessionStorage.getItem("user"));


// difference
localStorage.setItem("test", "local data");
sessionStorage.setItem("test", "session data");

console.log(localStorage.getItem("test"));
console.log(sessionStorage.getItem("test"));

//| Feature                | Local Storage | Session Storage  |
//| ---------------------- | ------------- | ---------------- |
//| Lifetime               | Permanent     | Until tab closes |
//| Survives refresh       | Yes           | Yes              |
//| Survives browser close | Yes           | No               |
//| Storage size           | ~5–10MB       | ~5MB             |
//| Scope                  | All tabs      | Single tab       |


//Error Handling:
//Error handling means dealing with mistakes in code so your program doesn’t crash.

//Instead of breaking, we catch the error and handle it properly.


try {
  let t = 10;
  console.log(h); // b is not defined
} catch (error) {
  console.log("Error caught:", error.message);
}


// no error 
try {
  let g = 10;
  let n = 20;
  console.log(g + n);
} catch (error) {
  console.log("Error:", error.message);
}

// .finally
try {
  console.log("Trying...");
  let x = 10 / 2;
  console.log(x);
} catch (error) {
  console.log("Error occurred");
} finally {
  console.log("Done (always runs)");
}
//API Integration:
//Connecting your application (frontend or backend) with an external service to send/receive data.


// basic flow of API integration
//User Action
//  ↓
//Frontend (JavaScript)
//  ↓
// API Request (fetch / axios)
//   ↓
//Server
//   ↓
//JSON Response
//   ↓
//UI Update


// example
async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const list = document.getElementById("users");
  list.innerHTML = "";

  data.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    list.appendChild(li);
  });
}
function clearUsers() {
  const list = document.getElementById("users");
  list.innerHTML = "";
}




//GitHub Repository Management:
//Repository management means:

//Creating, organizing, updating, and maintaining your code project properly on GitHub.

// what is repository
//A project folder that contains your code + history + files.

// creating a repository
//On GitHub website:
//Click New Repository
//Give name (e.g. todo-app)
//Choose Public/Private
//Click Create

// git init:This makes your folder a Git repo

// git remote add origin:This links your project to GitHub

// upload or push code to git hub
//git add .
//git commit -m "Initial commit"
//git push -u origin main


// clone repository:Used when you want to download project from GitHub

// if undate code ar make changes we use pull
//git pull origin main

// branch management
//Branch = separate work line

//Create branch:
//-->git branch feature-login
//Switch branch:
//--->git checkout feature-login
//Merge branch:
//--->git checkout main
//-->git merge feature-login

//push workflow
//Edit code
//   ↓
//git add .
//   ↓
//git commit -m "message"
//   ↓
//git push
//   ↓
//GitHub updated
