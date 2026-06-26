//Error handling:
// means dealing with problems in your code without breaking the whole program.

//Instead of crashing, we handle errors safely and show meaningful messages.

//1.try...catch (Main Error Handling)

// -->Used to catch runtime errors

try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Something went wrong!");
}

// real error case
try {
    console.log(x);
} catch (error) {
    console.log("Error caught:", error.message);
}

//2. try...catch...finally
// finally always runs (error or no error)

try {
    console.log("Start");
    let x = 10;
    console.log(x);
} catch (error) {
    console.log("Error occurred");
} finally {
    console.log("Always runs");
}

//3. Throw Custom Errors : We can create our own errors
function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18+");
    }
    return "Allowed";
}

try {
    console.log(checkAge(16));
} catch (error) {
    console.log("Error:", error.message);
}

// Error Handling in JSON (Very Important)

// Used in APIs and localStorage

try {
    let data = JSON.parse("{ bad json }");
    console.log(data);
} catch (error) {
    console.log("Invalid JSON format");
}

// example
try {
    let data = JSON.parse("{ bad json }");
    console.log(data);
} catch (error) {
    console.log("JSON Error :", error.message);
}

// error handling with local storage
try {
    localStorage.setItem("name", "Sana");

    let data = localStorage.getItem("name");
    console.log(data.toUpperCase());
} catch (error) {
    console.log("Storage error:", error.message);
}

//bank system
function withdraw(balance, amount) {
    try {
        if (amount > balance) {
            throw new Error("Insufficient Balance");
        }

        balance -= amount;
        console.log("Remaining Balance:", balance);

    } catch (error) {
        console.log("Transaction Failed:", error.message);
    }
}

withdraw(1000, 1500);

// login system error
function login(username, password) {
    try {
        if (username !== "admin") {
            throw new Error("Invalid username");
        }

        if (password !== "1234") {
            throw new Error("Wrong password");
        }

        console.log("Login successful ");

    } catch (error) {
        console.log("Login failed :", error.message);
    }
}

login("admin", "0000");

// e-commerce error
function addToCart(product) {
    try {
        if (!product) {
            throw new Error("Product not found");
        }

        console.log(product + " added to cart ");

    } catch (error) {
        console.log("Cart Error :", error.message);
    }
}

addToCart();





