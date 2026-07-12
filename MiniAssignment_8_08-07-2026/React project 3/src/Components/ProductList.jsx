function ProductList({products}){

    return(
        <>
            <h2>Products</h2>

            {
                products.map((product)=>(
                    <div key={product.id}>
                        <h4>{product.name}</h4>
                        <p>Price : ₹{product.price}</p>
                        <hr/>
                    </div>
                ))
            }
        </>
    )
}

export default ProductList;