// Get HTML elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");
const clearBtn = document.getElementById("clearBtn");


// Get products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];


// Display products when page loads
displayProducts();


// Add Product Event
addBtn.addEventListener("click", function () {

    const product = productInput.value.trim();

    if (product === "") {
        alert("Please enter a product!");
        return;
    }

    // Add product to array
    products.push(product);

    // Save array to localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Clear input
    productInput.value = "";

    // Display updated list
    displayProducts();
});


// Display Products
function displayProducts() {

    // Clear existing list
    productList.innerHTML = "";

    products.forEach(function (product, index) {

        const li = document.createElement("li");

        li.textContent = product;

        // Store product index
        li.dataset.index = index;

        productList.appendChild(li);
    });
}


// Event Delegation
productList.addEventListener("click", function (event) {

    // Check whether clicked element is an LI
    if (event.target.tagName === "LI") {

        const index = event.target.dataset.index;

        // Remove product
        products.splice(index, 1);

        // Update localStorage
        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );

        // Display updated list
        displayProducts();
    }
});


// Clear All Event
clearBtn.addEventListener("click", function () {

    products = [];

    localStorage.removeItem("products");

    displayProducts();
});