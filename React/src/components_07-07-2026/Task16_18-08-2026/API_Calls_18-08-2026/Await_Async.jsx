import React, {useState, useEffect} from 'react'

function Await_Async() {
    const[products, setProducts] = useState([]);

    const fetchProducts = async () =>{
        try{
            const response = await fetch(
                "https://dummyjson.com/products"
            );
            const data = await response.json();
            setProducts(data.products);
        }catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        fetchProducts();
    },[]);
  return (
    <div>
        <h2>Products</h2>

        {products.map((product) =>(
            <div key = {product.id}>
                <h3>{product.title}</h3>
                <p>Price:₹{product.price}</p>
                </div>
        ))}
    </div>
  );
}

export default Await_Async



// Component loads
//       ↓
// useEffect()
//       ↓
// fetchProducts()
//       ↓
// API request
//       ↓
// response
//       ↓
// response.json()
//       ↓
// setProducts()
//       ↓
// UI updates