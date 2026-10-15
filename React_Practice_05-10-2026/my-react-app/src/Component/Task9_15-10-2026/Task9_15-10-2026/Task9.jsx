import { useState, useRef, useEffect, Component, createContext, useContext } from "react";

// Feature-based React project structure
// Meaning: Organize files by application feature, such as employees, attendance and payroll, instead of keeping all components in one folder.

function EmployeeList(){
    const employees =[
        {id:1,name:"sam", role:"Human Resource"},
        {id:2,name:"Sara", role:"Developer"},
        {id:3,name:"Munni", role:"Finance"},

    ];
    return(
        <>
        <h2> employee List</h2>
        {employees.map((employee)=>(
            <div key={employee.id}>
            <p className="font-semibold">{employee.name}</p>
            <p className="text-gray-600">{employee.role}</p>
              </div>
        ))}
        </>
    )
}

function Ga(){
    return(
        <>
        <main>
            <h1> Employee dashboard</h1>
            <EmployeeList/>
        </main>
        </>
    )
}

// Separation of UI, business logic and API services
// Meaning: Keep what the user sees, the calculations the application performs, and the server communication in separate places.

function countEmployees(employees){
    return employees.length
}

function EmployeeSummary(){
    const employees = [
        { id:101,name:"AAA"},
        { id:102,name:"BBB"},
        { id:103,name:"CCC"},

    ];
    const total = countEmployees(employees);

    return(
        <div className="rounded-lg bg-blue-50 p-4">
            <h2 className="text-lg font-semibold"> Employee Summary</h2>
            <p> Total Employee:{total}</p>
        </div>

    )
}

// Reusable component design
// Meaning: Create a component once and reuse it with different props.

function Button({
    children,
    color="blue",
    onClick,
}){
    const styles ={
        blue:"bg-blue-600 hover:bg-blue-700",
        green:"bg-green-600 hover:bg-green-700",
        red:"bg-red-600 hover:bg-red-700",

    };
    return(
        <>
        <button type="button" onClick={onClick} className={`${styles[color]} rounded px-4 py-2 text-white`}>
            {children}
        </button>

        </>
    )
}

function Gb(){
    const [message, setMessage] = useState("");

    return(
        <div className="space-y-4 p-6">
            <div className="flex flex-wrap gap-3">
                <Button onClick={() => setMessage("Employee added successfully!")}>
                    Add employee
                </Button>

                <Button color="green" onClick={() => setMessage("Employee updated successfully!")}>
                    Edit Employee
                </Button>

                <Button color="red" onClick={() => setMessage("Employee deleted successfully!")}>
                    Delete Employee
                </Button>
            </div>

            {message && (
                <p className="font-medium text-green-700" role="status">
                    {message}
                </p>
            )}
        </div>
    );
}


// Component composition
// Meaning: Combine smaller components to create a larger interface.


function Header(){
    return <h1> Employee dashboard</h1>
}

function Summary(){
    return(
        <>
        <p>Total Employees: 25</p>
        </>
    );
}

function EmpList(){
    return(
        <>
        <h2> Employee List</h2>
        <p>Ravi - Developer</p>
        <p> Munni - Hr Manager</p>
        </>
    );
}

function Gc(){
    return(
        <main>
            <Header/>
            <Summary/>
            <EmpList/>
        </main>
    )
}


// Controlled and uncontrolled components
// A. Controlled component
// Meaning: React state controls the input's value.

 function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div className="space-y-3 p-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter employee name"
        className="rounded border p-2"
      />

      <p>Employee Name: {name || "Not entered"}</p>
    </div>
  );
}

// Uncontrolled component
// Meaning: The DOM stores the input value. React reads it using a ref when needed.

function UncontrolledInput() {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    setSearch(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSearch} className="space-y-3 p-4">
      <input
        ref={inputRef}
        defaultValue=""
        placeholder="Search employee"
        className="rounded border p-2"
      />

      <button className="rounded bg-blue-600 px-3 py-2 text-white">
        Search
      </button>

      <p>Search result: {search || "No search submitted"}</p>
    </form>
  );
}


// Reusable form components
// Meaning: Create a form field once and reuse it for different fields and forms.

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div className="space-y-1">
      <label className="block font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded border p-2"
      />
    </div>
  );
}

//app

function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <Input
        label="Employee Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setSaved(false);
        }}
      />

      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setSaved(false);
        }}
      />

      <button className="rounded bg-blue-600 px-4 py-2 text-white">
        Save Employee
      </button>

      {saved && (
        <p className="text-green-700">
          Employee details saved successfully!
        </p>
      )}
    </form>
  );
}


// Custom Hooks for shared logic
// Meaning: A custom Hook extracts reusable stateful logic from a component.

function useEmployeeForm(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");

    function resetForm(){
        setName("");
        setEmail("");
    }

    return{
        name,
        setName,
        email,
        setEmail,
        resetForm,
    };
}

function EmployeeForm1(){
    const{
        name,
        setName,
        email,
        setEmail,
        resetForm,
    } = useEmployeeForm();

    return(
        <>
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Employee name" className="block rounded p-2"/><br/>

        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="employee Email" className="block rounded p-2"/><br/>

        <button onClick={resetForm} className="rounded bg-gray-200 px-3 py-2"> Reset Form</button>
        </>
    );
}


