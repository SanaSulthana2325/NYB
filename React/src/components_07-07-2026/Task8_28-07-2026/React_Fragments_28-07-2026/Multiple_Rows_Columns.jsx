function Row({ id, name, age, city }) {

  return (
    <tr>
      <td >{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{city}</td>
    </tr>
  );
}

function Multiple_Rows_Columns() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>

      <tbody>
        <Row id={1} name="Sana" age={22} city="Hyderabad" />
        <Row id={2} name="Ali" age={25} city="Delhi" />
        <Row id={3} name="John" age={28} city="Mumbai" />
        <Row id={4} name="Sara" age={21} city="Chennai" />
      </tbody>
    </table>
  );
}

export default Multiple_Rows_Columns;