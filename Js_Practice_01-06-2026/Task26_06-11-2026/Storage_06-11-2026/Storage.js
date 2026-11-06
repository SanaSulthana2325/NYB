// What is Web Storage?
// Web Storage is a browser feature that allows websites to store data on the user's device.

// What is Local Storage?
// Local Storage is a browser storage mechanism that allows us to store data permanently until it is manually deleted or cleared.

// Storing data

localStorage.setItem("username", "Sana");

localStorage.setItem("course", "JavaScript");

localStorage.setItem("age", "22");

// Retrieving data

console.log(localStorage.getItem("username"));

console.log(localStorage.getItem("course"));

console.log(localStorage.getItem("age"));

// Removing one item

localStorage.removeItem("age");

// Checking remaining data

console.log(localStorage.getItem("age"));


//

let savedName = localStorage.getItem("username");

        if (savedName) {

            document.getElementById("message").textContent =
                "Welcome Back " + savedName;

        }

        // Login function

        function login() {

            let name = document.getElementById("username").value;

            if (name === "") {

                alert("Please enter your name");

                return;

            }

            // Store username

            localStorage.setItem("username", name);

            // Display welcome message

            document.getElementById("message").textContent =
                "Welcome " + name;

        }


// What is Session Storage?
// Session Storage is a browser storage mechanism that stores data temporarily for a particular browser tab's page session.


// Storing data

sessionStorage.setItem("studentName", "Sana");

sessionStorage.setItem("exam", "JavaScript");

sessionStorage.setItem("subject", "Web Development");

// Retrieving data

console.log(sessionStorage.getItem("studentName"));

console.log(sessionStorage.getItem("exam"));

console.log(sessionStorage.getItem("subject"));

// Removing one item

sessionStorage.removeItem("exam");

// Checking removed data

console.log(sessionStorage.getItem("exam"));



// What are Cookies?
// Cookies are small pieces of data stored by the browser that websites can use to remember information and communicate with servers.


// Creating a cookie

document.cookie = "username=Sana; max-age=3600; path=/";

// Reading cookies

console.log(document.cookie);

// Creating another cookie

document.cookie = "course=JavaScript; max-age=3600; path=/";

console.log(document.cookie);

// Deleting a cookie

document.cookie = "username=; max-age=0; path=/";

console.log(document.cookie);


// javaScript Performance Optimization
// Meaning: JavaScript Performance Optimization means writing code in a way that makes your application run faster, use less memory, and respond quickly to users.

let num = [10,20,30,40,50,60];

let total = num.reduce((sum,num) => sum + num,0);

console.log(total);
console.log(total);
console.log(total);
console.log(total);


//
let stu1 = ["AAA","BBB","CCC","DDD","EEE"];

let output="";

stu1.forEach((student) =>{
    output +=`<p>${student}</p>`;
});

document.body.innerHTML += output;
