function EmployeeDashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-4">
        Employee Dashboard
      </h1>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-yellow-400 p-5 rounded">
          Attendance : Present
        </div>

        <div className="bg-green-400 p-5 rounded">
          Tasks Completed : 10
        </div>

      </div>

    </div>
  );
}

export default EmployeeDashboard;