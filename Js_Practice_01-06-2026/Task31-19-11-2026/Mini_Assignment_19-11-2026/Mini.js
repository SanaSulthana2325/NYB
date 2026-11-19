
// API URL
const API_URL = "https://dummyjson.com/products";

// Store products
let products = [];


// 1. GET PRODUCTS FROM API

async function getProducts() {

    document.getElementById("loading").innerText =
        "Loading products...";

    try {

        let response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to fetch products");
        }

        let data = await response.json();

        products = data.products;

        displayProducts();

        document.getElementById("loading").innerText = "";

    }
    catch (error) {

        document.getElementById("loading").innerText = "";

        document.getElementById("error").innerText =
            "Something went wrong!";

    }
}


// 2. DISPLAY PRODUCTS

function displayProducts() {

    let list = document.getElementById("productList");

    let search = document.getElementById("search")
        .value.toLowerCase();

    list.innerHTML = "";

    let filtered = products.filter(product =>
        product.title.toLowerCase().includes(search)
    );

    if (filtered.length === 0) {
        list.innerHTML = "<p>No products found</p>";
        return;
    }

    filtered.forEach(product => {

        list.innerHTML += `
            <div class="product">

                <h3>${product.title}</h3>

                <p>Price: $${product.price}</p>

                <button class="edit"
                    onclick="editProduct(${product.id})">
                    Edit
                </button>

                <button class="delete"
                    onclick="deleteProduct(${product.id})">
                    Delete
                </button>

            </div>
        `;

    });

}


// 3. ADD PRODUCT

async function addProduct() {

    let name = document.getElementById("name").value.trim();

    let price = Number(document.getElementById("price").value);

    if (name === "" ||
        document.getElementById("price").value === "" ||
        !Number.isFinite(price) || price <= 0) {

        alert("Enter valid product details");

        return;
    }

    try {

        let response = await fetch(API_URL + "/add", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: name,
                price: price
            })

        });

        if (!response.ok) {
            throw new Error("Unable to add product");
        }

        let newProduct = await response.json();

        products.unshift(newProduct);

        displayProducts();

        document.getElementById("message").innerText =
            "Product added successfully!";

        document.getElementById("name").value = "";

        document.getElementById("price").value = "";

    }
    catch (error) {

        document.getElementById("error").innerText =
            "Failed to add product";

    }

}


// 4. EDIT PRODUCT

async function editProduct(id) {

    let product = products.find(p => p.id === id);

    let newName = prompt("Enter new product name", product.title);

    if (newName === null || newName.trim() === "") return;

    try {

        let response = await fetch(API_URL + "/" + id, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: newName.trim()
            })

        });

        if (!response.ok) {
            throw new Error("Unable to update product");
        }

        let updatedProduct = await response.json();

        products = products.map(p =>
            p.id === id
                ? { ...p, ...updatedProduct }
                : p
        );

        displayProducts();

        document.getElementById("message").innerText =
            "Product updated successfully!";

    }
    catch (error) {

        document.getElementById("error").innerText =
            "Failed to update product";

    }

}


// 5. DELETE PRODUCT

async function deleteProduct(id) {

    let confirmDelete = confirm("Delete this product?");

    if (!confirmDelete) return;

    try {

        let response = await fetch(API_URL + "/" + id, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Unable to delete product");
        }

        products = products.filter(p => p.id !== id);

        displayProducts();

        document.getElementById("message").innerText =
            "Product deleted successfully!";

    }
    catch (error) {

        document.getElementById("error").innerText =
            "Failed to delete product";

    }

}


// 6. CALL API WHEN PAGE OPENS

getProducts();