// Data-fetching Hooks
// Meaning: A data-fetching Hook retrieves data from a server and manages loading, success and error states.

function useEmployees1() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to load employees");
        }

        setEmployees(await response.json());
      } catch {
        setError("Unable to load employee records.");
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  return { employees, loading, error };
}


// employees list

function EmployeeList1() {
  const { employees, loading, error } = useEmployees1();

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <ul className="space-y-2">
      {employees.map((employee) => (
        <li key={employee.id} className="rounded border p-3">
          {employee.name} — {employee.email}
        </li>
      ))}
    </ul>
  );
}


// Centralized API service modules
// Meaning: Put all backend communication functions in a dedicated file rather than repeating fetch() throughout the application.


const API_URL = "https://jsonplaceholder.typicode.com";

// GET request
async function getEmployees() {
  const response = await fetch(`${API_URL}/users`);

  if (!response.ok) {
    throw new Error("Could not retrieve employees");
  }

  return response.json();
}

// POST request
async function addEmployee(employee) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Could not add employee");
  }

  return response.json();
}

// Add Employee Component
function AddEmployee() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Saving...");

    try {
      const employee = await addEmployee({ name });

      setMessage(`Saved employee with ID: ${employee.id}`);
      setName("");
    } catch (error) {
      setMessage("Unable to save employee.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-md space-y-4 rounded-lg border p-6 shadow"
    >
      <h2 className="text-xl font-bold">
        Add Employee
      </h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee name"
        required
        className="w-full rounded border p-2"
      />

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Add Employee
      </button>

      <p>{message}</p>
    </form>
  );
}


// Error boundaries
// Meaning: An Error Boundary catches certain errors that occur while React renders its child components and displays fallback UI instead of the failed component.

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {hasError:false};
    }

    static getDerivedStateFromError(){
        return{hasError:true};
    }
    render(){
        if(this.state.hasError){
            return(
                <>
                Analytics failed to load.
                please try again later.
                </>
            );

        }
        return this.props.children
    }
}


function Analytics (){
    //throw new Error("Analytics rendering failed");
}

function Fc(){
    return(
        <main className="space-y-4 p-6">
            <h1 className="text-2xl font-bold"> Employee DashBoard</h1>

            <p>Employee Directory is Available</p>

            <ErrorBoundary>
                <Analytics/>
            </ErrorBoundary>
        </main>
    )
}


// Error handling and fallback UI
// Meaning: Error handling detects problems, while fallback UI tells the user what happened or what to do next.

function EmployeeList2() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setEmployees(await response.json());
      } catch {
        setError("Unable to load employees.");
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <ul className="space-y-2">
      {employees.map((employee) => (
        <li key={employee.id} className="rounded border p-3">
          {employee.name}
        </li>
      ))}
    </ul>
  );
}


// compound component patterns
// Meaning: A compound component is a group of related components that work together and share state.

const AccordionContext = createContext(null);

function Accordion({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <div className="rounded border p-3">{children}</div>
    </AccordionContext.Provider>
  );
}

function Header1({ children }) {
  const { open, setOpen } = useContext(AccordionContext);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left font-semibold  bg-pink-600"
    >
      {children} {open ? "decrease" : "increase"}
    </button>
  );
}

function Panel({ children }) {
  const { open } = useContext(AccordionContext);

  return open ? <div className="mt-3">{children}</div> : null;
}

Accordion.Header1 = Header1;
Accordion.Panel = Panel;


//Employee Details

function EmployeeDetails() {
  return (
    <div className="space-y-3">
      <Accordion >
        <Accordion.Header1 >
          Personal Information
        </Accordion.Header1>

        <Accordion.Panel>
          <p>Name:Ayesha</p>
          <p>Employee ID: EMP101</p>
        </Accordion.Panel>
      </Accordion>

      <Accordion>
        <Accordion.Header1>
          Work Information
        </Accordion.Header1>

        <Accordion.Panel>
          <p>Department: IT</p>
          <p>Role: React Developer</p>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

// Clean code and maintainability
// Meaning: Write code that is easy to read, reuse, debug and modify.

function formatEmpName(name){
    return name
    .trim()
    .toLowerCase()
    .replace(/\b\w/g,(letter)=> letter.toUpperCase());
}

function EmpList1(){
    const employees=[
        {id:101, name:"AAA"},
        {id:102, name:"BBB"},
        {id:103, name:"CCC"},
        {id:104, name:"DDD"},

    ];
    return(
        <>
        <h2 className="text-xl font-bold"> Employees</h2>

        {employees.map((employee)=>(
            <div key={employee.id} className="rounded border p-3">
                {formatEmpName(employee.name)}
            </div>
        ))}
        </>
    );
}
export {
    Ga,
    EmployeeSummary,
    Button,
    Gb,
    Gc,
    ControlledInput,
    UncontrolledInput,
    EmployeeForm,
    EmployeeForm1,
    EmployeeList1,
    getEmployees,
    addEmployee,
    AddEmployee,
    Fc,
    EmployeeList2,
    EmployeeDetails,
    EmpList1,
};