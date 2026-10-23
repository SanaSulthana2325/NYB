import { useState, useEffect } from "react";

function UseEffect() {
  // 1. State
  const [studentName, setStudentName] = useState("Rahul");
  const [attendance, setAttendance] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showDashboard, setShowDashboard] = useState(true);

  // 2. Initial Rendering
  useEffect(() => {
    console.log("Dashboard mounted");

    document.title = "Student Attendance Dashboard";

    // 6. Cleanup Function
    return () => {
      console.log("Dashboard unmounted");
    };
  }, []);

  // 3. State-Based Effect
  // Runs when studentName changes
  useEffect(() => {
    console.log("Student name changed:", studentName);
    document.title = `Student: ${studentName}`;
  }, [studentName]);

  // 4. Dependency Array
  // Runs when attendance changes
  useEffect(() => {
    console.log("Attendance updated:", attendance);
  }, [attendance]);

  // 5. Timer Effect with Cleanup
  useEffect(() => {
    console.log("Timer started");

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped");
    };
  }, []);

  // Component unmount simulation
  if (!showDashboard) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">
          Dashboard Closed
        </h2>
        <button
          onClick={() => setShowDashboard(true)}
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Open Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-700">
          Student Attendance Dashboard
        </h1>

        {/* Student Name */}
        <label className="mb-2 block font-semibold">
          Student Name
        </label>

        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="mb-4 w-full rounded border p-2"
        />

        <p className="mb-4 text-lg">
          Welcome, <strong>{studentName}</strong>!
        </p>

        {/* Attendance */}
        <div className="mb-5 rounded-lg bg-blue-50 p-4">
          <h2 className="text-xl font-semibold">
            Attendance Count
          </h2>

          <p className="my-2 text-3xl font-bold">
            {attendance}
          </p>

          <button
            onClick={() => setAttendance((prev) => prev + 1)}
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            Mark Present
          </button>

          <button
            onClick={() =>
              setAttendance((prev) => Math.max(0, prev - 1))
            }
            className="ml-2 rounded bg-red-600 px-4 py-2 text-white"
          >
            Undo
          </button>
        </div>

        {/* Timer */}
        <div className="mb-5 rounded-lg bg-yellow-50 p-4">
          <h2 className="text-xl font-semibold">
            Dashboard Active Time
          </h2>
          <p className="mt-2 text-2xl">
            {seconds} seconds
          </p>
        </div>

        {/* Unmount Component */}
        <button
          onClick={() => setShowDashboard(false)}
          className="rounded bg-gray-800 px-4 py-2 text-white"
        >
          Close Dashboard
        </button>
      </div>
    </div>
  );
}

export default UseEffect;