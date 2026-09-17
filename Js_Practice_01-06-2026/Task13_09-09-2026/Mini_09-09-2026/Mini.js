
// ==========================================
// 1. ARRAY OF OBJECTS
// ==========================================

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        discount: 10,
        details: {
            brand: "Dell"
        }
    },

    {
        id: 2,
        name: "Mobile",
        price: 25000,
        category: "Electronics",
        discount: 15,
        details: {
            brand: "Samsung"
        }
    },

    {
        id: 3,
        name: "Headphones",
        price: 3000,
        category: "Accessories",
        discount: 20,
        details: {
            brand: "Boat"
        }
    },

    {
        id: 4,
        name: "Keyboard",
        price: 1500,
        category: "Accessories",
        discount: 5
    },

    {
        id: 5,
        name: "Notebook",
        price: 100,
        category: "Stationery",
        discount: 0
    }
];


// ==========================================
// 2. DOM ELEMENT
// ==========================================

const output = document.getElementById("output");


// ==========================================
// 3. forEach()
// ==========================================

function showProducts() {

    let result = "<h2>All Products</h2>";

    products.forEach(function(product) {

        result += `
            <div class="product">
                <strong>${product.name}</strong><br>
                Price: ₹${product.price}<br>
                Category: ${product.category}
            </div>
        `;
    });

    output.innerHTML = result;
}


// ==========================================
// 4. map()
// Calculate discounted price
// ==========================================

function showDiscountedProducts() {

    const discountedProducts = products.map(function(product) {

        const discountedPrice =
            product.price - (product.price * product.discount / 100);

        return {
            ...product,
            finalPrice: discountedPrice
        };
    });

    let result = "<h2>Discounted Products</h2>";

    discountedProducts.forEach(function(product) {

        result += `
            <div class="product">
                ${product.name}<br>
                Original Price: ₹${product.price}<br>
                Discount: ${product.discount}%<br>
                Final Price: ₹${product.finalPrice}
            </div>
        `;
    });

    output.innerHTML = result;
}


// ==========================================
// 5. reduce()
// Calculate total price
// ==========================================

function calculateTotal() {

    const total = products.reduce(function(sum, product) {

        return sum + product.price;

    }, 0);

    output.innerHTML = `
        <h2>Total Price</h2>
        <h3>₹${total}</h3>
    `;
}


// ==========================================
// 6. find()
// Find one product
// ==========================================

function findProduct() {

    const product = products.find(function(product) {

        return product.name === "Mobile";

    });

    output.innerHTML = `
        <h2>Product Found</h2>

        <div class="product">
            Name: ${product.name}<br>
            Price: ₹${product.price}<br>
            Category: ${product.category}
        </div>
    `;
}


// ==========================================
// 7. findIndex()
// ==========================================

const mobileIndex = products.findIndex(function(product) {

    return product.name === "Mobile";

});

console.log("Mobile index:", mobileIndex);


// ==========================================
// 8. filter()
// ==========================================

function showExpensiveProducts() {

    const expensiveProducts = products.filter(function(product) {

        return product.price > 5000;

    });

    console.log("Expensive Products:", expensiveProducts);
}


// ==========================================
// 9. some()
// ==========================================

const hasExpensiveProduct = products.some(function(product) {

    return product.price > 40000;

});

console.log("Is there a product above ₹40,000?",
    hasExpensiveProduct
);


// ==========================================
// 10. every()
// ==========================================

const allProductsHavePrice = products.every(function(product) {

    return product.price > 0;

});

console.log(
    "Do all products have valid prices?",
    allProductsHavePrice
);


// ==========================================
// 11. sort()
// Sort products by price
// ==========================================

function sortProducts() {

    const sortedProducts = [...products].sort(function(a, b) {

        return a.price - b.price;

    });

    let result = "<h2>Products Sorted by Price</h2>";

    sortedProducts.forEach(function(product) {

        result += `
            <div class="product">
                ${product.name} - ₹${product.price}
            </div>
        `;
    });

    output.innerHTML = result;
}


// ==========================================
// 12. join()
// ==========================================

function showCategories() {

    const categories = products.map(function(product) {

        return product.category;

    });

    // Remove duplicate categories
    const uniqueCategories = [...new Set(categories)];

    const categoryText = uniqueCategories.join(", ");

    output.innerHTML = `
        <h2>Categories</h2>

        <p>${categoryText}</p>
    `;
}


// ==========================================
// 13. DESTRUCTURING
// ==========================================

function objectDestructuring() {

    const product = products[0];

    const {
        name,
        price,
        category
    } = product;

    console.log("Name:", name);
    console.log("Price:", price);
    console.log("Category:", category);
}

objectDestructuring();


// ==========================================
// 14. ARRAY DESTRUCTURING
// ==========================================

const numbers = [10, 20, 30, 40];

const [first, second, ...remainingNumbers] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remainingNumbers);


// ==========================================
// 15. SPREAD OPERATOR
// ==========================================

// Copy array

const copiedProducts = [...products];

console.log("Copied Products:", copiedProducts);


// Add new product without modifying original array

const newProduct = {
    id: 6,
    name: "Mouse",
    price: 800,
    category: "Accessories",
    discount: 10
};

const updatedProducts = [
    ...products,
    newProduct
];

console.log("Updated Products:", updatedProducts);


// ==========================================
// 16. SPREAD OPERATOR WITH OBJECT
// ==========================================

const student = {
    name: "Rahul",
    age: 21
};

const updatedStudent = {
    ...student,
    course: "JavaScript",
    age: 22
};

console.log("Updated Student:", updatedStudent);


// ==========================================
// 17. REST OPERATOR
// ==========================================

function calculateSum(...numbers) {

    return numbers.reduce(function(total, number) {

        return total + number;

    }, 0);
}

console.log(
    "Sum:",
    calculateSum(10, 20, 30, 40)
);


// ==========================================
// 18. OPTIONAL CHAINING
// ==========================================

const laptop = products.find(function(product) {

    return product.name === "Laptop";

});

console.log(
    "Laptop Brand:",
    laptop?.details?.brand
);


// Keyboard does not have details
const keyboard = products.find(function(product) {

    return product.name === "Keyboard";

});

console.log(
    "Keyboard Brand:",
    keyboard?.details?.brand
);


// ==========================================
// 19. NULLISH COALESCING
// ==========================================

const keyboardBrand =
    keyboard?.details?.brand ?? "Brand Not Available";

console.log(
    "Keyboard Brand:",
    keyboardBrand
);


// ==========================================
// 20. OBJECT MANIPULATION
// ==========================================

function showObjectOperations() {

    let user = {
        name: "Sana",
        age: 22,
        course: "JavaScript"
    };

    // Access property
    console.log("Name:", user.name);

    // Add property
    user.city = "Hyderabad";

    // Update property
    user.age = 23;

    // Delete property
    delete user.course;

    output.innerHTML = `
        <h2>Object Manipulation</h2>

        <p>Name: ${user.name}</p>
        <p>Age: ${user.age}</p>
        <p>City: ${user.city}</p>

        <p>
            Course property was deleted using
            <strong>delete</strong>.
        </p>
    `;
}


// ==========================================
// 21. OBJECT.keys()
// ==========================================

console.log(
    "Object Keys:",
    Object.keys(student)
);


// ==========================================
// 22. OBJECT.values()
// ==========================================

console.log(
    "Object Values:",
    Object.values(student)
);


// ==========================================
// 23. OBJECT.entries()
// ==========================================

console.log(
    "Object Entries:",
    Object.entries(student)
);

