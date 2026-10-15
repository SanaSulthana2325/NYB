// Refactor a large component into smaller reusable components.

import { EmpList1 } from "../Task9_15-10-2026/Task9";

//EmplSummary

function EmpSummary({employees}){
    const developrCount = employees.filter(
        (employee)=> employees.filter === "Developer"
    ).length;

    return(
        <>
        <div>
            <p>Total Employees</p>
            <h2> {employees.length}</h2>
        </div>

        <div>
            <p>Developer</p>
            <h2>{developrCount}</h2>
        </div>
        </>
    );
}

// empform

function EmpForm({onAddEmployee}){
    const[name,setName]=useState("");
    const[role,setRole]=useState("Developer");

    function handleSubmit(e){
        e.preventDefault();

        if(!name.trim())return;

        onAddEmployee({
            name:name.trim(),
            role,
        });
        setName("");
        setRole("Developer");
    }

    return(
        <form onSubmit={handleSubmit} className="mb-6 space-y-3 rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-semibold">Add Employee</h2>

            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Employee name" className="w-full rounded border p-2"/>

            <select value={role} onChange={(e)=> setRole(e.target.value)} className="w-full rounded border p-2">
                <option>Developer</option>
                <option>Hr manager</option>
                <option>Accountant</option>


            </select>

            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blu-700">
                Add Employee
            </button>
        </form>
    )
}

// emp Search

function EmpSearch({search,onSearchChange}){
    return(
        <input value={search} onChange={(e)=> onSearchChange(e.target.value)} placeholder="Search employees......" className="mb-4 w-full rounded bg-white p-2"/>
    );
}

// empCard
function EmpCard({employee}){
    return(
        <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="font-semibold">{employee.name}</h3>
        <p className="text-gray-500">{employee.role}</p>
        </div>
    )
}


//EmpList1

function EmpList({ employees }) {
  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <div className="space-y-3">
      {employees.map((employee) => (
        <EmpCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

//App

import { useState } from "react";

function Fd() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Ayesha", role: "Developer" },
    { id: 2, name: "Zeba", role: "HR Manager" },
    { id: 3, name: "Zobiya", role: "Designer" },
  ]);

  const [search, setSearch] = useState("");

  function addEmployee(employee) {
    setEmployees((previousEmployees) => [
      ...previousEmployees,
      { ...employee, id: Date.now() },
    ]);
  }

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold">
          Employee Dashboard
        </h1>

        <EmpSummary employees={employees} />

        <EmpForm onAddEmployee={addEmployee} />

        <EmpSearch
          search={search}
          onSearchChange={setSearch}
        />

        <EmpList employees={filteredEmployees} />
      </div>
    </main>
  );
}


// Create reusable input, button, modal, and table components.

// Reusable Input Component
// An Input component allows users to enter information. We can reuse it for names, emails, phone numbers, and other fields.


function Input({label,type = "text",value,onChange,placeholder}){
    return(
        <div className="mb-4">
            <label className="mb-1 block font-medium">{label}</label>

            <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"/>

        </div>
    );
}

function Fe(){
    const[name,setName]=useState("");
    const[email,setEmail] = useState("");

    return(
        <div className="max-w-md p-6">
            <Input
  label="Student Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter student name"
/>

<Input
  label="Student Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter student email"
/>

<p>Name:{name || "Not entered"}</p>
<p>Email:{email || "Not entered"}</p>

    </div>
    )
}

// Reusable Button Component
// A Button component can be reused for different actions, such as adding, updating, and deleting employees.


