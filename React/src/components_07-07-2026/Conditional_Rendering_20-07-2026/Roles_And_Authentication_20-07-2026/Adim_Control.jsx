function Admin_Control() {

  const role = "admin";

  return (

    <div>

      <h2>Dashboard</h2>

      {role === "admin" && (
        <>
          <button>Add User</button>
          <button>Delete User</button>
          <button>View Reports</button>
        </>
      )}

    </div>

  );

}

export default Admin_Control;