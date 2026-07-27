import React from "react";

function ProductCard({product}){

console.log(product.title,"Rendered");

return(

<div className="bg-white rounded-xl shadow-lg p-5">

<img

src={product.image}

className="h-48 mx-auto object-contain"

/>

<h2 className="font-bold mt-4">

{product.title}

</h2>

<p className="text-green-700 font-bold mt-2">

${product.price}

</p>

<p>

⭐ {product.rating.rate}

</p>

<button

className="bg-blue-600 text-white px-4 py-2 rounded mt-3 w-full"

>

Add to Cart

</button>

</div>

)

}

export default React.memo(ProductCard);