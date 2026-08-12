import { useSelector } from "react-redux";

function Navbar() {

  const items = useSelector(
    state => state.cart.items
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (

    <nav className="bg-blue-600 text-white px-6 py-4 shadow">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          My Store
        </h1>

        <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">

          Cart: {totalItems}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;