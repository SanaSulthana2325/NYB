
import { StrictMode, useState } from "react";

// Common styling for all examples
const cardStyle = {
  background: "#ffffff",
  padding: "16px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
};

const buttonStyle = {
  padding: "8px 14px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "4px",
};

function Section({ number, title, explanation, children }) {
  return (
    <section style={cardStyle}>
      <h2 style={{ color: "#1d4ed8" }}>
        {number}. {title}
      </h2>
      <p>{explanation}</p>
      {children}
    </section>
  );
}

// 5. Components
function StudentComponent() {
  return <p>Student Name: Rahul</p>;
}

// 6. Functional Component
function WelcomeComponent() {
  return <p>Welcome to React!</p>;
}

// 13. Reusable Component
function StudentCard({ name }) {
  return (
    <p style={{ background: "#eff6ff", padding: "8px" }}>
      Student: {name}
    </p>
  );
}

// 14. Props
function PropsStudent(props) {
  return <p>Student: {props.name}</p>;
}

// 15. Props Destructuring
function DestructuredStudent({ name, course }) {
  return <p>{name} studies {course}</p>;
}

// 16. Parent and Child
function ChildComponent() {
  return <p>I am the child component.</p>;
}

function ParentComponent() {
  return (
    <div>
      <h4>Parent Component</h4>
      <ChildComponent />
    </div>
  );
}

// 17. Component Hierarchy
function StudentName() {
  return <p>Rahul</p>;
}

function StudentHierarchy() {
  return (
    <div>
      <h4>Student Card</h4>
      <StudentName />
    </div>
  );
}

// 18. State
function StateExample() {
  const [name, setName] = useState("Rahul");

  return (
    <div>
      <p>Name: {name}</p>
      <button style={buttonStyle} onClick={() => setName("Priya")}>
        Change Name
      </button>
    </div>
  );
}

// 19. useState
function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <button style={buttonStyle} onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// 20. State Updates
function StateUpdateExample() {
  const [marks, setMarks] = useState(70);

  return (
    <div>
      <p>Marks: {marks}</p>
      <button style={buttonStyle} onClick={() => setMarks(90)}>
        Update Marks
      </button>
    </div>
  );
}

// 21. Functional State Updates
function FunctionalUpdateExample() {
  const [count, setCount] = useState(0);

  function increaseByTwo() {
    setCount(previous => previous + 1);
    setCount(previous => previous + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={increaseByTwo}>
        Increase by 2
      </button>
    </div>
  );
}

// 22. Event Handling
function EventHandlingExample() {
  const [message, setMessage] = useState("Waiting for action");

  return (
    <div>
      <p>{message}</p>
      <button
        style={buttonStyle}
        onClick={() => setMessage("Welcome, Student!")}
      >
        Greet
      </button>
    </div>
  );
}

// 23. onClick
function OnClickExample() {
  const [message, setMessage] = useState("Button not clicked");

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={() => setMessage("Button clicked!")}
      >
        Click Me
      </button>
      <p>{message}</p>
    </div>
  );
}

// 24. onChange
function OnChangeExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Enter student name"
      />
      <p>Name: {name || "Not entered"}</p>
    </div>
  );
}

// 25. onSubmit
function OnSubmitExample() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Student registered!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button style={buttonStyle} type="submit">
        Submit Form
      </button>
      <p>{message}</p>
    </form>
  );
}

// 26. Event Objects
function EventObjectExample() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} placeholder="Type something" />
      <p>Event value: {value}</p>
    </div>
  );
}

// 27. Conditional Rendering
function ConditionalExample() {
  const [passed, setPassed] = useState(true);

  return (
    <div>
      <p>{passed ? "Pass" : "Fail"}</p>
      <button
        style={buttonStyle}
        onClick={() => setPassed(previous => !previous)}
      >
        Change Result
      </button>
    </div>
  );
}

