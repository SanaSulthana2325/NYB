function Employee(props) {

  return (

    <div>

      <h2>ID : {props.id}</h2>
      <h2>Name : {props.name}</h2>
      <h2>Department : {props.department}</h2>
      <h2>Salary : {props.salary}</h2>

    </div>

  );

}

export default Employee;