
import { createContext, useContext, useState } from "react";

// 1. CREATE CONTEXT
const StudentContext = createContext();

// 2. PROVIDER
function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "Rahul Sharma",
    course: "React",
    marks: 85,
  });

  const increaseMarks = () => {
    setStudent((prev) => ({
      ...prev,
      marks: prev.marks + 5,
    }));
  };

  const changeCourse = () => {
    setStudent((prev) => ({
      ...prev,
      course: prev.course === "React" ? "JavaScript" : "React",
    }));
  };

  return (
    <StudentContext.Provider
      value={{ student, increaseMarks, changeCourse }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// 3. PROP DRILLING
function PropDrillingDemo() {
  const student = {
    name: "Priya Reddy",
    course: "JavaScript",
  };

  return (
    <section>
      <h2>1. Prop Drilling</h2>
      <PropParent student={student} />
    </section>
  );
}

function PropParent({ student }) {
  return <PropMiddle student={student} />;
}

function PropMiddle({ student }) {
  return <PropChild student={student} />;
}

function PropChild({ student }) {
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

// 4. useContext
function StudentDetails() {
  const { student } = useContext(StudentContext);

  return (
    <section>
      <h2>2. Student Details (useContext)</h2>
      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>
      <p>Marks: {student.marks}</p>
    </section>
  );
}

// 5. CONSUMER
function StudentConsumerDemo() {
  return (
    <StudentContext.Consumer>
      {(context) => (
        <section>
          <h2>3. Student Details (Consumer)</h2>
          <p>Name: {context.student.name}</p>
          <p>Marks: {context.student.marks}</p>
        </section>
      )}
    </StudentContext.Consumer>
  );
}

// 6. GLOBAL STATE
function StudentActions() {
  const { increaseMarks, changeCourse } =
    useContext(StudentContext);

  return (
    <section>
      <h2>4. Update Global State</h2>

      <button onClick={increaseMarks}>
        Increase Marks (+5)
      </button>

      <button onClick={changeCourse}>
        Change Course
      </button>
    </section>
  );
}

// 7. CONTEXT VS PROPS
function Comparison() {
  return (
    <section>
      <h2>5. Context vs Props</h2>
      <p>
        <strong>Props:</strong> Pass data from parent to child.
      </p>
      <p>
        <strong>Context:</strong> Share data with nested components
        without passing props through every intermediate component.
      </p>
    </section>
  );
}

// MAIN COMPONENT
export default function Context_API() {
  return (
    <StudentProvider>
      <main>
        <h1>React Context API Demo</h1>

        <PropDrillingDemo />
        <hr />

        <StudentDetails />
        <hr />

        <StudentConsumerDemo />
        <hr />

        <StudentActions />
        <hr />

        <Comparison />
      </main>
    </StudentProvider>
  );
}
