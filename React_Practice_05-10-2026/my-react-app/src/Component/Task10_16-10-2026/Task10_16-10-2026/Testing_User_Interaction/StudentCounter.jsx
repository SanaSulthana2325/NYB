import { useState } from "react";

export default function StudentCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Total Students: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Add Student
      </button>
    </>
  );
}