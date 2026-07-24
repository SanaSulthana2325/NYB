function Product() {

  const products = [

    { id:1, name:"Laptop", price:50000 },

    { id:2, name:"Mobile", price:25000 },

    { id:3, name:"Headphones", price:3000 }

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl text-center font-bold mb-8">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((product)=> (

          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >

            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>

            <p className="text-blue-600 mt-3">
              ₹ {product.price}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Product;