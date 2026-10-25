
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

// =====================================
// 1. CONTEXT: GLOBAL EMPLOYEE DATA
// =====================================

const EmployeeContext = createContext(null);

function EmployeeProvider({ children }) {
  const [employees, dispatch] = useReducer(employeeReducer, []);

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

function useEmployees() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error(
      "useEmployees must be used inside EmployeeProvider"
    );
  }

  return context;
}

// =====================================
// 2. REDUCER: ADD, UPDATE, DELETE, RESET
// =====================================

function employeeReducer(state, action) {
  switch (action.type) {
    case "RESET":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((employee) =>
        employee.id === action.payload.id
          ? { ...employee, ...action.payload }
          : employee
      );

    case "DELETE":
      return state.filter(
        (employee) => employee.id !== action.payload
      );

    default:
      return state;
  }
}

// =====================================
// 3. CUSTOM HOOK: FETCH API DATA
// =====================================

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load employee data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup: cancel the request if the component
    // unmounts or the URL changes.
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// =====================================
// 4. CUSTOM HOOK: TIMER WITH CLEANUP
// =====================================

function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((previous) => previous + 1);
    }, 1000);

    // Cleanup: prevent the timer from running forever.
    return () => clearInterval(timerId);
  }, []);

  return seconds;
}

// =====================================
// 5. CHILD COMPONENT: USE CONTEXT DIRECTLY
// No employee props needed!
// =====================================

function EmployeeList({ onEdit, onDelete }) {
  const { employees } = useEmployees();

  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div className="employee" key={employee.id}>
          <div>
            <strong>{employee.name}</strong>
            <p>{employee.email}</p>
            <small>Department: {employee.department}</small>
          </div>

          <div className="actions">
            <button onClick={() => onEdit(employee)}>
              Edit
            </button>

            <button
              className="delete"
              onClick={() => onDelete(employee)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// =====================================
// 6. MAIN APPLICATION
// =====================================

function Dashboard() {
  const { employees, dispatch } = useEmployees();

  const {
    data,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const seconds = useTimer();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("IT");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("name");
  const [editId, setEditId] = useState(null);
  const [apiMessage, setApiMessage] = useState("");

  // useEffect with a dependency on API data.
  // Load the fetched employees into the reducer.
  useEffect(() => {
    if (data.length > 0) {
      const initialEmployees = data.map((user, index) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        department: ["IT", "HR", "Finance"][index % 3],
      }));

      dispatch({
        type: "RESET",
        payload: initialEmployees,
      });
    }
  }, [data]);

  // useEffect with a changing dependency.
  // Update the browser tab title when search changes.
  useEffect(() => {
    document.title = search
      ? `Searching: ${search}`
      : "Employee Management";

    return () => {
      document.title = "Employee Management";
    };
  }, [search]);

  // Search, filter, and sort employees.
  const visibleEmployees = employees
    .filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (employee) =>
        filter === "All" || employee.department === filter
    )
    .sort((a, b) =>
      sort === "name"
        ? a.name.localeCompare(b.name)
        : a.email.localeCompare(b.email)
    );

  // POST: create an employee.
  // PUT: update an employee.
  async function handleSubmit(event) {
    event.preventDefault();
    setApiMessage("");

    if (!name.trim() || !email.trim()) {
      setApiMessage("Please enter a name and email.");
      return;
    }

    const employeeData = {
      name: name.trim(),
      email: email.trim(),
      department,
    };

    try {
      const response = await fetch(
        editId
          ? `https://jsonplaceholder.typicode.com/users/${editId}`
          : "https://jsonplaceholder.typicode.com/users",
        {
          method: editId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employeeData),
        }
      );

      if (!response.ok) {
        throw new Error("Could not save employee");
      }

      const savedEmployee = await response.json();

      if (editId) {
        dispatch({
          type: "UPDATE",
          payload: { ...employeeData, id: editId },
        });
        setApiMessage("Employee updated successfully.");
      } else {
        dispatch({
          type: "ADD",
          payload: {
            ...employeeData,
            id: Date.now(),
          },
        });
        setApiMessage("Employee added successfully.");
      }

      setName("");
      setEmail("");
      setDepartment("IT");
      setEditId(null);

      // JSONPlaceholder simulates writes; it does not
      // permanently save changes on its server.
      void savedEmployee;
    } catch (err) {
      setApiMessage(err.message);
    }
  }

  // PATCH: update only the employee's name.
  async function patchEmployee(employee) {
    const updatedName = window.prompt(
      "Enter the new employee name:",
      employee.name
    );

    if (!updatedName?.trim()) return;

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${employee.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: updatedName.trim() }),
        }
      );

      if (!response.ok) throw new Error("Patch failed");

      await response.json();

      dispatch({
        type: "UPDATE",
        payload: {
          id: employee.id,
          name: updatedName.trim(),
        },
      });

      setApiMessage("Employee name patched successfully.");
    } catch (err) {
      setApiMessage(err.message);
    }
  }

  // DELETE: remove employee.
  async function handleDelete(employee) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${employee.id}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Delete failed");

      dispatch({ type: "DELETE", payload: employee.id });
      setApiMessage("Employee deleted successfully.");
    } catch (err) {
      setApiMessage(err.message);
    }
  }

  function handleEdit(employee) {
    setEditId(employee.id);
    setName(employee.name);
    setEmail(employee.email);
    setDepartment(employee.department);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleReset() {
    const initialEmployees = data.map((user, index) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      department: ["IT", "HR", "Finance"][index % 3],
    }));

    dispatch({ type: "RESET", payload: initialEmployees });
    setSearch("");
    setFilter("All");
    setSort("name");
    setApiMessage("Employee list reset to API data.");
  }

  if (loading) {
    return <main className="container"><h2>Loading employees...</h2></main>;
  }

  if (error) {
    return (
      <main className="container">
        <h2>Error: {error}</h2>
        <p>Check your internet connection and refresh the page.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1>Employee Management System</h1>
      <p>Manage employee records using React Hooks and REST APIs.</p>

      <section className="stats">
        <strong>Total employees: {employees.length}</strong>
        <strong>Page timer: {seconds}s</strong>
      </section>

      <h2>{editId ? "Update Employee" : "Add Employee"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Employee name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Employee email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <select
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option>IT</option>
          <option>HR</option>
          <option>Finance</option>
        </select>

        <button type="submit">
          {editId ? "Update Employee" : "Add Employee"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setName("");
              setEmail("");
              setDepartment("IT");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {apiMessage && <p role="status">{apiMessage}</p>}

      <h2>Employee Directory</h2>

      <div className="filters">
        <input
          placeholder="Search employee name..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="All">All departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
        </select>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <p>Showing {visibleEmployees.length} employee(s)</p>

      {visibleEmployees.length === 0 ? (
        <p>No employees match your search or filter.</p>
      ) : (
        <EmployeeList
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <button
        type="button"
        onClick={() => {
          const employee = employees[0];
          if (employee) patchEmployee(employee);
        }}
        disabled={employees.length === 0}
      >
        PATCH First Employee Name
      </button>
    </main>
  );
}

// =====================================
// 7. APP ENTRY POINT
// =====================================

export default function Assigned() {
  return (
    <EmployeeProvider>
      <Dashboard />
    </EmployeeProvider>
  );
}
