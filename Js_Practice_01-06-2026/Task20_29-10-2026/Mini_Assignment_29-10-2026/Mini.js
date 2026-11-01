
const productList = document.getElementById("productList");
const message = document.getElementById("message");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

let products = [];

// 1. Load products from API
async function loadProducts() {
    message.textContent = "Loading products...";

    try {
        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        const data = await response.json();

        products = data.products;

        displayProducts(products);

    } catch (error) {
        message.textContent = "Error: " + error.message;
    }
}

// 2. Display products
function displayProducts(list) {
    productList.innerHTML = "";

    if (list.length === 0) {
        message.textContent = "No products found.";
        return;
    }

    message.textContent = list.length + " products found.";

    list.forEach(function(product) {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <h3></h3>
            <p class="category"></p>
            <p class="price"></p>
            <button class="detailsBtn">Details</button>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;

        div.querySelector("h3").textContent = product.title;
        div.querySelector(".category").textContent =
            "Category: " + product.category;
        div.querySelector(".price").textContent =
            "Price: $" + product.price;

        div.querySelector(".detailsBtn").onclick = function() {
            alert(
                "Product: " + product.title +
                "\nPrice: $" + product.price +
                "\nDescription: " + product.description
            );
        };

        div.querySelector(".editBtn").onclick = function() {
            editProduct(product.id);
        };

        div.querySelector(".deleteBtn").onclick = function() {
            deleteProduct(product.id);
        };

        productList.appendChild(div);
    });
}

// 3. Search products
searchInput.addEventListener("input", function() {
    filterProducts();
});

// 4. Filter by category
categoryFilter.addEventListener("change", function() {
    filterProducts();
});

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = products.filter(function(product) {
        const matchesName = product.title
            .toLowerCase()
            .includes(searchText);

        const matchesCategory =
            category === "" || product.category === category;

        return matchesName && matchesCategory;
    });

    displayProducts(filtered);
}

// 5. Add product
function addProduct() {
    const title = prompt("Enter product name:");
    if (!title || !title.trim()) return;

    const price = Number(prompt("Enter product price:"));

    if (!Number.isFinite(price) || price <= 0) {
        alert("Please enter a valid price.");
        return;
    }

    const newProduct = {
        id: Date.now(),
        title: title.trim(),
        price: price,
        category: "beauty",
        description: "New sample product"
    };

    products.unshift(newProduct);
    filterProducts();

    message.textContent =
        "Product added to the current list.";
}

// 6. Edit product
function editProduct(id) {
    const product = products.find(function(item) {
        return item.id === id;
    });

    if (!product) return;

    const newTitle = prompt("Enter new product name:", product.title);

    if (newTitle && newTitle.trim()) {
        product.title = newTitle.trim();
        filterProducts();
        message.textContent = "Product updated.";
    }
}

// 7. Delete product
function deleteProduct(id) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    products = products.filter(function(product) {
        return product.id !== id;
    });

    filterProducts();
    message.textContent = "Product deleted from the current list.";
}

// Button events
document.getElementById("loadBtn").addEventListener(
    "click",
    loadProducts
);

document.getElementById("addBtn").addEventListener(
    "click",
    addProduct
);
