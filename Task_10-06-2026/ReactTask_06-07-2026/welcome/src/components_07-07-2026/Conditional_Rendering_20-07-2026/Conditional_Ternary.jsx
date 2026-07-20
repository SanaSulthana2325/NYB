function Conditional_Ternary() {

  const age = 20;

  return (
    <div>
      {
        age >= 18
        ? <h1>Eligible to Vote</h1>
        : <h1>Not Eligible</h1>
      }
    </div>
  );
}

export default Conditional_Ternary;