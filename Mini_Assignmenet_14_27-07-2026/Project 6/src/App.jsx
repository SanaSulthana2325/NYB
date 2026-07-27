import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Loader from "./components/Loader";
import Error from "./components/Error";

import { getProducts } from "./services/productService";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {

    async function loadProducts() {

      try {

        const data = await getProducts();

        setProducts(data);

      }

      catch (err) {

        setError(err.message);

      }

      finally {

        setLoading(false);

      }

    }

    loadProducts();

  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-gray-100">

      <Header />

      <SearchBar

        search={search}

        setSearch={setSearch}

      />

      <div className="text-center mt-5">

        <button

          onClick={() => setCount(count + 1)}

          className="bg-green-600 text-white px-5 py-2 rounded"

        >

          Parent Count : {count}

        </button>

      </div>

      {loading && <Loader />}

      {error && <Error message={error} />}

      <div className="grid md:grid-cols-4 gap-6 p-8">

        {filteredProducts.map(product => (

          <ProductCard

            key={product.id}

            product={product}

          />

        ))}

      </div>

    </div>

  );

}

export default App;