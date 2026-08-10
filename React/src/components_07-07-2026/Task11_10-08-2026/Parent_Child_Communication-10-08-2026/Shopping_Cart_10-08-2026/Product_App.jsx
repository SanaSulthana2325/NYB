import React from 'react'
import Product from './Product';

function Product_App() {
    const productName = "Laptop";
    const price = 50000;
  return (
    <>
    <Product
    name={productName}
    price={price}/>
    </>
  )
}

export default Product_App