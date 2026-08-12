import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <main className="max-w-6xl mx-auto p-6">

        <ProductList />

        <div className="mt-10">

          <Cart />

        </div>

      </main>

    </div>
  );
}

export default App;