// 28. List Rendering
function ListRenderingExample() {
  const students = ["Rahul", "Priya", "Aman"];

  return (
    <ul>
      {students.map(student => (
        <li key={student}>{student}</li>
      ))}
    </ul>
  );
}

// 29. map()
function MapExample() {
  const marks = [70, 80, 90];

  return (
    <ul>
      {marks.map(mark => (
        <li key={mark}>{mark + 5}</li>
      ))}
    </ul>
  );
}

// 30. Keys
function KeysExample() {
  const students = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Priya" },
  ];

  return students.map(student => (
    <p key={student.id}>
      ID: {student.id} — {student.name}
    </p>
  ));
}

// 31. Forms
function FormsExample() {
  const [name, setName] = useState("");

  return (
    <form onSubmit={event => {
      event.preventDefault();
      alert("Name: " + name);
    }}>
      <input
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Enter name"
      />
      <button style={buttonStyle} type="submit">
        Register
      </button>
    </form>
  );
}

// 32. Controlled Components
function ControlledExample() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Enter email"
      />
      <p>Email: {email || "Not entered"}</p>
    </div>
  );
}

// 33. Multiple Form Fields
function MultipleFieldsExample() {
  const [student, setStudent] = useState({
    name: "",
    course: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setStudent(previous => ({
      ...previous,
      [name]: value,
    }));
  }

  return (
    <div>
      <input
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Student name"
      />

      <input
        name="course"
        value={student.course}
        onChange={handleChange}
        placeholder="Course"
      />

      <p>
        {student.name || "Name"} - {student.course || "Course"}
      </p>
    </div>
  );
}

// 34. Form Validation
function ValidationExample() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Name is required");
      setMessage("");
      return;
    }

    setError("");
    setMessage("Welcome, " + name + "!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={event => {
          setName(event.target.value);
          setError("");
          setMessage("");
        }}
        placeholder="Enter student name"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <button style={buttonStyle} type="submit">
        Validate and Register
      </button>
    </form>
  );
}

