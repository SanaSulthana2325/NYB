
import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";

// ==================================================
// 1. MOCK DATA AND API LOGIC SEPARATE FROM UI
// ==================================================

const employees = [
  { id: 1, name: "Aarav Sharma", role: "Developer" },
  { id: 2, name: "Priya Reddy", role: "Designer" },
  { id: 3, name: "Rahul Kumar", role: "Manager" },
];

// In a real project, keep this API logic in src/api.js.
const employeeAPI = {
  async getEmployees() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Unable to load employees");
    }

    return response.json();
  },
};

// ==================================================
// 2. ERROR BOUNDARY
// ==================================================

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Application error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="m-6 rounded-xl bg-red-100 p-6 text-red-800">
          <h2 className="text-xl font-bold">Something went wrong!</h2>
          <button
            className="mt-3 rounded bg-red-700 px-4 py-2 text-white"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// ==================================================
// 3. REUSABLE UI COMPONENTS
// ==================================================

function Button({ children, onClick, color = "blue" }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-${color}-600 px-4 py-2 text-white hover:opacity-80`}
    >
      {children}
    </button>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
}

// ==================================================
// 4. PROTECTED ROUTE WITH MOCK AUTHENTICATION
// ==================================================

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

// ==================================================
// 5. LAZY-LOADED DEMO COMPONENT
// ==================================================

// This demonstrates Suspense with a simulated lazy import.
// See the explanation below for real code splitting.
function ExtraInfo() {
  return (
    <Card title="Lazy Component">
      <p>This component is rendered through React.lazy and Suspense.</p>
    </Card>
  );
}

const LazyExtraInfo = lazy(() =>
  Promise.resolve({ default: ExtraInfo })
);

// ==================================================
// 6. HOME PAGE
// ==================================================

function Home() {
  const [count, setCount] = useState(0);

  // useRef stores a DOM element without causing a render.
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div className="space-y-5">
      <Card title="Welcome to the React Learning Portal">
        <p>Practice routing, hooks, reusable components, and optimization.</p>
        <p className="mt-2 text-sm text-gray-500">
          Environment message:{" "}
          {import.meta.env.VITE_APP_MESSAGE || "Welcome to the demo"}
        </p>
      </Card>

      <Card title="useRef Example">
        <input
          ref={inputRef}
          placeholder="Enter something..."
          className="mr-2 rounded border p-2"
        />
        <Button onClick={focusInput}>Focus Input</Button>
        <p className="mt-2 text-sm text-gray-500">
          Clicking the button focuses the input.
        </p>
      </Card>

      <Card title="Programmatic Navigation">
        <p>Click to navigate to the employee page.</p>
        <button
          className="mt-3 rounded-lg bg-indigo-600 px-4 py-2 text-white"
          onClick={() => setCount(count + 1)}
        >
          Counter: {count}
        </button>
        <p className="mt-2 text-sm text-gray-500">
          The counter updates without reloading the page.
        </p>
      </Card>

      <Card title="Lazy Loading and Suspense">
        <Suspense fallback={<p>Loading component...</p>}>
          <LazyExtraInfo />
        </Suspense>
      </Card>
    </div>
  );
}

// ==================================================
// 7. EMPLOYEE LIST AND DYNAMIC ROUTES
// ==================================================

function Employees() {
  const [data, setData] = useState(employees);
  const [search, setSearch] = useState("");

  // useMemo caches the filtered result until dependencies change.
  const filteredEmployees = useMemo(() => {
    return data.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  // useCallback caches this function between renders.
  const resetEmployees = useCallback(() => {
    setData(employees);
    setSearch("");
  }, []);

  return (
    <div className="space-y-5">
      <Card title="Employee List">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search employees..."
          className="mb-4 w-full rounded-lg border p-3"
        />

        {filteredEmployees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          <ul className="space-y-3">
            {filteredEmployees.map((employee) => (
              <li
                key={employee.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
              >
                <div>
                  <p className="font-semibold">{employee.name}</p>
                  <p className="text-sm text-gray-500">{employee.role}</p>
                </div>

                <Link
                  to={`/employees/${employee.id}`}
                  className="font-medium text-blue-600"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={resetEmployees}
          className="mt-4 rounded-lg bg-gray-800 px-4 py-2 text-white"
        >
          Reset
        </button>
      </Card>
    </div>
  );
}

// ==================================================
// 8. URL PARAMETERS
// ==================================================

function EmployeeDetails() {
  const { id } = useParams();

  const employee = employees.find(
    (item) => item.id === Number(id)
  );

  if (!employee) {
    return <Card title="Employee not found">No matching employee.</Card>;
  }

  return (
    <Card title="Employee Details">
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <Link
        to="/employees"
        className="mt-3 inline-block text-blue-600"
      >
        Back to Employees
      </Link>
    </Card>
  );
}

// ==================================================
// 9. NESTED ROUTES
// ==================================================

function DashboardLayout() {
  return (
    <Card title="Dashboard">
      <nav className="mb-4 flex gap-4">
        <Link to="/dashboard" className="text-blue-600">
          Overview
        </Link>
        <Link to="/dashboard/settings" className="text-blue-600">
          Settings
        </Link>
      </nav>

      <Outlet />
    </Card>
  );
}

function DashboardOverview() {
  return <p>Dashboard overview: 3 sample employees.</p>;
}

function DashboardSettings() {
  return <p>Settings page: manage your preferences here.</p>;
}

// ==================================================
// 10. LOGIN AND MOCK AUTHENTICATION
// ==================================================

function Login({ onLogin }) {
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    onLogin();
    navigate("/private", { replace: true });
  }

  return (
    <Card title="Mock Login">
      <p className="mb-3 text-gray-600">
        No real account is required for this demonstration.
      </p>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          required
          className="mb-3 block w-full rounded border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="mb-3 block w-full rounded border p-2"
        />
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
          Login
        </button>
      </form>
    </Card>
  );
}

function PrivatePage({ onLogout }) {
  return (
    <Card title="Protected Page">
      <p>You are logged in using mock authentication.</p>
      <button
        onClick={onLogout}
        className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-white"
      >
        Logout
      </button>
    </Card>
  );
}

// ==================================================
// 11. API INTEGRATION WITH LOADING AND ERROR STATES
// ==================================================

function APIPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadUsers() {
    setLoading(true);
    setError("");

    try {
      const result = await employeeAPI.getEmployees();
      setUsers(result.slice(0, 5));
    } catch {
      setError("Could not load users. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card title="API Integration">
      <button
        onClick={loadUsers}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Fetch API Users
      </button>

      {loading && <p className="mt-3">Loading users...</p>}
      {error && <p className="mt-3 text-red-600">{error}</p>}

      {!loading && !error && users.length === 0 && (
        <p className="mt-3">Click the button to fetch users.</p>
      )}

      <ul className="mt-3 list-inside list-disc">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Card>
  );
}

// ==================================================
// 12. 404 PAGE
// ==================================================

function NotFound() {
  return (
    <Card title="404 - Page Not Found">
      <p>The page you requested does not exist.</p>
      <Link to="/" className="mt-3 inline-block text-blue-600">
        Return Home
      </Link>
    </Card>
  );
}

// ==================================================
// 13. MAIN APP AND ROUTER CONFIGURATION
// ==================================================

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 ${
      isActive
        ? "bg-blue-700 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <h1 className="text-xl font-bold text-blue-700">
            React Learning Portal
          </h1>

          <nav className="flex flex-wrap gap-2">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/employees" className={navClass}>Employees</NavLink>
            <NavLink to="/dashboard" className={navClass}>Dashboard</NavLink>
            <NavLink to="/api" className={navClass}>API</NavLink>
            <NavLink to="/private" className={navClass}>Private</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-5 p-5">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/employees" element={<Employees />} />
            <Route
              path="/employees/:id"
              element={<EmployeeDetails />}
            />

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="settings" element={<DashboardSettings />} />
            </Route>

            <Route
              path="/login"
              element={<Login onLogin={() => setIsLoggedIn(true)} />}
            />

            <Route
              path="/private"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <PrivatePage
                    onLogout={() => setIsLoggedIn(false)}
                  />
                </ProtectedRoute>
              }
            />

            <Route path="/api" element={<APIPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default function Assigned_App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
