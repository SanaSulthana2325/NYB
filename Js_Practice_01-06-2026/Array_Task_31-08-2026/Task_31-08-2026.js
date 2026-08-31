// ==========================================
// ONLINE SHOPPING CART PROJECT
// ==========================================


// PRODUCT ARRAY
let products = [
    {
        id: 101,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        available: true
    },

    {
        id: 102,
        name: "Mobile",
        price: 25000,
        category: "Electronics",
        available: true
    },

    {
        id: 103,
        name: "Headphones",
        price: 3000,
        category: "Accessories",
        available: true
    },

    {
        id: 104,
        name: "Keyboard",
        price: 1500,
        category: "Accessories",
        available: false
    },

    {
        id: 105,
        name: "Mouse",
        price: 800,
        category: "Accessories",
        available: true
    }
];


// ==========================================
// push()
// Add product at the END
// ==========================================

products.push({
    id: 106,
    name: "Smart Watch",
    price: 5000,
    category: "Electronics",
    available: true
});

console.log("After push:", products);


// ==========================================
// pop()
// Remove product from the END
// ==========================================

let removedProduct = products.pop();

console.log("Removed:", removedProduct);


// ==========================================
// unshift()
// Add product at the START
// ==========================================

products.unshift({
    id: 107,
    name: "Tablet",
    price: 20000,
    category: "Electronics",
    available: true
});

console.log("After unshift:", products);


// ==========================================
// shift()
// Remove product from the START
// ==========================================

let firstProduct = products.shift();

console.log("Removed First:", firstProduct);


// ==========================================
// includes()
// Check whether a value exists
// ==========================================

let categories = [
    "Electronics",
    "Accessories",
    "Clothing"
];

console.log(
    "Electronics exists:",
    categories.includes("Electronics")
);


// ==========================================
// indexOf()
// Find the index
// ==========================================

let productNames = [
    "Laptop",
    "Mobile",
    "Headphones",
    "Keyboard",
    "Mouse"
];

console.log(
    "Mobile index:",
    productNames.indexOf("Mobile")
);


// ==========================================
// find()
// Find ONE product
// ==========================================

let foundProduct = products.find(
    product => product.id === 103
);

console.log(
    "Found Product:",
    foundProduct
);


// ==========================================
// filter()
// Find ALL matching products
// ==========================================

let electronics = products.filter(
    product => product.category === "Electronics"
);

console.log(
    "Electronics Products:",
    electronics
);


// ==========================================
// some()
// Check if AT LEAST ONE product is expensive
// ==========================================

let hasExpensiveProduct = products.some(
    product => product.price > 50000
);

console.log(
    "Has Expensive Product:",
    hasExpensiveProduct
);


// ==========================================
// every()
// Check if ALL products are available
// ==========================================

let allAvailable = products.every(
    product => product.available === true
);

console.log(
    "All Products Available:",
    allAvailable
);


// ==========================================
// map()
// Get only product names
// ==========================================

let names = products.map(
    product => product.name
);

console.log(
    "Product Names:",
    names
);


// ==========================================
// map()
// Apply 10% discount
// ==========================================

let discountedProducts = products.map(
    product => {

        return {
            ...product,
            price: product.price * 0.90
        };

    }
);

console.log(
    "Discounted Products:",
    discountedProducts
);


// ==========================================
// reduce()
// Calculate total price
// ==========================================

let totalPrice = products.reduce(
    (total, product) => {

        return total + product.price;

    },
    0
);

console.log(
    "Total Price:",
    totalPrice
);


// ==========================================
// SHOPPING CART
// ==========================================

let cart = [];


// Add products to cart
cart.push(products[0]);
cart.push(products[1]);

console.log(
    "Cart:",
    cart
);


// ==========================================
// Calculate Cart Total
// ==========================================

let cartTotal = cart.reduce(
    (total, product) => {

        return total + product.price;

    },
    0
);

console.log(
    "Cart Total:",
    cartTotal
);


// ==========================================
// Find Mobile
// ==========================================

let mobile = products.find(
    product => product.name === "Mobile"
);

console.log(
    "Mobile:",
    mobile
);


// ==========================================
// Find Products Below ₹5000
// ==========================================

let cheapProducts = products.filter(
    product => product.price < 5000
);

console.log(
    "Cheap Products:",
    cheapProducts
);