// Main application: all examples in one file
function Task11() {
  const [expressionMarks] = useState(85);

  return (
    <main style={{
      maxWidth: "900px",
      margin: "20px auto",
      padding: "16px",
      background: "#f1f5f9",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1 style={{ color: "#1e40af" }}>
        React Tutorial: 34 Examples
      </h1>

      <p>Each topic has a separate example and visible output.</p>

      <Section number={1} title="Introduction to React"
        explanation="React is a JavaScript library for building user interfaces.">
        <h3>Welcome to Student Portal</h3>
      </Section>

      <Section number={2} title="React Features"
        explanation="React supports components, reusable UI, state and event handling.">
        <p>Student Portal — Manage student details</p>
      </Section>

      <Section number={3} title="React Project Setup Using Vite"
        explanation="Run these commands in your terminal to create a React project.">
        <pre>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto facilis nam perspiciatis. Hic magnam laudantium, quis nam deleniti facilis, tempore iure iste provident laborum veniam atque. Explicabo ea a sunt?</pre>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima soluta eos?</p>
      </Section>

      <Section number={4} title="React Project Structure"
        explanation="Organize application code into components and entry files.">
        <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque commodi officiis consequuntur, pariatur nemo molestias aliquid eius dignissimos eligendi voluptas facilis enim molestiae omnis corrupti neque ullam doloribus. Sunt.</pre>
      </Section>

      <Section number={5} title="Components"
        explanation="A component is a reusable part of the interface.">
        <StudentComponent />
      </Section>

      <Section number={6} title="Functional Components"
        explanation="A functional component is a function that returns JSX.">
        <WelcomeComponent />
      </Section>

      <Section number={7} title="JSX"
        explanation="JSX lets you write HTML-like syntax in JavaScript.">
        <p>Hello, {"Rahul"}</p>
      </Section>

      <Section number={8} title="JSX Rules"
        explanation="Close tags, use className for CSS classes and return one parent element.">
        <div>
          <h3>Rahul</h3>
          <p>Course: React</p>
        </div>
      </Section>

      <Section number={9} title="JavaScript Expressions in JSX"
        explanation="Curly braces allow JavaScript expressions inside JSX.">
        <p>Marks: {expressionMarks + 5}</p>
      </Section>

      <Section number={10} title="Fragments"
        explanation="Fragments group elements without creating an extra DOM element.">
        <>
          <h4>Rahul</h4>
          <p>Age: 20</p>
        </>
      </Section>

      <Section number={11} title="Strict Mode"
        explanation="StrictMode helps identify potential problems during development.">
        <p>Strict Mode is enabled around this application when rendered from main.jsx.</p>
        <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corpori</pre>
      </Section>

      <Section number={12} title="Rendering Components"
        explanation="React renders App into the root element in index.html.">
        <p>This text is displayed by the App component.</p>
        <pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa</pre>
      </Section>

      <Section number={13} title="Reusable Components"
        explanation="Reuse one component with different props.">
        <StudentCard name="Rahul" />
        <StudentCard name="Priya" />
      </Section>

      <Section number={14} title="Props"
        explanation="Props pass data from parent components to child components.">
        <PropsStudent name="Priya" />
      </Section>

      <Section number={15} title="Props Destructuring"
        explanation="Destructuring extracts values directly from props.">
        <DestructuredStudent name="Priya" course="React" />
      </Section>

      <Section number={16} title="Parent and Child Components"
        explanation="A parent can render a child component.">
        <ParentComponent />
      </Section>

      <Section number={17} title="Component Hierarchy"
        explanation="A hierarchy describes how components are nested.">
        <StudentHierarchy />
      </Section>

      <Section number={18} title="State"
        explanation="State stores information that can change.">
        <StateExample />
      </Section>

      <Section number={19} title="useState"
        explanation="useState creates state and provides a setter function.">
        <UseStateExample />
      </Section>

      <Section number={20} title="State Updates"
        explanation="A setter changes state and triggers a re-render.">
        <StateUpdateExample />
      </Section>

      <Section number={21} title="Functional State Updates"
        explanation="Use the previous state value to calculate the next value.">
        <FunctionalUpdateExample />
      </Section>

      <Section number={22} title="Event Handling"
        explanation="Event handlers respond to user interactions.">
        <EventHandlingExample />
      </Section>

      <Section number={23} title="onClick"
        explanation="onClick runs a function when a user clicks an element.">
        <OnClickExample />
      </Section>

      <Section number={24} title="onChange"
        explanation="onChange responds to changes in an input.">
        <OnChangeExample />
      </Section>

      <Section number={25} title="onSubmit"
        explanation="onSubmit handles a form submission.">
        <OnSubmitExample />
      </Section>

      <Section number={26} title="Event Objects"
        explanation="The event object provides details about the event and its target.">
        <EventObjectExample />
      </Section>

      <Section number={27} title="Conditional Rendering"
        explanation="A condition determines which UI is displayed.">
        <ConditionalExample />
      </Section>

      <Section number={28} title="List Rendering"
        explanation="Render multiple items from an array.">
        <ListRenderingExample />
      </Section>

      <Section number={29} title="map()"
        explanation="map transforms each array item into a new value or element.">
        <MapExample />
      </Section>

      <Section number={30} title="Keys"
        explanation="Keys help React identify list items.">
        <KeysExample />
      </Section>

      <Section number={31} title="Forms"
        explanation="Forms collect information from users.">
        <FormsExample />
      </Section>

      <Section number={32} title="Controlled Components"
        explanation="React state controls the value displayed in the input.">
        <ControlledExample />
      </Section>

      <Section number={33} title="Multiple Form Fields"
        explanation="Store and update multiple input values in one state object.">
        <MultipleFieldsExample />
      </Section>

      <Section number={34} title="Form Validation"
        explanation="Validate input before accepting a registration.">
        <ValidationExample />
      </Section>
    </main>
  );
}

export default Task11;
