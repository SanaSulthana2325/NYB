function Conditional_Nested() {

  const marks = 89;

  return (

    <div>

      {
        marks >= 90
        ? <h2>Grade A</h2>

        : marks >= 70
        ? <h2>Grade B</h2>

        : marks >= 50
        ? <h2>Grade C</h2>

        : <h2>Fail</h2>
      }

    </div>

  );

}

export default Conditional_Nested;