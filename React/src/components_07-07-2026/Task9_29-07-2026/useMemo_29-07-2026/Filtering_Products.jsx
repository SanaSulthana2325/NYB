import { useMemo, useState } from "react";

function Filtering_Products() {
  const [search, setSearch] = useState("");

  const products = [
    "Laptop",
    "Phone",
    "Headphones",
    "Mouse",
    "Keyboard",
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="p-6 space-y-4">
      <input
        className="border p-2 rounded w-full"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="list-disc pl-5">
        {filteredProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filtering_Products;