// Local Storage
// Local Storage stores key-value pairs in the browser. The data usually remains available even after you close and reopen the browser, until it is cleared or removed by your code or the browser.

// Real-time uses:
// - Remembering a user's theme preference.
// - Saving shopping cart information.
// - Remembering language settings.
// - Saving simple website preferences.

function saveName(){
    const name = document.getElementById("username").value;
    localStorage.setItem("username",name);

    document.getElementById("result").textContent = "name saved successfully!";
}

function showName(){
    const name = localStorage.getItem("username");
    document.getElementById("result").textContent = name ? "welcome, "+ name + "!" : "No name saved.";
}


// Session Storage
// Session Storage also stores key-value pairs, but its data belongs to a particular browser tab's page session. It normally remains available through refreshes in that tab and is cleared when the tab or window session ends.

function saveSession() {
            const name = document.getElementById("raga").value;

            sessionStorage.setItem("raga", name);

            console.log("Saved name:", name);
            console.log("Stored value:", sessionStorage.getItem("raga"));

            document.getElementById("result1").textContent =
                "Name saved: " + name;
        }

        function readSession() {
            const name = sessionStorage.getItem("raga");

            console.log("Retrieved name:", name);

            document.getElementById("result1").textContent =
                name !== null
                    ? "Hello, " + name
                    : "No session name found.";
        }




// Local Storage vs. Session Storage

// Feature	           Local Storage	                      Session Storage

// Lifetime	      Persists until removed or cleared	         Normally ends with the tab's page session

// Page refresh	    Data remains	                        Data remains

// New tab	           Same-origin pages can access the same 
//                           local storage	                   Normally has a separate session

// Typical use	        Theme preference, saved cart	    Temporary tab-specific data 

// Storage format	        Strings	                          Strings 



// JSON
// JSON stands for JavaScript Object Notation. It is a text format used to represent structured data, such as objects, arrays, strings, numbers, booleans, and null.

// JSON is commonly used when:
// - Saving objects in browser storage.
// - Sending data between a frontend and a backend.
// - Receiving employee or product details from an API.
// - Exchanging structured data between applications.

const employee = {
  id: 101,
  name: "Rahul",
  department: "IT",
  salary: 30000
};

console.log(employee.name);
console.log(employee.department);


// JSON.stringify()
// JSON.stringify() converts a JavaScript value, such as an object or array, into a JSON string.

// This is useful because browser storage saves values as strings.


const employee1 = {
  id: 101,
  name: "Rahul",
  department: "IT"
};

const employeeJSON = JSON.stringify(employee1);

console.log(employeeJSON);
console.log(typeof employeeJSON);


// example

const employee2 = {
  name: "Rahul",
  department: "IT"
};

localStorage.setItem("employee2", JSON.stringify(employee2));

console.log(localStorage.getItem("employee2"));


// JSON.parse()
// JSON.parse() converts valid JSON text back into a JavaScript value.

// If you save an object using JSON.stringify(), you can use JSON.parse() to retrieve it as an object again.

const employeeJSON1 =
  '{"id":101,"name":"Rahul","department":"IT"}';

const employee3 = JSON.parse(employeeJSON1);

console.log(employee3.name);
console.log(employee3.department);
console.log(typeof employee3);


// with local storeage

const employee4 = {
  id: 101,
  name: "Rahul",
  department: "IT"
};

// Save the object
localStorage.setItem("employee4", JSON.stringify(employee4));

// Retrieve the saved string
const savedData = localStorage.getItem("employee4");

// Convert the string back into an object
const retrievedEmployee = JSON.parse(savedData);

console.log(retrievedEmployee.name);
console.log(retrievedEmployee.id);


// Storing Objects and Arrays
// You can store both objects and arrays in Local Storage or Session Storage. The main rule is to use JSON.stringify() when saving them and JSON.parse() when retrieving them.

// storing object

 const user = {
      id: 1,
      name: "Priya",
      age: 24,
      city: "Hyderabad"
    };

    function saveUser() {
      localStorage.setItem("user", JSON.stringify(user));

      document.getElementById("result").textContent =
        "User profile saved!";
    }

    function showUser() {
      const data = localStorage.getItem("user");

      if (data === null) {
        document.getElementById("result").textContent =
          "No user profile found.";
        return;
      }

      const savedUser = JSON.parse(data);

      document.getElementById("result").textContent =
        "Name: " + savedUser.name +
        ", Age: " + savedUser.age +
        ", City: " + savedUser.city;
    }


    // storing objects
    const products = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Mouse", price: 500 },
      { id: 3, name: "Keyboard", price: 1500 }
    ];

    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(products));
      console.log("Shopping cart saved!");
    }

    function showCart() {
      const data = localStorage.getItem("cart");

      if (data === null) {
        alert("No cart saved!");
        return;
      }

      const savedProducts = JSON.parse(data);
      const cartList = document.getElementById("cartList");

      cartList.replaceChildren();

      savedProducts.forEach(function(product) {
        const li = document.createElement("li");

        li.textContent = product.name + " - ₹" + product.price;

        cartList.appendChild(li);
      });
    }