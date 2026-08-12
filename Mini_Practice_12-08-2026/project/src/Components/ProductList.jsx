import ProductCard from "./ProductCard";

const products = [

  {
    id: 1,
    name: "Laptop",
    price: 50000,
    description: "Powerful laptop for work and study"
  },

  {
    id: 2,
    name: "Headphones",
    price: 2000,
    description: "Wireless headphones with clear sound"
  },

  {
    id: 3,
    name: "Smart Watch",
    price: 5000,
    
    description: "Smart watch with fitness tracking"
  }

];

function ProductList() {

  return (

    <section>

      <h2 className="text-3xl font-bold mb-6">
        Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map(product => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default ProductList;