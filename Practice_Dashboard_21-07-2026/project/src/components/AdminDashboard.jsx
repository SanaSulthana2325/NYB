function AdminDashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-4">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">

        <div className="bg-blue-500 text-white p-6 rounded">
          Users : 250
        </div>

        <div className="bg-green-500 text-white p-6 rounded">
          Revenue : ₹80K
        </div>

        <div className="bg-red-500 text-white p-6 rounded">
          Pending Tasks : 15
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;