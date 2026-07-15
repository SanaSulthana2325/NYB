import ProductCard from "./ProductCard";

function ProductList(){

const products=[

{
id:1,
name:"Laptop",
price:50000
},

{
id:2,
name:"Phone",
price:30000
}

];

return(

<div>

<h2>Products</h2>

{

products.map((product)=>

<ProductCard
key={product.id}
product={product}
/>

)

}

</div>

);

}

export default ProductList;