function Button({
  children,
  color = "blue",
  onClick,
  type = "button",
}) {
  const styles = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[color]} rounded px-4 py-2 text-white`}
    >
      {children}
    </button>
  );
}

// app

function StuActions() {
  return (
    <div className="flex flex-wrap gap-3 p-4">
      <Button onClick={() => console.log("Student added!")}>
        Add Student
      </Button>

      <Button
        color="green"
        onClick={() => console.log("Student updated!")}
      >
        Edit Student
      </Button>

      <Button
        color="red"
        onClick={() => console.log("Student deleted!")}
      >
        Delete Student
      </Button>
    </div>
  );
}


// Reusable Modal Component
// A Modal is a popup that appears over the current page. It is useful for:
// - Adding a new employee.
// - Editing employee details.
// - Confirming whether a user wants to delete a record.
// - Displaying a success message.

function Modal({title,children,onClose}){
    return(
        <>
        <div>
            <h2>{title}</h2>

            <button type="button" onClick={onClose} className="text-xl text-gray-500 hover:text-black" aria-label="close modal">&times</button>
        </div>
        <div> {children}</div>

        </>
    )
}


// App


function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6">
      <Button onClick={() => setIsOpen(true)}>
        Add Student
      </Button>

      {isOpen && (
        <Modal
          title="Add New Student"
          onClose={() => setIsOpen(false)}
        >
          <p className="mb-4">
            Do you want to add a new Student?
          </p>

          <div className="flex gap-3">
            <Button
              onClick={() => {
                console.log("Student added!");
                setIsOpen(false);
              }}
            >
              Confirm
            </Button>

            <Button
              color="red"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}


// Reusable Table Component
// A Table displays information in rows and columns. It is useful for employee lists, student records, products, and attendance data.


function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto rounded-lg border bg-white">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-3 font-semibold"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={row.id ?? index} className="border-t">
              {columns.map((column) => (
                <td key={column.key} className="p-3">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="p-4 text-center text-gray-500"
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// app


function StudentTable() {
  const columns = [
    { key: "id", label: "Student ID" },
    { key: "name", label: "Student Name" },
    { key: "email", label: "Email" },
    { key: "course", label: "Course" },
  ];

  const students = [
    {
      id: 1,
      name: "Ayesha",
      email: "ayesha@example.com",
      course: "React",
    },
    {
      id: 2,
      name: "Ravi",
      email: "ravi@example.com",
      course: "JavaScript",
    },
    {
      id: 3,
      name: "Zeba",
      email: "zeba@example.com",
      course: "Python",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">
        Student List
      </h1>

      <Table columns={columns} data={students} />
    </div>
  );
}

// Move API calls into a separate service layer.


import { useEffect} from "react";

// ===== SERVICE LAYER =====
const API_URL = "https://jsonplaceholder.typicode.com/users";

const employeeService = {
  async getEmployees() {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }

    return response.json();
  },

  async addEmployee(employee) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    if (!response.ok) {
      throw new Error("Failed to add employee");
    }

    return response.json();
  },

  async deleteEmployee(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete employee");
    }
  },
};

// ===== REACT COMPONENT =====
 function Ge() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch employees
  useEffect(() => {
    async function loadEmployees() {
      try {
        const data = await employeeService.getEmployees();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  // Add employee
  async function handleAdd(event) {
    event.preventDefault();

    if (!name.trim()) return;

    try {
      setError("");

      const newEmployee = await employeeService.addEmployee({
        name: name.trim(),
        email: `${Date.now()}@example.com`,
      });

      setEmployees((previous) => [newEmployee, ...previous]);
      setName("");
    } catch (err) {
      setError(err.message);
    }
  }

  // Delete employee
  async function handleDelete(id) {
    try {
      setError("");
      await employeeService.deleteEmployee(id);

      setEmployees((previous) =>
        previous.filter((employee) => employee.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) {
    return <p className="p-6">Loading employees...</p>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">
          Employee Management
        </h1>

        {error && (
          <p role="alert" className="mb-4 text-red-600">
            {error}
          </p>
        )}

        <form onSubmit={handleAdd} className="mb-6 flex gap-2">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter employee name"
            className="flex-1 rounded border bg-white p-2"
            required
          />

          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Add
          </button>
        </form>

        <div className="space-y-3">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex items-center justify-between gap-3 rounded-lg bg-white p-4 shadow"
            >
              <div>
                <h2 className="font-semibold">{employee.name}</h2>
                <p className="text-gray-500">{employee.email}</p>
              </div>

              <button
                onClick={() => handleDelete(employee.id)}
                className="rounded bg-red-600 px-3 py-2 text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


// Create custom hooks for reusable application logic.
// Create Custom Hooks for Reusable Application Logic in React
// A custom Hook is a JavaScript function that lets you reuse React logic across multiple components. Its name must start with use, such as useEmployees, useFetch, or useToggle.


// implement reusable data-fetchng hook


// ===== REUSABLE DATA-FETCHING HOOK =====
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
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// ===== EMPLOYEE COMPONENT =====
function EmployeeList() {
  const {
    data: employees,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return (
      <p className="p-6 text-blue-600">
        Loading employees...
      </p>
    );
  }

  if (error) {
    return (
      <p className="p-6 text-red-600">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">
          Employee Dashboard
        </h1>

        <div className="space-y-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="rounded-lg bg-white p-4 shadow"
            >
              <h2 className="text-lg font-semibold">
                {employee.name}
              </h2>

              <p className="text-gray-600">
                {employee.email}
              </p>

              <p className="text-sm text-gray-500">
                {employee.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== MAIN APP =====
 function Gf() {
  return <EmployeeList />;
}



// Add an Error Boundary with Fallback UI in React
// An Error Boundary is a React component that catches certain errors occurring while rendering its child components and displays a fallback UI instead of the broken part of the application.
// For example, in your Employee Dashboard, if the employee list component crashes, you can display an error message with a Try Again button instead of showing a blank screen.
// Important: Error Boundaries catch rendering errors in child components. They do not automatically catch API errors, event-handler errors, or errors inside asynchronous code. Handle API errors separately using try/catch, as in your useFetch() Hook.



import { Component} from "react";

// ===== ERROR BOUNDARY =====
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Application error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="m-6 rounded-lg border border-red-300 bg-red-50 p-6 text-center">
          <h2 className="mb-2 text-xl font-bold text-red-700">
            Something went wrong!
          </h2>

          <p className="mb-4 text-gray-700">
            The employee section could not be displayed.
          </p>

          <button
            onClick={this.props.onReset}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// ===== EMPLOYEE COMPONENT =====
function EmployeeList1({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error("Unable to render employee list");
  }

  const employees = [
    { id: 1, name: "Ravi Kumar", role: "Developer" },
    { id: 2, name: "Priya Sharma", role: "HR Manager" },
    { id: 3, name: "Arun Kumar", role: "Designer" },
  ];

  return (
    <div className="space-y-3">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="rounded-lg bg-white p-4 shadow"
        >
          <h3 className="font-semibold">{employee.name}</h3>
          <p className="text-gray-500">{employee.role}</p>
        </div>
      ))}
    </div>
  );
}

// ===== MAIN APP =====
function Gg() {
  const [shouldCrash, setShouldCrash] = useState(false);
  const [boundaryKey, setBoundaryKey] = useState(0);

  function handleReset() {
    setShouldCrash(false);
    setBoundaryKey((previous) => previous + 1);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold">
          Employee Dashboard
        </h1>

        <button
          onClick={() => setShouldCrash(true)}
          className="mb-6 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Simulate Error
        </button>

        <ErrorBoundary
          key={boundaryKey}
          onReset={handleReset}
        >
          <EmployeeList1 shouldCrash={shouldCrash} />
        </ErrorBoundary>
      </div>
    </main>
  );
}





export{Fd,Fe,StuActions,ModalExample,StudentTable, Ge,Gf,Gg}




// What does refactoring mean?
// Refactoring means improving the structure of existing code without changing what the application does.
// Suppose you have an Employee Management Dashboard. One large React component handles everything:
// - Displays the dashboard heading.
// - Shows employee summary cards.
// - Searches employees.
// - Displays the employee list.
// - Adds new employees.
// - Handles button clicks.
// Instead of keeping all this code inside one component, we divide it into smaller, reusable components.


// Organize a React Application Using Feature-Based Folders
// A feature-based folder structure means organizing your React project according to the features of the application instead of putting all components into one common folder.
// For example, in an Employee Management Dashboard, you can create separate folders for Employees, Dashboard, and shared components.



// Why is this better?
// Before	                                 After

// Components mixed in one place	   Components grouped by feature

// Large App.jsx	                       Small App.jsx

// Harder to locate employee code	     Employee code lives in one folder

// Difficult to expand	                      asier to add new features


// Create Reusable Input, Button, Modal, and Table Components in React
// In React, reusable components are components that you create once and use in multiple places with different data or styles.
// For example, in an Employee Management Dashboard, you might need:
// - Input: to enter an employee name or email.
// - Button: to add, edit, or delete an employee.
// - Modal: to display a popup form or confirmation message.
// - Table: to display employee records in rows and columns.
// Instead of writing the same code repeatedly, we create reusable components using props.

// Configure environment variables for API URLs.

// In React, environment variables allow us to store API URLs and other configuration values outside our component code.


// Why is this useful?
// - Easily switch between development and production API URLs.
// - Avoid repeating the same URL in multiple components.
// - Keep configuration separate from application logic.
// - Make the application easier to maintain.


// Configure different URLs for different environments

// You can create separate files for development and production.

// File	                         Example variable
// .env.development	        VITE_API_URL=http://localhost:5000/api
// .env.production	     VITE_API_URL=https://api.example.com



// React: Remove Duplicated Logic and Improve Naming Consistency
// In React, we should avoid writing the same logic in multiple components. Instead, we can create reusable functions, custom hooks, and consistent variable names.



// Improve naming consistency
// Avoid inconsistent names	                Use consistent names
// emp, employeeData, employeesList	        employees
// loading, isFetching, loadStatus	            isLoading
// getEmployeeData()	g                        etEmployees()
// fetchEmp()	                               getEmployees()
// err, errorMessage	                             error