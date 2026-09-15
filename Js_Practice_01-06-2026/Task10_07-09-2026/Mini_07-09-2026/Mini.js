function calculateBill() {

    // -------------------------------
    // 1. Getting values from HTML
    // -------------------------------

    const product = document.getElementById("product").value;

    const priceInput = document.getElementById("price").value;

    const quantityInput = document.getElementById("quantity").value;

    const discountInput = document.getElementById("discount").value;


    // -------------------------------
    // 2. Type Conversion
    // -------------------------------

    const price = Number(priceInput);
    const quantity = Number(quantityInput);
    const discount = Number(discountInput);


    // -------------------------------
    // 3. Validation
    // -------------------------------

    if (
        product === "" ||
        price <= 0 ||
        quantity <= 0 ||
        discount < 0 ||
        discount > 100
    ) {

        document.getElementById("output").innerHTML = `
            <p>Please enter valid details.</p>
        `;

        return;
    }


    // -------------------------------
    // 4. Arithmetic Operators
    // -------------------------------

    const total = price * quantity;

    const discountAmount = total * discount / 100;

    const finalAmount = total - discountAmount;


    // -------------------------------
    // 5. Assignment Operator
    // -------------------------------

    let items = quantity;

    items += 1;

    items -= 1;


    // -------------------------------
    // 6. Comparison Operator
    // -------------------------------

    const isExpensive = finalAmount > 50000;


    // -------------------------------
    // 7. Logical Operator
    // -------------------------------

    const isValidPurchase =
        price > 0 && quantity > 0;


    // -------------------------------
    // 8. typeof Operator
    // -------------------------------

    console.log("Product:", typeof product);
    console.log("Price:", typeof price);
    console.log("Quantity:", typeof quantity);
    console.log("Discount:", typeof discount);


    // -------------------------------
    // 9. Type Coercion Example
    // -------------------------------

    console.log("Type Coercion Example:");

    console.log("10" + 5);

    console.log("10" - 5);


    // -------------------------------
    // 10. Template Literal
    // -------------------------------

    const bill = `
        <h2> Bill Details</h2>

        <p><strong>Product:</strong> ${product}</p>

        <p><strong>Price:</strong> ₹${price}</p>

        <p><strong>Quantity:</strong> ${quantity}</p>

        <p><strong>Total:</strong> ₹${total}</p>

        <p><strong>Discount:</strong> ${discount}%</p>

        <p><strong>Discount Amount:</strong> ₹${discountAmount}</p>

        <p><strong>Final Amount:</strong> ₹${finalAmount}</p>

        <p>
            <strong>Expensive Product:</strong>
            ${isExpensive}
        </p>

        <p>
            <strong>Purchase Valid:</strong>
            ${isValidPurchase}
        </p>
    `;


    // -------------------------------
    // 11. Display Result
    // -------------------------------

    document.getElementById("output").innerHTML = bill;
}