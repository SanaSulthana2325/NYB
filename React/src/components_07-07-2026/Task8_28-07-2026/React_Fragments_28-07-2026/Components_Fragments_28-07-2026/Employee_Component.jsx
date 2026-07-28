function Employee() {
  return (
    <>
      <td className="border border-gray-300 px-4 py-2">101</td>
      <td className="border border-gray-300 px-4 py-2">Sana</td>
      <td className="border border-gray-300 px-4 py-2">Developer</td>
    </>
  );
}

function Employee_Component() {
  return (
    <div>
      <table className="border-collapse border border-gray-400 shadow-lg bg-white">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <Employee />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee_Component;