function Multiple() {

  const role = "manager";

  let dashboard;

  switch(role){

    case "admin":
      dashboard = <h2>Admin Dashboard</h2>;
      break;

    case "manager":
      dashboard = <h2>Manager Dashboard</h2>;
      break;

    case "user":
      dashboard = <h2>User Dashboard</h2>;
      break;

    default:
      dashboard = <h2>Guest Dashboard</h2>;
  }

  return <div>{dashboard}</div>;

}

export default Multiple;