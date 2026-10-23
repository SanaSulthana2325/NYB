// Testing Props
// Meaning: Props are values passed from a parent component to a child component. Testing props checks whether the child component displays or uses those values correctly.

function Emp1({ name, role }) {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default Emp1;