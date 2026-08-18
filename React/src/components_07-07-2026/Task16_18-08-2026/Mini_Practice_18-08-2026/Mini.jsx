import React, { useEffect, useState } from "react";

function Mini() {
  // Store todos
  const [todos, setTodos] = useState([]);

  // Search value
  const [search, setSearch] = useState("");

  // Filter value
  const [filter, setFilter] = useState("all");

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Fetch todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        const data = await response.json();

        // Only take first 20 todos
        setTodos(data.slice(0, 20));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Search + Filter
  const filteredTodos = todos.filter((todo) => {
    // Search by title
    const searchMatch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    // Completed/Pending filter
    const filterMatch =
      filter === "all" ||
      (filter === "completed" && todo.completed) ||
      (filter === "pending" && !todo.completed);

    return searchMatch && filterMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="max-w-5xl mx-auto px-4">

          <h1 className="text-3xl font-bold">
            Todo Search App
          </h1>

          <p className="mt-1 text-blue-100">
            Simple API Search and Filter Project
          </p>

        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">

          <h2 className="text-xl font-bold mb-4">
            Search & Filter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Search */}
            <div>

              <label className="block mb-2 font-medium">
                Search Todo
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search todo..."
                className="w-full border border-gray-300
                rounded-lg px-4 py-3
                focus:outline-none focus:ring-2
                focus:ring-blue-500"
              />

            </div>

            {/* Filter */}
            <div>

              <label className="block mb-2 font-medium">
                Status
              </label>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full border border-gray-300
                rounded-lg px-4 py-3
                focus:outline-none focus:ring-2
                focus:ring-blue-500"
              >

                <option value="all">
                  All
                </option>

                <option value="completed">
                  Completed
                </option>

                <option value="pending">
                  Pending
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white p-8 rounded-xl shadow text-center">

            <div className="text-blue-600 text-lg font-semibold">
              Loading todos...
            </div>

          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="bg-red-100 border border-red-300
          text-red-700 p-5 rounded-lg">

            <h2 className="font-bold">
              Error
            </h2>

            <p>{error}</p>

          </div>
        )}

        {/* Todo List */}
        {!loading && !error && (

          <div>

            <div className="flex justify-between mb-4">

              <h2 className="text-xl font-bold">
                Todo List
              </h2>

              <span className="text-gray-600">
                {filteredTodos.length} todos
              </span>

            </div>

            {/* No Results */}
            {filteredTodos.length === 0 ? (

              <div className="bg-white p-10 rounded-xl
              shadow text-center">

                <h3 className="text-xl font-semibold">
                  No todos found
                </h3>

                <p className="text-gray-500 mt-2">
                  Try a different search or filter.
                </p>

              </div>

            ) : (

              <div className="space-y-3">

                {filteredTodos.map((todo) => (

                  <div
                    key={todo.id}
                    className="bg-white p-5 rounded-lg
                    shadow flex items-center
                    justify-between"
                  >

                    <div>

                      <h3 className="font-semibold text-gray-800">
                        {todo.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Todo ID: {todo.id}
                      </p>

                    </div>

                    {/* Status */}
                    {todo.completed ? (

                      <span className="bg-green-100 text-green-700
                      px-3 py-1 rounded-full text-sm font-medium">
                        Completed
                      </span>

                    ) : (

                      <span className="bg-yellow-100 text-yellow-700
                      px-3 py-1 rounded-full text-sm font-medium">
                        Pending
                      </span>

                    )}

                  </div>

                ))}

              </div>

            )}

          </div>

        )}

      </main>

    </div>
  );
}

export default Mini;