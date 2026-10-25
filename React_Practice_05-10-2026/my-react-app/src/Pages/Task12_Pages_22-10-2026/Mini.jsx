
import { useMemo, useState } from "react";
import UseUsers from "./../../Component/Task12_21-10-2026/Mini_Assignement_21-10-2026/hooks/UseUser";

const emptyForm = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  status: "Active",
};

const inputStyle =
  "w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function Mini() {
  const {
    users,
    loading,
    error,
    addUser,
    updateUser,
    deleteUser,
    loadUsers,
  } = UseUsers();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState("");
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const term = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.username.toLowerCase().includes(term);

      const matchesStatus =
        filter === "All" || user.status === filter;

      return matchesSearch && matchesStatus;
    });
  }, [users, search, filter]);

  function openAdd() {
    setSelected(null);
    setForm(emptyForm);
    setMessage("");
    setModal("form");
  }

  function openEdit(user) {
    setSelected(user);
    setForm({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone || "",
      website: user.website || "",
      status: user.status || "Active",
    });
    setMessage("");
    setModal("form");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      if (selected) {
        await updateUser(selected.id, form);
      } else {
        await addUser(form);
      }

      setModal("");
    } catch (err) {
      setMessage(err.message || "Unable to save user.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(user) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );

    if (!confirmed) return;

    try {
      await deleteUser(user.id);
    } catch (err) {
      window.alert(err.message || "Unable to delete user.");
    }
  }

  const activeCount = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveCount = users.length - activeCount;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              User Management
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage users, profiles and contact details
            </p>
          </div>

          <button
            onClick={openAdd}
            className="rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            + Add User
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-6 px-5 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard title="Total Users" count={users.length} />
          <StatCard title="Active Users" count={activeCount} />
          <StatCard title="Inactive Users" count={inactiveCount} />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, username or email..."
              className={`${inputStyle} flex-1`}
              aria-label="Search users"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`${inputStyle} sm:w-48`}
              aria-label="Filter by status"
            >
              <option value="All">All statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={loadUsers}
              className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-3 h-9 w-9 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
              <p className="text-gray-500">Loading users...</p>
            </div>
          ) : error ? (
            <div className="rounded-lg bg-red-50 p-5 text-center text-red-700">
              <p className="font-semibold">Unable to load users</p>
              <p className="mt-1 text-sm">{error}</p>
              <button
                onClick={loadUsers}
                className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="py-14 text-center">
              <p className="font-semibold text-gray-700">
                No users found
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Try another search or change the status filter.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-3 text-sm text-gray-500">
                Showing {filteredUsers.length} of {users.length} users
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead>
                    <tr className="border-y border-gray-200 bg-gray-50 text-sm text-gray-500">
                      <th className="px-4 py-3 font-medium">User</th>
                      <th className="px-4 py-3 font-medium">Username</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                              {user.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <div>
                              <p className="font-semibold">{user.name}</p>
                              <p className="text-sm text-gray-500">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm">
                          @{user.username}
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => {
                                setSelected(user);
                                setModal("details");
                              }}
                              className="text-sm font-medium text-blue-600 hover:underline"
                            >
                              View
                            </button>

                            <button
                              onClick={() => openEdit(user)}
                              className="text-sm font-medium text-amber-600 hover:underline"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => handleDelete(user)}
                              className="text-sm font-medium text-red-600 hover:underline"
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
            </>
          )}
        </div>
      </section>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <div className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {modal === "details"
                  ? "User Details"
                  : selected
                    ? "Edit User"
                    : "Add New User"}
              </h2>

              <button
                onClick={() => setModal("")}
                className="rounded-lg px-3 py-1 text-xl text-gray-500 hover:bg-gray-100"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {modal === "details" && selected ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-xl bg-blue-50 p-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-200 text-lg font-bold text-blue-700">
                    {selected.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-lg font-bold">{selected.name}</p>
                    <p className="text-sm text-gray-600">
                      @{selected.username}
                    </p>
                  </div>
                </div>

                <Detail label="Email" value={selected.email} />
                <Detail label="Phone" value={selected.phone || "Not provided"} />
                <Detail label="Website" value={selected.website || "Not provided"} />
                <Detail
                  label="City"
                  value={selected.address?.city || "Not provided"}
                />
                <Detail label="Status" value={selected.status} />

                <button
                  onClick={() => openEdit(selected)}
                  className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700"
                >
                  Edit User
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormField
                  label="Full Name"
                  value={form.name}
                  onChange={(value) =>
                    setForm({ ...form, name: value })
                  }
                  placeholder="Enter full name"
                />

                <FormField
                  label="Username"
                  value={form.username}
                  onChange={(value) =>
                    setForm({ ...form, username: value })
                  }
                  placeholder="Enter username"
                />

                <FormField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(value) =>
                    setForm({ ...form, email: value })
                  }
                  placeholder="Enter email address"
                />

                <FormField
                  label="Phone"
                  value={form.phone}
                  onChange={(value) =>
                    setForm({ ...form, phone: value })
                  }
                  placeholder="Enter phone number"
                />

                <FormField
                  label="Website"
                  value={form.website}
                  onChange={(value) =>
                    setForm({ ...form, website: value })
                  }
                  placeholder="Enter website"
                />

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                    className={inputStyle}
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                {message && (
                  <p role="alert" className="text-sm text-red-600">
                    {message}
                  </p>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModal("")}
                    className="flex-1 rounded-lg border border-gray-300 py-2.5 hover:bg-gray-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 rounded-lg bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                  >
                    {saving
                      ? "Saving..."
                      : selected
                        ? "Save Changes"
                        : "Add User"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function StatCard({ title, count }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="mt-2 text-3xl font-bold">{count}</p>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex flex-col gap-1 border-b border-gray-100 pb-3 sm:flex-row sm:justify-between">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="break-all text-sm font-medium">{value}</span>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  );
}
