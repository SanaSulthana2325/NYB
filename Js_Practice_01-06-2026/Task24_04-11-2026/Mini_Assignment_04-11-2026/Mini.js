
// ======================================================
// MINI ASSIGNMENT: API-BASED PRODUCT SEARCH APPLICATION
// ======================================================

// 1. GET HTML ELEMENTS
const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");
const statusMessage = document.getElementById("status");


// 2. API URL
const API_URL = "https://dummyjson.com/products";


// 3. STORE THE PREVIOUS API REQUEST
let controller;


// ======================================================
// TOPIC 1: FETCH DATA FROM API USING ASYNC/AWAIT
// ======================================================

async function fetchProducts(searchText = "") {

    // Stop the previous request if it is still running
    if (controller) {
        controller.abort();
    }

    // Create a new controller for this request
    controller = new AbortController();

    try {

        // Show loading message
        statusMessage.textContent = "Loading products...";
        statusMessage.className = "loading";

        // Clear previous products
        productList.innerHTML = "";

        // Create API URL
        let url;

        if (searchText.trim() === "") {
            url = `${API_URL}?limit=12`;
        } else {
            url = `${API_URL}/search?q=${encodeURIComponent(searchText)}`;
        }

        // Fetch API data
        const response = await fetch(url, {
            signal: controller.signal
        });

        // Check HTTP response
        if (!response.ok) {
            throw new Error("Unable to fetch products. Please try again.");
        }

        // Convert response into JSON
        const data = await response.json();

        // Display products
        displayProducts(data.products);

    } catch (error) {

        // Ignore requests cancelled by a newer search
        if (error.name === "AbortError") {
            return;
        }

        console.error("API Error:", error);

        statusMessage.textContent =
            "Something went wrong. Please try again.";

        statusMessage.className = "error";
    }
}


// ======================================================
// TOPIC 2: DISPLAY PRODUCTS ON THE HTML PAGE
// ======================================================

function displayProducts(products) {

    // Check whether products are available
    if (!products || products.length === 0) {

        statusMessage.textContent = "No products found!";
        statusMessage.className = "empty";

        return;
    }

    // Show number of products
    statusMessage.textContent =
        `${products.length} product(s) found`;

    statusMessage.className = "";

    // Create HTML for every product
    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">

            <h3>${product.title}</h3>

            <p class="price">$${product.price}</p>

            <p>Category: ${product.category}</p>
        `;

        productList.appendChild(card);

    });
}


// ======================================================
// TOPIC 3: DEBOUNCE FUNCTION
// ======================================================

function debounce(callback, delay) {

    let timer;

    return function (...args) {

        // Clear the previous timer
        clearTimeout(timer);

        // Execute callback after the delay
        timer = setTimeout(() => {
            callback(...args);
        }, delay);

    };
}


// ======================================================
// TOPIC 4: SEARCH USING DEBOUNCE
// ======================================================

const debouncedSearch = debounce((event) => {

    const searchText = event.target.value.trim();

    console.log("Searching for:", searchText);

    fetchProducts(searchText);

}, 500);


// Listen for typing in the search box
searchInput.addEventListener("input", debouncedSearch);


// ======================================================
// TOPIC 5: LOAD INITIAL PRODUCTS
// ======================================================

// Display 12 products when the page first opens
fetchProducts();

