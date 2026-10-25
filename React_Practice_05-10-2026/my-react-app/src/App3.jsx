
import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useMemo,
  lazy,
  Suspense,
} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

// 1. Sample employee data
const initialEmployees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@gmail.com",
    department: "IT",
    role: "Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Reddy",
    email: "priya@gmail.com",
    department: "HR",
    role: "HR Executive",
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@gmail.com",
    department: "Finance",
    role: "Accountant",
    status: "Inactive",
  },
];

// 2. Reducer: Add, Update and Delete
function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { ...action.employee, id: Date.now() },
      ];

    case "UPDATE":
      return state.map((emp) =>
        emp.id === Number(action.employee.id)
          ? { ...action.employee, id: Number(action.employee.id) }
          : emp
      );

    case "DELETE":
      return state.filter(
        (emp) => emp.id !== Number(action.id)
      );

    default:
      return state;
  }
}

// 3. Context API
const EmployeeContext = createContext(null);

function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(
    employeeReducer,
    initialEmployees
  );
  const [user, setUser] = useState(null);

  function login(email, password) {
    if (!email.trim() || !password.trim()) {
      return false;
    }

    setUser({ email, name: "Admin User" });
    return true;
  }

  function logout() {
    setUser(null);
  }

  return (
    <EmployeeContext.Provider
      value={{ employees, dispatch, user, login, logout }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

function useEmployeeContext() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error("EmployeeProvider is missing");
  }

  return context;
}

// 4. Custom Hook: Search and filter
function useEmployees() {
  const { employees } = useEmployeeContext();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredEmployees = useMemo(
    () =>
      employees.filter((emp) => {
        const query = search.toLowerCase();

        const matchesSearch =
          emp.name.toLowerCase().includes(query) ||
          emp.email.toLowerCase().includes(query) ||
          emp.role.toLowerCase().includes(query);

        const matchesDepartment =
          department === "All" ||
          emp.department === department;

        return matchesSearch && matchesDepartment;
      }),
    [employees, search, department]
  );

  return {
    employees,
    filteredEmployees,
    search,
    setSearch,
    department,
    setDepartment,
  };
}

