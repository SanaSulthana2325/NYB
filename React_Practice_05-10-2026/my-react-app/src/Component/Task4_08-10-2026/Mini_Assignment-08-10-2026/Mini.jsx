
import { useEffect, useMemo, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Reusable API functions
const userAPI = {
  getAll: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch users.");
    return response.json();
  },

  create: async (user) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error("Failed to add user.");
    return response.json();
  },

  update: async (id, user) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error("Failed to update user.");
    return response.json();
  },

  remove: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete user.");
  },
};

const emptyForm = {
  name: "",
  username: "",
  email: "",
  phone: "",
  company: "",
};

export default function Mini() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState(emptyForm);

  // GET: Load users from API
  async function loadUsers() {
    setLoading(true);
    setError("");

    try {
      const data = await userAPI.getAll();
      if (!Array.isArray(data)) {
        throw new Error("Invalid response from server.");
      }
      setUsers(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  // Search and company filter
  const companies = useMemo(
    () => [...new Set(users.map((u) => u.company?.name).filter(Boolean))],
    [users]
  );

  const filteredUsers = useMemo(() => {
    const term = search.toLowerCase().trim();

    return users.filter((user) => {
      const matchesSearch = [
        user.name,
        user.username,
        user.email,
        user.company?.name,
      ].some((value) => value?.toLowerCase().includes(term));

      const matchesCompany =
        companyFilter === "all" ||
        user.company?.name === companyFilter;

      return matchesSearch && matchesCompany;
    });
  }, [users, search, companyFilter]);

  function openAddForm() {
    setEditingUser(null);
    setForm(emptyForm);
    setError("");
    setModalOpen(true);
  }

  function openEditForm(user) {
    setEditingUser(user);
    setForm({
      name: user.name || "",
      username: user.username || "",
      email: user.email || "",
      phone: user.phone || "",
      company: user.company?.name || "",
    });
    setError("");
    setModalOpen(true);
  }

  // POST: Add user / PUT: Edit user
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.username.trim() ||
      !form.email.trim()
    ) {
      setError("Name, username and email are required.");
      return;
    }

    setSaving(true);
    setError("");

    const payload = {
      name: form.name.trim(),
      username: form.username.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: {
        name: form.company.trim() || "Independent",
      },
    };

    try {
      if (editingUser) {
        const updated = await userAPI.update(editingUser.id, {
          ...editingUser,
          ...payload,
        });

        setUsers((previous) =>
          previous.map((u) =>
            u.id === editingUser.id ? { ...u, ...updated } : u
          )
        );
      } else {
        const created = await userAPI.create(payload);

        setUsers((previous) => [
          {
            ...payload,
            ...created,
            id: created.id ?? Date.now(),
          },
          ...previous,
        ]);
      }

      setModalOpen(false);
      setForm(emptyForm);
      setEditingUser(null);
    } catch (err) {
      setError(err.message || "Unable to save user.");
    } finally {
      setSaving(false);
    }
  }

  // DELETE: Remove user
  async function handleDelete(user) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );

    if (!confirmed) return;

    setError("");
    setSaving(true);

    try {
      await userAPI.remove(user.id);
      setUsers((previous) =>
        previous.filter((u) => u.id !== user.id)
      );
    } catch (err) {
      setError(err.message || "Unable to delete user.");
    } finally {
      setSaving(false);
    }
  }

  const buttonStyle =
    "rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-indigo-700 sm:text-3xl">
              User Management
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage your users in one place.
            </p>
          </div>

          <button
            onClick={openAddForm}
            className={`${buttonStyle} bg-indigo-600 text-white hover:bg-indigo-700`}
          >
            + Add User
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8">
        {/* Statistics */}
        <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Users</p>
            <p className="mt-2 text-3xl font-bold">{users.length}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Companies</p>
            <p className="mt-2 text-3xl font-bold">{companies.length}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Search Results</p>
            <p className="mt-2 text-3xl font-bold">
              {filteredUsers.length}
            </p>
          </div>
        </section>

        {/* Search and filter */}
        <section className="mb-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
          <div className="relative flex-1">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, username, email..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <select
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
          >
            <option value="all">All companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>

          <button
            onClick={loadUsers}
            disabled={loading || saving}
            className={`${buttonStyle} border border-slate-300 bg-white text-slate-700 hover:bg-slate-100`}
          >
            Refresh
          </button>
        </section>

        {/* Error handling */}
        {error && !modalOpen && (
          <div
            role="alert"
            className="mb-5 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            <span>{error}</span>
            <button
              onClick={() => setError("")}
              className="font-bold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Loading, list and empty states */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h2 className="font-semibold">User List</h2>
            <span className="text-sm text-slate-500">
              {filteredUsers.length} users
            </span>
          </div>

          {loading ? (
            <div className="flex flex-col items-center gap-3 py-16">
              <div className="h-9 w-9 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
              <p className="text-sm text-slate-500">
                Loading users...
              </p>
            </div>
          ) : error && users.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-red-600">{error}</p>
              <button
                onClick={loadUsers}
                className={`${buttonStyle} mt-4 bg-indigo-600 text-white`}
              >
                Try Again
              </button>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="px-5 py-16 text-center">
              <p className="text-lg font-semibold text-slate-700">
                No users found
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Try a different search or company filter.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="px-5 py-4">User</th>
                      <th className="px-5 py-4">Email</th>
                      <th className="px-5 py-4">Phone</th>
                      <th className="px-5 py-4">Company</th>
                      <th className="px-5 py-4 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-800">
                                {user.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                @{user.username}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {user.email}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {user.phone}
                        </td>
                        <td className="px-5 py-4">
                          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                            {user.company?.name || "Independent"}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex justify-end gap-2">
                            <button
                              disabled={saving}
                              onClick={() => openEditForm(user)}
                              className="rounded-md border border-slate-300 px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-50"
                            >
                              Edit
                            </button>
                            <button
                              disabled={saving}
                              onClick={() => handleDelete(user)}
                              className="rounded-md border border-red-200 px-3 py-2 font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="grid gap-3 p-4 md:hidden">
                {filteredUsers.map((user) => (
                  <article
                    key={user.id}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold">{user.name}</p>
                        <p className="break-all text-sm text-slate-500">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-slate-600">
                      Username: @{user.username}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Phone: {user.phone}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Company: {user.company?.name}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <button
                        disabled={saving}
                        onClick={() => openEditForm(user)}
                        className={`${buttonStyle} border border-slate-300 text-slate-700`}
                      >
                        Edit
                      </button>
                      <button
                        disabled={saving}
                        onClick={() => handleDelete(user)}
                        className={`${buttonStyle} border border-red-200 text-red-600`}
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        <p className="mt-5 text-center text-xs text-slate-400">
          User Management • React • Tailwind CSS • Fetch API
        </p>
      </main>

      {/* Add / Edit modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-form-title"
            className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2
                  id="user-form-title"
                  className="text-xl font-bold"
                >
                  {editingUser ? "Edit User" : "Add New User"}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter the user's details below.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close form"
                onClick={() => {
                  setModalOpen(false);
                  setError("");
                }}
                className="rounded-lg px-3 py-2 text-xl text-slate-500 hover:bg-slate-100"
              >
                ×
              </button>
            </div>

            {error && (
              <p
                role="alert"
                className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                ["name", "Full name", "Enter full name"],
                ["username", "Username", "Enter username"],
                ["email", "Email address", "name@example.com"],
                ["phone", "Phone number", "Enter phone number"],
                ["company", "Company", "Enter company name"],
              ].map(([key, label, placeholder]) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    {label}
                    {["name", "username", "email"].includes(key) && (
                      <span className="text-red-500"> *</span>
                    )}
                  </label>

                  <input
                    id={key}
                    type={key === "email" ? "email" : "text"}
                    required={["name", "username", "email"].includes(key)}
                    value={form[key]}
                    onChange={(e) =>
                      setForm((previous) => ({
                        ...previous,
                        [key]: e.target.value,
                      }))
                    }
                    placeholder={placeholder}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              ))}

              <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    setError("");
                  }}
                  className={`${buttonStyle} border border-slate-300 text-slate-700 hover:bg-slate-50`}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className={`${buttonStyle} bg-indigo-600 text-white hover:bg-indigo-700`}
                >
                  {saving
                    ? "Saving..."
                    : editingUser
                      ? "Save Changes"
                      : "Add User"}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
