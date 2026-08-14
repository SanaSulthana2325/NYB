import { useEffect } from "react";

export default function Courses() {
  useEffect(() => {
    console.log("Courses page loaded");
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        <li>React Development</li>
        <li>Java Programming</li>
        <li>Database Systems</li>
      </ul>
    </div>
  );
}