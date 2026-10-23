// Testing Forms
// Meaning: Form testing checks whether users can enter information and submit it correctly.


function CheckoutForm() {
  return (
    <form>
      <label htmlFor="customer">Customer Name</label>
      <input id="customer" name="customer" />

      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;