// 5. Protected Route
function ProtectedRoute() {
  const { user } = useEmployeeContext();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

// 6. Login Page
function Login() {
  const { user, login } = useEmployeeContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  if (user) return <Navigate to="/dashboard" replace />;

  function handleLogin(e) {
    e.preventDefault();

    if (login(email, password)) {
      navigate("/dashboard");
    } else {
      setError("Please enter email and password.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-950 p-5">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-blue-700">
          Employee Portal
        </h1>

        <p className="mb-6 mt-2 text-gray-500">
          Sign in to manage your employees
        </p>

        <label className="font-medium">Email</label>
        <input
          className="mb-4 mt-2 w-full rounded-lg border p-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <label className="font-medium">Password</label>
        <input
          className="mb-4 mt-2 w-full rounded-lg border p-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        {error && (
          <p role="alert" className="mb-3 text-red-600">
            {error}
          </p>
        )}

        <button className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700">
          Login
        </button>

        <p className="mt-4 text-xs text-gray-500">
          Demo: any non-empty email and password
        </p>
      </form>
    </div>
  );
}

// 7. Common layout
function Layout() {
  const { user, logout } = useEmployeeContext();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 md:flex">
      <aside className="bg-blue-950 p-5 text-white md:w-60">
        <h2 className="mb-6 text-2xl font-bold">PeopleDesk</h2>

        <nav className="flex flex-wrap gap-3 md:flex-col">
          <Link className="rounded-lg p-3 hover:bg-blue-800" to="/dashboard">
            Dashboard
          </Link>
          <Link className="rounded-lg p-3 hover:bg-blue-800" to="/employees">
            Employees
          </Link>
        </nav>

        <div className="mt-5 border-t border-blue-800 pt-4">
          <p className="mb-3 text-sm">{user?.email}</p>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-5 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

// 8. Dashboard Page
function Dashboard() {
  const { employees } = useEmployeeContext();

  const active = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const stats = [
    ["Total Employees", employees.length],
    ["Active Employees", active],
    ["Inactive Employees", employees.length - active],
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mb-6 mt-2 text-gray-500">
        Welcome to your employee management portal.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(([title, value]) => (
          <div
            key={title}
            className="rounded-xl bg-white p-6 shadow-sm"
          >
            <p className="text-gray-500">{title}</p>
            <h2 className="mt-3 text-4xl font-bold text-blue-700">
              {value}
            </h2>
          </div>
        ))}
      </div>

      <Link
        to="/employees"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        View Employees →
      </Link>
    </div>
  );
}

// 9. Employee List, Search, Filter and Delete
function Employees() {
  const {
    employees,
    filteredEmployees,
    search,
    setSearch,
    department,
    setDepartment,
  } = useEmployees();

  const { dispatch } = useEmployeeContext();

  function deleteEmployee(emp) {
    if (window.confirm(`Delete ${emp.name}?`)) {
      dispatch({ type: "DELETE", id: emp.id });
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">Employees</h1>
        <Link
          to="/employees/new"
          className="rounded-lg bg-blue-600 px-4 py-3 text-white"
        >
          + Add Employee
        </Link>
      </div>

      <div className="my-5 grid gap-3 sm:grid-cols-2">
        <input
          className="rounded-lg border bg-white p-3"
          placeholder="Search name, email or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="rounded-lg border bg-white p-3"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {[
            "All",
            ...new Set(employees.map((emp) => emp.department)),
          ].map((dep) => (
            <option key={dep} value={dep}>
              {dep === "All" ? "All Departments" : dep}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-3 text-sm text-gray-500">
        Showing {filteredEmployees.length} employees
      </p>

      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full min-w-[650px] text-left">
          <thead className="bg-blue-50">
            <tr>
              {["Name", "Department", "Role", "Status", "Actions"].map(
                (heading) => (
                  <th key={heading} className="p-4">
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <Link
                    className="font-semibold text-blue-700"
                    to={`/employees/${emp.id}`}
                  >
                    {emp.name}
                  </Link>
                  <p className="text-xs text-gray-500">{emp.email}</p>
                </td>
                <td className="p-4">{emp.department}</td>
                <td className="p-4">{emp.role}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      emp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-3">
                    <Link
                      className="font-medium text-blue-600"
                      to={`/employees/${emp.id}/edit`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteEmployee(emp)}
                      className="font-medium text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredEmployees.length === 0 && (
          <p className="p-8 text-center text-gray-500">
            No employees found. Try another search.
          </p>
        )}
      </div>
    </div>
  );
}

// 10. Employee Details with dynamic URL
function EmployeeDetails() {
  const { id } = useParams();
  const { employees } = useEmployeeContext();

  const emp = employees.find((e) => e.id === Number(id));

  if (!emp) {
    return (
      <div className="rounded-xl bg-white p-8">
        <h1 className="text-2xl font-bold">Employee not found</h1>
        <Link className="mt-3 inline-block text-blue-600" to="/employees">
          Back to employees
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl rounded-xl bg-white p-8 shadow-sm">
      <Link to="/employees" className="text-blue-600">
        ← Back
      </Link>

      <h1 className="mb-6 mt-5 text-3xl font-bold">{emp.name}</h1>

      {[
        ["Email", emp.email],
        ["Department", emp.department],
        ["Job Role", emp.role],
        ["Status", emp.status],
      ].map(([label, value]) => (
        <div key={label} className="border-b py-4">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="mt-1 font-semibold">{value}</p>
        </div>
      ))}

      <Link
        to={`/employees/${emp.id}/edit`}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        Edit Employee
      </Link>
    </div>
  );
}

// 11. Add and Edit Employee Form
function EmployeeForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { employees, dispatch } = useEmployeeContext();
  const navigate = useNavigate();

  const existing = employees.find((e) => e.id === Number(id));

  const [form, setForm] = useState(
    () => existing || {
      name: "",
      email: "",
      department: "IT",
      role: "",
      status: "Active",
    }
  );

  const [error, setError] = useState("");

  if (isEdit && !existing) {
    return (
      <div className="rounded-xl bg-white p-8">
        Employee not found.
        <Link to="/employees" className="ml-2 text-blue-600">
          Back
        </Link>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.role.trim()) {
      setError("Name, email and role are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    dispatch({
      type: isEdit ? "UPDATE" : "ADD",
      employee: isEdit ? { ...form, id: Number(id) } : form,
    });

    navigate("/employees");
  }

  return (
    <div className="max-w-2xl rounded-xl bg-white p-6 shadow-sm sm:p-8">
      <Link to="/employees" className="text-blue-600">
        ← Back to Employees
      </Link>

      <h1 className="mb-6 mt-4 text-3xl font-bold">
        {isEdit ? "Edit Employee" : "Add Employee"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ["name", "Full Name"],
          ["email", "Email"],
          ["role", "Job Role"],
        ].map(([name, label]) => (
          <label key={name} className="block">
            <span className="font-medium">{label} *</span>
            <input
              className="mt-2 w-full rounded-lg border p-3"
              type={name === "email" ? "email" : "text"}
              value={form[name]}
              onChange={(e) =>
                setForm({ ...form, [name]: e.target.value })
              }
              placeholder={`Enter ${label.toLowerCase()}`}
            />
          </label>
        ))}

        <label className="block">
          <span className="font-medium">Department</span>
          <select
            className="mt-2 w-full rounded-lg border bg-white p-3"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
          >
            {["IT", "HR", "Finance", "Marketing", "Sales"].map((dep) => (
              <option key={dep}>{dep}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="font-medium">Status</span>
          <select
            className="mt-2 w-full rounded-lg border bg-white p-3"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            {["Active", "Inactive", "On Leave"].map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </label>

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-600">
            {error}
          </p>
        )}

        <button className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700">
          {isEdit ? "Save Changes" : "Add Employee"}
        </button>
      </form>
    </div>
  );
}

// 12. Lazy-loaded pages
// Each page is declared in this same file. These wrappers demonstrate
// React.lazy and Suspense, without creating separate source files.
const LazyDashboard = lazy(() =>
  Promise.resolve({ default: Dashboard })
);
const LazyEmployees = lazy(() =>
  Promise.resolve({ default: Employees })
);
const LazyEmployeeDetails = lazy(() =>
  Promise.resolve({ default: EmployeeDetails })
);
const LazyEmployeeForm = lazy(() =>
  Promise.resolve({ default: EmployeeForm })
);

function Loading() {
  return (
    <div className="flex min-h-48 items-center justify-center gap-3">
      <span className="h-6 w-6 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      <p className="text-gray-600">Loading page...</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="rounded-xl bg-white p-8 text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link to="/dashboard" className="mt-4 inline-block text-blue-600">
        Return to Dashboard
      </Link>
    </div>
  );
}

// 13. Main Application
export default function App3() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route
                  path="/dashboard"
                  element={<LazyDashboard />}
                />
                <Route
                  path="/employees"
                  element={<LazyEmployees />}
                />
                <Route
                  path="/employees/new"
                  element={<LazyEmployeeForm />}
                />
                <Route
                  path="/employees/:id"
                  element={<LazyEmployeeDetails />}
                />
                <Route
                  path="/employees/:id/edit"
                  element={<LazyEmployeeForm />}
                />
              </Route>
            </Route>

            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </EmployeeProvider>
    </BrowserRouter>
  );
}
