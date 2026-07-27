import React from "react";

function Delete_Product() {

  const deleteProduct = () => {

  fetch("https://jsonplaceholder.typicode.com/posts/10", {

    method: "DELETE",

  })

    .then((response) => {

      if (response.ok) {

        console.log("Product Deleted Successfully");

      }

    })

    .catch((error) => console.log(error));

};
  return (

    <div>

      <h1>DELETE Example</h1>

      <button onClick={deleteProduct}
        className="bg-pink-300 border border-2px">
      
        Delete Product
      </button>

    </div>

  );
}

export default Delete_Product;