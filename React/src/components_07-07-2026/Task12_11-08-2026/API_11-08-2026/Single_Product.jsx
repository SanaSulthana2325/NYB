import React, {useEffect, useState} from 'react'

function Single_Product() {
    const [product, setProduct] = useState(null);
    useEffect(() =>{
        fetch("https://fakestoreapi.com/products/1")
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (!product) return <h2> Loading.....</h2>;
  return (
    <div>
        <h2>{product.title}</h2>
        <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default Single_Product