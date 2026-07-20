function Conditional_Switch() {
  const role = "guest";

  let content;

  switch (role) {
    case "admin":
      content = <h1>Admin Dashboard</h1>;
      break;
    case "user":
      content = <h1>User Dashboard</h1>;
      break;
    default:
      content = <h1>Guest Dashboard</h1>;
  }

  return <div>{content}</div>;
}

export default Conditional_Switch;