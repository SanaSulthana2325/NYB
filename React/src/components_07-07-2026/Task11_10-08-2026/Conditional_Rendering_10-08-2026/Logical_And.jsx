function Logical_And() {
  const isAdmin = true;

  return (
    <div>
      <h1>Website</h1>

      {isAdmin && (
        <button>Open Admin Dashboard</button>
      )}
    </div>
  );
}

export default Logical_And;