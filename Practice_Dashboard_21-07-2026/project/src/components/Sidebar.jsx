function Sidebar({ logout }) {
  return (
    <div className="w-56 bg-gray-900 text-white p-6 flex flex-col justify-between">

      <div>

        <h2 className="text-2xl font-bold mb-8">
          Dashboard
        </h2>

        <ul className="space-y-4">

          <li>🏠 Home</li>

          <li>📈 Reports</li>

          <li>⚙ Settings</li>

          <li>📧 Messages</li>

        </ul>

      </div>

      <button
        onClick={logout}
        className="bg-red-500 p-3 rounded hover:bg-red-700"
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;