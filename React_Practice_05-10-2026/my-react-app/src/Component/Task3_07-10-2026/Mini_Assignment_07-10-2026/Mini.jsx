import { useEffect, useState } from "react";

function Mini1() {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  // useEffect runs whenever users changes
  useEffect(() => {
    console.log("Users updated:", users);

    document.title = `Users (${users.length})`;
  }, [users]);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  }

  // Form validation
  function validateForm() {
    if (formData.name.trim() === "") {
      setError("Please enter your name.");
      return false;
    }

    if (formData.email.trim() === "") {
      setError("Please enter your email.");
      return false;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.");
      return false;
    }

    if (formData.age === "") {
      setError("Please enter your age.");
      return false;
    }

    if (Number(formData.age) < 18) {
      setError("Age must be 18 or above.");
      return false;
    }

    return true;
  }

  // Submit form
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Edit existing user
    if (editingId !== null) {
      setUsers(
        users.map((user) =>
          user.id === editingId
            ? {
                ...user,
                name: formData.name,
                email: formData.email,
                age: formData.age,
              }
            : user
        )
      );

      setEditingId(null);
    } 
    
    // Add new user
    else {
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        age: formData.age,
      };

      setUsers([...users, newUser]);
    }

    // Clear form
    setFormData({
      name: "",
      email: "",
      age: "",
    });

    setError("");
  }

  // Edit user
  function handleEdit(user) {
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age,
    });

    setEditingId(user.id);
  }

  // Delete user
  function handleDelete(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  // Cancel edit
  function handleCancelEdit() {
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      age: "",
    });

    setError("");
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <div className="mx-auto max-w-4xl">

        {/* Page Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          User Registration
        </h1>

        {/* Registration Form */}
        <div className="rounded-xl bg-white p-6 shadow-md">

          <h2 className="mb-5 text-xl font-semibold text-gray-700">
            {editingId !== null ? "Edit User" : "Register New User"}
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <label className="mb-2 block font-medium text-gray-700">
                Age
              </label>

              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="mb-4 rounded-lg bg-red-100 p-3 text-red-600">
                {error}
              </p>
            )}

            {/* Buttons */}
            <div className="flex gap-3">

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
              >
                {editingId !== null ? "Update User" : "Register User"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="rounded-lg bg-gray-500 px-5 py-2 font-medium text-white hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}

            </div>
          </form>
        </div>

        {/* User List */}
        <div className="mt-8">

          <h2 className="mb-5 text-2xl font-bold text-gray-800">
            Registered Users
          </h2>

          {/* Conditional Rendering */}
          {users.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center shadow-md">
              <p className="text-gray-500">
                No users registered yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">

              {users.map((user) => (
                <div
                  key={user.id}
                  className="rounded-xl bg-white p-5 shadow-md"
                >
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    {user.name}
                  </h3>

                  <p className="mb-2 text-gray-600">
                    <span className="font-semibold">Email:</span>{" "}
                    {user.email}
                  </p>

                  <p className="mb-4 text-gray-600">
                    <span className="font-semibold">Age:</span>{" "}
                    {user.age}
                  </p>

                  <div className="flex gap-3">

                    <button
                      onClick={() => handleEdit(user)}
                      className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(user.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Mini1;
